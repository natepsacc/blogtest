import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
const express=require('express');
const app=express();

const { blogEasy, upload, getPost, getBlog, deletePost, getRecent } = require('blog-easy');

blogEasy({
    static : 'public', // replace with your own public directory
    app : app,
    database : 'your mongoDB string url'
});
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
