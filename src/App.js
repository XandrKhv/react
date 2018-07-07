import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components';

import Header from './components/Header'
import Menu from './components/Menu'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <SayFullName name="Kate" surname="Bubnovskaya" link="vk.com" />
        <SayFullName name="Elena" surname="Petrova" link="faxebook.com" />
        <SayFullName name="Max" surname="Serov" link="max-factor.com" />
      </div>
    )
  }
}

function SayFullName(props) {
  return (
      <div>
        <h1> Мое имя {props.name} , фамилия - {props.surname}</h1>
        <a href="{props.link}"> Ссылка на мой профиль </a>
      </div>
    )
}

export default App;
