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
import { AiOutlineShoppingCart, AiOutlineUser, AiOutlineSearch } from 'react-icons/ai';

/**
* Application Header Component.
* 
* This component represents the header of the application, which includes the bookstore logo,
* navigation between pages, search bar, and cart and user icons.
*/
function Header() {
return (
    <header className="header">
        <div className="header__container">
            {/* Logo da livraria com link para a home */}
            <a href="/" className="header__logo" title="Voltar home">
                Livraria do Senado
            </a>
            {/* Navegação entre páginas */}
            <nav className="header__nav">
                <a href="#" className="header__nav-link">Home</a>
                <a href="#" className="header__nav-link">Categorias</a>
                <a href="#" className="header__nav-link">Fale conosco</a>
                <a href="#" className="header__nav-link">Como comprar</a>
                <a href="#" className="header__nav-link">Livros</a>
            </nav>
            {/* Barra de busca */}
            <div className="header__search">
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="header__search-input"
                />
                <AiOutlineSearch className="header__search-icon" />
            </div>
            {/* Ícones de carrinho e usuário */}
            <div className="header__icons">
                <AiOutlineShoppingCart className="header__icon header__icon--cart" />
                <AiOutlineUser className="header__icon header__icon--user" />
            </div>
        </div>
    </header>
    );
}

export default Header;
