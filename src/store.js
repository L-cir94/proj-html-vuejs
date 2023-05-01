import { reactive } from "vue"; 
export const store = reactive({
    menuheader: [
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
    tags:[
        {
            name:'black',
        },
        {
            name:'boots',
        },
        {
            name:'brown',
        },
        {
            name:'casual',
        },
        {
            name:'D&G',
        },
        {
            name:'Fabric',
        },
        {
            name:'hipster',
        },
        {
            name:'New York',
        },
        {
            name:'flowers',
        },
            {
            name:'multi-purpose',
        },
        {
            name:'red',
        },
        {
            name:'skinny',
        },
        {
            name:'responsive',
        },
        {
            name:'white',
        },
        {
            name:'winter',
        },
        {
            name:'swear',
        },
        {
            name:'lines',
        },
        {
            name:'outdoors',
        },
    ]
})