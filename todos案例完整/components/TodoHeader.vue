<template>
      <!-- 头部部分 -->
    <header class="header">
      <h1>todos</h1>
      <input 
      class="new-todo" 
      placeholder="请输入任务名称" 
      autofocus 
      v-model.trim="name"
      @keydown.enter="add"
      />
    </header>
</template>

<script>
export default {
  name: 'TodoHeader',
  data() {
    return {
      name: ''
    }
  },

  methods: {
    add () {
      if (!this.name) return alert('请输入你要记住的事情')
      this.$emit('add', this.name)
      this.name = ''
    }
  },
}
</script>

<style>

</style>