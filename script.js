var Array_Cart = [[],[],[]];
//add in cart
var button = document.querySelectorAll("button");

for (let i = 0; i < button.length; i++) {
  button[i].onclick = function([]) {

  }
}




var g1=document.querySelector(".g1");

g1.addEventListener("mouseover",()=> {
    g1.style.width="20vw";
    g1.addEventListener("mouseout",()=> {
        g1.style.width ="35px";
    });
});



//g2 button list
var g2=document.querySelector(".g2");
var content=document.querySelector(".g2_content");
var cat=document.querySelectorAll(".cat");
var list=document.querySelectorAll(".List");
var general=document.querySelector(".general");

//g3 list 
var about_us=document.querySelector(".about-us");
var g3 = document.querySelector(".g3");

//g3 about-us forward page
g3.addEventListener("click",()=>{
    close_all();
    about_us.classList.remove("hidrec");

});


//function close all pages
function close_all(){
    for(let g=0;g<cat.length;g++){
        list[g].classList.add("LiHide"); 
    }    
    general.classList.add("LiHide");
    about_us.classList.add("hidrec");   
}

//categories
for(let i=0;i<cat.length;i++){
cat[i].addEventListener("click", ()=>{
    close_all();
    list[i].classList.remove("LiHide");    
}
)};


//categories animation
g2.addEventListener("mouseover",()=> {
    content.classList.remove("g2_content_hidden");
    g2.style.transform="rotate(-90deg)"; 
    g2.style.opacity="60%"; 
    content.addEventListener("mouseleave",()=> {
        content.classList.add("g2_content_hidden");
        g2.style.transform="rotate(0deg)";
        g2.style.opacity="100%";
    });
    
    
});

//enter to general page UWU
var title=document.querySelector(".Title");
title.addEventListener("click",()=>{
    close_all();
    general.classList.remove("LiHide");   
});

//перезагрузка страницы надо подумать как сделать 
//чтобы оставаться на той странице на которой остался
// if (window.performance) {
//     console.log("Perfomance not supported");
//   }
//   if (performance.navigation.type == 1) {
//   console.log( "Страница перезагружена" );
//   } else {
//   console.log( "Страница не перезагружена");
//   }


