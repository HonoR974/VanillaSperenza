const menu = document.getElementById("menu");
const iconSide = document.querySelector(".iconSide");
const link = document.querySelector(".link");



showContentIn3Sec();


function showContentIn3Sec() {


  let index = 0;
  for (let i = 0; i < 7; i++) {
    console.log("For");
    setTimeout(() => {
      console.log("--------------------- Begin  --------");
      index += 3;
      console.log("index " + index);
  
      iconSide.style.fontSize =  index + "px";
      link.style.fontSize =  index + "px";
      console.log("tour " + i + " iconSide " +iconSide.style.fontSize );

      console.log("--------------------- END --------");
    },2000);
    console.log(" boucle for " );
    
  }
}

// iconSide.addEventListener("click", () => {
//   console.log("test");
// });

//
// setTimeout(() => {
//     iconSide.style.opacity = "1";
//     link.style.visibility = "visible";
//     console.log("timing");
//   }, 3000 );

