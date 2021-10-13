import React, { createElement } from 'react';
import ReactDOM from 'react-dom';

// 定义组件
const Hello = ({name}) => {
  return <div>hello { name }</div>
}

// 初始化
export function bootstrap() {}

// 挂载
export function mount(container, props) {
  console.log(props)
  ReactDOM.render(createElement(Hello, props, null), container);
}

// 更新
export function updated(attrName, value, container, props) {
  ReactDOM.render(createElement(Hello, props, null), container);
}