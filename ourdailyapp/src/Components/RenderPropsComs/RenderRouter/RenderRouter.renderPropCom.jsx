import React from "react";

import { useHistory } from "react-router-dom";

const RenderRouter = ({ children }) => {
  function useRouter() {
    const history = useHistory();
    return React.useMemo(() => {
      return {
        push: history.push,
      };
    }, [history]);
  }

  const router = useRouter();

  return children(router);
};

export default RenderRouter;
