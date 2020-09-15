import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

const useRouter = () => {
  const history = useHistory();
  const match = useRouteMatch();

  return React.useMemo(() => {
    return {
      push: history.push,
      matchPath: match.path,
    };
  }, [history.push, match.path]);
};

export default useRouter;
