import React from "react";
function RecipeList({ recipes }) {
    return (
        <div className="p-4">
            {recipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
        </div>
    );
}

function RecipeCard({ recipe }) {
    return (
        <div className="border p-4 rounded-lg mb-4">
            <h3 className="text-xl font-bold">{recipe.name}</h3>
            <p>{recipe.description}</p>
        </div>
    );
}

export default RecipeList;
