import React from 'react';
import NavTabs from '../NavTabs';

const styles = {
    navStyle: {
        border: '2px solid black',
        width: 'fit-content',
        padding: '0px 10px',
    }
}

export default function MyWork() {
    return (
        <div>
            <nav style={styles.navStyle}>
                <h1>My Work Page</h1>
                {NavTabs({})}
            </nav>
            <p>
                Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
                Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
                mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
                lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
                imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
                in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
            </p>
        </div>
    );
}
