class CreateMeals < ActiveRecord::Migration[6.1]
  def change
    create_table :meals do |t|
      t.string :name
      t.string :description
      t.string :ingredients
      t.float :price
      t.integer :category_id
      t.timestamps
    end
  end
end
