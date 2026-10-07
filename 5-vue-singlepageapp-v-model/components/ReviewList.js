app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
        /*html*/
        `<div class="review-container">
            <h3>Bewertungen:</h3>
            <ul>
                <li v-for="(review, index) in reviews" :key="index">
                    {{ review.name }} bewertet mit {{ review.rating }} Stern(en)<br/>
                    {{ review.review }}<br/>
                </li>
            </ul>
        </div>`
})