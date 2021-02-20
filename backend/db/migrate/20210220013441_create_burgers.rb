class CreateBurgers < ActiveRecord::Migration[6.1]
  def change
    create_table :burgers do |t|
      t.string :name
      t.timestamps
    end
  end
end
