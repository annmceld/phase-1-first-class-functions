function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    function namedFunction() {
      console.log("This is named.");
    }
    return namedFunction;
  }

function returnsAnAnonymousFunction() {
    return function() {
        console.log("this is anonymous.");
    }
}  