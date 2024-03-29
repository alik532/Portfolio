import valoImg from '../images/valorant.png'
import ecomImg from '../images/react-ecom.png'
import spotifyImg from '../images/spotify.png'
import reactLogo from '../components/UI/reactLogo.svg'
import reduxLogo from '../components/UI/reduxLogo.svg'
import apiLogo from '../components/UI/apiLogo.svg'
import firebaseLogo from '../components/UI/firebaseLogo.svg'
import openseaImg from '../images/opensea.png'
import travel from '../images/travel.png'
import vReality from '../images/vReality.png'

export const projectsData = [
    {title: "React E-Commerce app", stack: [{name: 'react', logo: reactLogo}, {name: 'redux', logo: reduxLogo}], description: "React Redux E-commerce project with ready-made functionality for adding a product and a shopping cart", 
    githubLink: "https://github.com/alik532/react-ecommerce-redux", appLink: "https://neon-boba-5b0789.netlify.app/", img: ecomImg},
    {title: "Valorant App", stack: [{name: 'react', logo: reactLogo}], description: "Valorant Game App with react", 
    githubLink: "https://github.com/alik532/Valorant", appLink: "", img: valoImg},
    {title: "Spotify App", stack: [{name: 'react', logo: reactLogo}, {name: 'redux', logo: reduxLogo}, {name: 'rest API', logo: apiLogo}], description: "The spotify clone App using React, Redux-Toolkit, axios requests from spotify API and React best practices.", 
    githubLink: "https://github.com/alik532/SpotifyClone", appLink: "https://celebrated-brioche-b46c55.netlify.app/", img: spotifyImg},
    {title: "NFT-Market", stack: [{name: 'react', logo: reactLogo}, {name: 'redux', logo: reduxLogo}, {name: 'rest API', logo: apiLogo}, {name: "firebase", logo: firebaseLogo}], description: "The nft marketplace app using react redux with firebase authorization, also cart, fetching data, pagination functionality, data sorting functionality.", 
    githubLink: "https://github.com/alik532/NFT-Marketplace", appLink: "https://effortless-heliotrope-6a592a.netlify.app/", img: openseaImg},
    {title: "Travel App", stack: [{name: 'react', logo: reactLogo}], description: "The travel app using ReactJS and responsive layout.", 
    githubLink: "https://github.com/alik532/travel_react_app", appLink: "https://marvelous-druid-faab2f.netlify.app/", img: travel},
    {title: "VR App", stack: [{name: 'react', logo: reactLogo}], description: "The Virtual Reality app using ReactJS and responsive layout and optimized for mobile devices.", 
    githubLink: "https://github.com/alik532/v-reality-react-app", appLink: "https://sensational-mandazi-84e8e5.netlify.app", img: vReality},
]