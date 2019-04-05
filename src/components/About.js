import React from 'react';
import styled from 'styled-components';
import pen from '../pentwo.jpg'

const About = () => {
  const AboutWrapper = styled.div`
    width: 80vw;
    margin: auto;
  `
  const Text = styled.p`
    color: #333;
  `
  const AboutTitle = styled.h1`
    font-family: 'Amatic SC', sans-serif;
    color: #333;
    font-size: 3.5em;
    margin-top: 0;
  `

const Pen = styled.img`
width: 15vw;
margin-top: 2em;
`

  return (
    <AboutWrapper>
      <Pen src={pen}/>
      <AboutTitle>
        About Me
      </AboutTitle>
      <Text>
        <strong>What my friends think I do:</strong> Wait, you’re not a doctor yet? What do you mean you’re not going to be ‘that type of doctor’? <br/>
        <strong>What my family thinks I do:</strong> I don’t understand but you’re doing great! <br/>
        <strong>What I think I do:</strong> Developing 3D models of the neurovascular unit and science writing
      </Text>
      <Text>
        My name is Geoff; I am a PhD student at the University of Manchester enrolled in the centre for doctoral training (CDT) in regenerative medicine. My project involves building 3D models of the neurovascular unit to help understand the mechanisms which cause dementia. To do this I use stem cells, 3D biomaterials, and 3D-bioprinting. 
      </Text>
      <Text>
        Alongside my research I also like to write science articles which communicate the latest research in neuroscience and biofabrication (NEUROFABRICATION) to scientists and science enthusiasts. The website you are on now is my portfolio of these articles and also to all things Geoff (Just Geoff).
      </Text>
      <Text>
        Prone to pining over 3D-printing paraphernalia.
      </Text>
    </AboutWrapper>
  );
};

export default About;