import { useState, useEffect } from "react";

export default function useOnScreen(options) {
  const [node, setNode] = useState(null);
  const [startAnimate, setStartAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      !startAnimate && setStartAnimate(entry.isIntersecting);
    }, options);

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [node, options, startAnimate]);

  return [setNode, startAnimate];
}
