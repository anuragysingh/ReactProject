import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

// setting default which will be used across all the axios call
axios.defaults.baseURL="https://jsonplaceholder.typicode.com";
axios.defaults.headers.common['Authorization']='TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

// outgoing request interceptor
axios.interceptors.request.use(request=>{
  console.log(request);
  return request;
}, error=>{
  console.log(error);
  return Promise.reject(error);
});

// incoming response interceptor
axios.interceptors.response.use(response=>{
  console.log(response);
  return response;
}, error=>{
  console.log(error);
  return Promise.reject(error);
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
