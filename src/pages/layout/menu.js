import React, { Component } from "react";
import style from "./layout.less";
import { NavLink } from "react-router-dom";
import ScrollBar from "components/scrollBar";
class Menu extends Component {
  state = {
    title: "账户中心",
    list: [
      {
        title: "基本资料",
        url: "/list"
      },
      {
        title: "实名认证",
        url: "/other"
      },
      {
        title: "安全设置",
        url: "/safe"
      },
      {
        title: "登录日志",
        url: "/logs"
      }
    ]
  };
  render() {
    return (
      <div className={style.w_menu}>
        <div className={style.w_menu_wrap}>
          <div className={style.menu_title}>{this.state.title}</div>
          <ScrollBar>
            <ul className={style.menu_list}>
              {this.state.list.map(item => (
                <li key={item.url}>
                  <NavLink to={item.url} activeClassName={style.active}>
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </ScrollBar>
        </div>
      </div>
    );
  }
}
export default Menu;
