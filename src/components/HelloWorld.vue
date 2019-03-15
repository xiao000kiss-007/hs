<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      
      深圳市恒深财务有限公司 版权所有 2018-2019 粤ICP备18024655号-1 粤公网安备 44030902000294号 <br>

      公司地址：深圳市龙华区东环一路华联大厦406室
   
    </p>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
