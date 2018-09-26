<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>城市:{{cityName}}</p>
        <p>天气:{{tq}}</p>
        <p v-text="count"></p>
        <Button type="primary" @click="this.handleClick">add count</Button>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {getData} from '@/services/api';
    import {FlyResponse, FlyError} from 'flyio';
    import {State, Getter, Action, Mutation} from 'vuex-class';

    @Component
    export default class HelloWorld extends Vue {
        private cityName: string = '';
        private tq: number = 0;

        @State private count: number;
        @Getter private getCount: number;
        @Action private addCount: (val: number) => void;
        @Mutation('ADD_COUNT') private mutationAddCount: (count: number) => void;
        @Prop() private msg: string|any;

        private handleClick() {
//            this.addCount(this.count + 1);
            this.mutationAddCount(this.count + 1);
            console.log(this.count);
            console.log(this.getCount);
        }

        private mounted() {
            getData().then((response: FlyResponse) => {
                if (response.data.success) {
                    this.$Message.info('success');
                    this.cityName = response.data.data.name;
                    this.tq = response.data.data.age;
                }
            }).catch((error: FlyError) => {
                console.log(error);
                this.$Message.error(error.message);
            });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
