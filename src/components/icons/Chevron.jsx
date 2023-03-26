export default function ChevronIcon({ rotate }) {
  const rotation = {
    "left": "rotate(0deg)",
    "top": "rotate(90deg)",
    "right": "rotate(180deg)",
    "bottom": "rotate(270deg)",
  };
  return (
    <div style={{ transform: rotation[rotate || "left"] }} >
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" fontSize="22px" className="iconify iconify--bx" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M13.293 6.293L7.586 12l5.707 5.707l1.414-1.414L10.414 12l4.293-4.293z" /></svg>
    </div>

  );
}