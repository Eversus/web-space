import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  children,
  variant = "primary",
  ...props
}: ButtonProps) {
  const variantClass =
    variant === "primary" ? styles.primary : styles.secondary;

  return (
    <button className={`${styles.button} ${variantClass}`} {...props}>
      {children}
    </button>
  );
}