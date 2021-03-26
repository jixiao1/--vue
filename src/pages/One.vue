<template>
  <div class="one">one组件</div>
</template>

<script>
export default {
  beforeCreate () {
    console.log('one beforeCreate...')
  },
  created () {
    console.log('one created...')
  },
  mounted () {
    console.log('one mounted...')
    console.log(this)
  },
  beforeDestroy () {
    console.log('one beforeDestroy...')
  },
  destroyed () {
    console.log('one destroyed...')
  },
  // 组件内部守卫, 守卫在组件内部，
  // beforeRouteEnter不可以使用this
  // beforeRouteUpdate , beforeRouteLeave可以使用this
  beforeRouteEnter (to, from, next) {
    console.log('组件内部守卫 one beforeRouteEnter...')
    next((com) => {
      console.log('next的回调函数执行了.....')
      console.log(com) // com就是当前的组件，如果需要操作组件中的内容，那么在next回调函数中，接收参数，该参数为当前组件对象
    })
  },
  beforeRouteUpdate (to, from, next) {
    console.log('组件内部守卫 one beforeRouteUpdate...')
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('组件内部守卫 one beforeRouteLeave...')
    next()
  }
}
</script>

<style>
.one {
   font-size: 30px;
  color: aqua;
}
</style>
