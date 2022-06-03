import React from 'react';
import NavTabs from '../NavTabs';

const styles = {
    format: {
        margin: '0px',
        padding: '20px 0px',
        background: 'linear-gradient(blue, red)',
    },
    header: {
        padding: '0px 0px 25px 40px',
        margin: 'center'
    }
}

export default function Home() {
    return (
        <div style={styles.format}>
            <header>
            <h1 style={styles.header}>Home Page</h1>
                {NavTabs({})}
            </header>
            <h1>
                Welcome! This is my portfolio page! My name is Christopher DeLaGarza, and my information can be found in the links above!
            </h1>
        </div>
    );
}
