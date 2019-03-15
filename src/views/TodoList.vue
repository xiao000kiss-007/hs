<template>
  <div class="todolist">
    <TodoList></TodoList>
  </div>
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'todolist',
  components: {
    TodoList
  }
}
</script>
