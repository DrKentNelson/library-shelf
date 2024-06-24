/*
* Import Order:
* 1. External Libraries
* 2. Local Modules or Components
* 3. Styles or CSS
* 4. Resources (images, etc.)
* 5. Types (TypeScript)
* 6. Configuration or Environment Variables
*/

import React from 'react';

/**
* Application HeaderBanner Component.
* 
*/
function HeaderBanner() {
    return (
        <div className="banner">
            <div className="banner__container">
                <div className="banner__title">Senado Federal</div>
                <nav className="banner__pages">
                    <a href="#">Fale conosco</a>
                    <a href="#">Acessibilidade</a>
                </nav>
            </div>
        </div>
    );
}

export default HeaderBanner;
