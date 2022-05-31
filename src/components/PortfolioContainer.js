import React, { useState } from 'react';
import NavTabs from './NavTabs';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Resume from './pages/Resume';
import Mywork from './pages/Mywork';
import Home from './pages/Home';

export default function SiteContainer() {
    const [currentPage, setCurrentPage] = useState('Home');
    
    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'ContactMe') {
            return <ContactMe />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'Mywork') {
            return <Mywork />;
        }
        return <Home />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}
