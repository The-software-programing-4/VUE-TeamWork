<template>
    <div>
        <div class="writeContent">
            <div style="margin: 200px 0;"></div>
            <div class="block">
            <el-rate
                v-model="value"
                :colors="colors">
                </el-rate>   
            </div>
            <div style="margin: 20px 0;"></div>
            <el-input type="textarea" :autosize="{ minRows: 6, maxRows: 10}" placeholder="请输入评论" v-model="content">
            </el-input>
            <div style="margin: 50px 0;"></div>
            <el-button @click="addmark" type="success">提交评论</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
    return {
            id: 1,
            username: 'ando',
            content: '',
            thumb: 0,
            reply: 0,
            day: '2022.5.21 15:36:01',
            isthumb: '点赞', 
        value: null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900']  // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' },

    }
  },
    methods: {
        addmark(){
            var url='/api/marks/addmark';

            var now = new Date();
            var year = now.getFullYear().toString(); //得到年份
            var month = (now.getMonth()+1).toString();//得到月份
            var date = now.getDate().toString();//得到日期
            var hour = now.getHours().toString();
            var minute = now.getMinutes().toString();
            var second = now.getSeconds().toString();
            var totdate = year+'-'+month+'-'+date+' '+hour+':'+minute+':'+second;
    
            this.$axios.post(
                url,
                {
                    type: this.$route.params.type,
                    target: this.$route.params.target,
                    uid:this.$store.state.Guid,
                    content: this.content,
                    day: totdate,
                    score: this.value,
                    thumb: 0,
                    reply: 0,
                },
                {
                    headers: {
                        'Content-Type':'application/json'
                    }
                }
            )
            
        }        
    }
}
</script>

<style>

</style>