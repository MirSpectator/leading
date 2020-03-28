<template>
	 <li class="tree-item-li">
	    <div class="li-div">
			<i v-if="isIcon == 'right'" class="fa fa-angle-double-right" aria-hidden="true"></i>
			<i v-else-if="isIcon == 'down' " class="fa fa-angle-down" aria-hidden="true"></i>
			<div
			  class="tree-item-label"
			  :class="{active: isActive}"
			  @click="activeitem(nodes.level)"
			>{{nodes.label}}</div>
		</div>
	    <ul v-if="isEnd && isDiplay" class="tree-item-ul">
	      <tree-item
	        v-for="(item, index) in nodes.nodes"
	        :key="index"
	        :nodes="item"
			:id="id">
	      </tree-item>
	    </ul>
	  </li>
</template>

<script>
	export default {
	  name: 'treeItem',
	  props: ['nodes','id'],
	  data () {
	    return {
			isActive:false,
			isDiplay:true,
			isIcon:"down",
			
	    }
	  },
	  computed: {
	    isEnd () {
			// console.log(this.id);
			if(this.id!=0&&this.id === this.nodes.level){
				// console.log("进来了"+this.nodes.level);
				
				return false;
			}
	   //    console.log(this.nodes.nodes)
		  // console.log(this.nodes.nodes && this.nodes.nodes.length);
	      return true;
	    },
		
	  },
	  watch:{
	  	is(nodes,id){
	  		console.log(id);console.log(nodes);
	  		// if(id===this.nodes.level){
	  		// 	this.isIcon="right";
	  		// 	this.isDiplay=false;
	  		// }
	  	}
	  },
	  methods: {
		  activeitem (level) {
			  // console.log(this.isDiplay);
			  // console.log(this.isIcon);
		  	// console.log(this.isActive);
			if(this.isActive === true ){
				
				// console.log(this.id);
				this.isActive = false;
			}else {
				
				
				this.isActive = true;
			}
			if(this.isDiplay==true){
				this.id=level;
				this.isIcon= 'right';
				this.isDiplay = false;
			}else {
				this.id=level+1;
				this.isIcon= 'down';
				this.isDiplay=true;
			}
			// console.log(this.isDiplay);
		  }
	  }
	}
</script>

<style>
	.active{
		
	},
	.display{
		display: none;
	}
	.li-div{
		display: flex;
	}
	.li-div i{
	    margin-top: 6px;	
	}
	.li-div div{
		margin-left: 5px;
	}
	li{
		list-style: none;
	}
	ul{
		margin-left: -8%;
	}
</style>
