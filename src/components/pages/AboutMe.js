import React from 'react';
import NavTabs from '../NavTabs';

const styles = {
    format: {
        margin: '0px',
        padding: '20px',
        backgroundColor: 'lightgray',
    },
    about: {
        fontSize: "22px",
        padding: "20px",
        margin: '0px',
        display: 'flex',
        justifyContent: 'center',
    },
    div: {
        backgroundColor: 'lightgray',
        margin: '0px',
        padding: '0px',
    }
}

export default function AboutMe() {
    return (
        <div style={styles.div}>
            <header>
                <h1 style={styles.format}>About Me</h1>
                {NavTabs({})}
            </header>
            <h3 style={styles.about}>
                I love to make people laugh and play games. I am a pretty fast learner and can pick up on things pretty
                quickly. <br /> <br /> I am married, with an Associate's degree from Edmonds Community College. I've been in the U.S. Air Force, receiving an honorable discharge after four years. <br /> <br /> The things I find most interesting include fantasy and science-fiction genre books and video games, rock genre music, and activities for small social groups.
            </h3>
        </div>
    );
}
