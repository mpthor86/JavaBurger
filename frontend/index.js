const burgerList = document.getElementById('burger-list')
const burgerDetail = document.getElementById('burger-deets')
const mealDetail = document.getElementById('meal-list')
const main = document.getElementById('menu')
const mealForm = document.getElementById('meal-form')
const orderList = document.getElementById('orders')


BurgerApi.fetchBurgers()
Ingredient.fetchIngredients()