import { ButtonHTMLAttributes } from "react";

interface btn extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
  onClickHandler: () => void;
}

function Button({ name, onClickHandler }: btn) {
  return (
    <div>
      <button onClick={onClickHandler}>{name}</button>
    </div>
  );
}

export default Button
