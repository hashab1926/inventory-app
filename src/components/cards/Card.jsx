import cn from "classnames";
function Card({ children, className }) {
  return (
    <div className={cn("border-gray-200 rounded-lg shadow bg-white p-6")}>
      {children}
    </div>
  );
}

export default Card;