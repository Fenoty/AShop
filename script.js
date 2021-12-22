//var list
var g2=document.querySelector(".g2");
var content=document.querySelector(".g2_content");
var cat=document.querySelectorAll(".cat");
var list=document.querySelectorAll(".List");
var general=document.querySelector(".general");
var cart=document.querySelector(".cart");
var about_us=document.querySelector(".about-us");
var g3 = document.querySelector(".g3");
var g4 = document.querySelector(".g4");
var g1=document.querySelector(".g1");
var title=document.querySelector(".Title");

//g1 
g1.addEventListener("mouseover",()=> {
    g1.style.width="20vw";
    g1.addEventListener("mouseout",()=> {
        g1.style.width ="35px";
    });
});

//g3 about-us forward page
g3.addEventListener("click",()=>{
    close_all();
    about_us.classList.remove("hidrec");

});

//cart
g4.addEventListener("click",()=>{
    close_all();
    cart.classList.remove("hidrec");

});

//function close all pages
function close_all(){
    for(let g=0;g<cat.length;g++){
        list[g].classList.add("LiHide"); 
    }    
    general.classList.add("LiHide");
    about_us.classList.add("hidrec");
    cart.classList.add("hidrec");   
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

title.addEventListener("click",()=>{
    close_all();
    general.classList.remove("LiHide");   
});




