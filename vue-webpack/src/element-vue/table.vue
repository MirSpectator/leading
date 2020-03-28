<template>
<div class=" table-responsive">
		<table class="table  border-bottom">
			<thead>
				<tr>
					<th class="sorting_asc">id</th>
					<th class="sorting_desc">姓名</th>
					<th class="sorting">职位</th>
					<th>工号</th>
					<th>手机</th>
					<th>邮箱</th>
				</tr>
			</thead>
			<tbody>
				<tr :class="{active: true == item.checked }" @click="select(item.id)"      v-for="item in table" :key="item.id">
					<td scope="row">{{ item.id }}</td>
					<td>{{ item.name }}</td>
					<td>{{ item.job }}</td>
					<td>{{ item.job_number }}</td>
					<td scope="row">{{ item.phone }}</td>
					<td>{{ item.email }}</td>
					<td @click.stop="details()">......</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	export default {
		name: 'tableZhang',
		props: ['table'],
		data() {
			return {
				
			};
		},
		computed: {
			//计算属性不能修改属性值，只能做判断
		},
		watch:{
			//监听事件
		},
		
		methods: {
	       //写函数方法的地方，函数可以被调用
		   select: function(id) {
		   	var arr = this.table;
		   	try {
		   		arr.forEach(function(value, index, array) {
		   			if (value.id === id) {
		   				if (arr[index].checked == true) {
		   					arr[index].checked = false;
		   				} else {
		   					arr[index].checked = true;
		   				}
		   				// console.log(arr);
		   				throw '循环结束';
		   			}
		   			// console.log(123);
		   		});
		   	} catch (e) {
		   		// console.log(e);
		   	}
		   }
		}
	};
</script>
<style>
	.active{
		background-color: rgb(244,246,248);
	}
</style>

