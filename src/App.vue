<template>
  <section class="todoapp">
    <!-- 头部部分 -->
    <TodoHeader></TodoHeader>

    <!-- 主体部分 -->
    <TodoMain :list="list"></TodoMain>

    <!-- 底部部分 -->
    <TodoFooter></TodoFooter>
  </section>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
export default {
  components: { TodoHeader, TodoMain, TodoFooter },
  
  data () {
    return {
      list: [
        { id: 1, name: '吃饭', isDone: true },
        { id: 2, name: '睡觉', isDone: false },
        { id: 3, name: '打豆豆', isDone: true }
      ]
    }
  },


}
</script>

<style></style>
