import type { ButtonHTMLAttributes } from "react";

const BASE =
  "group relative inline-flex items-center justify-center font-semibold " +
  "transition-transform enabled:active:scale-95 " +
  "focus-visible:outline-none " +
  "disabled:cursor-not-allowed disabled:opacity-50";

const VARIANT = {
  primary:
    "bg-foreground border-2 border-transparent group-hover:bg-foreground/85 group-focus-visible:bg-foreground/85",
  secondary:
    "bg-transparent group-hover:bg-bg-sec group-focus-visible:bg-bg-sec",
} as const;

const ACCENT = {
  primary: "border-txt-sec group-hover:border-foreground",
  secondary: "border-foreground group-hover:border-foreground",
} as const;

const INNER_CORNERS = [
  "top-0 left-0 border-t-2 border-l-2",
  "top-0 right-0 border-t-2 border-r-2",
  "bottom-0 right-0 border-b-2 border-r-2",
  "bottom-0 left-0 border-b-2 border-l-2"
] as const;

const TEXT_COLOR = {
  primary: "text-background",
  secondary: "text-foreground",
} as const;

const SIZE = {
  sm: "px-6 py-2 text-xs mx-2",
  md: "px-6 py-1.5 text-sm mx-2",
} as const;

const SKEW = "-skew-x-[20deg]";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof VARIANT;
  size?: keyof typeof SIZE;
};

export default function Button({
  variant = "primary",
  size = "sm",
  className = "",
  children,
  ...rest
}: Props) {
  const classes = `${BASE} ${SIZE[size]} ${TEXT_COLOR[variant]} ${className}`;

  return (
    <button className={classes} {...rest}>
      <span aria-hidden="true" className={`absolute inset-0 ${SKEW}`}>
        <span
          className={`absolute inset-1 transition-colors ${VARIANT[variant]}`}
        >
          {variant === "secondary" &&
            INNER_CORNERS.map((c) => (
              <span
                key={c}
                className={`absolute h-1.5 w-1.5 transition-colors border-head-border ${c}`}
              />
            ))}
        </span>

        <span
          className={`absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 transition-colors ${ACCENT[variant]}`}
        />
      </span>

      <span className="relative">{children}</span>
    </button>
  );
}