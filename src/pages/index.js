import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
 const onClick  = () => {
   window.open ('https://drive.google.com/file/d/1bv8Ms5imQbBM8X9CUL021OaPohb70ND5/view?usp=sharing','_blank') 
 }
  return (
    
    <Layout>
     
      
      <Section grid>
        <Hero handleClick={onClick}/>
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
