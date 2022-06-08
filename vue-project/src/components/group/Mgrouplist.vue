<template>
<div class="outside">
    <div class="title">
      <b>我管理的小组 </b>
    </div>
    <div class="have" v-if="have===0">
      <h6>很遗憾，您没有管理的小组</h6>
    </div>
    <div class="group-list group-cards">

        <ul>
          
          <li class="" v-for="item in groupData">
          <div class="pic">
            <a @click="toGroup(item.gid)">
              <img :src="item.src" alt="悠长假期" width="48px" height="48px" class="">
            </a>
          </div>
          <div class="info">
            <div class="title">
              <a @click="toGroup(item.gid)" class="">{{item.name}}</a><br>
            </div>
            <span class="num">{{item.number}}</span><br>
          </div>
          </li>
          
      </ul>
      </div>
</div>
</template>
<style scoped>
.have{
  margin-top: 20px;
  font-size: 20px;
  color: green;

}
.group-list {
overflow: hidden;
width: 540px;
  font-size: 13px;
}
.group-list ul{
  float: left;
}
.group-list a{
  font-size: 13px;
}
a:visited {
color: #666699;
text-decoration: none;
}
.group-cards .info {
color: #aaa;
}
.group-cards .title {
margin-top: -1px;
line-height: 1.25;
}
a img {
border-width: 0;
vertical-align: middle;
}
.group-list li .pic {
float: left;
margin-right: 10px;
width: 48px;
height: 48px;
line-height: 0;
position: relative;
}
.group-cards li {
  float: left;
margin: 15px 20px 0 0;
width: 100px;
padding: 10px;
border: 1px solid #eee;
}
li{
  width: 100px;
}
.outside{
  /* border: 1px black solid; */
  display: inline-block;

  /* border: 1px solid; */
}
.title{
  width: 200px;
  color : black;
  font-size: x-large;
  margin-top: 40px;
}
</style>

<script>
export default {
  data() {
    
    return {
      have:1,
      groupData:[
        {
          gid:0,
          src:'https://img2.doubanio.com/icon/g245017-3.jpg',
          number:91,
          name:'悠长假期'
        },
        {
          gid:0,
          src:'https://img2.doubanio.com/icon/g245017-3.jpg',
          number:91,
          name:'悠长假期'
        },
        {
          gid:0,
          src:'https://img2.doubanio.com/icon/g245017-3.jpg',
          number:91,
          name:'悠长假期'
        },
      ],
      discussData: [
        {
          id:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        },
        {id:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        },
        {id:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        },
        {id:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        },
        {id:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        },
        {id:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        },
        {id:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        },
         {id:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        },
         {id:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        },
         {id:0,
          name:"小组名称",
          respose: 100,
          leader: "selmissL", 
          time: "5.20"
        }
      ],
    };
  },
  methods: {
    download_movielist() {

      this.$axios.post("/api/group/listgroupmy").then((res) => {
        console.log(res.data);
        this.groupData = res.data.listGroup;
        for(var i=0;i<res.data.listGroup.length;i++)
        {
          this.groupData[i].src=this.$hostURL+'/'+this.groupData[i].src;
        }
        if(this.groupData.length===0)
        this.have=0;
      });

    },
    clickMv(val1, val2){

            console.log("send"+val1+" "+val2);
            this.$emit('change', val1, val2);//子组件给父组件传值，事件为change
        },
    totext(tid)
    {
      console.log("toinfo")
      this.$router.push({
        path:"/group/showtext"
      })
    },
    toGroup(gid)
    {
      this.$emit('c2p', gid);
      console.log("传出："+gid)
    }

  },
  filters: {
    ellipsis: function (value) {
      if (!value) return "";
      if (value.length > 10) {
        return value.slice(0, 10) + "...";
      }
      return value;
    },
  },
  created() {
    this.download_movielist();
  },
  rateChange(value) {
    console.log(value);
  },
};
</script>