import { reactive } from "vue";
export const store = reactive({
    menuHeader: [
        {
            name: 'Home',
        },
        {
            name: 'Shop',
        },
        {
            name: 'Products',
        },
        {
            name: 'Categories',
        },
        {
            name: 'News',
        },
        {
            name: 'Elements',
        },
    ],
    apps: [
        {
            social: 'fa-brands fa-facebook',
        },
        {
            social: 'fa-brands fa-twitter',
        },
        {
            social: 'fa-brands fa-instagram',
        },
        {
            social: 'fa-brands fa-youtube',
        },
    ],
    navbar: [
        {
            name: 'Shopping cart',
        },
        {
            name: 'MyAccount',
        },
        {
            name: 'Cart',
        },
    ],
    tags: [
        {
            name: 'black',
        },
        {
            name: 'boots',
        },
        {
            name: 'brown',
        },
        {
            name: 'casual',
        },
        {
            name: 'D&G',
        },
        {
            name: 'Fabric',
        },
        {
            name: 'hipster',
        },
        {
            name: 'New York',
        },
        {
            name: 'flowers',
        },
        {
            name: 'multi-purpose',
        },
        {
            name: 'red',
        },
        {
            name: 'skinny',
        },
        {
            name: 'responsive',
        },
        {
            name: 'white',
        },
        {
            name: 'winter',
        },
        {
            name: 'swear',
        },
        {
            name: 'lines',
        },
        {
            name: 'outdoors',
        },
    ],
    recentPost: [
        {
            content: 'rfjpifoir erpofjjrfjroi dfj'
        },
        {
            content: 'lorem ipsunn  dejuh'
        },
        {
            content: 'dolejioergioper dfpop'
        },
        {
            content: 'SDIOOIW FLJISDFO FJ'
        },
        {
            content: 'lorem dolor sin amet djjs f'
        },
        {
            content: 'oihisdnjwfn vnhkbhfh'
        },
    ],
    topRelatedProducts:[
        {
            name:'Leather Gloves ',
            discountedPrice:'$45',
            imgPath:'src/assets/img/modern_black_leather_suit-400x520.jpg'
        },
        {
            name:'Black Leather Jacket',
            noDiscount:'$235',
            class:'discount_black',
            discountedPrice:'$200',
            imgPath:'src/assets/img/modern_black_leather_suit-400x520.jpg'
        },
        {
            name:'Spring Painted Dress',
            discountedPrice:'$47',
            imgPath:'src/assets/img/modern_black_leather_suit-400x520.jpg'
        },
    ]
})