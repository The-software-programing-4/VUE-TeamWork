<template>
  <div class="Content-Main">
    <div class="Content-Main1">
        <h1>举报</h1>
    </div>
    <form action="" method="post" class="form-report">
        <label>
            <span>举报类型:</span>
            <el-select v-model="value" placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </label>
        <label>
            <span>举报原因:</span>
            <textarea id="describe" name="describe" placeholder="请详细填写举报理由，有利于审核，不得少于8个字"></textarea>
        </label>
 
        <label>
            <span>举报内容:</span>
            <textarea id="email" name="email" placeholder="请详细填写举报内容"></textarea>
        </label>
        <label>
            <span>填写邮箱</span>
            <textarea id="email" name="email" placeholder="请填写正确的邮箱地址"></textarea>
        </label>
        <label>
            <input type="button" @click="addreport" class="button" value="Send">
        </label>
    </form>
    </div>
</template>

<script>
export default {
    data(){
        return {
            options: [{
          value: '选项1',
          label: '涉及诈骗'
        }, {
          value: '选项2',
          label: '涉及侵权'
        }, {
          value: '选项3',
          label: '虚假内容'
        }, {
          value: '选项4',
          label: '垃圾信息'
        }, {
          value: '选项5',
          label: '色情信息'
        }],
        value: '',
            reason: '',
            type: '',
            content: '',
        }
    },
    methods: {
        addreport(){
            var url='/api/addreport';
            this.$axios.post(
                url,
                {
                    mid: this.$route.params.mid,
                    uid1: this.$store.state.uid,
                    uid2: 1,
                    reason: this.reason,
                    type: this.value,
                    content: this.content
                },
                {
                    headers: {
                        'Content-Type':'application/json'
                    }
                }
            )
            alert('举报成功');
            this.$router.push(
                {
                    path:"/book/bookInfo",
                    query:{
                        bookid: this.$route.params.bookid,
                    }
                }
            )
        }
    }
}
</script>

<style scoped>
.Content-Main{
            max-width: 500px;
            margin: auto;
            margin-top: 50px;
            padding: 20px 30px 20px 30px;
            font: 12px "Helvetica Neue", Helvetica, Arial, sans-serif;
            text-shadow: 1px 1px 1px #FFF;
            border: 1px solid #DDD;
            border-radius: 5px;
            color: #888;
            background: #FFF;
        }
        .Content-Main h1{
            display: block;
            padding: 0px 0px 10px 40px;
            margin: -10px -30px 30px -30px;
            font: 25px "Helvetica Neue", Helvetica, Arial, sans-serif;
            border-bottom: 1px solid #DADADA;
            color: #888;
        }
        .Content-Main h1>span{
            display: block;
            font-size: 11px;
        }
        .Content-Main label{
            display: block;
            margin: 0px 0px 5px;
        }
        .Content-Main label>span{
            float: left;
            width: 20%;
            padding-right: 10px;
            margin-top: 10px;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-weight: bold;
            text-align: right;
            color: #333;
        }
        .Content-Main input[type="text"],.Content-Main textarea{
            width: 70%;
            height: 20px;
            padding: 5px 0px 5px 5px;
            margin-bottom: 16px;
            margin-right: 6px;
            margin-top: 2px;
            line-height: 15px;
            border-radius: 4px;
            border: 1px solid #CCC;
            color: #888;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        }
        .select1{
            width: 71%;
            height: 35px;
            margin-bottom: 16px;
            margin-right: 6px;
            margin-top: 2px;
            line-height: 15px;
            padding: 5px 0px 5px 5px;
            border-radius: 4px;
            border: 1px solid #CCC;
            color: #888;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        }
        .select2{
            width: 25%;
            height: auto;
            padding-top: 1px;
            padding-bottom: 3px;
            padding-left: 1px;
            margin-top: 5px;
            margin-bottom: 10px;
            border-radius: 4px;
            border: 1px solid #CCC;
            color: #888;
            -webkit-border-radius: 4px;
            -moz-border-radius: 4px;
            -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        }
        .Content-Main textarea{
            width: 70%;
            height: 100px;
            padding: 5px 0px 0px 5px;
        }
        #url{
            width: 70%;
            height: auto;
            padding: 5px 0px 25px 5px;
        }
        #describe{
            width: 70%;
            height: auto;
            padding: 5px 0px 80px 5px;
        }
        #email{
            width: 70%;
            height: auto;
            padding: 5px 0px 5px 5px;
        }
        #verifiation code{
            width: 20px;
            height: auto;
        }
        .button{
            padding: 10px 25px 10px 25px;
            margin-left: 111px;
            border-radius: 4px;
            border:1px solid #CCC;
            background: #FFF;
            color: #333;
        }
        .button:hover{
            color: #333;
            background-color: #EBEBEB;
            border-color: #ADADAD;
        }

</style>