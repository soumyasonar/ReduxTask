import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import ConfigureStore from './store/ConfigureStore'
import  {Provider} from 'react-redux'

const store=ConfigureStore
console.log(store.getState())

store.subscribe(() => {
    console.log(store.getState())
})

const jsx=(
  <Provider store={store}>
      <App/>
  </Provider>
)

ReactDOM.render(
    jsx,
  document.getElementById('root')
);

