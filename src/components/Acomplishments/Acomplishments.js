import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { BlogCard, BlogCardAnimated, BlogImg, HeaderThree, Hr, Img, TitleContent } from '../Projects/ProjectsStyles';
import { BlogBoxes, Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
import { animated, useSpring } from "@react-spring/web";
import { useGesture } from '@use-gesture/react';



const data = [
  { image: '/images/coming-soon.png', text: 'Blog Post #'},
  { image: '/images/coming-soon.png', text: 'Blog Post #', },
  { image: '/images/coming-soon.png', text: 'Blog Post #', },
  { image: '/images/coming-soon.png', text: 'Blog Post #', }
];



const Acomplishments = () => (

  
  <Section>
    <SectionTitle>Blog Posts</SectionTitle>
    <BlogBoxes>
      {data.map((data, index) => (
       <BlogCardAnimated  key={index}>
       <BlogImg src={data.image} />
         <TitleContent>
           <HeaderThree title>{data.text + (index + 1).toString()}</HeaderThree>
           <Hr />
         </TitleContent>
        
        
        
       </BlogCardAnimated>
      ))}
    </BlogBoxes>
    <SectionDivider/>
  </Section>)

export default Acomplishments;
