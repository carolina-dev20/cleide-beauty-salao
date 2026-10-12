"use client";

import {
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function FadeIn({
  children,
  delay = 0,
  className = "",
}: FadeInProps) {
  const elementoRef = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const elemento = elementoRef.current;

    if (!elemento) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(elemento);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementoRef}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={`
        transform transition-all duration-1000 ease-out
        ${
          visivel
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }
        ${className}
      `}
    >
      {children}
    </div>
  );
}