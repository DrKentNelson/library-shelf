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

import CategorySection from '../../components/Section/CategorySection/CategorySection';
import DefaultSection from '../../components/Section/DefaultSection/DefaultSection';
import QuickSection from '../../components/Section/QuickSection/QuickSection';
import RecommendationSection from '../../components/Section/RecommendationSection/RecommendationSection';

import { books_section_default, books_section_categories, books_section_quick, books_group_section } from '../../../db-home';

/**
* Application Home Page.
* 
*/
function Home() {
    return (
        <>
            {/* <BannersHeadlines /> */}
            <DefaultSection section_books={books_section_default} sections_iscarousel={true} section_title={"Livros em destaque."} />
            <CategorySection categories={books_section_categories} />
            <QuickSection books={books_section_quick} />
            <RecommendationSection groups={books_group_section} />


            {/* <BookCategorySection categories={books_section_categories} />
            <BookSectionQuick books={books_section_quick} />
            <BookSectionRecommendation groups={books_group_section} />
            <BookSectionDefault section_books={books_section_default} sections_iscarousel={false} section_title={"Explore mais livros."} /> */}
        </>
    )
}

export default Home;
