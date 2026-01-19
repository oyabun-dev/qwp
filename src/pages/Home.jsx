import React from 'react';
import InstHero from '../components/institutional/InstHero';
import InstQuote from '../components/institutional/InstQuote';
import InstManifesto from '../components/institutional/InstManifesto';
import InstDiscipline from '../components/institutional/InstDiscipline';
import InstImpact from '../components/institutional/InstImpact';
import InstOffers from '../components/institutional/InstOffers';
import InstPartners from '../components/institutional/InstPartners';
import InstContact from '../components/institutional/InstContact';

const Home = () => {
    return (
        <main>
            <InstHero />
            <InstQuote />
            <InstManifesto />
            <InstDiscipline />
            <InstImpact />
            <InstOffers />
            <InstPartners />
            <InstContact />
        </main>
    );
};

export default Home;
