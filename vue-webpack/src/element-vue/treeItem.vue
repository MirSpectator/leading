<template>
  <div>
	 <li  :id="str_id(item.parentid)"  v-for="(item,index) in nodes " :key="index" >
		 <div :data-target="str_parent(item.id)" data-toggle="collapse">
			 <div>{{item.name}}</div>
		 </div>
		<ul >
			<tree-item :id="item.id" :address="address"></tree-item>
		</ul>
	 </li>
  </div>
</template>

<script>
	export default {
		name: 'treeItem',
		props: ["id","address"],
		data() {
			return {
				nodes:[],
				bol:false,
				flag:false
			};
		},
		comments:{
			isEnd(){
				return this.flag
			}
		},
		created(){	
			this.menu(this.id);
		},
		methods: {
			
			active(item){
				console.log(item);
				//console.log(this.flag);
				if(this.bol==true){
					//this.id = item.parentid
					this.bol=false;
				}else {
				//this.id = item.id ;
				this.bol = true;
				}
				if(this.flag){
					this.bol = true;
				}
				// if(this.flag){
					
				// }else {
					
				// }
			},
		  /**
		   * 获取第几层
		   */
		  menu(id){
		  			let that = this;
		  		let data = [{
					id: 103730907,
					name: "开发部",
					parentid: "1",
				},{
					id: 103807910,
					name: "测试组",
					parentid: "1",
				},{
					id: 103876874,
					name: "外部体验人员",
					parentid: "1",
				},{
					id: 103899815,
					name: "总经办",
					parentid: "1",
				},{
					id: 118524714,
					name: "前端",
					parentid: "103730907",
				},{
					id: 120413251,
					name: "后端",
					parentid: "103730907"
				}]
		  				that.nodes = data.filter(function(item){
							return item.parentid == id;
						});
		  				console.log(that.nodes);
							
							//用于检测是否还有下一层
				        
					
		  		
		  		},
			
	       /**字符串拼接方法 动态绑定
			* @param {Object} b
			*/
		   str_parent(b){
			   if(b==undefined){
				   return null;
			   }
			   return "#menu"+b;
		   },
		   str_id(b){
		   			   if(b==undefined){
		   				   return null;
		   			   }
		   			   return "menu"+b;
		   }
		}
	};
</script>

