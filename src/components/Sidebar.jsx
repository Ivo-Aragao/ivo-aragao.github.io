import SocialNetworks from './SocialNetworks';
import Avatar from '../img/eu.jpg';
import "../styles/components/sidebar.sass";
import InformationContainer from './InformationContainer';

const Sidebar = () => {
  const curriculoUrl = "https://drive.google.com/file/d/1VWzpwORUGA7SA8eRNeOOGCyXsrwtTbpc/view?usp=sharing"; // Substitua com o URL real do seu currículo

  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Ivo Aragão"/>
      <p className="title">Desenvolvedor</p>  
      <SocialNetworks />
      <InformationContainer />
      <a href={curriculoUrl} className="btn" download="Curriculo.pdf">
        Download currículo
      </a>  
    </aside>
  );
};

export default Sidebar;
