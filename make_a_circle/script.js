//Q :Make a Circle with OOP

//Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).

class Circle {
    constructor (radius) {
      this.radius = radius;
    }
  
    getArea() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  
    getPerimeter() {
      return 2 * Math.PI * this.radius;
    }
  }

let circy = new Circle(11)
console.log(circy.getArea())


let circle2 = new Circle(4.44)
console.log(circle2.getPerimeter())