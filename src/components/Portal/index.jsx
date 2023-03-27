import { createPortal } from "react-dom";

function Portal({ className, children }) {
  return createPortal(
    <div className={className}>
      {children}
    </div>
  ,document.body);
}

export default Portal;