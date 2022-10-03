import { useEffect, useRef, useState } from 'react';

/**
 * useIntersection will trigger the IntersectionObserver toggler
 * once the element is visible in the DOM according to the props
 */

interface useIntersectionProps {
  distance: string;
  externalRef?: any;
  once?: boolean;
}

export default function useIntersection({
  distance = '100px',
  externalRef = null,
  once = true,
}: useIntersectionProps) {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;
    const element = externalRef ? externalRef.current : fromRef.current;

    const onChange = (entries: any, observer: any) => {
      const [element] = entries;
      if (element.isIntersecting) {
        setShow(true);
        once && observer.disconnect();
      } else {
        !once && setShow(false);
      }
    };

    observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });

    if (element) observer.observe(element);
    return () => observer?.disconnect();
  });

  return { isNearScreen, fromRef };
}
