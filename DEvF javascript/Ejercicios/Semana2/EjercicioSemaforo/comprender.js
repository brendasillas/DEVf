console.log("Welcome to Programiz!");

//  var a = 1
//   function foo() {
      
//     var a = 2;

//     function bar() {
//       console.log( a );
//     }

//     return bar;
//     debugger
//   }
//   var baz = foo();
//   baz();

//   var a = 1; 
//   function b() { 
//     debugger;
//       a = 10; 
//       return; 
//       function a() {} 
//   } 
//   b(); 

var a = 1; 
  
  function someFunction(number) {
    function otherFunction(input) {
      return a;
    }
    
    a = 5;
    
    return otherFunction;
  }
  
  var firstResult = someFunction(9);
  var result = firstResult(2);