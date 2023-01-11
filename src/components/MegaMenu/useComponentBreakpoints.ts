import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export const mapping = <POINTS extends string>(
  width: number,
  map: Map<POINTS>,
): Returned<POINTS> => {
  const points = {} as Returned<POINTS>;
  console.log(width, map);
  for (const key in map) {
    if (Object.prototype.hasOwnProperty.call(map, key)) {
      points[key] = width >= map[key];
    }
  }

  return points;
};

export type Map<POINTS extends string> = Record<POINTS, number>;
export type Returned<POINTS extends string> = Record<POINTS, boolean>;

const isEq = <POINTS extends string>(
  state: Returned<POINTS>,
  newState: Returned<POINTS>,
) => {
  for (const key in newState) {
    if (state[key] !== newState[key]) {
      return false;
    }
  }
  return true;
};

const useMutableRef = <T>(value: T) => {
  const ref = useRef(value);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref;
};

const getWidth = (ref: React.RefObject<HTMLElement | SVGGraphicsElement>) =>
  ref.current?.getBoundingClientRect().width || 0;

export const useComponentBreakpoints = <POINTS extends string>(
  ref: React.RefObject<HTMLElement | SVGGraphicsElement>,
  map: Map<POINTS>,
) => {
  const [points, setSetPoints] = useState<Returned<POINTS>>(() =>
    mapping(getWidth(ref), map),
  );

  const mapRef = useMutableRef(map);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      const newPoints = mapping(getWidth(ref), mapRef.current);
      setSetPoints((state) => (isEq(state, newPoints) ? state : newPoints));
    });

    ref.current && resizeObserver.observe(ref.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [ref.current]);

  return points;
};
