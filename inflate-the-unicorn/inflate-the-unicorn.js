  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")

// var unicorn1 = [0, 1, 2];
// var unicorn2 = [];


// document.getElementById("image-1").onclick = function unicornClick() {
//     document.getElementById("image-1").src = "./images/unicorn-1.png";
// }

document.getElementById("image-1").onclick = function unicornClick() {
  var imageChange = document.getElementById("image-1");

  if (imageChange.src.match("./images/unicorn-0.png")) {
    imageChange.src = "./images/unicorn-1.png"; 
  } else if (imageChange.src.match("./images/unicorn-1.png")) {
    imageChange.src = "./images/unicorn-2.png"; 
  } else if (imageChange.src.match("./images/unicorn-2.png")) {
    imageChange.src = "./images/unicorn-3.png";
  } else {
    alert('Unicorn Number 1 Says Thank You!');
  }
}

document.getElementById("image-2").onclick = function unicornClick() {
  var imageChange = document.getElementById("image-2");

  if (imageChange.src.match("./images/unicorn-0.png")) {
    imageChange.src = "./images/unicorn-1.png"; 
  } else if (imageChange.src.match("./images/unicorn-1.png")) {
    imageChange.src = "./images/unicorn-2.png"; 
  } else if (imageChange.src.match("./images/unicorn-2.png")) {
    imageChange.src = "./images/unicorn-3.png";
  } else {
    alert('Unicorn Number 2 Says Thank You!');
  }
}

document.getElementById("image-3").onclick = function unicornClick() {
  var imageChange = document.getElementById("image-3");

  if (imageChange.src.match("./images/unicorn-0.png")) {
    imageChange.src = "./images/unicorn-1.png"; 
  } else if (imageChange.src.match("./images/unicorn-1.png")) {
    imageChange.src = "./images/unicorn-2.png"; 
  } else if (imageChange.src.match("./images/unicorn-2.png")) {
    imageChange.src = "./images/unicorn-3.png";
  } else {
    alert('Unicorn Number 3 Says Thank You!');
  }
}

