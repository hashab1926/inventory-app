import cn from "classnames";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import style from "./Snackbar.module.scss";
const Portal = dynamic(() => import("@/components/Portal"), {
  ssr: false
})
export default function Snackbar({ duration = 5000, onHide, show, children, actionText, onClickAction, variant = "black" }) {
  const listVariant = {
    "black": "bg-[#323232]"
  };
  useEffect(() => {
    if (!show) return;
    setTimeout(() => {
      onHide && onHide();
    }, duration);
  }, [show, duration, onHide]);

  if (!show) return <></>;
  return (
    <Portal className={cn(style["snackbar-container"], listVariant[variant])}>
      {children}
      {
        onClickAction &&
        <span className="text-primary font-semibold text-md cursor-pointer" onClick={onClickAction}>{actionText || "OKE"}</span>
      }
    </Portal>
  );
}