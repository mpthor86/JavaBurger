# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Category.create([{name: 'Breakfast'}, {name: 'Lunch'}, {name: 'Dinner'}])

Meal.create([{name: 'Sampler Plate',
                description: 'One of Everything',
                ingredients: 'Eggs, Bacon, Sausage, Hashbrowns, Biscuit',
                price: 5.99,
                category_id: 1},
             {name: 'Java Buger',
                description: 'Best burger in the DOM',
                ingredients: 'Beef Patty, Cheese, Lettuce, Tamato, Pickle',
                price: 8.99,
                category_id: 2},
             {name: 'Chicken Fried Steak',
                description: 'Hand battered fried goodness',
                ingredients: 'Steak Patty, Mash Patatoes, Corn Cob',
                price: 12.99,
                category_id: 3}])