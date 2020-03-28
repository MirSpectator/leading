<template>
	
</template>

<script>
	export default {
		name: 'account',
		data() {
			return {
				name:'王振鹏'
			}
		},
		created() {
			console.log("789");
			console.log($(document.body));
			console.log(window.$);
			$("body").append("<div>hello world</div>")
		},
		methods: {
			go () {
				 this.$router.push({ name: '/account/login' })
			}
		}
	}
</script>

<style>
</style>
