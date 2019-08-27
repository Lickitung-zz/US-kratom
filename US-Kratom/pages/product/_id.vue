<template>
    <div>
        <Product :product="product"></Product>
    </div>
</template>

<script>
import {db} from "@/plugins/firebase"
import Product from "@/components/product"

export default {
    components: {
        Product
    },
    async asyncData({params}) {
        const response = await db.collection("products")
                        .doc(params.id)
                        .get();
        const product = await response.data();
        return {product};
    }
}
</script>

<style lang="scss" scoped>

</style>