import React from 'react';
import { Button, Row, Col, Form, Input } from 'antd';
import './App.css';

// import Container from 'reactstrap/lib/container'
import PersonalDetails from './components/PersonalDetails'
import { IPersonState } from "./State";

export default class App extends React.Component {
  private defaultPerson : IPersonState = {
    Address1: "hello",
    Address2: null,
    County: "",
    DateOfBirth : new Date().toISOString().substring(0,10),
    FirstName: "",
    LastName: "",
    PersonId : "",
    PhoneNumber: "",
    Postcode: "",
    Town: ""
  }
  constructor(props : {}) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <PersonalDetails DefaultState = {this.defaultPerson}/>
        
      </div>
    );
  }
}
