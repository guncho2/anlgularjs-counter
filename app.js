//first parameter is the name of the module, and the
//second is the list of dependencies, passed as an array of strings


angular
  .module('counter', [])
  //add a call to .controller()first parameter passed to
  //the .controller() method is the name of the controller
  //we're registering end it with the word Controller
  //second parameter is the controller function itself
  .controller('CounterController', CounterController);
  //create the controller function itself
  function CounterController(){
    //properties of this. will be accessible in our view
    //declare a number property on this
    this.number = 0;
    // In app.js, define increment() and decrement() functions inside
    // the controller. Assign the functions to this so that
    // we can be access in our view.
    this.increment = () => { this.number++ };
    this.decrement = () => { this.number-- };

  }
