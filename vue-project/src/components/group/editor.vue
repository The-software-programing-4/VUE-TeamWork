<template>
    <div class="out">
        <div class="title">
            <div class="img">
            <img :src="this.src"></div>
            <div class="name">在 {{this.name}} 小组中发起讨论</div>
        </div>
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
    vertical-align: middle;
    margin-bottom: 10px;
    height: 42px;

}
.biaoti{
    width: 500px;
    display: inline-block;
}
.title{
    width: 500px;
    margin: 10px;
    vertical-align: middle;
    background: #f8f8f8;
    margin-left: 18%;
    text-align: left;
    padding-left: 5%;
}
.img{
    display: inline-block;
    vertical-align: middle;
}
.title img{
    width: 48px;
}
.name{
    display: inline-block;
    margin: 30px 30px;
    
}
.out{
    text-align:center;
    margin: auto;
}
.editor{
    margin: auto;
    width: 70%;
}
</style>
<script>
import Vue from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
export default Vue.extend({
    components: { Editor, Toolbar },
    data() {
        return {
            status:0,
            src:"https://img2.doubanio.com/view/group/sqxs/public/d07b495448be651.jpg",
            name:'村庄爱好者',
            editor: null,
            textarea: "",
            html: '<p>hello</p>',

            toolbarConfig: { },
            editorConfig: { placeholder: '请输入内容...',
                             MENU_CONF: {
                                 'uploadImage':{
                                     server: this.$hostURL+"/api/group/uploadimg",
                                     fieldName: 'file',
                                     customInsert(res, insertFn) {
                                         console.log(res.data);
                                        insertFn("http://127.0.0.1:8080"+res.data.url, 
                                        res.data.alt, res.data.href)
                                    },
                                 },
                                 
                             } 
                          },
            mode: 'default', // or 'simple'
        }
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
        }
    },
    mounted() {
        // 模拟 ajax 请求，异步渲染编辑器
        setTimeout(() => {
            this.html = '<p>请输入内容</p>'
        }, 1500)
    },
    beforeDestroy() {
        const editor = this.editor
        if (editor == null) return
        editor.destroy() // 组件销毁时，及时销毁编辑器
    },
    
})
</script>
