import React, { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<any> {
  children: React.ReactNode
  variant?: "PRIMARY" | "SECONDARY"
  className?: string
}

export const Button = (props: ButtonProps) => {
  if (props.variant === "PRIMARY")
    return (
      <button
        className={`${
          props.className && props.className
        } font-semibold bg-slate-800 text-center py-2 rounded-md text-white mb-2 disabled:bg-slate-200`}
      >
        {props.children}
      </button>
    )
  return (
    <button
      className={`${
        props.className && props.className
      } font-semibold px-6 border-2 border-slate-800 py-2 rounded-md disabled:bg-slate-200`}
      {...props}
    >
      {props.children}
    </button>
  )
}
