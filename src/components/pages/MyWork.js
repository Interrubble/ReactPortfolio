import React from 'react';
import NavTabs from '../NavTabs';
import projectOne from '../../assets/Project1.png';
import projectTwo from '../../assets/Project2.png';
import noteTaker from '../../assets/NoteTaker.png';
import workDay from '../../assets/WorkdayPlanner.png';

const styles = {
    format: {
        margin: '0px',
        padding: '20px',
        backgroundColor: 'lightgray',
    },
    imgSize: {
        maxWidth: '100%',
        padding: '25px 0px'
    }
}

export default function MyWork() {
    return (
        <div>
            <nav>
                <h1 style={styles.format}>My Work</h1>
                {NavTabs({})}
            </nav>
            <ul style={styles.format}>
                <img style={styles.imgSize} src={projectOne} alt="collab one" />
                <a href="https://hseymo.github.io/Activity-Generator" rel="noreferrer" target="_blank">
                <span style={{fontWeight: 'bold', fontSize: '20px', margin: '10px'}}>A collaboration project to determine an activity for when you're bored!</span>
                </a>
                <img style={styles.imgSize} src={projectTwo} alt="collab two" />
                <a href="https://roogle-2022.herokuapp.com/" rel="noreferrer" target="_blank">
                <span style={{fontWeight: 'bold', fontSize: '20px'}}>A collaboration project to find local food locations for consideration when deciding to eat out!</span>
                </a>
                <img style={styles.imgSize} src={noteTaker} alt="note taker" />
                <a href="https://roogle-2022.herokuapp.com/" rel="noreferrer" target="_blank">
                <span style={{fontWeight: 'bold', fontSize: '20px'}}>A simple app to keep track of notes, with add/delete functionality, and utilizing local storage!</span>
                </a>
                <img style={styles.imgSize} src={workDay} alt="workday planner" />
                <a href="https://roogle-2022.herokuapp.com/" rel="noreferrer" target="_blank">
                <span style={{fontWeight: 'bold', fontSize: '20px'}}>A simple app to keep track of daily tasks, using time detection and local storage!</span>
                </a>
            </ul>
        </div>
    );
}
