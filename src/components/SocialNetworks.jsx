import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';

import '../styles/components/socialnetworks.sass';

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/ivo-arag%C3%A3o-50a3a722b/" },
    { name: "github", icon: <FaGithub />, url: "https://github.com/Ivo-Aragao" },
    { name: "instagram", icon: <FaInstagram />, url: "https://www.instagram.com/ivo.aragao/" },
];

const SocialNetworks = () => {
    return (
    <section id="social-networks">
        {socialNetworks.map((network) =>(
            <a href={network.url} className="social-btn" id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>
    );
};

export default SocialNetworks;