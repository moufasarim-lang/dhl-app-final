import { jsx } from "react/jsx-runtime";
function Redirect() {
  if (typeof window !== "undefined") {
    window.location.replace("/app");
  }
  return /* @__PURE__ */ jsx("noscript", { children: /* @__PURE__ */ jsx("meta", { httpEquiv: "refresh", content: "0;url=/app" }) });
}
export {
  Redirect as component
};
