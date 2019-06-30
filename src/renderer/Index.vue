<template>
<div id="main" class="page">
    <header class="header">
        <Headbar></Headbar>
    </header>
    <div class="page-content d-flex align-items-stretch">
        <div id="content" class="container-fluid">
            <!-- Roure view-->
            <router-view></router-view>
        </div>
    </div>
</div>
</template>
<script>
import Headbar from '@/components/Headbar.vue'

export default {
    data() {
        return {
            //
        }
    },
    mounted() {
        console.log('Index component mounted')
    },
    components: {
        Headbar
    }
}
</script>
