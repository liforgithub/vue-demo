<template>
    <div class="modal fade alertEditTextPic" id="alertEditTextPic" tabIndex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h4 class="modal-title">书籍详细信息</h4>
                </div>
                <div class="modal-body">
                    <ul>
                        <li>
                            <div class="inline">
                                <h5>名称</h5>
                                <input type="text" placeholder="名称" v-model="bookDetail.book_name"/>
                            </div>
                        </li>
                        <li>
                            <div class="inline">
                                <h5>作者</h5>
                                <input type="text" placeholder="作者" v-model="bookDetail.book_author"/>
                            </div>
                        </li>
                        <li>
                            <div class="inline">
                                <h5>价格</h5>
                                <input type="text" placeholder="价格" v-model="bookDetail.book_price"/>
                            </div>
                        </li>
                    </ul>
                    <a class="btn-bg ensure" data-dismiss="modal" aria-label="Close" @click="saveDetail">确定</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "edit-book",
        data() {
            return {
                bookDetail: {}
            }
        },
        props: [
            'editItem'
        ],
        watch: {
            editItem: {
                handler: function (val) {
                    this.bookDetail = val.editItem;
                },
                deep: true
            }
        },
        methods: {
            saveDetail() {
                this.$emit('call', this.bookDetail);
            }
        }
    }
</script>

<style scoped>

</style>