class CustomSlider extends HTMLElement {
    constructor() {
        super();
        this.splideNode = this.querySelector('.splide');
        
        this.splideOptions = JSON.parse(this.dataset.customSplideOptions) || {};
    }
    connectedCallback() { 
        this.mountSplider();
    }
    mountSplider() {
        const spideList = new Splide(this.splideNode, this.splideOptions)
        spideList.mount();
    }
}
customElements.define('custom-slider', CustomSlider);


