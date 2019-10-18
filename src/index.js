import { lazy, Suspense } from "react";
import ClipLoader from "react-spinners/ClipLoader";

export default function LazyComponent(
  pathToComponent = "",
  fallbackComponent = <ClipLoader />,
  classNames = "",
  styleObj = {},
  key = ""
) {
  try {
    const LazyComponent = lazy(() => import(pathToComponent));
    return (
      <Suspense fallback={fallbackComponent}>
        <LazyComponent className={classNames} style={styleObj} key={key} />
      </Suspense>
    );
  } catch (error) {
    console.error(error);
    return <p>{JSON.parse(error, null, 4)}</p>;
  }
}

