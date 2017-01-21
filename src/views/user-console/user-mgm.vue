<template>
    <v-layout>
        <section>
            <!--工具条-->
            <el-col :span="24" class="toolbar">
                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item>
                        <el-input v-model="formInline.user" placeholder="姓名"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button>查询</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="handleAdd">新增</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
            <!--列表-->
            <template>
                <el-table :data="tableData" highlight-current-row v-loading="listLoading" style="width: 100%;">
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
					<el-button type="text" size="small" @click="handleEdit(row)">编辑</el-button>
					<el-button type="text" size="small" @click="handleDel(row)">删除</el-button>
				</span>
                    </el-table-column>
                </el-table>
            </template>
            <!--分页-->
            <el-col :span="24" class="toolbar" style="padding-bottom:10px;">
                <el-pagination
                        :current-page="tableMeta.currentPage"
                        :page-sizes="tableMeta.pageSize"
                        :page-size="tableMeta.pageSize[0]"
                        :total="tableData.length"
                        layout="total, sizes, prev, pager, next, jumper"
                        style="float:right">
                </el-pagination>
            </el-col>


            <!--编辑界面-->
            <el-dialog :title="editFormTtile" v-model="editFormVisible" :close-on-click-modal="false">
                <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="editForm.name" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="性别">
                        <!--<el-select v-model="editForm.sex" placeholder="请选择性别">
                            <el-option label="男" :value="1"></el-option>
                            <el-option label="女" :value="0"></el-option>
                        </el-select>-->
                        <el-radio-group v-model="editForm.sex">
                            <el-radio class="radio" :label="1">男</el-radio>
                            <el-radio class="radio" :label="0">女</el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="年龄">
                        <el-input-number v-model="editForm.age" :min="0" :max="200"></el-input-number>
                    </el-form-item>
                    <el-form-item label="生日">
                        <el-date-picker type="date" placeholder="选择日期" v-model="editForm.birth"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="地址">
                        <el-input type="textarea" v-model="editForm.addr"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click.native="editFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click.native="editSubmit" :loading="editLoading">{{btnEditText}}
                    </el-button>
                </div>
            </el-dialog>
        </section>
    </v-layout>
</template>

<script lang="babel">
  import util from '../../common/util'
  import NProgress from 'nprogress';
  import Layout from '../shared/layout.vue'
  import _ from 'lodash';
  export default {
    mounted(){
      console.log('========', _.clone(this.$http.defaults.headers));
      var ath = 'handler/212';
      var free = 'vue_man';
      this.$http.get(ath).then((payload) => {
        console.log('payload', payload.data)
        this.tableData = [[payload.data]];

        util.deepInTranWithDateObject(this.tableData, 'yyyy-MM-dd')
      }).catch(error => {
        console.log('line-error', error)

      })
    },
    component: {'v-layout':Layout},
    data() {
      return {
        tableMeta: {
          currentPage: 1,
          pageSize: [20, 100, 200, 500, 1000]
        },
        formInline: {
          user: ''
        },
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        value1: '',
        editFormVisible: false,//编辑界面显是否显示
        editFormTtile: '编辑',//编辑界面标题
        //编辑界面数据
        editForm: {},
        editLoading: false,
        btnEditText: '提 交',
        editFormRules: {
          name: [
            {required: true, message: '请输入姓名', trigger: 'blur'}
          ]
        },
        tableData: [],
        listLoading: false
      }
    },
    methods: {
      //性别显示转换
      formatSex: function (row, column) {
        return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
      },
      //删除记录
      handleDel: function (row) {
        //console.log(row);
        var _this = this;
        this.$confirm('确认删除该记录吗?', '提示', {
          //type: 'warning'
        }).then(() => {
          _this.listLoading = true;
          NProgress.start();
          setTimeout(function () {
            for (var i = 0; i < _this.tableData.length; i++) {
              if (_this.tableData[i].id == row.id) {
                _this.tableData.splice(i, 1);

                _this.listLoading = false;
                NProgress.done();
                _this.$notify({
                  title: '成功',
                  message: '删除成功',
                  type: 'success'
                });
                break;
              }
            }
          }, 1000);
        }).catch(() => {

        });
      },
      //显示编辑界面
      handleEdit: function (row) {
        this.editFormVisible = true;
        this.editFormTtile = '编辑';
        this.editForm = {};
        _.extend(this.editForm, row);

      },
      //编辑 or 新增
      editSubmit: function () {
        var _this = this;
        _this.$refs.editForm.validate((valid) => {
          if (valid) {

            _this.$confirm('确认提交吗？', '提示', {}).then(() => {
              _this.editLoading = true;
              NProgress.start();
              _this.btnEditText = '提交中';
              setTimeout(function () {
                _this.editLoading = false;
                NProgress.done();
                _this.btnEditText = '提 交';
                _this.$notify({
                  title: '成功',
                  message: '提交成功',
                  type: 'success'
                });
                _this.editFormVisible = false;

                if (_this.editForm.id == 0) {
                  //新增
                  _this.tableData.push({
                    id: new Date().getTime(),
                    name: _this.editForm.name,
                    sex: _this.editForm.sex,
                    age: _this.editForm.age,
                    birth: _this.editForm.birth == '' ? '' : util.formatDate.format(new Date(_this.editForm.birth), 'yyyy-MM-dd'),
                    addr: _this.editForm.addr
                  });
                } else {
                  //编辑
                  for (var i = 0; i < _this.tableData.length; i++) {
                    if (_this.tableData[i].id == _this.editForm.id) {
                      _this.tableData[i].name = _this.editForm.name;
                      _this.tableData[i].sex = _this.editForm.sex;
                      _this.tableData[i].age = _this.editForm.age;
                      _this.tableData[i].birth = _this.editForm.birth == '' ? '' : util.formatDate.format(new Date(_this.editForm.birth), 'yyyy-MM-dd');
                      _this.tableData[i].addr = _this.editForm.addr;
                      break;
                    }
                  }
                }
              }, 1000);

            });

          }
        });

      },
      //显示新增界面
      handleAdd: function () {
        this.editFormVisible = true;
        this.editFormTtile = '新增';
        this.editForm = {};
        _.extend(this.editForm, {id: 0, name: '', sex: 1, age: 0, birth: '', addr: ''});
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