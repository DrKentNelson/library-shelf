/*
* Import Order:
* 1. External Libraries
* 2. Local Modules or Components
* 3. Styles or CSS
* 4. Resources (images, etc.)
* 5. Types (TypeScript)
* 6. Configuration or Environment Variables
*/

import React from "react";

/**
* Application GeneralSection Component.
* 
*/
const GeneralSection = ({
    books
}) => {
    return (
        <section className="explore-more">
            <div className="explore-more__container">
                <h2 className="explore-more__title">Explore mais opções</h2>
                <ul className="explore-more__list">
                    {books.map((book) => (
                        <li className="explore-more__item">
                            <div className="explore-more__card">
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="explore-more__image"
                                />
                                <p className="explore-more__book-title">{book.title}</p>
                                <p className="explore-more__author">{book.author}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default GeneralSection;
