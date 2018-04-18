<template>
<div class="ListBox">
     <el-button  type="type" @click="outerVisible = true">弹出对话框</el-button>
  
  <el-dialog title="Outer Dialog" :visible.sync="outerVisible">
    <el-dialog
        width="30%"
        title="Inner Dialog"
        :visible.sync="innerVisible"
        append-to-body>
    </el-dialog>
    <div slot="footer" class="dialog-footer">
      <el-button @click="outerVisible = false">Cancel</el-button>
      <el-button type="primary" @click="innerVisible = true">open the inner Dialog</el-button>
    </div>
  </el-dialog>
</div>
</template>

<script>
export default {
  data() {
      return {
        outerVisible: false,
        innerVisible: false
      };
    }
}
</script>

<style>
.ListBox{
    border:1px solid green;
}
</style>

