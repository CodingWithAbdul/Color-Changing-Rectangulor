var rect = document.querySelector("#rect");

rect.addEventListener("mousemove", function (details) {
  let rectangle = rect.getBoundingClientRect();
  let insideRectX = details.clientX - rectangle.left;

  //   console.log(insideRectX - rectangle.width / 2);

  if (insideRectX < rectangle.width / 2) {
    var redColor = gsap.utils.mapRange(
      0,
      rectangle.width / 2,
      255,
      0,
      insideRectX
    );
    gsap.to(rect, {
      backgroundColor: `rgb(${redColor}, 0, 0)`,
        ease : Power4,
    });
  } else {
    var blueColor = gsap.utils.mapRange(
        rectangle.width / 2,
       rectangle.width,
        0,
        255,
        insideRectX
      );
      gsap.to(rect, {
        backgroundColor: `rgb(0, 0, ${blueColor})`,
          ease : Power4,
      });
  }
});

rect.addEventListener("mouseout",function(){
    gsap.to(rect, {
        backgroundColor: 'white',

      });
})


//This will generate new color on every move of mouse
// rect.addEventListener("mousemove", function (details) {
//   let rectangle = rect.getBoundingClientRect();
//   let insideRectX = details.clientX - rectangle.left;

//   //   console.log(insideRectX - rectangle.width / 2);

//   if (insideRectX < rectangle.width / 2) {
  
//     var red = Math.floor(Math.random() * 255)
//     var green = Math.floor(Math.random() * 255)
//     var blue = Math.floor(Math.random() * 255)
    
//     rect.style.backgroundColor = `rgb(${red},${green},${blue})`
//   } else {
//     var red = Math.floor(Math.random() * 255)
//     var green = Math.floor(Math.random() * 255)
//     var blue = Math.floor(Math.random() * 255)
    
//     rect.style.backgroundColor = `rgb(${red},${green},${blue})`
//   }
// });

// rect.addEventListener("mouseout",function(){
//     gsap.to(rect, {
//         backgroundColor: 'white',

//       });
// })

