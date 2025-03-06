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


const sliderData = [
    {
        image: "https://veena-theme-fashion.myshopify.com/cdn/shop/files/1.png?v=1705665890&width=2000",
        description: "Elevate your wardrobe with our limited-time fashion offer!",
        category: "Women's Apparel"
    },
    {
        image: "https://veena-theme-fashion.myshopify.com/cdn/shop/files/4.png?v=1705665890&width=2000",
        description: "Discover Signature Look: Fashion Forward and Fabulous!",
        category: "Trendy Classics"
    },
    {
        image: "https://veena-theme-fashion.myshopify.com/cdn/shop/files/3.png?v=1705665898&width=2000",
        description: "Step into the World of Style with the Latest Fashion Trends Unveiled!",
        category: "Modern Elegance"
    }
];
class CustomSlider extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
            <section class="splide">
                <div class="splide__track">
                    <ul class="splide__list">
                        ${sliderData.map(item =>
                            `<li class="splide__slide">
                                <img src="${item.image}">
                                <div class="slide-content">
                                    <span class="category">${item.category}</span>
                                    <h2>${item.description}</h2>
                                    <button class="explore-btn">Explore More</button>
                                </div>
                            </li>`
                        ).join('')}
                    </ul>
                </div>
            </section>
        `;
    }
    connectedCallback() {
        const splide = new Splide(this.querySelector('.splide'), {
            type: 'loop',
            perPage: 1,
            pagination: true,
            arrows: true,
        });
        splide.mount();
    }
}
customElements.define('custom-slider', CustomSlider);

