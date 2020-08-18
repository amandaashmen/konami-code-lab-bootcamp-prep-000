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
  
  var index = 0;
  
  document.body.addEventListener('keydown', onKeyDownHandler);
  
  function onKeyDownHandler() {
    
    // Now, how can we check for which specific key was pressed?
  
    const key = parseInt(e.detail || e.which);
    
    if (key === codes[index]) {
      index++;
 
      if (index === codes.length-1) {
        alert("Hurray!");
        index = 0;
      }
    } else {
      index = 0;
      }
  }
}