<template>
    <div class="modal fade alertEditTextPic in" id="alertEditTextPic" tabIndex="-1" role="dialog"
         style="display: block">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">书籍详细信息</h4>
                </div>
                <div class="modal-body">
                    <ul>
                        <li>
                            <div class="inline">
                                <h5>名称</h5>
                                <input type="text" placeholder="名称" v-model="bookDetail.book_name"
                                       style="border: white; background-color: white" disabled/>
                            </div>
                        </li>
                        <li>
                            <div class="inline">
                                <h5>作者</h5>
                                <input type="text" placeholder="作者" v-model="bookDetail.book_author"
                                       style="border: white; background-color: white" disabled/>
                            </div>
                        </li>
                        <li>
                            <div class="inline">
                                <h5>价格</h5>
                                <input type="text" placeholder="价格" v-model="bookDetail.book_price"
                                       style="border: white; background-color: white" disabled/>
                            </div>
                        </li>
                    </ul>
                    <router-link :to="{path: '/booklist'}"><a class="btn-bg ensure" data-dismiss="modal"
                                                              aria-label="Close">返回列表页</a></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bookdetail",
        data() {
            return {
                bookDetail: this.$route.params.bookDetail
            }
        },
    }
</script>

<style scoped>

</style>