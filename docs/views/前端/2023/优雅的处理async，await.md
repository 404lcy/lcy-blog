---
title: 优雅的处理async，await
date: 2023-02-03
sidebar: auto
tags:
  - js
  - promise
  - Vue
categories:
  - 前端
---

## 借用 await-to-js 库

- 之前处理异步请求时是这样的

  ```javascript
  async asyncTask() {
    try {
      const asyncFuncARes = await asyncFuncA()
    } catch(error) {
      return new Error(error)
    }
    try {
      const asyncFuncBRes = await asyncFuncB(asyncFuncARes)
    } catch(error) {
      return new Error(error)
    }
    try {
      const asyncFuncCRes = await asyncFuncC(asyncFuncBRes)
    } catch(error) {
      return new Error(error)
    }
  }
  ```

  - 使用 await-to-js 后是这样的:

  ```javascript
  import to from './to.js';
  function async asyncTask() {
  const [err, asyncFuncARes]  = await to(asyncFuncA())
  if(err) throw new (error);

  const [err, asyncFuncBRes]  = await tp(asyncFuncB(asyncFuncARes))
  if(err) throw new (error);

  const [err, asyncFuncCRes]  = await to(asyncFuncC(asyncFuncBRes)
  if(err) throw new (error);
  }
  ```

- await-to-js 源码分析:

  ```javascript
  export function to(promise, errorExt) {
    return promise
      .then((data) => [null, data])
      .catch((err) => {
        if (errorExt) {
          const parsedError = Object.assign({}, err, errorExt)
          return [parsedError, undefined]
        }
        return [err, undefined]
      })
  }
  export default to
  ```

- 这里我们先抛开 errorExt 这个自定义的错误文本,核心代码是这样的:

  ```javascript
  export function to(promise) {
    return promise
      .then((data) => [null, data]) // 成功,返回[null,响应结果]
      .catch((err) => {
        return [err, undefined] // 失败,返回[错误信息,undefined]
      })
  }
  export default to
  ```

## 代码逻辑结论

- 无论成功还是失败都返回一个数组,数组的第一项是和错误相关的,数组的第二项是和响应结果相关的
- 成功的话数组第一项也就是错误信息为空,数组第二项也就是响应结果正常返回
- 失败的话数组第一项也就是错误信息为错误信息,数组第二项也就是响应结果返回 undefined

## 参考链接

- [https://github.com/scopsy/await-to-js](https://github.com/scopsy/await-to-js)
- [https://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/](https://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/)
