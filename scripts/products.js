

//Enter code
const Products = Vue.createApp({
    data(){
        return{
        prod:[
                {
                    id: '1',
                    class:  'Mouse',
                    image: 'https://4frag.ru/image/cache/data/product/logitech-g102-lightsync-1-300x300.jpg', 
                    title: 'Logitech G102 Lightsync',
                    discount: '',
                    cost: '2 290р.'
                },
                {
                    id: '2',
                    class:  'Mouse',
                    image: 'https://4frag.ru/image/cache/data/product/razer-basilisk-v2-1-300x300.jpg', 
                    title: 'Razer Basilisk V2',
                    discount: '',
                    cost: '7 190р.'
                },
                {
                    id: '3',
                    class:  'Mouse',
                    image: 'https://4frag.ru/image/cache/data/product/dark-project-me-3-1-600x600.jpg', 
                    title: 'Dark Project ME-3',
                    discount: '4 490р.',
                    cost: '2 999р.'
                },
                {
                    id: '4',
                    class:  'Mouse', 
                    image: 'https://4frag.ru/image/cache/data/product/zowie-by-benq-s2-c-1-300x300.jpg', 
                    title: 'Zowie by BenQ S2',
                    discount: '',
                    cost: '6 790р.'
                },
                {
                    id: '5',
                    class:  'Mouse',
                    image: 'https://4frag.ru/image/cache/data/product/HyperX-Pulsefire-Surge-1-300x300.jpg', 
                    title: 'HyperX Pulsefire Surge',
                    discount: '',
                    cost: '4 990р.'
                },
                {
                    id: '6',
                    class:  'Keyboard', 
                    image: 'https://4frag.ru/image/cache/data/product/red-square-tesla-tkl-rgb-2020-1-300x300.jpg', 
                    title: 'Red Square Tesla TKL RGB 2020',
                    discount: '3 990р.',
                    cost: '1 990р.',
                },
                {
                    id: '7',
                    class:  'Keyboard', 
                    image: 'https://4frag.ru/image/cache/data/product/hyperx-alloy-origins-core-red-switch-1-300x300.jpg',
                    title: 'HyperX Alloy Origins Core Blue Switch',
                    discount: '',
                    cost: '9 990р.',
                },
                {
                    id: '8',
                    class:  'Keyboard', 
                    image: 'https://4frag.ru/image/cache/data/product/logitech-g512-gx-brown-tactile-switch-carbon-1-300x300.jpg',
                    title: 'Logitech G512 GX Brown Tactile Switch Carbon',
                    discount: '',
                    cost: '8 990р.',
                },
                {
                    id: '9',
                    class:  'Keyboard', 
                    image: 'https://4frag.ru/image/cache/data/product/razer-blackwidow-v3-mini-hyperspeed-yellow-switch-1-300x300.jpg',
                    title: 'Razer BlackWidow V3 Mini HyperSpeed Green Switch',
                    discount: '',
                    cost: '15 990р.',
                },
                {
                    id: '10',
                    class:  'Keyboard', 
                    image: 'https://4frag.ru/image/cache/data/product/corsair-k60-rgb-pro-low-profile-cherry-mx-speed-1-300x300.jpg', 
                    title: 'Corsair K60 RGB PRO Low Profile Cherry MX Speed',
                    discount: '',
                    cost: '11 490р.'
                },
                {
                    id: '11',
                    class:  'Headphone', 
                    image: 'https://4frag.ru/image/cache/data/product/hyperx-cloud-alpha-s-1-300x300.jpg', 
                    title: 'HyperX Cloud Alpha S',
                    discount: '10 790р.',
                    cost: '8 490р.',
                },
                {
                    id: '12',
                    class:  'Headphone', 
                    image: 'https://4frag.ru/image/cache/data/product/razer-hammerhead-duo-for-console-green-1-300x300.jpg',
                    title: 'Razer Hammerhead Duo',
                    discount: '',
                    cost: '6 490р.',
                },
                {
                    id: '13',
                    class:  'Headphone', 
                    image: 'https://4frag.ru/image/cache/data/product/steelseries-arctis-1-1-300x300.jpg',
                    title: 'SteelSeries Arctis 1',
                    discount: '',
                    cost: '4 990р.',
                },
                {
                    id: '14',
                    class:  'Headphone', 
                    image: 'https://4frag.ru/image/cache/data/product/sony-mdr-xb50ap-extra-bass-black-1-300x300.jpg',
                    title: 'Sony MDR-XB50AP Extra Bass Black',
                    discount: '2 990р.',
                    cost: '1 990р.',
                },
                {
                    id: '15',
                    class:  'Headphone',  
                    image: 'https://4frag.ru/image/cache/data/product/logitech-g-pro-x-gaming-headset-1-300x300.jpg', 
                    title: 'Logitech G PRO X',
                    discount: '',
                    cost: '10 990р.'
                },
                {
                    id: '16',
                    class:  'Carpets',  
                    image: 'https://4frag.ru/image/cache/data/product/razer-goliathus-chroma-extended-1-300x300.jpg', 
                    title: 'Razer Goliathus Chroma Extended',
                    discount: '',
                    cost: '5 190р.',
                },
                {
                    id: '17',
                    class:  'Carpets',  
                    image: 'https://4frag.ru/image/cache/data/product/hyperx-pulsefire-mat-s-x-large-1-300x300.jpg',
                    title: 'HyperX Pulsefire Mat X-Large',
                    discount: '',
                    cost: '3 990р.',
                },
                {
                    id: '18',
                    class:  'Carpets',  
                    image: 'https://4frag.ru/image/cache/data/product/cougar-neon-x-1-300x300.jpg',
                    title: 'Cougar Neon X',
                    discount: '5 290р.',
                    cost: '2 990р.',
                },
                {
                    id: '19',
                    class:  'Carpets',  
                    image: 'https://4frag.ru/image/cache/data/product/corsair-mm350-pro-extended-xl-01-300x300.jpg',
                    title: 'Corsair MM350 PRO Extended XL',
                    discount: '',
                    cost: '3 490р.',
                },
                {
                    id: '20',
                    class:  'Carpets',  
                    image: 'https://4frag.ru/image/cache/data/product/logitech-g840-xl-1-300x300.jpg', 
                    title: 'Logitech G840 XL',
                    discount: '',
                    cost: '4 490р.'
                },
                {
                    id: '21',
                    class:  'Chair',  
                    image: 'https://4frag.ru/image/cache/data/product/thunderx3-tc3-azure-blue-1-300x300.jpg', 
                    title: 'ThunderX3 TC3 Azure Blue',
                    discount: '19 990р.',
                    cost: '16 990р.',
                },
                {
                    id: '22',
                    class:  'Chair',  
                    image: 'https://4frag.ru/image/cache/data/product/aerocool-count-iron-black-1-300x300.jpg',
                    title: 'Aerocool Count Iron Black',
                    discount: '',
                    cost: '17 990р.',
                },
                {
                    id: '23',
                    class:  'Chair',  
                    image: 'https://4frag.ru/image/cache/data/product/asus-rog-chariot-gaming-chair-1-300x300.jpg',
                    title: 'ASUS ROG Chariot Gaming Chair',
                    discount: '',
                    cost: '61 990р.',
                },
                {
                    id: '24',
                    class:  'Chair',  
                    image: 'https://4frag.ru/image/cache/data/product/corsair-t3-rush-charcoal-1-300x300.jpg',
                    title: 'Corsair T3 RUSH Charcoat',
                    discount: '32 990',
                    cost: '27 990р.',
                },
                {
                    id: '25',
                    class:  'Chair',  
                    image: 'https://4frag.ru/image/cache/data/product/razer-iskur-1-300x300.jpg', 
                    title: 'Razer Iskur',
                    discount: '49 990р.',
                    cost: '45 790р.'
                },
                {
                    id: '26',
                    class:  'Table',  
                    image: 'https://4frag.ru/image/cache/data/product/thunderx3-ed7-01-300x300.jpg', 
                    title: 'ThunderX3 FD7',
                    discount: '',
                    cost: '39 990р.',
                },
                {
                    id: '27',
                    class:  'Table',  
                    image: 'https://4frag.ru/image/cache/data/product/eureka-ergonomic-l60-black-1-300x300.jpg',
                    title: 'Eureka Ergonomic L60 Black',
                    discount: '',
                    cost: '32 990р.',
                },
                {
                    id: '28',
                    class:  'Table',  
                    image: 'https://4frag.ru/image/cache/data/product/generic-comfort-desk-gamer2-ds-nw-1-300x300.jpg',
                    title: 'Generic Comfort Desk Gamer2/DS/N',
                    discount: '24 990р.',
                    cost: '21 990р.',
                },
                {
                    id: '29',
                    class:  'Table',  
                    image: 'https://4frag.ru/image/cache/data/product/e-sport-gear-comfy-esg-11-bk-1-300x300.jpg',
                    title: 'E-Sport Gear Comfy ESG-11 BK',
                    discount: '',
                    cost: '13 490р.',
                },
                {
                    id: '30',
                    class:  'Table',  
                    image: 'https://4frag.ru/image/cache/data/product/kompyuternyj-stol-arozzi-arena-pure-black-1-300x300.jpg', 
                    title: 'Arrozi Arena Pure Black',
                    discount: '',
                    cost: '39 990р.'
                },
                {
                    id: '31',
                    class:  'Microphone',  
                    image: 'https://4frag.ru/image/cache/data/product/hyperx-quadcast-s-1-300x300.jpg', 
                    title: 'HyperX QuadCast S',
                    discount: '',
                    cost: '15 990р.',
                },
                {
                    id: '32',
                    class:  'Microphone',  
                    image: 'https://4frag.ru/image/cache/data/product/razer-seiren-v2-x-1-300x300.jpg',
                    title: 'Razer Seiren V2 X',
                    discount: '12 990р.',
                    cost: '9 990р.',
                },
                {
                    id: '33',
                    class:  'Microphone',  
                    image: 'https://4frag.ru/image/cache/data/product/ritmix-rdm-180-black-1-300x300.jpg',
                    title: 'Ritmix RDM-180 Black',
                    discount: '',
                    cost: '7 690р.',
                },
                {
                    id: '34',
                    class:  'Microphone',  
                    image: 'https://4frag.ru/image/cache/data/product/blue-yeti-midnight-blue-1-300x300.jpg',
                    title: 'Blue Yeti Midnight Blue',
                    discount: '',
                    cost: '12 990р.',
                },
                {
                    id: '35',
                    class:  'Microphone',  
                    image: 'https://4frag.ru/image/cache/data/product/epos-b20-streaming-microphone-1-300x300.jpg', 
                    title: 'EPOS B20 Streaming Microphone',
                    discount: '',
                    cost: '16 990р.'
                },
            ],
        // method:{ 
        //     add_cart(el){
        //         ArrayProducts.push(el);
        //         console.log(ArrayProducts);
                
        //     },
        //     set_cart(){
        //         for (let i = 0; i < ArrayProducts.length; i++) {

        //         }
        //     }
        // }
        }
    }
   
});

// Products.component('todo-item',{
//     template: `
//     <li v-for:="i in ArrayProducts">
//         <template v-if:="item.id==$emit('Arra')">
//             <img class="img-cart" :src="item.image">{{item.title}} {{item.cost}}
//         </template>
//     </li>
//     `
// })

Products.mount("#vue");



// var ArrayProducts=[];




