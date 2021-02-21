class IngredientsController < ApplicationController
    def index
        ingredients = Ingredient.all
        render json: IngredientSerializer.new(ingredients)
    end

    def update
        ing = Ingredient.find(params[:id])
        if ing.update(ing_params)
            render json: IngredientSerializer.new(ing)
        else
            render json: {error: 'could not save'}
        end
    end

    private

    def ing_params
        params.require(:ingredient).permit(:id, :name)
    end
end
