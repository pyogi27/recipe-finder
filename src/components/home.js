// Assuming you have a separate SearchBar component
import React from 'react';
import SearchBar from './common/searchbar';

function Home({ onSearch }) {
    const handleSearch = (searchTerm) => {
        console.log("Search Term:", searchTerm);
        // You can add more logic here to actually perform the search
    };
    return (
        <div className="container mx-auto px-4 py-2">
            <div className="text-center mt-4 mb-8">
                <h1 className="text-4xl font-bold">Find Your Favorite Recipes</h1>
                <p>Explore new tastes and organize your meals easily.</p>
                <SearchBar onSearch={handleSearch} />
            </div>
            <div className="container mx-auto px-4 py-2">
                <div className="welcome-message text-center py-4">
                    <h1 className="text-4xl font-bold">Welcome to Recipe Finder!</h1>
                    <p>Discover recipes, plan your meals, or just explore new tastes.</p>
                </div>
                <div className="featured-recipes">
                    <h2 className="text-3xl font-semibold my-2">Featured Recipes</h2>
                    {/* <RecipeList /> */}
                </div>
                <div className="recipe-categories flex justify-around my-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Desserts
                    </button>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Quick Meals
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Low Carb
                    </button>
                </div>
                <div className="user-testimonials py-4">
                    <p>"I found all the best recipes for my family's dinner here!" - Jane Doe</p>
                </div>
                <div className="cta text-center py-4">
                    <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
                        Start Cooking Today
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
