class Meal {
    static all = []
    static order = []

    constructor({id, name, description, price, ingredients, category_id}) {
        this.id = id
        this.name = name
        this.description = description
        this.ingredients = ingredients
        this.price = price
        this.categoryId = category_id
        this.tag = document.createElement('li')
        this.tag.addEventListener('click', this.handleClick)
        Meal.all.push(this)
    }

    static fetchMeals(){
        fetch('http://[::1]:3000/meals')
        .then(resp => resp.json())
        .then(Meal.makeMeals)
    }

    static makeMeals(data) {
        const meals = data['data']
        meals.forEach(el => {
            const meal = new Meal({id: el.id, ...el.attributes})
        })
    }

    static addMealToDom(e){
        Meal.all.filter((meal) => {
            if(meal.categoryId === e){
                mealList.appendChild(meal.renderMeal())
            }
            })
        }

    handleClick = (e) => {
        if(e.target.id === 'order'){
            this.addOrderToDom()
        }else if(e.target.id === 'edit'){
            this.renderMealForm()
        }else if(e.target.id === 'update'){
            let options = document.querySelectorAll('option')
            debugger
            console.log(this)
        }
    }

    renderMeal(){
        mealList.innerText = ""
        this.tag.innerHTML = `<div id=${this.name}>
            <strong>${this.name}</strong>
            - ${this.description}<br>
            <p><u>On the plate:</u> ${this.ingredients}
            <p>$ ${this.price}  <button type="button" id='order'>Order</button></p>`
            return this.tag
    }

    addOrderToDom = () => {
        let orderTag = document.createElement('li')
        orderTag.addEventListener('click', this.handleClick)
        orderTag.innerHTML = `${this.name} <button type='button' id='edit'>Change</button>`
        orderList.appendChild(orderTag)
    }

    renderMealForm(){
        const mealIng = this.ingredients.split(", ")
        let mealTag = document.createElement('li')
        let options = ['regular', 'double', 'none']

        mealTag.addEventListener('click', this.handleClick)
        mealTag.innerHTML = `
                             <button type='button' id='update'>Update ${this.name}</button>
                             `
        mealForm.appendChild(mealTag)

        mealIng.forEach(el => {
            let mealOptions = document.createElement('li')
            let input = document.createElement('select')
            input.setAttribute('id', el)
                    options.forEach(el => {
                        let singleOption = document.createElement('option')
                        singleOption.setAttribute('id', el)
                        singleOption.text = el
                        input.appendChild(singleOption)
                    })
                mealOptions.innerHTML = `${el}`
                mealForm.append(mealOptions)
                mealForm.appendChild(input)})
    }

    addDropDown = () => {
        let drop = document.createElement('select')
        drop.setAttribute('')
    }

    renderMenu(){
        main.innerHTML = `
        <div id='menu'>
      <div id='category-list'>
          Categories
        <ul id='categories'></ul>
      </div>
       <div id='meal-list'>
          Meals:
        </div>
          <ul id='meals'>

          </ul>
        
        Your Order:
        <div id='orders'>

        </div>
      
      </div>
      `
    }

}