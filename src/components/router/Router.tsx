import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import ProgressBar from "react-topbar-progress-indicator";

ProgressBar.config({
  barColors: {
    "0": "#00A150",
    "1": "#A7233A",
  },
});

const HomeScreen = lazy(() => import("~/components/screens/HomeScreen"));
const TimeTableScreen = lazy(() => import("~/components/screens/TimeTableScreen"));
const Page404Screen = lazy(() => import("~/components/screens/404"));

export const Router = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<ProgressBar />}>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route path="/timetable">
            <TimeTableScreen />
          </Route>
          <Route path="*">
            <Page404Screen />
          </Route>
        </Switch>
      </AnimatePresence>
    </Suspense>
  );
};
