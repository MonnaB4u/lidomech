import {v4 as uuidv4} from 'uuid';
import bg1 from '../../assets/img/services/1.jpg';
import bg2 from '../../assets/img/services/2.jpg';
import bg3 from '../../assets/img/services/3.jpg';
import bg4 from '../../assets/img/services/4.jpg';
import bg5 from '../../assets/img/services/5.jpg';

const servicesOneData = [
    {
        id: uuidv4(),
        bg: bg1,
        icon: 'blueprint',
        title: 'Electrical Engineering Services',
        desc: 'Electrical engineering services design, install, and maintain electrical systems—power distribution, lighting, wiring, and controls—for residential, commercial, and industrial sectors, ensuring safe and efficient operations.',
    },

    {
        id: uuidv4(),
        bg: bg2,
        icon: 'interior-design',
        title: 'Fire Protection Services',
        desc: 'Fire Protection Services provide comprehensive solutions including fire detection, suppression, and prevention measures to safeguard lives and property from fire hazards.',
    },

    {
        id: uuidv4(),
        bg: bg3,
        icon: 'home',
        title: 'ACMV Services Mechanical',
        desc: 'ACMV Services (Air-Conditioning, Mechanical Ventilation) provide expertise in designing, installing, and maintaining mechanical systems for optimal indoor comfort and ventilation.',
    },

    {
        id: uuidv4(),
        bg: bg4,
        icon: 'varnish',
        title: 'Plumbling Services',
        desc: 'Plumbing Services encompass installation, repair, and maintenance of water supply, drainage, and sewage systems, ensuring efficient and reliable plumbing infrastructure.        ',
    },

    {
        id: uuidv4(),
        bg: bg5,
        icon: 'home',
        title: 'Mechanical Engineering',
        desc: 'Mechanical Engineering involves designing, analyzing, and optimizing mechanical systems, machines, and devices to address various industrial and technological challenges.        ',
    },
    
]

export default servicesOneData;