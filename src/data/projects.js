import valoImg from '../images/valorant.png'
import ecomImg from '../images/react-ecom.png'
import spotifyImg from '../images/spotify.png'
import reactLogo from '../components/UI/reactLogo.svg'
import reduxLogo from '../components/UI/reduxLogo.svg'
import apiLogo from '../components/UI/apiLogo.svg'

export const projectsData = [
    {title: "React E-Commerce app", stack: [{name: 'react', logo: reactLogo}, {name: 'redux', logo: reduxLogo}], description: "React Redux E-commerce project with ready-made functionality for adding a product and a shopping cart", 
    githubLink: "https://github.com/alik532/react-ecommerce-redux", appLink: "https://neon-boba-5b0789.netlify.app/", img: ecomImg},
    {title: "Valorant App", stack: [{name: 'react', logo: reactLogo}], description: "Valorant Game App with react", 
    githubLink: "https://github.com/alik532/Valorant", appLink: "", img: valoImg},
    {title: "Spotify App", stack: [{name: 'react', logo: reactLogo}, {name: 'redux', logo: reduxLogo}, {name: 'rest API', logo: apiLogo}], description: "The spotify clone App using React, Redux-Toolkit, axios requests from spotify API and React best practices.", 
    githubLink: "https://github.com/alik532/SpotifyClone", appLink: "https://celebrated-brioche-b46c55.netlify.app/", img: spotifyImg}
]