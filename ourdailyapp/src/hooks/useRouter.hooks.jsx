import React from "react";
import { useHistory, useRouteMatch, useLocation } from "react-router-dom";

const useRouter = () => {
  const history = useHistory();
  const match = useRouteMatch();
  const location = useLocation();

  return React.useMemo(() => {
    return {
      push: history.push,
      matchPath: match.path,
      pathName: location.pathname,
    };
  }, [history.push, match.path, location.pathname]);
};

export default useRouter;
