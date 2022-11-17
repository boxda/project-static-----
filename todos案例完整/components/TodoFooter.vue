<template>
      <!-- 底部部分 -->
    <footer class="footer">
      <span class="todo-count"><strong>{{ leftCount }} </strong>剩余</span>
      <!-- 这个v-if处理也可以放在父组件 -->
      <ul class="filters" v-if="this.list.length">
        <li v-for="item in btns" :key="item">
          <a 
          @click="toggle(item)" 
          :class="{ selected: type === item}" 
          href="#/"
          >{{ item }}</a>
        </li>
      </ul>
      <button class="clear-completed" 
      v-show="isShowClear"
      @click="clear"
      >清除已完成</button>
    </footer>
</template>

<script>
export default {
  name: 'TodoFooter',
  props: {
    list: {
      type: Array,
      required: true
    },

    type: {
      type: String,
      default: '全部'
    }
  },

  data() {
    return {
      btns: ['全部', '未完成', '已完成']
    }
  },
  
  computed: {
    // 获取所有没有完成的任务数量
    leftCount() {
      const arr = this.list.filter(item => !item.isDone)
      return arr.length
    },

    isShowClear() {
      return this.list.some(item => item.isDone)
    }
  },

  methods: {
    clear() {
      this.$emit('clear')
    },

    toggle(str) {
      // console.log('str: ', str);

      this.$emit('changeStr', str)
    }
  },
  
}
</script>

<style>

</style>