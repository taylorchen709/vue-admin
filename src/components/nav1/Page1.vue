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

		<el-table :data="tableData" style="width: 100%">
			<el-table-column prop="date" label="日期" width="180">
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="180">
			</el-table-column>
			<el-table-column prop="address" label="地址">
			</el-table-column>
		</el-table>

		<el-col :span="24" class="toolbar" style="padding-bottom:10px;">
			<el-pagination :current-page="5" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper"
				:total="400" style="float:right">
			</el-pagination>
		</el-col>
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
            date: '2016-11-02',
            name: '123456',
            address: '123456'
          }, {
            date: '2016-11-02',
            name: '123456',
            address: '123456'
          }, {
            date: '2016-11-02',
            name: '123456',
            address: '123456'
          }, {
            date: '2016-11-02',
            name: '123456',
            address: '123456'
          }]
     }
    },
    methods: {
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