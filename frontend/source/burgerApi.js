class BurgerApi {
    static fetchBurgers(){
        fetch('http://[::1]:3000/burgers')
        .then(resp => resp.json())
        .then(Burger.makeBurgers)
    }
}