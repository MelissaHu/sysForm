<template>
  <div id="app">
    <el-button  type="primary" @click="dialogVisible = true">点击弹出表单</el-button>
    <el-dialog title="添加跟进记录" :visible.sync="dialogVisible" :closeOnClickModal="false">

    <el-form :model="form"  :rules="rules" label-width="90px" ref="form" >
      <el-form-item label="商户状态" prop="intention">
         <el-select v-model="form.intention" placeholder="请选择商户状态">
            <el-option label="高意向" value="3"></el-option>
            <el-option label="中意向" value="2"></el-option>
            <el-option label="低意向" value="1"></el-option>
         </el-select>
       
         <a href="#" class="tips">我该如何选择商户状态？</a>
      </el-form-item>
      <el-form-item label="商户标签">
           <el-tag :key="`${tag}-${index}`" v-for="(tag,index) in form.tags" closable :disable-transitions="false" @close="handleTagRemove(tag)"> {{tag}}</el-tag>
           <el-input class="input-new-tag" maxlength="12" v-if="tagInput.visible" v-model="tagInput.value" ref="saveTagInput" size="small" @keyup.enter.native="handleTagCreate" @blur="handleTagCreate"></el-input>
           <el-button v-if="form.tags.length < 5 && !tagInput.visible" class="button-new-tag" size="small" @click="tagInput.visible = true">添加</el-button>
       </el-form-item>
        <el-form-item label="维护内容" prop="content">
           <el-input v-model="form.content" type="textarea"  ref="adv04"></el-input>
        </el-form-item>
        <el-form-item label="详情编辑">
        <el-switch v-model="form.editDetails"></el-switch>
        </el-form-item>
         <div >
        <el-form-item label="痛点/需求" prop="requirement" >
           <el-input v-model="form.requirement" placeholder="客户对VIP的哪方面权益更感兴趣" :disabled="!form.editDetails"  ref="adv01"></el-input>
        </el-form-item>
        <el-form-item label="顾虑点" prop="carept" >
           <el-input v-model="form.carept" placeholder="客户在转化付费点过程中，主要顾虑哪些问题" :disabled="!form.editDetails" ref="adv02"></el-input>
        </el-form-item>
        <el-form-item label="维护程度" prop="mtLevel" >
           <el-input v-model="form.mtLevel"  placeholder="客户讨论到什么阶段？价值输出/谈价格等" :disabled="!form.editDetails" ref="adv03"></el-input>
        </el-form-item>      
         <el-form-item label="其他信息" prop="others">
           <el-input v-model="form.others" placeholder="其他信息" :disabled="!form.editDetails" ref="adv05"></el-input>
        </el-form-item>
        </div>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submit" >保存</el-button>
      <a href="#" class="check-record">查看操作记录</a>
    </div>
  </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
      return {  
        form:{
          intention:'',
          requirement:'',
          carept:'',
          mtLevel:'',
          content:'',
          others:'',
          editDetails:false,
          tags:[]
        },
        tagInput:{
          visible:false,
          value:''
        },
        dialogVisible:false,       
      };
    },
    computed:{
      rules(){
        return {
          intention:[
            {required: true,message:'这为必选选项'}
          ],
          requirement:[
            {required: this.form.editDetails,message:'这为必填选项'},
            {max: 60,message:'最大可输入60个字符'}
          ],
          carept:[
           {required: this.form.editDetails,message:'这为必填选项'},
            {max: 60,message:'最大可输入60个字符'}
          ], 
          mtLevel:[
            {required: this.form.editDetails,message:'这为必填选项'},
            {max: 60,message:'最大可输入60个字符'}
          ],
           content:[
           {required: true,message:'这为必填选项'},
            {max: 200,message:'最大可输入200个字符'}
          ]}        
      }    
    },
    methods:{
      handleTagRemove(tag){
        this.form.tags.splice(this.form.tags.indexOf(tag),1);        
      },
  

      handleTagCreate(){
        let value = this.tagInput.value;
        if(value){        

          this.form.tags.push(value);      
        }
        this.tagInput.visible = false;
        this.tagInput.value = '';
     
       },
       submit() {
        this.$refs.form.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}

  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
  .tips{
    margin-left:10px;
    color:#409EFF
  }
  .check-record{
    margin-left:10px;
    color:#409EFF;
    float: left;
  }
</style>


