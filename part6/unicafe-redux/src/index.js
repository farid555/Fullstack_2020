import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }
  const ok = () => {
    store.dispatch({
      type: 'OK'

    })
  }
  const bad = () => {
    store.dispatch({
      type: 'BAD'

    })
  }
  const zero = () => {
    store.dispatch({
      type: 'ZERO'

    })
  }

  return (
    <div>
      <button onClick={good}>good</button>
      <button onClick={ok}>good</button>
      <button onClick={bad}>good</button>
      <button onClick={zero}>good</button>
      <div>good {store.getState().good}</div>
      <div>ok {store.getState().good}</div>
      <div>bad {store.getState().good}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
