import React from 'react';
import styled from 'styled-components';

const Nav = (props) => {
  const Wrapper = styled.div`
    /* font-family: 'Montserrat', sans-serif; */
    /* font-family: 'Montserrat Alternates', sans-serif; */
    font-family: 'Amatic SC', sans-serif;
    letter-spacing: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #333333;
    box-shadow: 0 1px 2px #6d6c6c;
    height: 8vh;
    width: 100vw;
    `
  const NavButtons = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 50vw;
    `
  const Header = styled.h1`
    cursor: pointer;
    color: ${props => props.logoColor || '#aba7a7'};
    width: 40vw;
    font-size: 1.75em;
    text-align: center;
    transition: all .5s ease;
    :hover {
      color: #6d6c6c;
    }
  `
  const Button = styled(Header)`
    font-size: 1.5em;
    width: unset;
    text-decoration: none;
    font-weight: 700;
  `
  return (
    <Wrapper>
      <Header logoColor="#d8d8d8" onClick={() => props.history.push('/')}><i className="fas fa-flask" style={{marginRight: "10px"}}></i>Just Geoff</Header>
      <NavButtons>
        <Button onClick={() => props.history.push('/about')}>About</Button>
        <Button onClick={() => props.history.push('/cv')}>CV</Button>
        <Button onClick={() => props.history.push('/login')}>Login</Button>
      </NavButtons>
    </Wrapper>
  );
};

export default Nav;