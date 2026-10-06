const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            description: 'gebrauchte Socken',
            image: './assets/images/socks_green.jpg',
            url: 'https://www.wifiwien.at',
            inventory: 12,
            onSale: false,
            details: ['70% Wolle', '30% Polyester'],
            variants: [
                { id: 1234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 1235, color: 'blue', image: './assets/images/socks_blue.jpg' }
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            if (this.cart >= 1) {
                this.cart -= 1
            }
        },
        updateImage(variantImage) {
            //Objekt
            this.image = variantImage
        }    
    }
})