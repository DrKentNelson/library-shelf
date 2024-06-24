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
* Application Footer Component.
* 
*/
function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__column">
                    <h3>Páginas</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sobre Nós</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>
                <div className="footer__column">
                    <h3>Páginas</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sobre Nós</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>
                <div className="footer__column">
                    <h3>Páginas</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Sobre Nós</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>
                <div className="footer__column">
                    <h3>Newsletter</h3>
                    <div className="footer__newsletter">
                        <input type="email" placeholder="Insira seu e-mail" />
                        <button>Inscrever-se</button>
                    </div>
                    <div className="footer__social">
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__container">
                    <div className="footer__legal">
                        <a>Termos de Uso</a>
                        <a>Política de Privacidade</a>
                    </div>
                    <div className="footer__copyright">
                        <p>&copy; 2024 Biblioteca do Senado. Todos os direitos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
