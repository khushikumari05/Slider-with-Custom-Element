// class CustomSlider extends HTMLElement {
//     constructor() {
//         super();
//         this.splideNode = this.querySelector('.splide');
        
//         this.splideOptions = JSON.parse(this.dataset.customSplideOptions) || {};
//     }
//     connectedCallback() { 
//         this.mountSplider();
//     }
//     mountSplider() {
//         const spideList = new Splide(this.splideNode, this.splideOptions)
//         spideList.mount();
//     }
// }
// customElements.define('custom-slider', CustomSlider);


// const sliderData = [
//     {
//         image: "https://veena-theme-fashion.myshopify.com/cdn/shop/files/1.png?v=1705665890&width=2000",
//         description: "Elevate your wardrobe with our limited-time fashion offer!",
//         category: "Women's Apparel"
//     },
//     {
//         image: "https://veena-theme-fashion.myshopify.com/cdn/shop/files/4.png?v=1705665890&width=2000",
//         description: "Discover Signature Look: Fashion Forward and Fabulous!",
//         category: "Trendy Classics"
//     },
//     {
//         image: "https://veena-theme-fashion.myshopify.com/cdn/shop/files/3.png?v=1705665898&width=2000",
//         description: "Step into the World of Style with the Latest Fashion Trends Unveiled!",
//         category: "Modern Elegance"
//     }
// ];

// const syncData =[
//     {
//         img: "https://veena-theme-fashion.myshopify.com/cdn/shop/files/1.png?v=1705665890&width=2000", 
//     },
//     {
//         img: "https://veena-theme-fashion.myshopify.com/cdn/shop/files/4.png?v=1705665890&width=2000",

//     },
//     {
//         img: "https://veena-theme-fashion.myshopify.com/cdn/shop/files/4.png?v=1705665890&width=2000",

//     }
// ];
// class CustomSlider extends HTMLElement {
//     constructor() {
//         super();
//         this.innerHTML = `
//             <section class="splide">
//                 <div class="splide__track">
//                     <ul class="splide__list">
//                         ${sliderData.map((item,index) =>
//                             `<li class="splide__slide">
//                                 <img src="${item.image}">
//                                 <div class="slide-content${''}">
//                                     <span class="category">${item.category}</span>
//                                     <h2>${item.description}</h2>
//                                     <button class="explore-btn">Explore More</button>
//                                 </div>
//                             </li>`
//                         ).join('')}
//                     </ul>
//                 </div>
//             </section>
//         `;
//     }
//     connectedCallback() {
//         const splide = new Splide(this.querySelector('.splide'), {
//             type: 'loop',
//             perPage: 1,
//             pagination: true,
//             arrows: true,
//         });
//         splide.mount();
//     }
// }
// customElements.define('custom-slider', CustomSlider);

// class SyncSlider extends CustomSlider {
//     constructor() {
//         super();
//         this.innerHTML = `
//             <section id="thumbnail-carousel" class="splide1">
//                 <div class="splide__track1">
//                     <ul class="splide__list1">
//                         ${syncData.map((item,index) =>
//                             `<li class="splide__slide1">
//                                 <img src="${item.img}">
//                             </li>`
//                         ).join('')}
//                     </ul>
//                 </div>
//             </section>
//         `;
//     }
// }

// document.addEventListener( 'DOMContentLoaded', function () {
//     new Splide( '#thumbnail-carousel', {
//           fixedWidth: 100,
//           gap       : 10,
//           rewind    : true,
//           pagination: false,
//     } ).mount();
//   } );

  
  
  
//     connectedCallback() {
//         this.thumbnailSplide = new Splide("#thumbnail-carousel", {
//             fixedWidth: 100, // Adjust width of thumbnails
//             fixedHeight: 75, // Adjust height
//             isNavigation: true,
//             gap: 10,
//             focus: 'center',
//             pagination: false,
//             cover: true,
//             perPage: 3, // Show 3 thumbnails at a time
//             arrows: false,
//         });

//         const mainSplide = document.querySelector("#main-carousel")?.splide;
//         if (mainSplide) {
//             mainSplide.sync(this.thumbnailSplide);
//         }

//         this.thumbnailSplide.mount();
//     }
// }

// customElements.define('sync-slider', SyncSlider);

const thumbnailData = [
    { 
      img: "https://veena-theme-fashion.myshopify.com/cdn/shop/files/1.png?v=1705665890&width=2000"
    },
    {
        img: "https://veena-theme-fashion.myshopify.com/cdn/shop/files/4.png?v=1705665890&width=2000",

     },
    { 
     img: "https://veena-theme-fashion.myshopify.com/cdn/shop/files/3.png?v=1705665898&width=2000",

     }
];

//   Initialize Sliders when DOM is fully loaded
 
document.addEventListener("DOMContentLoaded", function () {
    const mainSliderElement = document.getElementById("main-carousel");
    const thumbnailSliderElement = document.getElementById("thumbnail-carousel");

    if (mainSliderElement && thumbnailSliderElement) {
        // ✅ Initialize Main Splide Slider
        const mainSplide = new Splide("#main-carousel", {
            type: "fade",
            perPage: 1,
            arrows: true,
        });

        // ✅ Initialize Thumbnail Splide Slider
        const thumbnailSplide = new Splide("#thumbnail-carousel", {
            fixedWidth: 100,
            fixedHeight: 75,
            isNavigation: true,
            gap: 10,
            focus: "center",
            pagination: false,
            cover: true,
            perPage: 3,
            arrows: false,
        });

        // ✅ Sync both sliders (AFTER both are initialized)
        mainSplide.sync(thumbnailSplide);

        // ✅ Mount both sliders
        mainSplide.mount();
        thumbnailSplide.mount();
    } else {
        console.error("Error: Sliders not found in the DOM.");
    }
});

/**
 * CustomSlider Component - Represents the main image slider
 */
class CustomSlider extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section id="main-carousel" class="splide">
                <div class="splide__track">
                    <ul class="splide__list">
                        ${thumbnailData.map(item => `
                            <li class="splide__slide">
                                <img src="${item.img}" alt="Thumbnail Image">
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </section>
        `;

        // ✅ Initialize main Splide slider
        this.mainSplide = new Splide("#main-carousel", {
            type: "fade",
            perPage: 1,
            arrows: true,
            pagination: true,
        }).mount();

        // ✅ Store the instance globally so SyncSlider can access it
        window.mainSplideInstance = this.mainSplide;
    }
}

customElements.define("custom-slider", CustomSlider);

/**
 * SyncSlider Component - Represents the thumbnail navigation slider
 */
class SyncSlider extends CustomSlider {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <section id="thumbnail-carousel" class="splide">
                <div class="splide__track">
                    <ul class="splide__list">
                        ${thumbnailData.map(item => `
                            <li class="splide__slide">
                                <img src="${item.img}" alt="Thumbnail Image">
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </section>
        `;

        setTimeout(() => {
            // ✅ Get the main slider instance
            const mainSplide = window.mainSplideInstance;

            this.thumbnailSplide = new Splide("#thumbnail-carousel", {
                fixedWidth: 100,
                fixedHeight: 75,
                isNavigation: true,
                gap: 10,
                focus: 'center',
                pagination: false,
                cover: true,
                perPage: 3,
                arrows: false,
            });

            if (mainSplide) {
                mainSplide.sync(this.thumbnailSplide); // ✅ Sync both sliders
            }

            this.thumbnailSplide.mount();
        }, 100); // Small delay ensures mainSplide is ready
    }
}

customElements.define("sync-slider", SyncSlider);


