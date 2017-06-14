<template>
<div>
     <my-post 
     v-for="post in posts"
     :post="post">
     </my-post>	 

</div>
</template>

<script>
    import Post from './Post.vue'

	export default{
		data (){
			return{
				posts: []
			}
		},

		components: {
			'my-post' : Post
		},

		created (){
			this.$http.get("http://localhost:8000/api/posts")
			.then(response=>{
				this.posts = response.body
			})

		}
	}
</script>