class CategoriesController < ApplicationController
    def index
        cats = Category.all
        render json: CategorySerializer.new(cats, include: [:meals])
    end
end
