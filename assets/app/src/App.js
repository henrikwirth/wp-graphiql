import React, {useEffect, useState} from 'react';
import GraphiQL from 'graphiql';
import GraphiQLExplorer from "graphiql-explorer";
import {buildClientSchema, getIntrospectionQuery, parse} from "graphql";

// import { makeDefaultArg, getDefaultScalarArgValue } from "./CustomArgs";

/**
 * Style the app
 */
import 'graphiql/graphiql.css';
import './app.css';

function graphQLFetcher(graphQLParams) {

	/**
	 * Get the nonce & endpoint from the localized wpGraphiQLSettings object
	 * @type {null}
	 */
	let nonce = (window.wpGraphiQLSettings && window.wpGraphiQLSettings.nonce) ? window.wpGraphiQLSettings.nonce : null;
	let endpoint = (window.wpGraphiQLSettings && window.wpGraphiQLSettings.graphqlEndpoint) ? window.wpGraphiQLSettings.graphqlEndpoint : window.location.origin;

	/**
	 * Fetch the WPGraphQL API
	 */
	return fetch(endpoint, {
		method: 'post',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
			'X-WP-Nonce': nonce
		},
		body: JSON.stringify(graphQLParams),
	}).then(response => response.json());

}

const DEFAULT_QUERY = `# shift-option/alt-click on a query below to jump to it in the explorer
# option/alt-click on a field in the explorer to select all subfields
query GET_PAGES {
  pages {
  	edges {
  		node {
  			title
  		}
  	}
  }
}
`;

const App = () => {
	const _graphiql = GraphiQL
	const [schema, setSchema] = useState(null)
	const [query, setQuery] = useState(DEFAULT_QUERY)
	const [explorerIsOpen, setExplorerIsOpen] = useState(true)

	useEffect(() => {
		graphQLFetcher({
			query: getIntrospectionQuery()
		}).then(result => {
			const editor = _graphiql.getQueryEditor();
			editor.setOption("extraKeys", {
				...(editor.options.extraKeys || {}),
				"Shift-Alt-LeftClick": _handleInspectOperation
			});

			setSchema(buildClientSchema(result.data));
		})
	})

	const _handleInspectOperation = (cm, mousePos) => {
		const parsedQuery = parse(query || "");

		if (!parsedQuery) {
			console.error("Couldn't parse query document");
			return null;
		}

		let token = cm.getTokenAt(mousePos);
		let start = { line: mousePos.line, ch: token.start };
		let end = { line: mousePos.line, ch: token.end };
		let relevantMousePos = {
			start: cm.indexFromPos(start),
			end: cm.indexFromPos(end)
		};

		let position = relevantMousePos;

		let def = parsedQuery.definitions.find(definition => {
			if (!definition.loc) {
				console.log("Missing location information for definition");
				return false;
			}

			const { start, end } = definition.loc;
			return start <= position.start && end >= position.end;
		});

		if (!def) {
			console.error(
				"Unable to find definition corresponding to mouse position"
			);
			return null;
		}

		let operationKind =
			def.kind === "OperationDefinition"
				? def.operation
				: def.kind === "FragmentDefinition"
				? "fragment"
				: "unknown";

		let operationName =
			def.kind === "OperationDefinition" && !!def.name
				? def.name.value
				: def.kind === "FragmentDefinition" && !!def.name
				? def.name.value
				: "unknown";

		let selector = `.graphiql-explorer-root #${operationKind}-${operationName}`;

		let el = document.querySelector(selector);
		el && el.scrollIntoView();
	}

	const _handleEditQuery = (query) => setQuery(query)

	const _handleToggleExplorer = () => {
		setExplorerIsOpen(!explorerIsOpen)
	}

	return (
		<div className="wrapper">
			<GraphiQLExplorer
				schema={schema}
				query={query}
				onEdit={_handleEditQuery}
				onRunOperation={operationName =>
					_graphiql.handleRunQuery(operationName)
				}
				explorerIsOpen={explorerIsOpen}
				onToggleExplorer={_handleToggleExplorer}
				// getDefaultScalarArgValue={getDefaultScalarArgValue}
				// makeDefaultArg={makeDefaultArg}
			/>
			<GraphiQL
				ref={ref => (_graphiql = ref)}
				fetcher={graphQLFetcher}
				schema={schema}
				query={query}
				onEditQuery={_handleEditQuery}
			>
				<GraphiQL.Toolbar>
					<GraphiQL.Button
						onClick={() => _graphiql.handlePrettifyQuery()}
						label="Prettify"
						title="Prettify Query (Shift-Ctrl-P)"
					/>
					<GraphiQL.Button
						onClick={() => _graphiql.handleToggleHistory()}
						label="History"
						title="Show History"
					/>
					<GraphiQL.Button
						onClick={_handleToggleExplorer}
						label="Explorer"
						title="Toggle Explorer"
					/>
				</GraphiQL.Toolbar>
			</GraphiQL>
		</div>
	);
}

export default App;
