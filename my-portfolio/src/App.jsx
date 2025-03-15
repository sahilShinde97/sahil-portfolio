
import AboutMeMain from './component/aboutMeSection/AboutMeMain'
import ExperienceMain from './component/experienceSection/ExperienceMain'
import HeroMai from './component/heroSection/HeroMai'
import SuHero from './component/heroSection/SuHero'
import ProjectMain from './component/projectSection/ProjectMain'
import SkillsMain from './component/skillsSection/SkillsMain'
import SubSkills from './component/skillsSection/SubSkills'
import NavbarMain from './NavbarMain'



function App() {
  return (
  <main className='font-body'> 
     <NavbarMain/>
     <HeroMai/>
     <SuHero/>
     <AboutMeMain/>  
     <SkillsMain/>
     <SubSkills/>
     <ExperienceMain/>
     <ProjectMain/>
  </main>
  )
}

export default App
