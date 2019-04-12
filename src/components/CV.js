import React from "react";
import styled from "styled-components";

const CV = () => {
  const CVWrapper = styled.div`
    width: 80vw;
    margin: 1em auto 2em auto;
  `;
  const CVTitle = styled.h1`
    font-size: 3.5em;
    margin-bottom: 0.25em;
    @media (min-width: 800px) {
      margin-top: 0;
      margin-bottom: 0.5em;
      padding-top: 1em;
    }
  `;
  const SubTitle = styled.h2`
    text-align: left;
    font-size: 2em;
    color: #585858;
    margin-bottom: 0;
    :nth-of-type(1) {
      text-align: center;
    }
  `;

  const BodyText = styled.p`
    color: #585858;
    text-align: left;

    :nth-of-type(1) {
      text-align: center;
      margin-bottom: 2em;
    }
  `;

  const List = styled.ul`
    text-align: left;
  `;
  const ListItem = styled.li`
    list-style-type: circle;
    line-height: 1.85em;
  `;
  const Link = styled.a`
    color: #6d6c6c;
    transition: all 0.5s ease;
    font-family: "Open Sans", sans-serif;
    :hover {
      color: #aba7a7;
    }
  `;

  return (
    <CVWrapper>
      <CVTitle>Geoffrey Potjewyd</CVTitle>
      <SubTitle>Contact</SubTitle>
      <BodyText>
        <Link
          href="https://www.researchgate.net/profile/Geoffrey_Potjewyd"
          target="_blank"
        >
          {" "}
          ResearchGate: Geoffrey_Potjewyd
        </Link>
        <br />
        <Link href="https://www.linkedin.com/in/gpotjewyd" target="_blank">
          {" "}
          Linkedin: GPotjewyd
        </Link>
        <br />
        <Link href="https://twitter.com/Geoff3P" target="_blank">
          {" "}
          Twitter: @Geoff3P
        </Link>
        <br />
        <Link href="/" target="_blank" />
      </BodyText>

      <SubTitle>Education</SubTitle>
      <BodyText>
        <strong>The University of Manchester (2016-2020)</strong>
        <br />
        PhD EPSRC-MRC CDT in Regenerative Medicine
      </BodyText>
      <BodyText>
        <strong>The University of Manchester (2014-2015)</strong>
        <br />
        MRes Translational Medicine - Distinction
      </BodyText>
      <BodyText>
        <strong>The University of Liverpool (2011-2014)</strong>
        <br />
        BSc (Hons) Pharmacology - 2:1
      </BodyText>
      <BodyText>
        <strong>Bournemouth University (2009-2011)</strong>
        <br />
        FdSc (Hons) Forensic Science with Forensic Archaeology - Distinction
      </BodyText>

      <SubTitle>Technical Skills</SubTitle>
      <List>
        <ListItem>Scientific writing and presenting</ListItem>{" "}
        <ListItem>
          Immunocytochemistry (ICC) and Immunofluorescence (IF)
        </ListItem>
        <ListItem>Cellular and molecular biology</ListItem>{" "}
        <ListItem>3D culture cell encapsulation</ListItem>
        <ListItem>Cell culture (immortalised & stem cell)</ListItem>{" "}
        <ListItem>Small scale and large scale grows</ListItem>
        <ListItem>Rheology</ListItem>{" "}
        <ListItem>
          Induced pluripotent stem cells (iPSCs) differentiation
        </ListItem>
        <ListItem>QuaListItemty assurance understanding</ListItem>{" "}
        <ListItem>Neuropharmacology</ListItem>
      </List>
      <SubTitle>Research Experience</SubTitle>
      <BodyText>
        <strong>CDT in Regenerative Medicine PhD Project (2016-2020)</strong>
        <br />
        <strong>
          Developing 3D-cell models of the neurovascular unit (NVU) to
          investigate mechanisms of neurovascular dysfunction in dementia.
        </strong>
        <br />
        Tissue engineering NVU models through utilising 3D biomaterials,
        bioprinting & patient derived stem cell lines. Using 3D-cell models to
        decipher cellular, molecular & functional changes in Alzheimer’s disease
        & other dementias.
      </BodyText>
      <BodyText>
        <strong>VWR/AZ – Global Cell Bank Research Technician</strong>
        <br />
        Research technician in the AstraZeneca (AZ) Global Cell Bank (GCB) team.
        Working closely with a range of customers, supporting all cell based
        assays across the drug discovery and development pipeline.
      </BodyText>
      <BodyText>
        <strong>MRes Translational Medicine Project</strong>
        <br />
        <strong>
          Research project and literature review: L-β-N-methylamino-alanine
          (BMAA) induced cellular toxicity.
        </strong>
        <br />
        Investigating a novel mechanism of pathology: metabolic activation of
        BMAA results in a DNA damaging intermediate that is toxic to neuron-like
        cells. Cellular & blood brain barrier transporters of BMAA & metabolites
        were also investigated. Research with impact for neurodegeneration &
        cancer research.
      </BodyText>
      <BodyText>
        <strong>BSc (Hons) Pharmacology Dissertation Projects</strong>
        <br />
        <strong>Literature review:</strong> Amyloid vs Tau: Which represents the
        best target for treatment or prevention of Alzheimer’s Disease?
        <br />
        <strong>Laboratory research project:</strong> - Use of a novel in vitro
        reporter assay to assess the activation of Nrf2 by chemotherapeutic
        agents.
      </BodyText>
      <BodyText>
        <strong>
          The University of Bath, Department of Pharmacy and Pharmacology{" "}
        </strong>
        <br />
        Research into the pharmacology of opioid receptors and anxiolytics.
        Additional research experience was gained from assisting in the animal
        house.
      </BodyText>

      <SubTitle>Science Writing Experience</SubTitle>
      <BodyText>
        <strong>
          Institute of Physics (IOP) Publishing:{" "}
          <Link href="https://physicsworld.com/author/geoffrey-potjewyd/">
            PhysicsWorld.com
          </Link>{" "}
          Science Writer (2017- Present)
        </strong>
        <br />
        <Link href="https://physicsworld.com/author/geoffrey-potjewyd/">
          Author Profile
        </Link>
        <br />
        Writing & reviewing science articles for the medical physics section of
        PhysicsWorld.com on published medical physics & bioengineering research.
        Position included a science journalism training day at IOP Publishing
        headquarters, as well as continued support.
      </BodyText>
      <BodyText>
        <strong>Freelance Science Writer (2017- Present)</strong>
        <br />
        Writing science articles aimed at both lay and scientific audiences
        across neuroscience, biotechnology & regenerative medicine related
        areas.
        <br />
        Selected publications:
      </BodyText>
      <List>
        <ListItem>
          Altered gut bacteria linked to Alzheimer’s disease -{" "}
          <Link href="https://reliawire.com/gut-bacteria-alzheimers/">
            ReliaWire.com
          </Link>
        </ListItem>
        <ListItem>
          Group develops a novel inkjet 3D bioprinting method -{" "}
          <Link href="https://www.3dmednet.com/users/14012-3dmednet/posts/29176-group-develops-a-novel-inkjet-3d-bioprinting-method">
            3DMedNet.com
          </Link>
        </ListItem>
        <ListItem>
          Tofu in a fibroblast marinade -{" "}
          <Link href="https://www.regmednet.com/users/3641-regmednet/posts/32046-tofu-in-a-fibroblast-marinade">
            RegMedNet.com
          </Link>
        </ListItem>
      </List>
      <BodyText>
        <i>Further writing samples available upon request</i>
      </BodyText>

      <SubTitle>Science Communication</SubTitle>
      <BodyText>
        <strong>
          Graduate Teaching Assistant – University of Manchester (2016- Present)
        </strong>
        <br />
        Teaching both life sciences & mechanical engineering students.
      </BodyText>
      <BodyText>
        <strong>
          Manchester Museum Body Experience Dementia Scientist (2017)
        </strong>
        <br />
        Teaching families about Alzheimer’s disease & dementia; Lego neurons
      </BodyText>
      <BodyText>
        <strong>Manchester Museum Stem Cell Scientist (2017) </strong>
        <br />
        Teaching college students about stem cells & their applications in
        research.
      </BodyText>
      <BodyText>
        <strong>Aim Higher Student Mentor (2010-2011)</strong>
        <br />
        Mentoring students studying for their GCSEs
      </BodyText>

      <SubTitle>Relevant Experience</SubTitle>
      <BodyText>
        <strong>PhD Pigeon: Scientific Consultant (2017-2019)</strong>
        <br />
        Providing desk research for clients of PhD Pigeon; working to find
        solutions for the scientific problems facing pharmaceutical companies.
      </BodyText>
      <BodyText>
        <strong>
          Clinical Research Facility Placement – NIHR Clinical Research Network
          (2018)
        </strong>
        <br />
        Shadowing senior clinical trial physicians & coordinators administrating
        drug trials & assessing patient outcomes for a variety of conditions.
      </BodyText>
      <BodyText>
        <strong>
          Innovation & Commercialisation of Research Course - University of
          Manchester (2018)
        </strong>
      </BodyText>
      <BodyText>
        <strong>
          Bioreactor & Grown Environments for Tissue Engineering Course – Keele
          University (2017)
        </strong>
      </BodyText>

      <SubTitle>Awards and Funding</SubTitle>
      <BodyText>
        EPSRC-MRC Centre for Doctoral Training Studentship (2016-2020)
        <br />
        PrimerDesign Gold Level Student Scholarship (2018-2020)
      </BodyText>

      <SubTitle>Selected Conference and Symposium Presentations</SubTitle>
      <BodyText>
        <strong>
          Manchester Regenerative Medicine Network (MaRMN) Syposium
        </strong>{" "}
        – Poster, February 2018/19
      </BodyText>
      <BodyText>
        <strong>Alzheimer’s Research UK (ARUK) Conference</strong> – Poster,
        March 2018
      </BodyText>
      <BodyText>
        <strong>ARUK North-West Early Career Symposium</strong> – Oral
        Presentation, March 2018
      </BodyText>
      <BodyText>
        <strong>
          Royal Society of Chemistry (RSC) Biomaterials Conference
        </strong>{" "}
        – Presentation and poster, January 2018
      </BodyText>
      <BodyText>
        <strong>
          Centre for Doctoral Training (CDT) in Regenerative Medicine Conference
        </strong>{" "}
        – Poster, 2017/18
      </BodyText>

      <SubTitle>Academic Publications</SubTitle>
      <BodyText>
        Rajkovic O, <strong>Potjewyd G</strong>, Pinteaux E. Regenerative
        medicine therapies for targeting neuroinflammation after stroke. Front
        Neurol (2018) 9:734. doi:10.3389/FNEUR.2018.00734
        <br />
        <br />
        <strong>Potjewyd G</strong>, Moxon S, Wang T, Domingos M, Hooper NM.
        Tissue Engineering 3D Neurovascular Units: A Biomaterials and
        Bioprinting Perspective. Trends Biotechnol (2018) 36:457–472.
        doi:10.1016/j.tibtech.2018.01.003
        <br />
        <br />
        <strong>Potjewyd G</strong>, Day PJ, Shangula S, Margison GP, Povey AC.
        L-β-N-methylamino-L-alanine (BMAA) nitrosation generates a cytotoxic DNA
        damaging alkylating agent: An unexplored mechanism for neurodegenerative
        disease. Neurotoxicology (2017) 59:105–109.
        doi:10.1016/j.neuro.2017.01.007
      </BodyText>
    </CVWrapper>
  );
};

export default CV;
