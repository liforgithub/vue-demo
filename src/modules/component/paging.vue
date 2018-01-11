<template>
    <div class="pages">
        <ul class="pagination">
            <template v-if="pageNum > 1">
                <li v-on:click="_call(pageNum - 1)">
                    <a href="javascript:void(0)" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
            </template>
            <template v-for="item in allNumList">
                <li :class={"active" : pageNum == e} key={index} onClick={that._callBack.bind(that,e)}>
                <a href="javascript:void(0)">{e}</a>
                </li>
            </template>
            {that._renderNumList(pageNum < totalPageNum)}
            <template v-if="pageNum > 1">
                <li v-on:click="_call(pageNum + 1)">
                    <a href="javascript:void(0)" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </template>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "paging",
        data() {
            return {
                pageNum,
                pageSize,
                totalCount,
                allNumList,
                totalPageNum
            }
        },
        beforeUpdate() {
            this.pageNum = props['pageNum'];
            this.pageSize = props['pageSize'];
            this.totalCount = props['totalCount'];

            var pageNum = this.pageNum;
            var totalCount = this.totalCount;
            var pageSize = this.pageSize;

            var totalPageNum = 0;
            if (totalCount % pageSize > 0) {
                totalPageNum = parseInt(totalCount / pageSize) + 1;
            } else {
                totalPageNum = parseInt(totalCount / pageSize);
            }

            var afterNum = [], beforeNum = [];

            var startPageNum = pageNum;
            while (startPageNum + 1 <= totalPageNum && afterNum.length < 2) {
                afterNum.push(startPageNum + 1);
                startPageNum = startPageNum + 1;
            }

            var startPageNum = pageNum;
            while (startPageNum - 1 >= 1 && beforeNum.length < 2) {
                beforeNum.push(startPageNum - 1);
                startPageNum = startPageNum - 1;
            }

            var allNumList = [];
            for (var i = beforeNum.length - 1; i >= 0; i--) {
                allNumList.push(beforeNum[i]);
            }
            allNumList.push(pageNum);
            for (var i = 0; i <= afterNum.length - 1; i++) {
                allNumList.push(afterNum[i]);
            }

            if (pageNum - allNumList[0] < 2 && allNumList.length < 5) {
                while (allNumList[0] - 1 >= 1 && allNumList.length < 5) {
                    allNumList.unshift(allNumList[0] - 1);
                }
            }
            if (allNumList[allNumList.length - 1] - pageNum < 2 && allNumList.length < 5) {
                while (allNumList[allNumList.length - 1] + 1 <= totalPageNum && allNumList.length < 5) {
                    allNumList.push(allNumList[allNumList.length - 1] + 1);
                }
            }

            this.allNumList = allNumList;
            this.totalPageNum = totalPageNum;
        },
        methods: {
            _call(pageNum) {
                this.$emit('call', pageNum)
            }
        }
    }
</script>

<style scoped>

</style>