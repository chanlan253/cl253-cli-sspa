import React, { Suspense, Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageLoad from "components/pageLoad";
import { Provider } from "react-redux";
import routers from "./router";
import { ConfigProvider } from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");

class RootComponent extends Component {
  state = {
    store: this.props.store
  };

  componentDidCatch(error, info) {
    console.log(info);
  }

  render() {
    return (
      <ConfigProvider locale={zh_CN} autoInsertSpaceInButton={false}>
        <Provider store={this.state.store}>
          <Suspense fallback={<PageLoad />}>
            <BrowserRouter basename={`/layout/${process.env.baseName}`}>
              <Switch>
                {routers.map(item => {
                  return (
                    <Route component={item.component} path={item.path} key={item.name} exact={item.exact || false} />
                  );
                })}
              </Switch>
            </BrowserRouter>
          </Suspense>
        </Provider>
      </ConfigProvider>
    );
  }
}

export default RootComponent;
