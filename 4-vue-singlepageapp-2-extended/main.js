const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'WIFI',
            description: 'gebrauchte Socken',
            url: 'https://www.wifiwien.at',
            onSale: true,
            selectedVariant: 0,
            details: ['70% Wolle', '30% Polyester'],
            variants: [
                { id: 1234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 20 },
                { id: 1235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
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
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        sale() {
            if (this.onSale) {
                return this.brand + ' ' + this.product + ' sind im Angebot!'
            }
            return ''
        }
    }
})