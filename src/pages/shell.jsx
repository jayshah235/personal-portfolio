import { lazy, Suspense } from "react";
import { InitialLoadUi } from "../ui-components/initial-load-ui";

const LazyMianLayout = lazy(() => import("./main-layout/index"));

const Shell = () => {
  return (
    <Suspense fallback={<InitialLoadUi />}>
      <LazyMianLayout />
    </Suspense>
  );
};

export default Shell;
