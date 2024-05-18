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

//--------------------------------------  Carousel ------------------------------ // 


const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");

//btn droit 
nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
});

//btn gauche 
prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});