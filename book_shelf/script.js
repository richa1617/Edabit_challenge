/*
Create a Book constructor that has two properties :

Title
Author
and two methods:

A method named getTitle that returns: "Title: " + the instance title.
A method named getAuthor that returns: "Author: " + the instance author.
and instantiate this constructor by creating 3 new books:

Pride and Prejudice - Jane Austen (PP)
Hamlet - William Shakespeare (H)
War and Peace - Leo Tolstoy (WP)
The name of the new object instances PP, H, and WP, respectively.

For instance, if I instantiated the following book using this Book constructor function:

Harry Potter - J.K. Rowling (HP)
*/





function Book(title,author){
  this.title=title,
  this.author=author,

  this.getTitle=function(){
    return "Title: " + this.title;
     }

   this.getAuthor=function(){
        return `Author : ${this.author}`
     }
     
}
const PP = new Book('Pride and Prejudice', 'Jane Austen');
const HP = new Book('Hamlet', 'William Shakespeare');
const WP = new Book('War and Peace', 'Leo Tolstoy');
console.log("richa")


console.log(HP.getAuthor())
console.log(HP.getTitle())