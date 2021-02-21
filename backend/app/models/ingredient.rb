class Ingredient < ApplicationRecord
    belongs_to :burger

    validates :name, presence: true
end
