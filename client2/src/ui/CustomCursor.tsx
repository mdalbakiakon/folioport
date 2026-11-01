"use client";

import { useEffect, useRef, useState } from "react";
import { Plus, X } from "lucide-react";

type Props = {
  size?: number | string;
};

const CLICKABLE =
  "a, button, input, select, textarea, label, summary, [role='button'], [data-cursor='pointer'], .cursor-pointer";

export default function CustomCursor({ size = "1.75rem" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      el.style.opacity = "1";
      setIsPointer(!!(e.target as HTMLElement).closest(CLICKABLE));
    };
    const hide = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("mousemove", move);
    document.documentElement.addEventListener("mouseleave", hide);

    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-9999 opacity-0 mix-blend-difference max-[1024px]:hidden"
    >
      <div className="-translate-x-1/2 -translate-y-1/2">
        {isPointer ? (
          <X size={size} strokeWidth={3} className="text-white fill-white" />
        ) : (
          <Plus size={size} strokeWidth={3} className="text-white fill-white" />
        )}
      </div>
    </div>
  );
}