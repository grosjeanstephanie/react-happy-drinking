// Fichier : ./src/App.js
import React, { Component } from 'react';
import logo from '../assets/fizzing-flask.svg';
import '../css/App.css';
import { establishments } from './establishments/fixtures';
// Fichier : ./src/components/App.js [import]


class App extends Component {
  render() {
    const listEstablishment = establishments.map( (establishment) => {
        return (
            <div class="App-intro">
            <li class="establishment">
                <h3>Tonton</h3>
                    Un super bar étudiant
            </li>
            <li class="establishment">
                <h3>The Londow Town</h3>
                un super bar à bière
            </li>
            <li class="establishment">
                <h3>Australian Bar</h3>
                Un super bar dansan
            </li>
        </div>
    })

    return (
        <div className="App">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>Welcome to { this.props.title }</h2>
            </div>
            <div className="App-intro">
                { listEstablishment }
            </div>

        </div>
    );
  }
}
export default App;


