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

```

- 先运行入口项目`npm run dev`
- 再运行开发的微应用项目,端口要区分8888，一般我们以900x为端口
- 访问页面地址：http://localhost:8888

#### 独立项目开发，运行 npm run start
如果运行这方式，也能直接调试，不过看到的内容只有外框架右侧的内容。



