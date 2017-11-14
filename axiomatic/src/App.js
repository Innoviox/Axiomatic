import React from 'react';
import {Component} from 'react';
import {DropdownButton, ButtonGroup, MenuItem, Button, Carousel} from 'react-bootstrap';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';

import logowhite from './assets/Logo-white.png';
import logo from './assets/Logo.png';
import carousel from './assets/carousel.png';

import './lib/bootstrap.css';
import './lib/lumen.css';
import './lib/animate.css';
//import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import './App.css';


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
            <div>
                
                <nav className = "navbar navbar-expand-lg navbar-dark navbar-fixed-top bg-dark">
                    <div class="container-fluid">
                        <div className = "collapse navbar-collapse bs-navbar-collapse">
                            <ul className = "topbar-left">
                                <img className = "logo animated infinite tada" src={logo} alt="Axiom"></img>
                                
                                <ButtonGroup>
                                    <Button bsStyle="danger" className="navbtn" bsSize="large">GitHub</Button>
                                    <DropdownButton bsStyle="danger" bsSize="large" title="primary" key="0" className={"navbtn " + dropDownClass[0]} noCaret onClick={this.handleHover} onMouseLeave={this.handleHover} id = "bg-nested-dropdwn">
                                      <MenuItem eventKey="1" href="https://github.com/Innoviox/Axiom">GitHub</MenuItem>
                                      <MenuItem eventKey="2">Another action</MenuItem>
                                      <MenuItem eventKey="3" active>Active Item</MenuItem>
                                      <MenuItem divider />
                                      <MenuItem eventKey="4">Separated link</MenuItem>
                                    </DropdownButton>
                                </ButtonGroup>
                            </ul>
                            <ul className = "topbar-right">
                                <form class="form-inline my-2 my-lg-0 search-form">
                                    <input class="form-control mr-sm-2" type="text" placeholder="Search the docs..." onInput = {this.handleSearching}></input>
                                    <button class={"btn " + (this.state.searching?"btn-primary":"btn-info")} type="submit" disabled={!this.state.searching}>Search</button>
                                </form>
                            </ul>
                        </div>
                    </div>
                    { /* <div class="divider grey"></div> */ }
                </nav>
                { /* <span class = "logo-text"> Axiom </span> */ }
{/*
                 <nav className="navbar navbar-expand-lg navbar-dark bg-primary navbar-fixed-top">
                  <a className="navbar-brand" href="#">Navbar</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Features</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">Pricing</a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                      </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                      <input className="form-control mr-sm-2" type="text" placeholder="Search"></input>
                      <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                  </div>
                </nav>*/}
            </div>
        )
    }
}

class MyCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    
    render() {
      const {leftIcon, rightIcon} = this.state;
      return (
          
        <div className="container-fluid">
          {/*<div className="row">
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
                        <br></br><br></br>
                        <div><h2 style={{color:'#000'}}>The modular, flexible, lightweight 3D library focused on performance and rendering.</h2></div>    
                    </div>
                    <div className = "carousel-caption">          
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
          </div>*/}
            <Carousel>
            <Carousel.Item>
              <img width={'100%'} height={'100%'} alt="900x500" src={carousel} />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={'100%'} height={'100%'} alt="900x500" src={carousel} />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img width={'100%'} height={'100%'} alt="900x500" src={carousel} />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      );
    }
};

class App extends Component {
    render() {
        return (
            <div className="page">
                <TopBar />
                <MyCarousel />
                { /* <Content /> */ }
                a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>a<br></br>
            </div>
        );
    }
}

export default App;
