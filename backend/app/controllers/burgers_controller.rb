class BurgersController < ApplicationController
    def index
        burgers = Burger.all
        render json: BurgerSerializer.new(burgers)
    end
end
