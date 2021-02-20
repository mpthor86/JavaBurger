class CreateIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :ingredients do |t|
      t.integer :burger_id
      t.string :name
      t.timestamps
    end
  end
end
