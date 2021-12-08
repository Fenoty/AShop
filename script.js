//Enter code
var Enter=document.querySelector(".Enter");
var Enter_Text=document.querySelector(".Enter_Text");



Enter.addEventListener("mouseover",()=> {
    Enter_Text.classList.remove("hidden");
    Enter_Text.style.marginLeft="50px";
    Enter.addEventListener("mouseout",()=> {
        Enter_Text.classList.add("hidden");
        Enter_Text.style.marginLeft="20px";
    });
});


//G1 button Search
var g1=document.querySelector(".g1");

g1.addEventListener("mouseover",()=> {
    g1.style.width="300px";
    
    // if(g1.activeElement ==g1.Focus()) {
    g1.addEventListener("mouseout",()=> {
        g1.style.width ="10px";
    });//}
});

//G2 button list
var g2=document.querySelector(".g2");
var content=document.querySelector(".g2_content");
var cat=document.querySelectorAll(".cat");
var list=document.querySelectorAll(".List");
var general=document.querySelector(".general");


for(let i=0;i<cat.length;i++){
cat[i].addEventListener("click", ()=>{
    for(let g=0;g<cat.length;g++){
        list[g].classList.add("LiHide");
        general.classList.add("LiHide");
    }
    
    list[i].classList.remove("LiHide");    
    
}
)};



g2.addEventListener("mouseover",()=> {
    content.classList.remove("g2_content_hidden");
    g2.style.transform="rotate(-90deg)"; 
    g2.style.opacity="60%"; 
    content.addEventListener("mouseleave",function cancel() {
        content.classList.add("g2_content_hidden");
        g2.style.transform="rotate(0deg)";
        g2.style.opacity="100%";
    });
    
    
});


var title=document.querySelector(".Title");
title.addEventListener("click",()=>{
    for(let g=0;g<cat.length;g++){
        list[g].classList.add("LiHide");
    } 
    general.classList.remove("LiHide");   
})



