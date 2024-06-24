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
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineBook } from "react-icons/ai";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

/**
* Application CategorySection Component.
* 
*/
const CategorySection = ({
    categories
}) => {

    const slidesPerView = window.innerWidth <= 768 ? 2 : 7;

    return (
        <section className="categories">
            <div className="categories__container">
                <h2 className="categories__title"><AiOutlineBook />Categorias</h2>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={slidesPerView}
                    navigation
                    pagination={{ clickable: true }}
                >
                    {categories.map((category) => (
                        <SwiperSlide key={category.id}>
                            <div className="categories__card">
                                {category.image}
                                <p className="categories__name">{category.name}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}

export default CategorySection;
