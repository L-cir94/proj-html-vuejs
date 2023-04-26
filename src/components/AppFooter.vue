<template>
    <footer>
        <div class="container">
            <div class="subscribe d-flex pt-5 pb-5">
                <div class="text text-center d-flex justify-content-center align-items-center">
                icona
                Subscribe now and get special offers
                </div>
                <div class="call_to_action d-flex justify-content-center align-items-center">
                    <input type="text" placeholder="insert your email">
                    <button>SEND</button>
                </div>
            </div>
            <div class="link">
                <div class="row pt-3 pb-3">
                    <div class="col-3 d-flex flex-column">
                        <div class="logo">logo</div>
                    </div>
                    <div class="col-3 d-flex flex-column">

                    </div>
                    <div class="col-3 d-flex flex-column">

                    </div>
                    <div class="col-3 d-flex flex-column">

                    </div>
                </div>
            </div>
            <div class="copy text-center d-flex flex-column">
                <div class="copyright">
                    <i class="fa fa-copyright" aria-hidden="true"></i>
                </div>
                <div class="payments_methods d-flex justify-content-center">
                    payments_methods
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

.subscribe {
    height: 150px;
    border: dashed;
}

.link {
    height: 350px;
    border: dashed;
}

.copy {
    height: 50px;
    border: dashed;
}

.text {
    width: 60%;
}

.call_to_action {
    width: 40%;
}
</style>