import React from 'react';
import NavTabs from '../NavTabs';

const styles = {
    format: {
        margin: '0px',
        padding: '20px',
    },
    contact: {
        fontSize: "22px",
        padding: "30px",
    },
    card: {
        backgroundColor: 'lightgray',
        fontSize: '20px',
    },
    div: {
        backgroundColor: 'lightgray',
    }
}


export default function ContactMe() {
    return (
        <div style={styles.div}>
            <header>
                <h1 style={styles.format}>Contact Me</h1>
                {NavTabs({})}
            </header>
            <section style={styles.card}>
                <section>
                    Thank you for coming to my contact me page! Please feel free to use any of the listed methods to contact me!
                </section>
                <ul>
                    <li class="phone" style={styles.contact}><a href="tel: 425-750-5822">Call/Text Me: 425-750-5822</a></li>
                    <li class="email" style={styles.contact}><a href="mailto:delagarzachris@icloud.com">Email Me: delagarzachris@icloud.com</a></li>
                    <li class="github" style={styles.contact}><a href="https://github.com/Interrubble" rel="noreferrer" target="_blank">My github account</a></li>
                    <li class="linkedin" style={styles.contact}><a href="https://www.linkedin.com/in/christopher-delagarza-309550234/" rel="noreferrer" target="_blank">My linkedin profile</a></li>
                </ul>
            </section>
        </div>
    );
}
