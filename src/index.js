import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import state from './state';

function changeCategory(cat){
  state.currentCategory = cat;
  render();
}
function render(){
  ReactDOM.render(
    <App state={state} changeCategory={changeCategory} />,
    document.getElementById('root')
  );
}
render();
