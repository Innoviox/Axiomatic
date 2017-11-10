import React from 'react';
import {Component} from 'react';
import logo from './Logo.png';
import './App.css';
import './lib/animate.css'
import {DropdownButton, ButtonGroup, MenuItem} from 'react-bootstrap';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';

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
                <div class="divider grey"></div>
            </div>
        )
    }
}

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
      const {leftIcon, rightIcon} = this.state;
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <React_Bootstrap_Carousel
                animation={true}
                slideshowSpeed={7000}
                leftIcon={leftIcon}
                rightIcon={rightIcon}
                ref={ (slider) => {this.slider=slider} }
                className="carousel-fade"
              >
                <div style={{height:400}}>
                    <div className="carousel-center">
                        <div id = "intro">Welcome to Axiom</div>
                    </div>
                    <br></br><br></br><br></br>
                    <div className = "carousel-caption d-none d-md-block">           
                        <div><h2 style={{color:'#000'}}>The modular, flexible, lightweight 3D library focused on performance and rendering.</h2></div>                    
                        <div>
                            <ButtonGroup>
                                <button class="btn btn-primary">Read the docs</button>
                                <a href="https://github.com/Innoviox/Axiom" class="btn btn-info">Go to the <img class="github-btn" src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"></img></a>
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
                <div style={{height:400,width:"100%",backgroundColor:"aqua"}}>
                  <div className="carousel-caption">
                    Video
                  </div>
                </div>
                <div style={{height:400,width:"100%",backgroundColor:"lightpink"}}>
                  <div className="carousel-caption">
                    Text
                  </div>
                </div>
                <div style={{height:400,width:"100%",backgroundColor:"lightblue"}}>
                  <div className="carousel-caption">
                    Text
                  </div>
                </div>
                <div style={{height:400,width:"100%",backgroundColor:"lightblue"}}>
                  <div className="carousel-caption">
                    Youtube
                  </div>
                </div>
              </React_Bootstrap_Carousel>
            </div>
          </div>
        </div>
      );
    }
};

class App extends Component {
    render() {
        return (
            <div className="page">
                <TopBar />
                <Carousel />
                { /* <Content /> */ }
            </div>
        );
    }
}

export default App;
