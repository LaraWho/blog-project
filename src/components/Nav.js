import React from 'react';
import styled from 'styled-components';
import { withState } from '../MyState';

const Nav = (props) => {
  const Wrapper = styled.div`
    font-family: 'Amatic SC', sans-serif;
    letter-spacing: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333333;
    box-shadow: 0 1px 2px #6d6c6c;
    height: 10vh;
    width: 100vw;
    overflow-x: hidden;
    `
  const NavButtons = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 60vw;
    @media (min-width: 600px) {
      width: 50vw;
    }
    `
  const Header = styled.h1`
    cursor: pointer;
    color: ${props => props.logoColor || '#aba7a7'};
    width: 40vw;
    font-size: 1.5em;
    text-align: center;
    transition: all .5s ease;
    :hover {
      /* color: #6d6c6c; */
      opacity: 0.5;
    }
    @media (min-width: 380px) {
      font-size: 1.75em;
    }
  `
  const Button = styled(Header)`
    font-size: 1.25em;
    width: unset;
    text-decoration: none;
    font-weight: 700;
    @media (min-width: 380px) {
      font-size: 1.5em;
    }
  `

  const logout = () => {
    props.logout()
    props.history.push('/')
  }

  return (
    <Wrapper>
      <Header logoColor="#d8d8d8" onClick={() => props.history.push('/')}><i className="fas fa-flask" style={{marginRight: "10px"}}></i>Just Geoff</Header>
      {props.isLoggedIn ?
      <NavButtons>
        <Button onClick={() => props.history.push('/articles')}>Articles</Button>
        <Button onClick={() => props.history.push('/add')}>Add</Button>
        <Button onClick={() => logout()}>Logout</Button>
      </NavButtons>
      :
      <NavButtons>
        <Button onClick={() => props.history.push('/articles')}>Articles</Button>
        <Button onClick={() => props.history.push('/about')}>About</Button>
        <Button onClick={() => props.history.push('/cv')}>CV</Button>
      </NavButtons>

      }
    </Wrapper>
  );
};

export default withState(Nav);