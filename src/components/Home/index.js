import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-j.png'
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders'
import Logo from './Logo';
import './index.scss';



const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['o', 'r', 'g', 'e', ','];
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ',
                        'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', ' ',
                        'a', 'n', 'd', ' ', 'B', 'i', 'o', 'c', 'h', 'e', 'm', 'i', 's', 't', '.'];


    useEffect(() => {
        return () => { setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000) }
    }, [])
                        

    return (


        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt='developer'/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                /> 
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}
                /> 
                </h1>
                <h2>Algorithms Expert</h2>
                <Link to="/contact" className="flat-button">CONTACT ME</Link>
            </div>
            
        </div>
        <Loader type="pacman"/>
        </>
    );
    

}

export default Home

