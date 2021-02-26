class IngredientsController < ApplicationController
    def index
        ingredients = Ingredient.all
        render json: IngredientSerializer.new(ingredients)
    end

    def update
        new_ing = Ingredient.find(params[:id])
        if new_ing.update(ing_params)
            render json: IngredientSerializer.new(new_ing)
        else
            ing = Ingredient.find(params[:id])
            render json: {error: 'could not save', ingredient: ing}
        end
    end

    private

    def ing_params
        params.require(:ingredient).permit(:id, :name)
    end
end
