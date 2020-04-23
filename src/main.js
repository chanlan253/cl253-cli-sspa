import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import RootComponent from "./root.component";

if (!window.singleSpaNavigate) {
  const { store } = require("./redux");
  ReactDOM.render(<RootComponent store={store} />, document.getElementById("childApp"));
}

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: spa => {
    let store = spa.globalStore.stores[spa.name];
    return <RootComponent store={store} />;
  },
  domElementGetter
});

export function bootstrap(props) {
  return reactLifecycles.bootstrap(props);
}

export function mount(props) {
  return reactLifecycles.mount(props);
}

export function unmount(props) {
  return reactLifecycles.unmount(props);
}

function domElementGetter() {
  let el = document.getElementById("childApp");
  if (!el) {
    el = document.createElement("div");
    el.id = "childApp";
  }

  let timer = null;
  timer = setInterval(() => {
    if (document.querySelector("#appLayout")) {
      document.querySelector("#appLayout").appendChild(el);
      clearInterval(timer);
    }
  }, 100);

  return el;
}
