<template>
	<section>
		<el-col :span="24" class="toolbar">
			<el-form :inline="true" :model="formInline" class="demo-form-inline">
				<el-form-item>
					<el-date-picker v-model="value1" type="date" placeholder="开始日期" :picker-options="pickerOptions0">
					</el-date-picker>
				</el-form-item>
				<el-form-item>
					<el-date-picker v-model="value1" type="date" placeholder="结束日期" :picker-options="pickerOptions0">
					</el-date-picker>
				</el-form-item>
				<el-form-item>
					<el-input v-model="formInline.user" placeholder="姓名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary">查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<template>
			<el-table :data="tableData" highlight-current-row style="width: 100%;">
				<el-table-column type="index" width="50">
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="180" sortable>
				</el-table-column>
				<el-table-column prop="sex" label="性别" width="100" :formatter="formatSex" sortable>
				</el-table-column>
				<el-table-column prop="age" label="年龄" width="100" sortable>
				</el-table-column>
				<el-table-column prop="birth" label="生日" width="180" sortable>
				</el-table-column>
				<el-table-column prop="addr" label="地址" sortable>
				</el-table-column>
				<el-table-column inline-template :context="_self" label="操作" width="100">
					<span>
					<el-button type="text" size="small">编辑</el-button>
					<el-button type="text" size="small" @click="handleDel(row)">删除</el-button>
				</span>
				</el-table-column>
			</el-table>
		</template>

		<!--<el-col :span="24" class="toolbar" style="padding-bottom:10px;">
			<el-pagination :current-page="1" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
				:total="400" style="float:right">
			</el-pagination>
		</el-col>-->
	</section>
</template>

<script>
  export default {
    data() {
      return {
				formInline: {
					user: ''
				},
				pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
				value1:'',
        tableData: [{
						id:1000,
            name: 'lanqy1',
            sex: 1,
            age: 20,
						birth:'1996-03-02',
						addr:'广东广州天河体育中心'
          }, {
						id:1001,
            name: 'lanqy2',
            sex: 1,
            age: 20,
						birth:'1996-03-02',
						addr:'广东广州天河体育中心'
          }, {
						id:1002,
            name: 'lanqy3',
            sex: 0,
            age: 20,
						birth:'1996-03-02',
						addr:'广东广州天河体育中心'
          }, {
						id:1003,
            name: 'lanqy4',
            sex: 1,
            age: 20,
						birth:'1996-03-02',
						addr:'广东广州天河体育中心'
          }]
     }
    },
    methods: {
			//性别显示转换
			formatSex:function(row,column){
				return row.sex==1?'男':row.sex==0?'女':'未知';
			},
			handleDel:function(row){
				//console.log(row);
				var _this=this;
				this.$confirm('确认删除该记录吗?', '提示', {
					type: 'warning'
				}).then(() => {
					for(var i=0;i<_this.tableData.length;i++){
						if(_this.tableData[i].id==row.id){
							_this.tableData.splice(i,1);
						}
					}
				}).catch(() => {
							
				});
			}
    }
  }
</script>

<style scoped>
	.toolbar .el-form-item {
		margin-bottom: 10px;
	}
	
	.toolbar {
		background: #fff;
		padding: 10px 10px 0px 10px;
	}
</style>