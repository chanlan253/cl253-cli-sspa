# 脚手架-智能云微应用

## 介绍
智能云微应用是应用于创蓝「智能云」项目里的模块，智能云采用前端微应用的方式，借助[single-spa](https://single-spa.js.org/docs/)方式构建大型单页面微应用系统。每一个小的微应用都是独立的小型应用项目，可以独立上线，发布，测试等。具体智能云项目说明，可以查看这里。

## 安装
**步骤一：**使用脚手架命令：`npx cl253-cli init project`
初始化项目，建立目录名为project的文件夹目录

**步骤二：**根据提示语选择项目类型，**「**创蓝智能云微应用**」**

**步骤三：**进入project目录，安装依赖包`npm install`或`yarn install`或者采用淘宝镜像`cnpm install`

**步骤四：**本地启动项目：`npm run dev `独立启动项目 `npm run start`
![image.png](https://cdn.nlark.com/yuque/0/2020/png/741245/1578970941478-6bfa05a0-3a30-4643-8c43-439ab2057d2e.png#align=left&display=inline&height=166&name=image.png&originHeight=332&originWidth=790&size=71475&status=done&style=none&width=395)

**【这里需要注意，提问的项目名称，就是你路由地址的一级目录名称，用于区分不同的微应用系统，也是微前端架构的核心，所以要保证你的路由名称是项目里唯一的】**
**
## 文件目录说明

config //webpack相关配置，一般不需要更改
┣ webpack.base.js //项目公共配置
┣ webpack.dev.js//项目本地配置
┣ webpack.pro.js //项目打包配置
dll //公共依赖包提取文件目录，与OSS静态资源对应，并把公共文件映射index.html上了，json文件用于配置
┣ common.dll.js //提取包里包含axios，moment
┣ react.dll.js //包含"react", "react-dom", "react-router-dom"
┣ react_redux.dll.js //包含"redux", "react-redux"
src //项目主要开发目录
┣ assets //静态资源目录，「该资源里.less不会被hash值编译，处理全局覆盖css特别方便」
┣ components //自定义组件库
 ┣ plugins //自定义插件库
 ┣ page //自定义路由页面组件
 ┣ redux //redux配置目录
 ┣ router //路由配置目录
┣ index.html  //模板文件
┣ main.js  //微应用引导目标
┣ root.component.js  //入口组件
app.config.js //项目简单配置目录，详情请看下面配置说明
.eslintrc.js //项目代码格式化规范
package.json //依赖包配置项

## 本地开发说明
#### 整个项目开发，运行 npm run dev 
微应用的外框架和其他微应用模块是其他平台的，所以需要本地拉取注册入口portal的仓库，仓库地址：[git@git.253.com:bmp/FD/portal.git](http://git.253.com/bmp/FD/portal)
入口项目portal的端口为：8888，修改入口文件的project.config.js，把自己的开发应用写到数组里就好

```json
module.exports = {
  projects: [
    {
      name: "main", //框架主模块
      path: "/", //模块url前缀
      entry: "/main/js/main.js", //模块渲染出口文件
      store: "/main/js/store.js", //模块对外接口
      layout: true //判断是不是外框架
    },
    {
      name: "app1", //模块名称
      path: "/app1", //模块url前缀
      entry: "http://localhost:9001/js/main.js", //模块渲染出口文件
      store: "http://localhost:9001/js/store.js" //模块对外接
    }
  ]
};
```

- 先运行入口项目`npm run dev`
- 再运行开发的微应用项目,端口要区分8888，一般我们以900x为端口
- 访问页面地址：http://localhost:8888

#### 独立项目开发，运行 npm run start
如果运行这方式，也能直接调试，不过看到的内容只有外框架右侧的内容。



