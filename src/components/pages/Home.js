import React from 'react';
import NavTabs from '../NavTabs';

export default function Home() {
    return (
        <div>
            <header>
            <h1>Home Page</h1>
                {NavTabs({})}
            </header>
            <p>
                Welcome! This is my portfolio page! My name is Christopher DeLaGarza, and my information can be found in the links above!
            </p>
        </div>
    );
}
