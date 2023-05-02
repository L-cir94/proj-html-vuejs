import { reactive } from "vue";
export const store = reactive({
    menuHeader: [
        {
            name: 'Home',
            arrow:'arrow down ms-1 mb-1',
        },
        {
            name: 'Shop',
            arrow:'arrow down ms-1 mb-1',
        },
        {
            name: 'Products',
            arrow:'arrow down ms-1 mb-1',
        },
        {
            name: 'Categories',
            arrow:'arrow down ms-1 mb-1',
        },
        {
            name: 'News',
            arrow:'',
        },
        {
            name: 'Elements',
            arrow:'arrow down ms-1 mb-1',
        },
    ],
    apps: [
        {
            social: 'fa-brands fa-facebook-f',
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
            imgPath:'/src/assets/img/leather_gloves.jpg'
        },
        {
            name:'Black Leather Jacket',
            noDiscount:'$235',
            class:'discount_black',
            discountedPrice:'$200',
            imgPath:'/src/assets/img/black_elegant_leather_jacket.jpg'
        },
        {
            name:'Spring Painted Dress',
            discountedPrice:'$47',
            imgPath:'/src/assets/img/spring_printed_dress.jpg'
        },
    ]
})