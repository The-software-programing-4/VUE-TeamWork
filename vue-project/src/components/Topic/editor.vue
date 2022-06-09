<template>
    <div class="out">
        
        <div class="biaoti">
            
        <el-input
            type="textarea"
            :rows="1"
            placeholder="请输入标题"
            v-model="textarea"
            style="font-size:20px;">
            </el-input>
        </div>
        <div class="button">
            <el-button type="success" @click="this.submit">发布</el-button>
        </div>
        <div v-if="status===1" v-html="this.html">

        </div>
        <div v-if="status===0" class="editor">
        <div style="border: 1px solid #ccc;">
        <Toolbar
            style="border-bottom: 1px solid #ccc;width:100%"
            :editor="editor"
            :defaultConfig="toolbarConfig"
            :mode="mode"

        />
        <Editor
            style="width:100%; height: 500px; overflow-y: hidden;"
            v-model="html"
            :defaultConfig="editorConfig"
            :mode="mode"
            @onCreated="onCreated"
        />
        </div>
        
    </div>
    </div>
</template>
<style src="@wangeditor/editor/dist/css/style.css"></style>
<style scoped>
.button{
display: inline-block;
    vertical-align: top;
    margin-bottom: 10px;
    height: 42px;
    margin-left: 20px;
}
.biaoti{
    width: 70%;
    text-align: left;
    display: inline-block;
}

.img{
    display: inline-block;
    vertical-align: middle;
}

.name{
    display: inline-block;
    margin: 30px 30px;
    
}
.out{
    text-align:left;
    margin: 0;
}
.editor{
    margin: 0;
    width: 100%;
}
</style>
<script>
import Vue from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
export default Vue.extend({
    components: { Editor, Toolbar },
    data() {
        return {
            gid:'',

            status:0,
            src:"https://img2.doubanio.com/view/group/sqxs/public/d07b495448be651.jpg",
            name:'村庄爱好者',
            editor: null,
            textarea: "",
            html: '',
            time:'',
            toolbarConfig: { },
            editorConfig: { placeholder: '请输入不少于25字内容...',
                             MENU_CONF: {
                                 'uploadImage':{
                                     server: this.$hostURL+"/api/group/uploadimg",
                                     fieldName: 'file',
                                     customInsert(res, insertFn) {
                                         console.log(res.data);
                                        insertFn("http://39.105.102.182:8080"+res.data.url, 
                                        res.data.alt, res.data.href)
                                    },
                                 },
                                 
                             } 
                          },
            mode: 'default', // or 'simple'
        }
    },
    props:{
        tid:Number
    },
    methods: {
        onCreated(editor) {
            this.editor = Object.seal(editor) // 一定要用 Object.seal() ，否则会报错
        },
        submit()
        {
            if(this.status===0)
            this.status=1;
            else this.status=0;
             var _this = this;
        let yy = new Date().getFullYear();
        let mm = new Date().getMonth()+1;
        let dd = new Date().getDate();
        let hh = new Date().getHours();
        let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
        let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
        
        var time=yy+'-'+mm+'-'+dd+' '+hh+':'+mf+':'+ss;
        console.log(time);
        this.time=time;
            var url='/api/topic/adddiscusst'
            this.$axios.post(url,{
                tid:parseInt(this.tid),
                content:this.html,
                title:this.textarea,
                time:this.time,
            }).then(res=>{
                console.log(res.data)
            })
            //this.$router.go(0)
            this.$message("发布成功")
        },
        getData()
        {
            console.log("搜索"+this.gid)
            this.$axios.post("/api/group/getgroup",{gid:parseInt(this.gid)}).then((res) => {
                console.log(res.data);
                this.src = res.data.groupData.src;
                this.name = res.data.groupData.name;
                this.src=this.$hostURL+'/'+this.src;
            });
        }
    },
    mounted() {
        // 模拟 ajax 请求，异步渲染编辑器
        setTimeout(() => {
            this.html = ''
        }, 1500)
    },
    beforeDestroy() {
        const editor = this.editor
        if (editor == null) return
        editor.destroy() // 组件销毁时，及时销毁编辑器
    },
    created(){
        //this.gid=this.$route.query.gid;
        //this.getData();
    }
    
})
</script>
