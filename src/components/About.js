import React from "react";
import styled from "styled-components";

const About = () => {
  const AboutWrapper = styled.div`
    width: 80vw;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `;
  const Text = styled.p``;
  const AboutTitle = styled.h1`
    font-size: 3.5em;
    margin-bottom: 0.25em;
    @media (min-width: 800px) {
      margin-top: 0;
      margin-bottom: 0.5em;
      padding-top: 1em;
    }
  `;

  return (
    <AboutWrapper>
      <AboutTitle>About Me</AboutTitle>
      <Text>
        <strong>What my friends think I do:</strong> Wait, you’re not a doctor
        yet? What do you mean you’re not going to be ‘that type of doctor’?{" "}
        <br />
        <strong>What my family thinks I do:</strong> I don’t understand but
        you’re doing great! <br />
        <strong>What I think I do:</strong> Recreating the blood vessels of the
        brain to research dementia and science writing.
      </Text>
      <Text>
        My name is Geoff; I am a PhD student at the University of Manchester
        enrolled in the centre for doctoral training (CDT) in regenerative
        medicine. My project involves building 3D models of the neurovascular
        unit to help understand the mechanisms which cause dementia. To do this
        I use stem cells, 3D biomaterials, and 3D-bioprinting.
      </Text>
      <Text>
        Alongside my research I also like to write science articles which
        communicate the latest research in neuroscience and biofabrication to
        scientists and science enthusiasts.
      </Text>
    </AboutWrapper>
  );
};

export default About;
