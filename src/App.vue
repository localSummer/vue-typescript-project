<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import $http from 'flyio';

    @Component
    export default class App extends Vue {
        private beforeMount() {
            console.log(this.$store);
            console.log(this.$route);
            console.log(this.$router);
            // 添加请求拦截器
            $http.interceptors.request.use((request) => {
                // 打印出请求体
                console.log(request);
                // 可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
                return request;
            });

            // 添加响应拦截器，响应拦截器会在then/catch处理之前执行
            $http.interceptors.response.use(
                (response) => {
                    // 只将请求结果的data字段返回
                    console.log(response);
                    return response;
                },
                (err) => {
                    // 发生网络错误后会走到这里
                    console.log(err);
                    return Promise.reject(err);
                },
            );
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
