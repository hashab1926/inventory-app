import cn from "classnames";
export default function Button({ onClick, variant, className, children, disabled, size }) {
  const listVariant = {
    "primary": "bg-primary text-white min-w-[64px] hover:bg-primary-shade",
    "outline-primary": "border border-primary text-primary hover:bg-primary hover:text-white transition-all",
    "secondary": "bg-gray-300 text-slate-700 font-normal hover:bg-gray-350"
  };

  const listSize = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-md"
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        listVariant[variant || "primary"],
        listSize[size || "sm"],
        "flex justify-center items-center rounded-[5px] px-20px py-[7.5px]",
        {
          "opacity-50": disabled
        }
      )}>
      {children}
    </button>
  );
}