import React from 'react';
import NavTabs from '../NavTabs';
import projectThree from '../../assets/Project3.png';
import projectTwo from '../../assets/Project2.png';
import noteTaker from '../../assets/NoteTaker.png';
import workDay from '../../assets/WorkdayPlanner.png';

const styles = {
    format: {
        margin: '0px',
        padding: '10px',
        backgroundColor: 'transparent',
    },
    imgSize: {
        maxWidth: '90vmax',
        padding: '25px 0px',
        display: 'fluid',
    }
}

export default function MyWork() {
    return (
        <div>
            <header>
                <h1 style={styles.format}>My Work</h1>
                {NavTabs({})}
            </header>
            <ul style={styles.format}>
                <img style={styles.imgSize} src={projectThree} alt="collab three" />
                <a href="https://selfcarecentral.herokuapp.com" rel="noreferrer" target="_blank" tooltip="click me">
                <span style={{fontWeight: 'bold', fontSize: '20px', display: 'flex'}}>Click me to see a collaboration project for self-driven self-care!</span>
                </a>
                <img style={styles.imgSize} src={projectTwo} alt="collab two" />
                <a href="https://roogle-2022.herokuapp.com/" rel="noreferrer" target="_blank">
                <span style={{fontWeight: 'bold', fontSize: '20px', display: 'flex'}}>Click me to see a collaboration project to find local food locations for consideration when deciding to eat out!</span>
                </a>
                <img style={styles.imgSize} src={noteTaker} alt="note taker" />
                <a href="https://interrubble.github.io/NoteTaker/" rel="noreferrer" target="_blank">
                <span style={{fontWeight: 'bold', fontSize: '20px', display: 'flex'}}>Click me to see a simple app to keep track of notes, with add/delete functionality, and utilizing local storage!</span>
                </a>
                <img style={styles.imgSize} src={workDay} alt="workday planner" />
                <a href="https://interrubble.github.io/WorkdayPlanner/" rel="noreferrer" target="_blank">
                <span style={{fontWeight: 'bold', fontSize: '20px', display: 'flex'}}>Click me to see a simple app to keep track of daily tasks, using time detection and local storage!</span>
                </a>
            </ul>
        </div>
    );
}
