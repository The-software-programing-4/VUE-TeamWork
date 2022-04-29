<template>
  <div>
    <div>
      <el-cascader 
        :options="options"
        v-model="selectedOptions"
        @change="handleChange"
        style="width: 100%;"
      >
      </el-cascader>
    </div>
  </div>
</template>

<script>
import { regionData, CodeToText } from "element-china-area-data";

export default {
  name: "app",
  data() {
    return {
      options: regionData,
      selectedOptions: []
    };
  },

  methods: {
    handleChange() {
      var loc = "";
      for (let i = 0; i < this.selectedOptions.length; i++) {
        loc += CodeToText[this.selectedOptions[i]];
      }
      alert(loc);
    }
  }
};
</script>

