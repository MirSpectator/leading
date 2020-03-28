<template>
	<div>
		<!-- <div class="container">
			<div class="row mt-3">
				<div style="width: 15rem;background-color: #f4f6f8;">
					<div class="input-group p-2"><input type="text" class="form-control" placeholder="搜索" aria-describedby="basic-addon1" /></div>
					<ul class="treeMenu">
					   
					  </ul>
				</div>
				<div class="col" style="background-color: #fff;">
					<h2>
						{{ company }}
						<button type="button" class="btn btn-sm btn-primary">设置</button>
					</h2>

					<div class="navbar">
						<h4 class="col">下级部门</h4>
						<div class=" btn-group-sm">
							<button type="button" class="btn btn-primary">添加子部门</button>
							<button type="button" class="btn btn-secondary">调整排序</button>
						</div>
					</div>
					<table class="table table-hover border-bottom">
						<tbody>
							<tr v-for="item in department" :key="item.id">
								<td>{{ item.name }}（{{ item.sum }}）</td>
							</tr>
						</tbody>
					</table>
					<div class="navbar">
						<h4 class="col">部门人员</h4>

						<div class="btn-group-sm">
							<button type="button" class="btn btn-primary">添加成员</button>
							<button type="button" class="btn btn-primary">批量导入</button>
							<button type="button" class="btn btn-primary">调整部门</button>
							<button type="button" class="btn btn-primary">调整顺序</button>
							<button type="button" @click="deletes()" class="btn btn-primary">删除</button>
						</div>
					</div>
				   <table-zhang :table="department_person"></table-zhang>
				</div>
			</div>
		</div> -->
		<tree-item :address="123456" :id="1">
		</tree-item>
		<div>
			
		</div>
		<li id="demo3" style="margin: 0 auto;width: 50%;">
			<div data-target = "#menu123" data-toggle="collapse">第一层</div>
			<ul>
				<li id = "menu123" >
				    <div data-target = "#demo2" data-toggle="collapse">第二层</div>
				    <ul>
				    	<li id = "demo2" class="collapse in" >第三层</li>
				    </ul>
				</li>
			</ul>
		</li>
		<li id="demo3" style="margin: 0 auto;width: 50%;">
			<div data-target = "#demo" data-toggle="collapse">第一层</div>
			<ul>
				
			</ul>
		</li>
		<li id="demo3" style="margin: 0 auto;width: 50%;">
			<div data-target = "#demo" data-toggle="collapse">第一层</div>
			<ul>
				
			</ul>
		</li>
		
	</div>
</template>

<script>
	import tableZhang from './element-vue/table.vue'
export default {
	components: {tableZhang}, // 直接初始化就可以啦，不需要Vue.use();
	data() {
		return {
			company: '云僖网络技术(东莞)有限公司',
			department: [{ id: 1, name: '总经办', sum: 2 }, { id: 2, name: '开发部', sum: 2 }, { id: 3, name: '测试组', sum: 1 }, { id: 4, name: '外部体验人员', sum: 6 }],
			department_person: [
				{ id: 1, name: '张三', job: '普通职员', job_number: 123456, phone: '13295984896', email: '13014786999@163.com', checked: false },
				{ id: 2, name: '李四', job: '普通职员', job_number: 1234567, phone: '13295984896', email: '13014786999@163.com', checked: false },
				{ id: 3, name: '王五', job: '普通职员', job_number: 1234568, phone: '13295984896', email: '13014786999@163.com', checked: false }
			],
			select_type: true, //判断是单选true 还是多选false
			treeData: {
			        label: '云僖网络技术（东莞）',
			        nodes: [{
			          label: '总经办',
			          nodes: [{
			            label: '人事部',
						level:3
			          },
			          {
			            label: '财务部',
						level:3
			          },
			          {
			            label: '行政部',
						level:3
			          }],
					  level:2
			        },{
						 label: '开发部',
						 level:2
					},{
						 label: '测试组',
						 level:2
					}],
					level:1
			      }
		};
	},
	created() {},
	methods: {
		
		deletes: function() {
			var arr = this.department_person;
			var delete_arr = arr.filter(function(value, index) {
				return value.checked == true;
			});
			console.log(delete_arr);
		},
		details: function() {
			console.log(123);
		},
		activeitem:function(){
			if(isActive==false){
				isActive = true;
			}else {
				isActive = false;
			}
		}
	}
};
</script>

<style>
/* @import url("utils/css/test.css");
	h2{
		color: red;
	} */
	@import url("view/new_file.scss");
</style>
