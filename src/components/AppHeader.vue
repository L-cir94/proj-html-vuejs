<template>
    <header>
        <div class="container">
            <div class="h_top d-flex justify-content-between align-items-center">
                <div class="icons">
                    icona
                    icona
                    icona
                    icona
                </div>
                <nav class="d-flex">
                    <ul class="d-flex gap-5 align-items-center">
                        <li>Shopping Cart</li>
                        <li>MyAccount</li>
                        <li>Cart</li>
                    </ul>
                </nav>
            </div>
            <div class="h_bottom d-flex justify-content-between align-items-center">
                <div class="logo">
                    logo qui
                </div>
                <nav>
                    <ul class="d-flex gap-5">
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Products</li>
                        <li>Categories</li>
                        <li>News</li>
                        <li>Elements</li>
                        <li><button>SHOP NOW!</button></li>
                        <li><input type="search">ico</li>
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
    height: 140px;
    border: dashed;
}

.h_top {
    width: 100%;
    height: 50px;
    border: dashed;
}

.h_bottom {
    width: 100%;
    height: 90px;
    border: dashed;
}
</style>