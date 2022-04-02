/**
 * @generated SignedSource<<c7bd73cdfd00426892c839162125ed4b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type testQuery$variables = {};
export type testQueryVariables = testQuery$variables;
export type testQuery$data = {
  readonly something: string | null;
};
export type testQueryResponse = testQuery$data;
export type testQuery = {
  variables: testQueryVariables;
  response: testQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "something",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "testQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "testQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "821e461f60d5d801092b8f2dccf025a9",
    "id": null,
    "metadata": {},
    "name": "testQuery",
    "operationKind": "query",
    "text": "query testQuery {\n  something\n}\n"
  }
};
})();

(node as any).hash = "b7016021b90b221956831c4d3dd44def";

export default node;
