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
  
  document.body.addEventListener('keydown', onKeyDownHandler, true);
  
  function onKeyDownHandler() {
    
    // Now, how can we check for which specific key was pressed?
    
    if (codes[index] === e.detail || codes[index] === e.which) {
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