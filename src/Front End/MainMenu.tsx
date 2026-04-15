//Main menu of the website, contains a popup menu that:
//  - Welcomes the user
//  - Allows the user to select a language
//  - Allows the user to select a theme (light/dark)
//  - Explains how to use the website
//  - Displays references, credits, libraries used, etc.

import React, { useState } from 'react';
import "./MainMenu.css";

const MainMenu: React.FC = () => {

    const [ isOpen, setIsOpen ] = useState ( true ); // State to track whether the menu is open or closed

    const closeMenu = () => { // Close the menu when the user clicks the close button
        setIsOpen ( false );
    };

    return (
        <div className = "main-menu"> // Main container for the menu and content

            <div className = { `menu-content ${ isOpen ? "blurred" : "" }` }> // Content that will be blurred when the menu is open

                <h1>Main Website Content</h1> //placeholder content

                <p>What is in the website after exiting the menu</p>

            </div>

            //Code for the popup startup menu
            { isOpen && ( // Render the menu only if it is open

                <div className = "overlay"> // Container for the popup menu

                    <div className = "popup-menu"> // The popup menu itself

                        <button className = "close-button" onClick = { closeMenu }>X</button> // Button to close the menu

                        <h2>Welcome!</h2>
                        <p>Kerbal Flight Computer</p>
                        <p>Version 1.0.0</p>

                        <div className = "dropdownSelections"> // Container for the dropdown selections

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

                        <div className = "links"> // Container for the links to the documentation, credits, etc.

                            <button className = "link-button">How To Use</button>
                            <button className = "link-button">How It Works</button>

                        </div>

                        <div className = "references"> // Container for the references, credits, etc.

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