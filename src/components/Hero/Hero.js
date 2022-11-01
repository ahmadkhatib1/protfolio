import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, LinksResume } from './HeroStyles';
const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am Ahmad Khatib an IT engineer specializing in front end development. I have a lot of passion and love for the work I do and I enjoy everything I do
      </SectionText>
      <LinksResume href="https://drive.google.com/uc?export=download&id=1_FgACc5Od5WxSSfO9i5bJayD2KeYJ_dR" >
        <Button>Download Cv</Button>
      </LinksResume>
    </LeftSection>
  </Section>
);

export default Hero;