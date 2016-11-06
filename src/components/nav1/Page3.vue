<template>
	<el-tabs style="width:100%;" type="card" @tab-click="handleClick" @tab-remove="handleRemove">
		<el-tab-pane label="用户管理">
			<el-col :span="24" style="padding:10px;">
				<el-steps :space="100" direction="vertical" :active="1">
					<el-step title="步骤 1"></el-step>
					<el-step title="步骤 2"></el-step>
					<el-step title="步骤 3"></el-step>
				</el-steps>
			</el-col>
		</el-tab-pane>
		<el-tab-pane label="配置管理">222</el-tab-pane>
		<el-tab-pane label="角色管理">333</el-tab-pane>
		<el-tab-pane label="定时任务补偿">444</el-tab-pane>
	</el-tabs>
</template>
<script>
  export default {
    methods: {
      handleRemove(tab) {
        console.log(tab);
      },
      handleClick(tab) {
        console.log(tab);
      }
    }
  };
</script>