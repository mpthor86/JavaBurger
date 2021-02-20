# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Burger.create([{name: 'Plain Burger'}, {name: 'Cheese Burger'}])

Ingredient.create([{name: 'Beef Patty', burger_id: 1},
             {name: 'Mustard', burger_id: 1},
             {name: 'Pickle', burger_id: 1},
            {name: 'Beef Patty', burger_id: 2},
            {name: 'Cheese Slice', burger_id: 2},
            {name: 'Lettuce', burger_id: 2},
            {name: 'Tamatoe', burger_id: 2},
            {name: 'Ketchup', burger_id: 2},
            {name: 'Pickle', burger_id: 2}])