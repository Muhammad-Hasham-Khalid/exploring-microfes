import React, {
  ButtonHTMLAttributes,
  MouseEventHandler,
  PropsWithChildren,
} from "react";
import { createRoot } from "react-dom/client";

type ReactButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: ButtonHTMLAttributes<HTMLButtonElement>["type"];
};

function ReactButton(
  props: PropsWithChildren<ReactButtonProps>
) {
  const { onClick = () => {}, type, children } = props;

  return (
    <div>
      <button onClick={onClick} type={type}>
        {children}
      </button>
    </div>
  );
}

export class ReactButtonElement extends HTMLElement {
  handleclick: ReactButtonProps["onClick"];
  type: ReactButtonProps["type"] = "button";

  connectedCallback() {
    const root = createRoot(this);
    root.render(<ReactButton onClick={this.handleclick} type={this.type} children={this.innerHTML} />);
  }
}
