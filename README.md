# What I learned

## CSS management

Use [styled-components](https://www.styled-components.com/) manage CSS

## Icont organization

All the icons coming from [Iconfont](https://www.iconfont.cn/)

Download the iconfonts and then put them into `src/statics/iconfont`
remove original `iconfont.js` and rename `iconfont.css` as `icontfont.js`
import `styled-components` and make `iconfont.js` usable in the global project
remove redundant css in the `iconfont.js`
paste the following snippets into your place where you need icon.

```html
<li className="iconfont">&#xe60e;</li>
```

## react

- [react](https://reactjs.org/)

## redux

- [redux](https://redux.js.org/)
- createStore
- reducer
- combineReducers

## react-redux

- Docs [react-redux](https://react-redux.js.org/)
- Provider
- connect
  - mapStateToProps
  - mapDispatchToProps

## redux-thunk

Enhance `dispatch`, and is used when store is created.
`redux-thunk` should appear when `createStore` is called.
So we should import `redux-thunk` in the `store/index.js`. It will be better under the `import { createStore } from "redux"`

## axios

[axios](https://github.com/axios/axios)

## immutableJS

[immutableJS](https://github.com/immutable-js/immutable-js)
[Using Immutable.JS with Redux](https://redux.js.org/recipes/using-immutablejs-with-redux)
[Official web](https://immutable-js.github.io/immutable-js/)

## redux-immutable

[redux-immutable](https://github.com/gajus/redux-immutable)

## react-transition-group

[react-transition-group](https://reactcommunity.org/react-transition-group/)

## redux-devtools-extension

[redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)
