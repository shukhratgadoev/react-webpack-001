import * as React from 'react';
import ReactDOM from "react-dom";

import '@scss/main.scss'

import  Header  from './components/Header';
import  Footer  from './components/Footer';

class App extends React.Component {
    render() {
      return (
        <>
        <Header/>
        <Footer/>
        </>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById("root"));