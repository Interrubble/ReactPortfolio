import React from 'react';
import NavTabs from '../NavTabs';
import projectOne from '../../assets/Project1.png';
import projectTwo from '../../assets/Project2.png';

const styles = {
    format: {
        margin: '0px',
        padding: '0px',
        backgroundColor: 'lightgray'
    },
    imgSize: {
        maxWidth: '100%',
    }
}

export default function MyWork() {
    return (
        <div>
            <nav style={styles.format}>
                <h1 style={styles.format}>My Work Page</h1>
                {NavTabs({})}
            </nav>
            <ul style={styles.format}>
                <img style={styles.imgSize} src={projectOne} alt="collab one" />
                <a href="https://hseymo.github.io/Activity-Generator" rel="noreferrer" target="_blank">
                <span style={{fontWeight: 'bold', fontSize: '20px'}}>A collaboration project to determine an activity for when you're bored!</span>
                </a>
                <img style={styles.imgSize} src={projectTwo} alt="collab two" />
            </ul>
        </div>
    );
}
