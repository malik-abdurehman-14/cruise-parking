import React from "react";
import { cn } from "@/lib/utils";

function Input({
  type = "text",
  placeholder = "",
  value,
  onChange,
  name,
  id,
  variant = "default",
  className,
  ...props
}) {
  const variants = {
    default: [
      "border-gray-400",
      "bg-transparent",
      "text-black",
      "placeholder:text-gray-400",
      "focus:border-green focus:ring-1 focus:ring-green",
    ],

    dark: [
      "border-gray-800",
      "bg-[#2E343A]",
      "text-white text-base",
      "py-4",
      "rounded-xl",
      "placeholder:text-gray-400",
      "focus:border-froozen focus:ring-1 focus:ring-froozen",
    ],

    light: [
      "border-green",
      "bg-white",
      "text-black text-sm",
      "py-4",
      "rounded-xl",
      "placeholder:text-gray-400",
      "focus:border-green focus:ring-1 focus:ring-green",
    ],
  };

  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={cn(
        "w-full rounded-md border",
        "px-4 py-2",
        "text-sm outline-none space-grotesk",
        "placeholder:space-grotesk",
        "transition-all",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}

export default Input;
