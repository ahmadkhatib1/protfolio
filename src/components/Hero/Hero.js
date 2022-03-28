import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

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
      <Button onClick={props.handleClick}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;