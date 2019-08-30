<template>
    <div>
        <Product :product="product"></Product>
        <h1>{{product.description}}</h1>
    </div>
</template>

<script>
import {db} from "@/plugins/firebase"
import Product from "@/components/product"

export default {
    scrollToTop: true,
    data() {
        return {
            product: ''
        }
    },
    validate({params}) {
        return params.id !== undefined;
    },
    components: {
        Product
    },
    // async asyncData({params}) {
    //     const response = await db.collection("products")
    //                     .doc(params.id)
    //                     .get();
    //     const product = await response.data();
    //     return {product};
    // },
    firestore() {
        return {
            product: db
                .collection('products')
                .doc(this.$route.params.id)
        }
    }
}
</script>

<style lang="scss" scoped>

</style>