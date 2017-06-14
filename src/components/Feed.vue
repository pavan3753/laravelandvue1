<template>
        <div> 
                <h1>Feed</h1>
                <my-posts>
                </my-posts>
        </div>
</template>

<script>
    import Posts from './post/Posts.vue'

	export default{
		components: {
			'my-posts': Posts
		}
	}
</script>