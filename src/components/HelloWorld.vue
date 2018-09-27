<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>城市:{{cityName}}</p>
        <p>天气:{{tq}}</p>
        <p v-text="count"></p>
        <Button type="primary" @click="this.handleClick">add count</Button>
    </div>
</template>

<script src='../businessLogic/components/hello-world.ts'></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
