'use strict';

var react = require('react');
var reactSpinners = require('react-spinners');

function LazyComponent() {
  var pathToComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var fallbackComponent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : React.createElement(reactSpinners.ClipLoader, null);
  var classNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var styleObj = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var key = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";

  try {
    var _LazyComponent = react.lazy(function () {
      return Promise.resolve(require(pathToComponent));
    });
    return React.createElement(
      react.Suspense,
      { fallback: fallbackComponent },
      "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0",
      React.createElement(_LazyComponent, { className: classNames, style: styleObj, key: key }),
      "\xA0\xA0\xA0\xA0\xA0\xA0"
    );
  } catch (error) {
    console.error(error);
    return React.createElement(
      "p",
      null,
      JSON.parse(error, null, 4)
    );
  }
}

module.exports = LazyComponent;
//# sourceMappingURL=index.js.map
