<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue, Watch} from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
    import { Route, RawLocation } from 'vue-router';

    @Component({
        components: {
            HelloWorld,
        },
    })
    export default class Home extends Vue {
        @Watch('$route')
        private onChildChanged(val: Route, oldVal: Route) {
            console.log(222);
            console.log(val, oldVal);
        }

        private beforeRouteUpdate(to: Route, from: Route, next: () => void): void {
            console.log(1);
            console.log(to, from);
            next();
        }
    }
</script>
