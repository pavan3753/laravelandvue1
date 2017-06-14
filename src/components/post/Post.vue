<template>
	<div>
	    {{post.id}}
		{{ post.title }}
<li v-for="comment in comments">
		{{comments.comment}}
</li>

		<div class="form-group">
      <input type="text" class="form-control" v-model="link" placeholder="Enter your Comment" >
    </div>
    <button @click="test" type="submit" class="btn btn-default">Submit</button>
	</div>
</template>
<script>
export default {
	props: ['post'],
	data() {
		return {
			comments: []
		}
	},
	created() {
		this.$http.get("http://localhost:8000/api/comments")
			.then(response => {
				this.posts = response.body
			})
	},
	
}

</script>