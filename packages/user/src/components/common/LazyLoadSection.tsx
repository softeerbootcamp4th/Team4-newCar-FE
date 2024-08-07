import React, { FunctionComponent, useEffect, useState } from 'react';
import useIntersectionObserver from 'src/hooks/useIntersectionObserver.ts';

interface LazyLoadSectionProps {
  loader: () => Promise<{ default: FunctionComponent }>;
}

function LazyLoadSection<T extends HTMLElement>({
  loader }: LazyLoadSectionProps) {
  const [ref, isIntersecting] = useIntersectionObserver<T>();
  const [Component, setComponent] = useState<FunctionComponent | null>(null);

  useEffect(() => {
    if (isIntersecting && !Component) {
      loader().then(module => {
        setComponent(() => module.default);
      });
    }
  }, [isIntersecting, Component, loader]);

  return (
    <div ref={ref as React.RefObject<HTMLDivElement>}>
     {Component ? (
          <Component />
        ) : (
          <div className="h-[100px] bg-skyblue-300">Loading...</div>
        )}
    </div>
  );
}

export default LazyLoadSection;
