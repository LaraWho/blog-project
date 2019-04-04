import React from 'react';
import styled from 'styled-components';

const CV = () => {
  const CVWrapper = styled.div`
    width: 80vw;
    margin: 1em auto 2em auto;
  `
  const CVTitle = styled.h1`
    font-size: 4em;
  `
  const SubTitle = styled.h2`
    text-align: left;
    font-size: 2.5em;
    color: #585858;
    margin-bottom: 0;
    :nth-of-type(1) {
      text-align: center;
    }
  `
  const BodyText = styled.p`
    color: #585858;
    text-align: left;
    :nth-of-type(1) {
      text-align: center;
      margin-bottom: 2em;
    }
  `
  const List = styled.ul`
    text-align: left;
  `
  const ListItem = styled.li`
    list-style-type: circle;
  `
  const Link = styled.a`
    color: #6d6c6c;    
    text-decoration: none;
    transition: all 0.5s ease;
    :hover {
      color: #aba7a7;
    }
  `

  return (
    <CVWrapper>
      <CVTitle>Geoffrey Potjewyd</CVTitle>
      <SubTitle>Contact</SubTitle>
      <BodyText>
        <Link href="mailto:Geoffrey.Potjewyd@postgrad.manchester.ac.uk"> Geoffrey.Potjewyd@postgrad.manchester.ac.uk</Link> 
        <br/>
        <Link href="mailto:GeoffreyP.GP@googlemail.com" > GeoffreyP.GP@googlemail.com</Link>
        <br/>
        <Link href="https://www.linkedin.com/in/gpotjewyd" target="_blank"> Linkedin</Link>
        <br/>
        <Link href="https://www.researchgate.net/profile/Geoffrey_Potjewyd" target="_blank"> ResearchGate</Link>
      </BodyText>
        <BodyText>
          Ambitious and driven CDT Regenerative Medicine PhD Student with a wide range of research skills. Currently working towards my doctorate through developing 3D models of the neurovascular unit to investigate the underlying mechanisms of neurovascular dysfunction and its contribution to vascular dementia and Alzheimer's disease - as well as drug targets to negate this; utilising cutting edge regenerative medicine technologies.
        </BodyText>
        <SubTitle>Education</SubTitle>
        <BodyText>
        The University of Manchester 2016-2020
          PhD EPSRC-MRC CDT in Regenerative Medicine
          The University of Manchester 2014-2015
          MRes Translational Medicine - Distinction
          The University of Liverpool 2011-2014
          BSc (Hons) Pharmacology - 2:1
        </BodyText>
        <SubTitle>Awarded Funding</SubTitle>
        <BodyText>EPSRC-MRC Centre for Doctoral Training Studentship 2016</BodyText>
        <SubTitle>Technical Skills</SubTitle>
        <List>
          <ListItem>Scientific writing and presenting</ListItem> <ListItem>Immunocytochemistry (ICC) and Immunofluorescence (IF)</ListItem>
          <ListItem>Cellular and molecular biology</ListItem> <ListItem>3D culture cell encapsulation</ListItem>
          <ListItem>Cell culture (immortalised & stem cell)</ListItem> <ListItem>Small scale and large scale grows</ListItem>
          <ListItem>Rheology</ListItem> <ListItem>Induced pluripotent stem cells (iPSCs) differentiation</ListItem>
          <ListItem>QuaListItemty assurance understanding</ListItem> <ListItem>Neuropharmacology</ListItem>
          </List>
        <SubTitle>Research Experience</SubTitle>
        <BodyText>
          CDT in Regenerative Medicine PhD Project Developing 3D cell models of the neurovascular unit (NVU) 
          to probe the mechanisms underlying vascular dementia 09/2016-09/2020 
          Developing tissue engineered 3D NVU models through utilising bioinks, 3D-bioprinting & cells from immortalised lines & patient derived stem cells. 
          <br/><br/>

          IOP Publishing – MedicalPhysicsWeb.org Scientific Communications Writer 06/2017-Present 
          Writing scientific news articles for MedicalPhysicsWeb.org and PhysicsWorld.com on recently published research in medical physics, biophysics and bioengineering. Role includes reviewing articles written by fellow student contributors. Primarily producing articles on biofabrication (3D-bioprinting & biomaterials). 
          <br/><br/>

          VWR – Global Cell Bank Research Technician 11/2015-09/2016 
          Research technician in the AstraZeneca (AZ) Global Cell Bank (GCB) team. The GCB team comprises both VWR and AZ staff that work closely with a range of customers, supporting all cell based assays across the drug discovery and development pipeline. Developing and executing a methodology for testing the impact of temperature fluctuations on cell viability; project to qualify a new vapour phase liquid nitrogen tank. 
          <br/><br/>

          MRes Translational Medicine Project 09/2014-08/2015 
          Research project and literature review: L-β-N-methylamino-alanine (BMAA) induced cellular toxicity. 
          A project investigating a novel mechanism of pathology from metabolic activation of BMAA resulting in production of chemically reactive intermediates that can induce DNA damage and cellular toxicity. Cellular and blood brain barrier transporters of BMAA and metabolites were also investigated. 
          Translational impact to neurodegenerative diseases and cancer research. Environmentally produced amino acid BMAA has been strongly associated with neurodegenerative diseases Amyotrophic Lateral Sclerosis, Alzheimer's disease, and Parkinson's disease. 
          <br/><br/>

          BSc (Hons) Pharmacology Dissertation Projects 09/2013-05/2014 
          Literature review: - Amyloid Vs Tau: Which represents the best target for treatment or prevention of Alzheimer’s Disease? 
          Laboratory research project: - Use of a novel in vitro reporter assay to assess the activation of Nrf2 by chemotherapeutic agents. 
          <br/><br/>

          The University of Bath, Department of Pharmacy and Pharmacology 06/2010-08/2010 
          Research into the pharmacology of opioid receptors and anxiolytics. Additional research experience was gained from assisting in the animal house.
          <br/><br/>

          CDT in Regenerative Medicine PhD Project Developing 3D cell models of the neurovascular unit (NVU) 
          to probe the mechanisms underlying vascular dementia 09/2016-09/2020 
          Developing tissue engineered 3D NVU models through utilising bioinks, 3D-bioprinting & cells from immortalised lines & patient derived stem cells. 
          <br/><br/>

          IOP Publishing – MedicalPhysicsWeb.org Scientific Communications Writer 06/2017-Present 
          Writing scientific news articles for MedicalPhysicsWeb.org and PhysicsWorld.com on recently published research in medical physics, biophysics and bioengineering. Role includes reviewing articles written by fellow student contributors. Primarily producing articles on biofabrication (3D-bioprinting & biomaterials). 
          <br/><br/>

          VWR – Global Cell Bank Research Technician 11/2015-09/2016 
          Research technician in the AstraZeneca (AZ) Global Cell Bank (GCB) team. The GCB team comprises both VWR and AZ staff that work closely with a range of customers, supporting all cell based assays across the drug discovery and development pipeline. Developing and executing a methodology for testing the impact of temperature fluctuations on cell viability; project to qualify a new vapour phase liquid nitrogen tank. 
          <br/><br/>

          MRes Translational Medicine Project 09/2014-08/2015 
          Research project and literature review: L-β-N-methylamino-alanine (BMAA) induced cellular toxicity. 
          A project investigating a novel mechanism of pathology from metabolic activation of BMAA resulting in production of chemically reactive intermediates that can induce DNA damage and cellular toxicity. Cellular and blood brain barrier transporters of BMAA and metabolites were also investigated. 
          Translational impact to neurodegenerative diseases and cancer research. Environmentally produced amino acid BMAA has been strongly associated with neurodegenerative diseases Amyotrophic Lateral Sclerosis, Alzheimer's disease, and Parkinson's disease. 
          <br/><br/>

          BSc (Hons) Pharmacology Dissertation Projects 09/2013-05/2014 
          Literature review: - Amyloid Vs Tau: Which represents the best target for treatment or prevention of Alzheimer’s Disease? 
          Laboratory research project: - Use of a novel in vitro reporter assay to assess the activation of Nrf2 by chemotherapeutic agents. 
          <br/><br/>
          The University of Bath, Department of Pharmacy and Pharmacology 06/2010-08/2010 
          Research into the pharmacology of opioid receptors and anxiolytics. Additional research experience was gained from assisting in the animal house.
        </BodyText>
        <SubTitle>Volunteering and Public Engagement</SubTitle>
        <BodyText>
          Manchester Museum Body Experience 2017 Dementia Scientist 
          Teaching families about Alzheimer’s disease and dementia; using brain slices, Lego neurons, Lego amyloid-beta plaques, and Lego tau tangles.
          <br/><br/>
          Manchester Museum Stem Cell Scientist 
          Teaching college students about stem cells and applications.
          <br/><br/>
          Aim Higher Student Mentor 
          Mentoring students studying for their GCSEs
        </BodyText>
        <SubTitle>Select Non-Academic Articles</SubTitle>
        <BodyText>
          Drop-on-demand bioinks foster angiogenesis - <Link href="http://medicalphysicsweb.org/cws/article/research/69987" target="_blank">MedicalPhysicsWeb</Link>
          <br/>
          Shining a light on amyloid-β peptide binding sites - <Link href="http://medicalphysicsweb.org/cws/article/research/70325" target="_blank">MedicalPhysicsWeb</Link>
          <br/>
          Altered gut bacteria linked to Alzheimer’s disease – <Link href="https://reliawire.com/gut-bacteria-alzheimers/" target="_blank">ReliaWire</Link>
          <br/><br/>
          An extensive non-academic publications list is available on my <Link href="https://www.linkedin.com/in/gpotjewyd" target="_blank">Linkedin</Link> profile
        </BodyText>
        <SubTitle>Academic Publications</SubTitle>
        <BodyText>
          Potjewyd, G., Day, P.J., Shangula, S., Margison, G.P., Povey, A.C., 2017. L-β-N-
          methylamino- l -alanine (BMAA) nitrosation generates a cytotoxic DNA damaging
          alkylating agent: An unexplored mechanism for neurodegenerative disease.
          Neurotoxicology 59, 105–109.
        </BodyText>
    </CVWrapper>
  );
};

export default CV;