import React from 'react';
import { NavBar } from "../components/navbar";
import Hero from "../components/hero";
import { LogoCarousel } from '../components/shared';
import Features from '../components/features';
import Courses from '../components/courses';
import Categories from "../components/categories";

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