const app = Vue.createApp({
    data() {
        return {
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
    method: {
        updateImage(variantImage) {
            //Objekt
        }    
    }
})