// https://www.ui-layouts.com/components/smooth-scroll
// https://lenis.darkroom.engineering/
// https://microsoft.design/

// import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ScrollHero from '../components/ScrollHero';
import TechStackSection from '../components/TechStackSection';


const AboutPage = ({hashLinkId}) => {
  return (
    <div id={hashLinkId}>
      <ScrollHero/>
      <TechStackSection />
    </div>
  );
}

export default AboutPage;

