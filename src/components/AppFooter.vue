<template>
    <footer>
        <div class="container_large">
            <div class="subscribe d-flex align-items-center">
                <div class="container d-flex align-items-center">
                    <div class="text text-center d-flex justify-content-center align-items-center">
                        <i class="fa-regular fa-envelope p-3 me-4 bg-black rounded-5"></i>
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
                    <div class="row align-items-center">
                        <div class="col-3 d-flex flex-column align-items-center gap-5">
                            <div class="logo">
                                <img width="150" class="img-fluid" src="../assets/img/classic_shop_logo_footer.png" alt="">
                            </div>
                            <div class="address text-center">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, autem.</p>
                            </div>
                            <div class="icons d-flex gap-3">
                                <i class="fa-brands fa-facebook-f"></i>
                                <i class="fa-brands fa-twitter"></i>
                                <i class="fa-brands fa-instagram"></i>
                                <i class="fa-brands fa-youtube"></i>
                            </div>
                        </div>
                        <div class="col-3 d-flex flex-column align-items-center gap-5">
                            <h6 class="text-uppercase">top rated product</h6>
                        </div>
                        <div class="col-3 d-flex flex-column align-items-center gap-5">
                            <h6 class="text-uppercase">recent posts</h6>
                        </div>
                        <div class="col-3 d-flex flex-column align-items-center gap-5">
                            <h6 class="text-uppercase">tags</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copy text-center d-flex flex-column">
                <div class="container">
                    <div class="copyright">
                        <i class="fa-regular fa-copyright"></i> 2012 - 2020 | Avada Themes by Temes fusion | All Rights
                        Reserved
                        | Powered by WordPress

                    </div>
                    <div class="payments_methods d-flex justify-content-center gap-3 pt-1">
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
export default {
    name: "AppFooter",
    setup() {

        return {}
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/partials/variables' as*;

.row {
    height: 100%;
}

.subscribe {
    height: 150px;
    background-color: $Shark2;
}

.link {
    height: 345px;
background-color:$Shark1;
}

.copy {
    height: 55px;
    background-color: black;
}

.text {
    width: 60%;
}

.call_to_action {
    width: 40%;
}
</style>