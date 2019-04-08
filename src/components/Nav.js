import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { withState } from "../MyState";

const Wrapper = styled.div`
  font-family: "Muli", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333333;
  box-shadow: 0 1px 2px #6d6c6c;
  height: 10vh;
  width: 100vw;
  overflow-x: hidden;
`;

const DropDown = styled(Wrapper)`
  box-shadow: none;
  justify-content: flex-end;
  padding-right: 8%;

  @media (min-width: 800px) {
    padding-right: 0;
  }
`;

const Header = styled.h1`
  cursor: pointer;
  width: 60vw;
  font-weight: 600;
  font-size: 1.25em;
  text-align: center;
  color: #d9d9d9;
  transition: all 0.5s ease;
  :hover {
    opacity: 0.5;
  }
  /* @media (min-width: 500px) {
    width: 70vw;
  } */
`;

const Button = styled(Header)`
  font-size: 1.25em;
  width: unset;
  text-decoration: none;
  font-weight: 400;
  position: relative;
  margin: 10px;
  @media (min-width: 800px) {
    position: unset;
  }
`;

const NavButtons = styled.div`
  display: ${props => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  justify-content: end;
  align-items: center;
  height: ${props => (props.isOpen ? "100vh" : "0vh")};
  width: 100vw;
  right: 0px;
  top: 10vh;
  padding: 2em;
  position: ${props => (props.isOpen ? "absolute" : "unset")};
  opacity: ${props => (props.isOpen ? "1" : "0")};
  background-color: #333333;
  filter: drop-shadow(0px 2px 2px #6d6c6c);
  z-index: 6;
  transition: height 500ms ease;

  @media (min-width: 800px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    width: 60vw;
    color: #d9d9d9;
    height: 10vh;
    opacity: 1;
    position: unset;
    filter: none;
  }
`;

const HamburgerWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 500ms ease;

  :hover {
    opacity: 0.6;
  }
`;
const Hamburger = styled.div`
  width: 35px;
  height: 4px;
  background-color: #d9d9d9;
  border-radius: 2px;
  margin: 2.5px;
  transition: all 500ms ease;

  @media (min-width: 800px) {
    display: none;
  }
`;
const Line1 = styled(Hamburger)`
  transition: all 500ms ease;
  transform-origin: left;
  transform: ${props =>
    props.isOpen
      ? "rotate(45deg) translateY(-8px) translateX(4px)"
      : "rotate(0deg) translateY(00px)"};
`;
const Line2 = styled(Hamburger)`
  transition: all 500ms ease;
  width: ${props => (props.isOpen ? "0px" : "35px")};
  opacity: ${props => (props.isOpen ? "0" : "1")};
`;
const Line3 = styled(Hamburger)`
  transition: all 500ms ease;
  transform-origin: left;
  transform: ${props =>
    props.isOpen
      ? "rotate(-45deg) translateY(8px) translateX(2px)"
      : "rotate(0deg) translate(0px, 0px)"};
`;

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  componentWillReceiveProps() {
    this.closeMenu();
  }

  logout = () => {
    this.setState(
      {
        isOpen: false
      },
      () => {
        this.props.logout();
        this.props.history.push("/");
      }
    );
  };

  openMenu = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  closeMenu = () => {
    this.setState({
      isOpen: false
    });
  };

  render() {
    return (
      <Wrapper>
        <Header
          logoColor="#d8d8d8"
          onClick={() => this.props.history.push("/")}
        >
          <i className="fas fa-flask" style={{ marginRight: "10px" }} />
          Geoffrey Potjewyd
        </Header>
        {this.props.token !== "" ? (
          <DropDown>
            <HamburgerWrapper onClick={this.openMenu}>
              <Line1 isOpen={this.state.isOpen} />
              <Line2 isOpen={this.state.isOpen} />
              <Line3 isOpen={this.state.isOpen} />
            </HamburgerWrapper>
            <NavButtons isOpen={this.state.isOpen}>
              <Button onClick={() => this.props.history.push("/articles")}>
                Articles
              </Button>
              <Button onClick={() => this.props.history.push("/publications")}>
                Publications
              </Button>
              <Button onClick={() => this.props.history.push("/add")}>
                Add
              </Button>
              <Button onClick={this.logout}>Logout</Button>
            </NavButtons>
          </DropDown>
        ) : (
          <DropDown>
            <HamburgerWrapper onClick={this.openMenu}>
              <Line1 isOpen={this.state.isOpen} />
              <Line2 isOpen={this.state.isOpen} />
              <Line3 isOpen={this.state.isOpen} />
            </HamburgerWrapper>
            <NavButtons isOpen={this.state.isOpen}>
              <Button onClick={() => this.props.history.push("/articles")}>
                Articles
              </Button>
              <Button onClick={() => this.props.history.push("/publications")}>
                Publications
              </Button>
              <Button onClick={() => this.props.history.push("/about")}>
                About
              </Button>
              <Button onClick={() => this.props.history.push("/cv")}>CV</Button>
            </NavButtons>
          </DropDown>
        )}
      </Wrapper>
    );
  }
}

export default withState(Nav);
