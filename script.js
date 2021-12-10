//Enter code
const Declarations = [[{
    data(){
        return{
            items:[
                {
                    class: '1', 
                    image: 'https://4frag.ru/image/cache/data/product/drift-dr500-black-1-300x300.jpg', 
                    title: 'Drift DR500 Black',
                    price: '28 990р.',
                    disco: '24 990р.'
                },
                {
                    class: '2', 
                    image: 'https://4frag.ru/image/cache/data/product/asus-rog-strix-scope-rx-red-switch-1-300x300.jpg', 
                    title: 'ASUS ROG Strix Scope RX Red Switch',
                    price: '9 990р.',
                    disco: '7 990р.'
                },
                {
                    class: '3', 
                    image: 'https://4frag.ru/image/cache/data/product/dark-project-me-3-1-600x600.jpg', 
                    title: 'Dark Project ME-3',
                    price: '4 490р.',
                    disco: '2 999р.'
                },
                {
                    class: '4', 
                    image: 'https://4frag.ru/image/cache/data/product/logitech-g840-xl-1-300x300.jpg', 
                    title: 'Logitech G840 XL',
                    price: '4 190р.',
                    disco: '1 999р.'
                },
                {
                    class: '5', 
                    image: 'https://4frag.ru/image/cache/data/product/hyperx-quadcast-s-1-300x300.jpg', 
                    title: 'HyperX QuadCast S',
                    price: '15 990р.',
                    disco: '11 990р.'
                },
                ]
            } 
        }    
}],
[{
    data(){
        return{
            items:[
                {
                    class: '1', 
                    image: 'https://4frag.ru/image/cache/data/product/logitech-g102-lightsync-1-300x300.jpg', 
                    title: 'Logitech G102 Lightsync',
                    price: '',
                    disco: '2 290р.'
                },
                {
                    class: '2', 
                    image: 'https://4frag.ru/image/cache/data/product/razer-basilisk-v2-1-300x300.jpg', 
                    title: 'Razer Basilisk V2',
                    price: '',
                    disco: '7 190р.'
                },
                {
                    class: '3', 
                    image: 'https://4frag.ru/image/cache/data/product/dark-project-me-3-1-600x600.jpg', 
                    title: 'Dark Project ME-3',
                    price: '4 490р.',
                    disco: '2 999р.'
                },
                {
                    class: '4', 
                    image: 'https://4frag.ru/image/cache/data/product/zowie-by-benq-s2-1-300x300.jpg', 
                    title: 'Zowie by BenQ S2',
                    price: '',
                    disco: '6 790р.'
                },
                {
                    class: '5', 
                    image: 'https://4frag.ru/image/cache/data/product/HyperX-Pulsefire-Surge-1-300x300.jpg', 
                    title: 'HyperX Pulsefire Surge',
                    price: '',
                    disco: '4 990р.'
                },
                ]
            } 
        }    
}]
];

const App = Vue.createApp(Declarations);
var Enter=document.querySelector(".Enter");
var Enter_Text=document.querySelector(".Enter_Text");


//auth
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
    g1.addEventListener("mouseout",()=> {
        g1.style.width ="10px";
    });
});

//G2 button list
var g2=document.querySelector(".g2");
var content=document.querySelector(".g2_content");
var cat=document.querySelectorAll(".cat");
var list=document.querySelectorAll(".List");
var general=document.querySelector(".general");

//categories
for(let i=0;i<cat.length;i++){
cat[i].addEventListener("click", ()=>{
    for(let g=0;g<cat.length;g++){
        list[g].classList.add("LiHide");
        general.classList.add("LiHide");
        
    }
    App.mount(list[i]);
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


var title=document.querySelector(".Title");
title.addEventListener("click",()=>{
    for(let g=0;g<cat.length;g++){
        list[g].classList.add("LiHide");
    } 
    general.classList.remove("LiHide");   
})




