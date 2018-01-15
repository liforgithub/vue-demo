<template>
    <div>
        <Head></Head>
        <div class="contain">
            <Left choose-tab="search"></Left>
            <div class="right-content">
                <h3>搜索引擎</h3>
                <div class="content">
                    <div class="e-content">
                        <a class="btn btn-sm btn-primary" @click="setHerf('baidu')">百度</a>
                        <a class="btn btn-sm btn-primary" @click="setHerf('uc')">UC</a>
                        <a class="btn btn-sm btn-primary" @click="setHerf('360')">360</a>
                    </div>
                    <div class="table-cont">
                        <iframe id="show-iframe" frameborder=0 name="showHere" scrolling=auto :src="iframeHerf"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Head from '../component/head.vue';
    import Left from '../component/left.vue';

    export default {
        name: "searchengines",
        data() {
            return {
                iframeHerf: '',
            }
        },
        components: {
            Head,
            Left
        },
        mounted() {
            const oIframe = document.getElementById('show-iframe');
            const deviceWidth = document.documentElement.clientWidth;
            const deviceHeight = document.documentElement.clientHeight;
            oIframe.style.width = deviceWidth + 'px';
            oIframe.style.height = deviceHeight + 'px';
        },
        methods: {
            setHerf(flag) {
                let href = '';
                switch (flag) {
                    case 'baidu':
                        href = 'https://www.baidu.com';
                        break;
                    case 'uc':
                        href = 'http://www.uc123.com/';
                        break;
                    case '360':
                        href = 'https://hao.360.cn';
                        break;
                }
                this.iframeHerf = href;
            }
        }
    }
</script>

<style scoped>

</style>