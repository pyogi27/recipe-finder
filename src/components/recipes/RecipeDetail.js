import React from "react";
function RecipeDetail({ match }) {
    const { id } = match.params;
    // Fetch recipe details from an API based on `id`
    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold">Recipe Title</h2>
            <p>Description of the recipe...</p>
            {/* Display more recipe details */}
        </div>
    );
}

export default RecipeDetail;
