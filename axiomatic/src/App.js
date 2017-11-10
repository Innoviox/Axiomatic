import React from 'react';
import {Component} from 'react';
import logo from './Logo.png';
import './App.css';
import './lib/animate.css'
import {DropdownButton, ButtonGroup, MenuItem} from 'react-bootstrap';

function isSearched(searchTerm) {
  return (item) => {return item.title.toLowerCase().includes(searchTerm.toLowerCase());} 
}


class TopBar extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            dropDownStates: Array(2).fill(false),
            searching: false
        };
        this.handleHover = this.handleHover.bind(this);
        this.handleSearching = this.handleSearching.bind(this);
    }
    
    handleHover(i){
        const dropDownStates = this.state.dropDownStates.slice();
        dropDownStates[i] = !dropDownStates[i];
        this.setState({
            dropDownStates: dropDownStates
        });
    }
    
    handleSearching(e) {
        this.setState({ searching: e.target.value !== '' });
    }
    
    render() {
        const dropDownClass = [0, 1].map((i) => "dropdown" + this.state.dropDownStates[i]? " open" : "");

        return (
            <div class="container-wide">
                <nav className = "navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
                    <div className = "topbar collapse navbar-collapse">
                        <ul className = "topbar-left">
                            <img className = "logo animated infinite tada" src={logo} alt="Axiom"></img>
                            { /* <span class = "logo-text"> Axiom </span> */ }
                            <div className = "dropdown">
                                <ButtonGroup>
                                    <DropdownButton bsStyle="success" title="primary" key="0" className={dropDownClass[0]} onClick={this.handleHover} onMouseLeave={this.handleHover} id = "bg-nested-dropdwn">
                                      <MenuItem eventKey="1">Action</MenuItem>
                                      <MenuItem eventKey="2">Another action</MenuItem>
                                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                                      <MenuItem divider />
                                      <MenuItem eventKey="4">Separated link</MenuItem>
                                    </DropdownButton>
                                    <DropdownButton bsStyle="success" title="primary" key="1" className={dropDownClass[1]} onClick={this.handleHover} onMouseLeave={this.handleHover} id = "bg-nested-dropdwn">
                                      <MenuItem eventKey="1">Action</MenuItem>
                                      <MenuItem eventKey="2">Another action</MenuItem>
                                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                                      <MenuItem divider />
                                      <MenuItem eventKey="4">Separated link</MenuItem>
                                    </DropdownButton>
                                </ButtonGroup>
                            </div>
                        </ul>
                        <ul className = "topbar-right">
                            <form class="form-inline my-2 my-lg-0 search-form">
                              <input class="form-control mr-sm-2" type="text" placeholder="Search the docs..." onInput = {this.handleSearching}></input>
                              <button class={"btn " + (this.state.searching?"btn-primary":"btn-secondary")} type="submit" disabled={!this.state.searching}>Search</button>
                            </form>
                        </ul>
                    </div>
                </nav>
                <br></br><br></br><br></br>
                <div class="divider grey"></div>
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div className="page">
                <TopBar />
                {/*
                    <Jumbotron />
                    <Content />
                */}
            </div>
        );
    }
}

export default App;
