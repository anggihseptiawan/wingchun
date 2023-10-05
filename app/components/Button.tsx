import React from "react"

type Variant = "PRIMARY" | "SECONDARY"

export const Button = ({
  children,
  variant = "PRIMARY",
  className,
}: {
  children: React.ReactNode
  variant?: Variant
  className?: string
}) => {
  if (variant === "PRIMARY")
    return (
      <button
        className={`${
          className && className
        } font-semibold bg-slate-800 text-center py-2 rounded-md text-white mb-2`}
      >
        {children}
      </button>
    )
  return (
    <button
      className={`${
        className && className
      } font-semibold px-6 border-2 border-slate-800 py-2 rounded-md`}
    >
      {children}
    </button>
  )
}
