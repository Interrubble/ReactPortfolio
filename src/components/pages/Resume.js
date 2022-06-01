import React from 'react';
import NavTabs from '../NavTabs';

const styles = {
    format: {
        margin: '0px',
        padding: '20px 0px',
        backgroundColor: 'lightgray',
        width: '100vw', 
    }
}

export default function Resume() {
    return (
        <div style={styles.format}>
            <header>
                <h1>Resume Page</h1>
                {NavTabs({})}
            </header>
            <section>
                <card><span style={{ fontWeight: 'bolder', fontStyle: 'italic', fontSize: '18px' }}>SOFTWARE TRAINING</span>
                    <section>
                        <span style={{ fontWeight: 'bold' }}>Full Stack Flex Software Training, 2022</span>
                        <ul style={{ fontStyle: 'italic' }}>University of Washington, Seattle, WA
                            <li style={{ fontStyle: 'normal' }}>
                                Engaged with HTML, CSS, JavaScript, web/third-party/server APIs, npm packages, including NodeJS, OOP, Express, Sequelize; ORM, MVC, CS, MongoDB/NoSQL, and React.
                            </li>
                            <li style={{ fontStyle: 'normal' }}>
                                Attended course for 12 weeks, with numerous repositories utilizing GitHub.
                            </li>
                            <li style={{ fontStyle: 'normal' }}>
                                Utilized technologies including GitBash, GitLab, Bootstrap, jQuery, and materialize.
                            </li>
                        </ul>
                    </section>
                </card>
                <card><span style={{ fontWeight: 'bolder', fontStyle: 'italic', fontSize: '18px' }}>MILITARY EXPERIENCE</span>
                    <section>
                        <span style={{ fontWeight: 'bold' }}>Security Forces Journeyman, 2008-2012</span>
                        <ul style={{ fontStyle: 'italic' }}>United States Air Force, Various Locations
                            <li style={{ fontStyle: 'normal' }}>
                                Maintained integrity and security of squad, patrolled areas, and information as needed.
                            </li>
                            <li style={{ fontStyle: 'normal' }}>
                                Maintained proper firearm safety and procedures, up-to-date training and tactics, and operational security.
                            </li>
                        </ul>
                    </section>
                </card>
                <card><span style={{ fontWeight: 'bolder', fontStyle: 'italic', fontSize: '18px' }}>WORK EXPERIENCE</span>
                    <section>
                        <span style={{ fontWeight: 'bold' }}>Target Corporation 2019-present</span>
                        <ul style={{ fontStyle: 'italic' }}>Target, Everett, WA - Lake Stevens, WA
                            <li style={{ fontStyle: 'normal' }}>
                                Maintained positive guest experiences and work environment.
                            </li>
                            <li style={{ fontStyle: 'normal' }}>
                                Performed expedited collections and stowing of orders made by guests over the online service.
                            </li>
                            <li style={{ fontStyle: 'normal' }}>
                                Assisted the distribution of orders placed online through the fulfillment process.
                            </li>
                            <li style={{ fontStyle: 'normal' }}>
                                Performed various duties with and without team member assistance, and assisted team members with various duties.
                            </li>
                        </ul>
                    </section>
                </card>
                <card><span style={{ fontWeight: 'bolder', fontStyle: 'italic', fontSize: '18px' }}>EDUCATION</span>
                    <section>
                        <section>
                            <ul>
                                <span style={{ fontWeight: 'bold' }}>California High School, California, MO</span>
                                <li style={{ listStyleType: 'none' }}>
                                    <span style={{ fontStyle: 'italic' }}>High School Diploma
                                    </span>
                                </li>
                            </ul>
                            <ul>
                                <span style={{ fontWeight: 'bold' }}>Edmonds Community College, Edmonds, WA</span>
                                <li style={{ listStyleType: 'none' }}>
                                    <span style={{ fontStyle: 'italic' }}>Associates of Arts
                                    </span>
                                </li>
                            </ul>
                            <ul>
                                <span style={{ fontWeight: 'bold' }}>University of Washington, Seattle, WA</span>
                                <li style={{ listStyleType: 'none' }}>
                                    <span style={{ fontStyle: 'italic' }}>Full Stack Flex Software Development Certification
                                    </span>
                                </li>
                            </ul>
                        </section>
                    </section>
                </card>
            </section>
        </div>
    );
}
