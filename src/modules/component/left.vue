<template>
    <div class="slide-left">
        <ul>
            <li :class="{active: chooseTab === 'booklist'}">
                <router-link :to="{path:'/booklist'}"><a href="javascript:void(0)" title="图书列表">图书列表</a></router-link>
            </li>
            <li :class="{active: chooseTab === 'search'}">
                <router-link :to="{path:'/search'}"><a href="javascript:void(0)" title="搜索引擎">搜索引擎</a></router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "left",
        props: [
            'chooseTab'
        ]
    }
</script>

<style scoped>

</style>