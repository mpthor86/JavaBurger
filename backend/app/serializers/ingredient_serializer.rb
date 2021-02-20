class IngredientSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :id, :burger_id
end
