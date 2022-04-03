`$ yarn build` to reproduce.

The current output is the following:

```
"use strict";

var _testQuery2 = _interopRequireDefault(require("./__generated__/testQuery.graphql"));

var _reactRelay = require("react-relay");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const query = (_testQuery2.default.hash && _testQuery2.default.hash !== "b7016021b90b221956831c4d3dd44def" && console.error("The definition of 'testQuery' appears to have changed. Run `relay-compiler` to update the generated files to receive the expected data."), _testQuery);
```

But the expectation is that all references to `_testQuery` and `_testQuery2` should be the same.

There is also a `yarn build:only-babel-plugin` example (reading the `result-of-only-relay-plugin.js` file) that demonstrates that this only occurs when _both_ plugins are enabled. A sequence of applying just the relay plugin transforms and then only the babel transforms produces the desired result (all references are `_testQuery2`).
