<template>
  <section class="todoapp">

    <TodoHeader @add="addFn" ></TodoHeader>

    <TodoMain :list="showList" 
    @del="delFn"
    @change="changeFn"
    @isCheckAll="isCheckAllFn"
    ></TodoMain>

    <TodoFooter :list="list" :type="type" @changeStr="changeStr" @clear="clearFn"></TodoFooter>

  </section>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
export default {
  components: { TodoFooter, TodoMain, TodoHeader },
  watch: {
    list: {
      deep: true,
      handler(newvale) {
        localStorage.setItem('todos', JSON.stringify(newvale))
      }
    }
  },

  data () {
  return {
    list: JSON.parse(localStorage.getItem('todos')) || [
      { id: 1, name: '吃饭', isDone: true },
      { id: 2, name: '睡觉', isDone: false },
      { id: 3, name: '打豆豆', isDone: true }
    ],
    type: '全部',
  }
},

computed: {
  showList () {
    if (this.type === '全部') { // 显示已完成
      return this.list
    } else if (this.type === '已完成') { // 显示未完成
      return this.list.filter(item => item.isDone)
    } else {
      return this.list.filter(item => !item.isDone) // 全部显示
    }
  }
},

  methods: {
    delFn(id) {
      this.list = this.list.filter(item => item.id !== id)
    },

    changeFn(isDone, id) {
      this.list.find(item => item.id === id).isDone = isDone
      // const result = this.list.find(item => item.id === id)
      // result.isDone = !result.isDone
    },

    addFn(name) {
      this.list.unshift({ id: Date.now(), name, isDone: false })
    },

    isCheckAllFn(value) {
      this.list.forEach(item => item.isDone = value)
    },

    clearFn() {
      this.list = this.list.filter(item => item.isDone === false)
    },

    changeStr(str) {
      this.type = str
    }
  },

}
</script>

<style></style>
