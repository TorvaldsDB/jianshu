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

## axios

## immutableJS

[immutableJS](https://github.com/immutable-js/immutable-js)

## react-transition-group

[react-transition-group](https://reactcommunity.org/react-transition-group/)
[Using Immutable.JS with Redux](https://redux.js.org/recipes/using-immutablejs-with-redux)

## redux-devtools-extension

[redux-devtools-extension](https://github.com/zalmoxisus/redux-devtools-extension)
