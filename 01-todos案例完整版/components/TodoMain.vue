<template>
      <!-- 主体部分 -->
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isCheckAll"/>
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <!-- 当任务已完成，可以给 li 加上 completed 类，会让元素加上删除线 -->
        <li :class="{ completed: item.isDone }" v-for="item in list" :key="item.id">
          <div class="view">
            <input 
            class="toggle" 
            type="checkbox" 
            :checked="item.isDone" 
            @change="change(item.isDone,item.id)"
            />
            <label>{{ item.name }}</label>
            <button class="destroy" @click="del(item.id)"></button>
          </div>
        </li>
      </ul>
    </section>
</template>

<script>
export default {
  name: 'TodoMain',
  props: {
    list: {
      type: Array,
      required: true
    }
  },

  methods: {
    del(id) {
      // console.log('id: ', id);
      this.$emit('del', id)
    },

    change(isDone,id) {
      this.$emit('change', !isDone, id)
    }
  },

  computed: {
    isCheckAll: {
      get() {
        return this.list.every(item => item.isDone === true)
      },
      set(value) {
        this.$emit('isCheckAll', value)
      }
    }
  }
}
</script>

<style>

</style>