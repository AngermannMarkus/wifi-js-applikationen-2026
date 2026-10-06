app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
        /*html*/
        `   <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img v-bind:src="image" alt="">
                </div>

                <div class="product-info">
                    <h1>{{ title }}</h1>
                    <p>{{ description }}</p>

                    <product-details :details="details"></product-details>

                    <a :href="url">WIFI Website</a>
                    <p v-if="inStock > 10">auf Lager</p>
                    <p v-else-if="inStock <= 10 && inStock > 0">nur wenige Artikel lagernd</p>
                    <p v-else>ausverkauft</p>
                    <p>Versandkosten: {{ shipping }}</p>
                    <p v-show="onSale">{{ sale }}</p>
                    <div 
                        v-for="(variant, index) in variants" 
                        :key="variant.id" 
                        @mouseover="updateVariant(index)"
                        class="color-circle"
                        :style="{ backgroundColor: variant.color }">
                    </div>
                    <button 
                        class="button"
                        :class="{ disabledButton: !inStock }"
                        :disabled="!inStock"
                        @click="addToCart">
                        einkaufen
                    </button>
                    <button class="button" v-on:click="removeFromCart">Artikel entfernen</button>
                </div>
            </div>
        </div>`,
    data() {
        return {
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
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
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
        },
        shipping() {
            if (this.premium) {
                return 'kostenlos'
            }
            return 2.40
        }
    }
})