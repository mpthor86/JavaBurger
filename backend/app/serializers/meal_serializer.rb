class MealSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :description, :price, :ingredients, :category_id
end
