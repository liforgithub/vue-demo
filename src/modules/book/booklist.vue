<template>
    <div>
        <Head></Head>
        <div class="contain">
            <Left></Left>
            <div class="right-content">
                <h3>图书管理</h3>
                <div class="content">
                    <ul class="tab-li">
                        <li><a href="javascript:void(0)" title="图书列表">图书列表</a></li>
                    </ul>
                    <div class="search">
                        <table>
                            <div class="search-cont">
                                <td>
                                    <div class="search-left">图书名称：</div>
                                    <div class="search-right">
                                        <label class="input-icon"><input placeholder="图书名称" class="form-input"
                                                                         type="text"/></label>
                                    </div>
                                </td>
                            </div>
                            <div class="search-cont">
                                <a class="btn btn-sm btn-primary">搜索</a>&nbsp;&nbsp;&nbsp;
                                <a class="btn btn-sm" style='background-color: gray; color: white'>重置</a>
                            </div>
                        </table>
                    </div>
                    <div class="table-cont">
                        <table>
                            <thead>
                            <tr>
                                <th class="text-left fans">封面</th>
                                <th>名称</th>
                                <th>作者</th>
                                <th>价格</th>
                                <th>操作</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="item in bookObj.items">
                                <td><img :src="item.book_photo_url" alt=""></td>
                                <td>{{item.book_name}}</td>
                                <td>{{item.book_author}}</td>
                                <td>{{item.book_price}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <Paging :page-obj="{pageObj}" @call="changePageNum" :page="page"></Paging>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Head from '../component/head.vue';
    import Left from '../component/left.vue';
    import Paging from '../component/paging.vue';
    import request from '../../util/request';

    export default {
        name: "booklist",
        data() {
            return {
                bookObj: {
                    items: []
                },
                pageObj: {
                    pageNum: 1,
                    pageSize: 10,
                    totalCount: 0
                }
            }
        },
        components: {
            Head,
            Left,
            Paging
        },
        created() {
            this.queryBookList();
        },
        methods: {
            changePageNum(page) {
                this.pageObj.pageNum = page;
                this.queryBookList();
            },
            queryBookList() {
                request
                    .get('/api/books/getBookList', {
                        pageNum: this.pageObj.pageNum - 1,
                        pageSize: this.pageObj.pageSize
                    })
                    .then(res => {
                        this.bookObj.items = res.dataList;
                        this.pageObj.totalCount = res.totalCount;
                    });
            }
        }
    }
</script>

<style scoped>

</style>