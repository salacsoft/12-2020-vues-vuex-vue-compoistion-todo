<template>
    <div class="container">
        <h3>Lesson 1, Create Todo List</h3>
        <div class="legend">
            <span>
                <span class="incomplete-box"> </span> = Incomplete 
            </span>
            <span>
                <span class="complete-box"> </span> = Complete
            </span>
        </div>
       <add-todo />
       <filter-todo />
       <todo-list/>
    </div>
</template>

<script>

import TodoList from '../components/TodoList.vue';
import AddTodo from  '../components/AddTodo.vue';
import FilterTodo from '../components/FilterTodo.vue'

export default {
    name: "Todos",
    components: {
        "todo-list": TodoList,
        "add-todo": AddTodo,
        "filter-todo": FilterTodo
    }
}
</script>

<style scoped>

.legend {
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
}

.complete-box {
    display: inline-block;
    width:10px;
    height:10px;
    background: #35495e;
}

.incomplete-box{
    display: inline-block;
    width:10px;
    height:10px;
    background: #41b883;
}




</style>