import { useCallback } from "react";
import { useDispatch } from "react-redux";

export default function useDismiss(refNode, callBackAction) {
  const dispatch = useDispatch();
  return useCallback(
    (e) => {
      // If we click inside of our ref, nothing happens
      if (refNode.current && refNode.current.contains(e.target)) {
        return;
      }
      // Otherwise close the alertTooltip
      callBackAction("");
    },
    [callBackAction, refNode, dispatch]
  );
}
