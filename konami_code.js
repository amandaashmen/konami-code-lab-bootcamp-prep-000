const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];


// MAYBE CHECK MATCH STRING CODE NOT INt
function init() {
  // Attaching an keydown event listener to document.body
  
  var index = 0
  
  document.body.addEventListener('keydown', onKeyDownHandler);
  
  function onKeyDownHandler() {
    
    // Now, how can we check for which specific key was pressed?
    
    if (codes[index] === e.key) {
      index++
 
      if (index === codes.length) {
        alert("Hurray!")
        index = 0
      }
    } else {
      index = 0
      }
  }
}

/*
function init() {
  // your code here	  //
  var index = 0
  document.body.addEventListener('keydown', onKeyDownHandler);

  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which)
    //console.log('test', e.key)
    console.log('code', codes[index])
    console.log(index)
    if (e.key === codes[index]) {
      index++

      if (index === codes.length) {
        alert("YOU DID IT!")
        index = 0
      }
    } else {
      index = 0
    }
  }
  */
