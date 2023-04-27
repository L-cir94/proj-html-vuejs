<template>
    <header>
        <div class="container">
            <div class="h_top d-flex align-items-start justify-content-between">
                <nav class="navbar sx">
                    <ul class="d-flex">
                        <li><i class="fa-brands fa-facebook-f p-3"></i></li>
                        <li><i class="fa-brands fa-twitter p-3"></i></li>
                        <li><i class="fa-brands fa-instagram p-3"></i></li>
                        <li><i class="fa-brands fa-youtube p-3"></i></li>
                    </ul>
                </nav>
                <nav class="navbar dx">
                    <ul class="d-flex gap-1">
                        <li class="p-3 my ">Shopping Cart</li>
                        <li class=" p-3 my_border">MyAccount <span class="arrow">&#8744</span></li>
                        <li class=" p-3 my_border pe-5"><i class="fa-solid fa-cart-shopping"></i> Cart <span class="arrow">&#8744</span></li>
                    </ul>
                </nav>
            </div>
        </div>
        <hr>
        <div class="container">
            <div class="h_bottom d-flex justify-content-between align-items-center">
                <div class="logo">
                    <img src="../assets/img/classic_shop_logo1x.png" alt="">
                </div>
                <nav class="navbar">
                    <ul class=" d-flex gap-5 align-items-center">
                        <li>Home <span class="arrow">&#8744</span></li>
                        <li>Shop <span class="arrow">&#8744</span></li>
                        <li>Products <span class="arrow">&#8744</span></li>
                        <li>Categories <span class="arrow">&#8744</span></li>
                        <li>News</li>
                        <li>Elements <span class="arrow">&#8744</span></li>
                        <button class="rounded-5 p-2 pe-4 ps-4">SHOP NOW!</button>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "AppHeader",
    setup() {

        return {}
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as*;

header {
    width: 100%;


}

.h_top {
    width: 100%;
    height: 50px;
.my_border{
    border-left: solid 0.1px $grigiochiaro;
}
.my_border:hover,.my:hover{
    background-color:rgb(206, 205, 205);
}
}

.h_bottom {
    width: 100%;
    height: 90px;
    li{
        padding-top: 40px;
        padding-bottom: 40px;
    }
    li:hover{
border-top: solid #427ed5;
    }
}

li {
    list-style: none;
}

button {
    background-color: $Melanie;
    color: white;
    border: none;
}

button:hover {
    background-color: $HavelockBlue ;
}

.arrow {
    font-size: small;
    font-weight: bolder;
}
</style>