import React, { Component } from "react";
import Menu from "./menu";
import style from "./layout.less";
class Layout extends Component {
  render() {
    return (
      <div className={style.w_layout}>
        <Menu />
        <div className={style.w_content}>{this.props.children}</div>
      </div>
    );
  }
}
export default Layout;
