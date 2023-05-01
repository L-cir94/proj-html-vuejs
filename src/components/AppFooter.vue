<template>
    <footer>
        <div class="container_large">
            <div class="subscribe d-flex align-items-center">
                <div class="container d-flex align-items-center">
                    <div class="text text-center d-flex justify-content-center align-items-center">
                        <i class="fa-regular fa-envelope fa-l p-3 me-4 bg-opacity-50 bg-black rounded-circle"></i>
                        <h3>Subscribe now and get special offers</h3>
                    </div>
                    <div class="call_to_action d-flex justify-content-center align-items-center">
                        <input class="rounded-5 p-1 ps-3 me-4" type="text" placeholder="Insert your email">
                        <button class="p-1 ps-5 pe-5 rounded-5">SEND</button>
                    </div>
                </div>
            </div>
            <div class="link align-items-center">
                <div class="container align-items-center">
                    <div class="row">
                        <div class="col-3 d-flex flex-column justify-content-between gap-5">
                            <div class="logo text-start">
                                <img width="200" class="img-fluid" src="../assets/img/classic_shop_logo_footer.png" alt="">
                            </div>
                            <div class="address">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima consequatur sunt dolorum
                                    hic voluptatum magnam, recusandae vel facilis perferendis quisquam quo iure. Dolorum
                                    dolor iure hic eligendi enim minima possimus!</p>
                            </div>
                            <div class="icons d-flex gap-3">
                                <i v-for="app in store.apps" :class="app.social"></i>
<!--                                 <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-youtube"></i> -->
                            </div>
                        </div>
                        <div class="col-3 d-flex flex-column gap-5">
                            <h6 class="text-uppercase">top rated product</h6>
                            <div class="item d-flex justify-content-between pb-3" v-for="item in store.topRelatedProducts">
                                <div class="text">
                                    <h6>{{ item.name }}</h6>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i><br>
                                    <span :class="item.class">{{ item.noDiscount }}</span><span class="ms-1">{{item.discountedPrice}}</span>
                          
                                </div>
                                <img width="60" class="img-fluid" :src="item.imgPath"
                                    alt="">
                            </div>
                            <!-- <div class="item d-flex justify-content-between pb-2">
                                <div class="text">
                                    <h6>Leather Gloves</h6>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <h6>$45</h6>
                                </div>
                                <img width="50" class="img-fluid" src="../assets/img/modern_black_leather_suit-400x520.jpg"
                                    alt="">
                            </div>
                            <div class="item d-flex justify-content-between pb-2">
                                <div class="text">
                                    <h6>Leather Gloves</h6>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <h6>$45</h6>
                                </div>
                                <img width="50" class="img-fluid" src="../assets/img/modern_black_leather_suit-400x520.jpg"
                                    alt="">
                            </div> -->
                        </div>
                        <div class="col-3 d-flex flex-column align-items-center ">
                            <h6 class="text-uppercase">recent posts</h6>
                            <div class="post d-flex justify-content-between gap-4">
                                <ul class="d-flex flex-column gap-1 mt-5">
                                    
                                    <li  class="m" v-for="post in store.recentPost">{{post.content}} <hr></li>
<!--                                     <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li> -->
                                </ul>
                            </div>
                        </div>
                        <div class="col-3 d-flex flex-column gap-5">
                            <h6 class="text-uppercase">tags</h6>
                            <div class="container_tags d-flex flex-wrap gap-2">
                                <span class="my_span rounded-1 p-2" v-for="tag in store.tags">{{ tag.name }}</span>
<!--                            <span class="my_span rounded-1">tag</span>
                                <span class="my_span rounded-1">tag</span>
                                <span class="my_span rounded-1">tag</span>
                                <span class="my_span rounded-1">tag</span>
                                <span class="my_span rounded-1">tag</span>
                                <span class="my_span rounded-1">tag</span>
                                <span class="my_span rounded-1">tag</span>
                                <span class="my_span rounded-1">tag</span> -->
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="copy text-center d-flex flex-column">
                <div class="container">
                    <div class="copyright mt-3">
                        <i class="fa-regular fa-copyright"></i> 2012 - 2020 | Avada Themes by Temes fusion | All Rights
                        Reserved
                        | Powered by WordPress

                    </div>
                    <div class="payments_methods d-flex justify-content-center gap-3 pt-1  mb-2">
                        <img class="img.fluid rounded-2" src="../assets/img/visa_82066.png" alt="visa">
                        <img class="img-fluid rounded-2" src="../assets/img/paypal_payment_method_card_icon_142733.png"
                            alt="paypal">
                        <img class="img-fluid rounded-2" src="../assets/img/iconfinder-mastercard-4661633_122834.png"
                            alt="mastercard">
                        <img class="img-fluid rounded-2" src="../assets/img/discover_82082.png" alt="discover">
                        <img class="img-fluid rounded-2" src="../assets/img/amazon-a_82056.png"
                            alt="amazon"><!-- se hai tempo cambia in svg o ico -->
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import{store} from '../store'
export default {
    name: "AppFooter",
    setup() {

        return {store}
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as*;

.row {
padding-top: 1.9rem;
padding-bottom: 1.9rem;
line-height: 1.2;
li{
    line-height: 0.9;
}
}

.subscribe {
    height: 140px;
    background-color: $Shark2;
    button{
        border: none;

    }
    button:hover{
        background-color: $HavelockBlue;
        color: white;
    }
}

.link {

    background-color: $Shark1;

    .my_span {
        padding: 0 10px;
        border: solid 0.1px rgb(87, 87, 87);
    }

    .post li {
        list-style: none;
      /*   border-bottom: solid 0.1px rgb(87, 87, 87); */
    }

    .item {
        border-bottom: solid 0.1px rgb(87, 87, 87);
        width: 100%;

    }
}

.copy {

    background-color: black;
}

.text {
    width: 60%;
}

.call_to_action {
    width: 40%;
}
</style>