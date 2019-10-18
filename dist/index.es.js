import { lazy, Suspense } from 'react';
import { ClipLoader } from 'react-spinners';

function LazyComponent() {
  var pathToComponent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var fallbackComponent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : React.createElement(ClipLoader, null);
  var classNames = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var styleObj = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var key = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";

  try {
    var _LazyComponent = lazy(function () {
      return import(pathToComponent);
    });
    return React.createElement(
      Suspense,
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

export default LazyComponent;
//# sourceMappingURL=index.es.js.map
