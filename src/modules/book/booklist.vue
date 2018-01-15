<template>
    <div>
        <Head></Head>
        <div class="contain">
            <Left choose-tab="booklist"></Left>
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
                                        <label class="input-icon">
                                            <input placeholder="图书名称" class="form-input" v-model="search.bookName"
                                                   type="text"/>
                                        </label>
                                    </div>
                                </td>
                            </div>
                            <div class="search-cont">
                                <a class="btn btn-sm btn-primary" @click="queryBookList('search')">搜索</a>&nbsp;&nbsp;&nbsp;
                                <a class="btn btn-sm" style='background-color: gray; color: white'
                                   @click="resetBookName">重置</a>
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
                                <td>
                                    <a class="col-blue" href="javascript:void(0)" @click="lookBook(item)">查看</a>
                                    <a class="col-blue" href="javascript:void(0)" @click="editBook(item)">修改</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <Paging :page-obj="{pageObj}" @call="changePageNum"></Paging>
                    <EditBook :edit-item="{editItem}" @call="updateBookDetail"></EditBook>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Immutable from 'immutable';
    import Head from '../component/head.vue';
    import Left from '../component/left.vue';
    import Paging from '../component/paging.vue';

    import EditBook from './components/editBook.vue';
    import request from '../../util/request';

    export default {
        name: "booklist",
        data() {
            return {
                editItem: {},
                search: {
                    bookName: ''
                },
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
            Paging,
            EditBook
        },
        created() {
            this.queryBookList();
        },
        methods: {
            changePageNum(page) {
                this.pageObj.pageNum = page;
                this.queryBookList();
            },
            resetBookName() {
                this.search.bookName = '';
            },
            lookBook(item) {
                //由于动态路由也是传递params的，所以在 this.$router.push() 方法中path不能和params一起使用，否则params将无效。需要用name来指定页面。
                this.$router.push({name: 'detail', params: {bookDetail: item}})
            },
            editBook(item) {
                this.editItem = Immutable.fromJS(item).toJS();
                $("#alertEditTextPic").modal("show");
            },
            queryBookList(type = '') {
                if (type === 'search') {
                    //重新搜索，初始化分页条件
                    this.pageObj.pageNum = 1;
                    this.pageObj.pageSize = 10;
                    this.pageObj.totalCount = 0;
                }
                request
                    .get('/api/books/getBookList', {
                        bookName: this.search.bookName,
                        pageNum: this.pageObj.pageNum - 1,
                        pageSize: this.pageObj.pageSize
                    })
                    .then(res => {
                        this.bookObj.items = res.dataList;
                        this.pageObj.totalCount = res.totalCount;
                    });
            },
            updateBookDetail(item) {
                request
                    .post('/api/books/update', item)
                    .then(res => {
                        if (res.result === 'ok') {
                            this.queryBookList();
                        }
                    });
            }
        }
    }
</script>