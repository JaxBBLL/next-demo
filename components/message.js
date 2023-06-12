import { useEffect, useMemo } from "react";
import ReactDom, { unmountComponentAtNode } from "react-dom";

let wrap;
export const message = (content) => {
  if (typeof document === "undefined") {
    return;
  }
  if (!wrap) {
    wrap = document.createElement("div");
    wrap.style.cssText = `
      line-height:1.5;
      text-align:center;
      color: #333;
      box-sizing: border-box;	
      margin: 0;
      padding: 0;
      list-style: none;
      position: fixed;
      z-index: 100000;
      width: 100%;
      top: 16px;
      left: 0;
      pointer-events: none;`;
    document.body && document.body.appendChild(wrap);
  }

  const el = document.createElement("div");
  wrap.appendChild(el);
  ReactDom.render(
    <Message rootDom={wrap} parentDom={el} content={content} />,
    el
  );
};

export function Message(props) {
  const { rootDom, parentDom, content } = props;

  const unmount = useMemo(() => {
    return () => {
      if (parentDom && rootDom) {
        unmountComponentAtNode(parentDom);
        rootDom.removeChild(parentDom);
      }
    };
  }, [parentDom, rootDom]);

  useEffect(() => {
    setTimeout(() => {
      unmount();
    }, 2000);
  }, [unmount]);
  return (
    <div className="inline-block py-5 bg-gray-200 rounded shadow px-15 mt-15">
      {content}
    </div>
  );
}
