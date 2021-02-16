class MealSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :price, :ingredients
end
