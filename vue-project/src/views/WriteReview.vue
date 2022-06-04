<template>
    <div>
        <div class="writeContent">
            <el-input type="textarea" autosize placeholder="添加标题" v-model="title">
            </el-input>
            <div style="margin: 20px 0;"></div>
            <el-input type="textarea" :autosize="{ minRows: 6, maxRows: 10}" placeholder="请输入评论" v-model="textarea2">
            </el-input>
            <div style="margin: 50px 0;"></div>
            <el-button type="success">提交评论</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
    return {
        title: '',
        textarea2: ''
    }
  }
}
</script>

<style>

</style>