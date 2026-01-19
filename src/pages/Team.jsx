import React, { useEffect } from 'react';
import InstTeam from '../components/institutional/InstTeam';
import InstContact from '../components/institutional/InstContact';

const Team = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="pt-24 bg-white min-h-screen">
            <InstTeam />
            <InstContact />
        </main>
    );
};

export default Team;
