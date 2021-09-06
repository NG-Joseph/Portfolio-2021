import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          I'm Joseph, <br />
          I create cool stuff with code <img src="https://img.icons8.com/emoji/48/000000/magic-wand.png"/>
        </SectionTitle>
        <SectionText>
        Software developer with a passion for building tools and experiences that help and inspire people.
        </SectionText>
        <Button onClick={props.handleClick}>Download CV</Button>
      </LeftSection>
   
    </Section>
    
  </>
  
);

export default Hero;