import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { createRoot } from "react-dom/client";

interface ReactButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function ReactButton(props: PropsWithChildren<ReactButtonProps>) {
  const { children, ...otherProps } = props;

  return <button {...otherProps}>{children}</button>;
}

export class ReactButtonElement extends HTMLElement {
  handleclick: ReactButtonProps["onClick"];
  type: ReactButtonProps["type"];

  connectedCallback() {
    const root = createRoot(this);
    root.render(
      <ReactButton onClick={this.handleclick} type={this.type}>
        {this.innerHTML}
      </ReactButton>
    );
  }
}
