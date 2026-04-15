
import React, { useState } from 'react';
import "./MainMenu.css";

const MainMenu: React.FC = () => {

    const [ isOpen, setIsOpen ] = useState ( true );

    const closeMenu = () => {
        setIsOpen ( false );
    };

    return (
        <div className = "main-menu">

            <div className = { `menu-content ${ isOpen ? "blurred" : "" }` }> // Content that will be blurred when the menu is open

                <h1>Main Website Content</h1>

                <p>What is in the website after exiting the menu</p>

            </div>

            { isOpen && ( 

                <div className = "overlay"> 

                    <div className = "popup-menu">

                        <button className = "close-button" onClick = { closeMenu }>X</button>

                        <h2>Welcome!</h2>
                        <p>Kerbal Flight Computer</p>
                        <p>Version 1.0.0</p>

                        <div className = "dropdownSelections">

                            <div>

                                <label>Select Language</label>
                                <select>

                                    <option value = "">Choose...</option>
                                    <option>English</option>
                                    <option>Spanish</option>
                                    <option>French</option>
                                    <option>German</option>

                                </select>

                            </div>

                            <div>

                                <label>Select Theme</label>
                                <select>

                                    <option value = "">Choose...</option>
                                    <option>Light</option>
                                    <option>Dark</option>
                                </select>

                            </div>
                        
                        </div>

                        <div className = "links"> 

                            <button className = "link-button">How To Use</button>
                            <button className = "link-button">How It Works</button>

                        </div>

                        <div className = "references"> 

                            <p><strong>Special Thanks To:</strong></p>

                            <ul>

                                <li>Person 1 for x</li>
                                <li>Person 2 for y</li>

                            </ul>

                        </div>

                        <button className = "start-button" onClick = { closeMenu }> //Button to exit popup menu
                            Get Started!
                        </button>

                    </div>

                </div>

            )}

        </div>
    );
};

export default MainMenu;