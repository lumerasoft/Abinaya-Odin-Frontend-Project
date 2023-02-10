<template>   
<div class="row">
  <div class="col-sm-2"></div>
  <div class="col-sm-8">
    <div class="card">
      <div class="card-body" id="card-design">
        <h2 class="card-title">{{title}}</h2>
        <p class="card-text">{{content}}</p>
        <b class="card-text">Tag: @{{tag}}</b>
        <br/>
        <router-link :to="`/post/${id}`">Comments</router-link>
      </div>
    </div>
  </div>
  <div class="col-sm-2"></div>
</div>
<br/>
  </template>
<script>
export default{
    props: {
        title: String,
        content: String,
        tag: String,
        id: String
    }
}
</script>
<style>
#card-design {
  background-color: #0B0873;
  border: 1px solid;
  box-shadow: 5px 7px #577BAD;
  color: #F5EAF7;
}
</style>