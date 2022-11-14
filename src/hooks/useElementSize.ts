import { RefObject, useCallback, useState } from "react";
import useEventListener from "./useEventListener";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

interface Size {
  width: number;
  height: number;
}

function useElementSize(ref: RefObject<HTMLDivElement>): Size {
  const [size, setSize] = useState<Size>({
    width: 0,
    height: 0,
  });

  // Prevent too many rendering using useCallback
  const handleSize = useCallback(() => {
    setSize({
      width: ref?.current?.offsetWidth || 0,
      height: ref?.current?.offsetHeight || 0,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.current?.offsetHeight, ref?.current?.offsetWidth]);

  useEventListener("resize", handleSize);

  useIsomorphicLayoutEffect(() => {
    handleSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.current?.offsetHeight, ref?.current?.offsetWidth]);

  return size;
}

export default useElementSize;
