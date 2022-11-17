<template>
      <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" />
      <label for="toggle-all">Mark all as complete</label>

      <ul class="todo-list">
        <!-- 当任务已完成，可以给 li 加上 completed 类，会让元素加上删除线 -->
        <li :class="{ completed: item.isDone }" v-for="item in list" :key="item.id">
          
          <div class="view">
            <input class="toggle" type="checkbox" checked />
            <label>{{ item.name }}</label>
            <button class="destroy"></button>
          </div>
        </li>

        <!-- <li>
          <div class="view">
            <input class="toggle" type="checkbox" />
            <label>行万里路</label>
            <button class="destroy"></button>
          </div>
        </li> -->
      </ul>
    </section>
</template>

<script>
export default {
  name: 'TodoMain',

  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style>

</style>