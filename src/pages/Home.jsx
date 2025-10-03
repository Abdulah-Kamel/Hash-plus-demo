import React from 'react';
import {NavBar} from "../components/NavBar.jsx";
import Hero from "../components/Hero.jsx";
import LogoCarousel from '../components/LogoCarousel.jsx';
import Features from '../components/Features.jsx';
import Courses from '../components/Courses.jsx';
import Categories from "../components/Categories.jsx";

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Hero/>
            <LogoCarousel />
            <Features />
            <Courses />
            <Categories/>
        </div>
    );
};

export default Home;