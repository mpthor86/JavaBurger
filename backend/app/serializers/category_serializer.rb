class CategorySerializer
  include FastJsonapi::ObjectSerializer
  has_many :meals
  attributes :name
end
