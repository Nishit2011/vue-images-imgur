<template>
<div>
    <AppHeader></AppHeader>
    <!--anytime time  Vue router matches the route, its plugged in here -->
    <router-view></router-view>
</div>
   
</template>
<script>
import AppHeader from './components/AppHeader';
export default {
    name:'App',
    components: {
        AppHeader
    }
}
</script>
