window.onload = function(){

    var cat1 = new Cat('Borya')
    console.log(cat1)
    var cat2 = new Cat('Myrzik')
    console.log(cat2)
    var cat3 = new Cat('Vasya')
    console.log(cat3)
    cat3.eat()
    cat3.eat()
    cat3.eat()
    cat3.eat()
    console.log(cat3)
    cat3.age++
    cat3.run()
    cat3.run()
    cat3.run()

}

function Cat (name) {
    this.name = name
    this.age = 0
    this.tail = true
    this.weight = 1

    this.eat = function () {
        this.weight++
    }

    this.run = function () {
        console.log(name + 'run')
        this.weight++
    }
}