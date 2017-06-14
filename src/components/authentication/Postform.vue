<template>
   <div class="row">
      
	<div class="form-group">
      <input v-model="post.title" type="text" class="form-control"  placeholder="Enter title" >
    </div>
    <div class="form-group">
      <input type="text" class="form-control" v-model="desc" placeholder="Enter description" >
    </div>
    <div class="form-group">
      <input type="text" class="form-control" v-model="link" placeholder="Enter the link" >
    </div>
    <button @click="test" type="submit" class="btn btn-default">Submit</button>
  </div> 

</template>

<script>
	export default{
		data () {
			return {
				   post: {
              title:'',
           }
   			}
     },
      methods:{
        test (){
          this.$http.post("http://localhost:8000/api/posts",this.post)
              .this(response=>{
                 
       this.$router.push('/postform')
               })
        }
      }
	}

</script>

<style>
	

</style>