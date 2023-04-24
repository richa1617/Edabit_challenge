/*Q.Write a class called Rectangle that represents a rectangular two-dimensional region. It should have the following constructor:
It should have the following properties:

x
y
width
height

It should have the following methods:

toString()

Returns a string representation of this rectangle, as [x=1, y=2, width=3, height=4].

*/

class Rectangle {
    constructor(x, y, width, height) {
          this.x = x;
          this.y = y;
      this.height = height;
      this.width = width;
    }
      toString(){
          return `[x=${this.x}, y=${this.y}, width=${this.width}, height=${this.height}]`
      }
  }