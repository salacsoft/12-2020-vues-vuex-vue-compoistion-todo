<template>
    <div class="todos">
        <div 
            v-for="(todo, index) in todoList" 
            :key="index" 
            class="todo"
            :class="{'is-complete': todo.completed}" 
        >
            {{todo.title}}
            <i @click="updTodo(todo)" 
                class="toggle-todo " 
                :class="(todo.completed)? 'fas fa-toggle-on':'fas fa-toggle-off'" 
                title="click to toggle todo"
            />
            <i @click="removeTodo(todo.id)" 
                class="far fa-trash-alt" 
                title="click to remove todo"
            />
        </div>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import {getCurrentInstance, onMounted, ref, computed} from 'vue'

export default {
    "name": "TodoList",
    setup() {
        //get the instance of root to access the store
        const instance = getCurrentInstance();
        const store = instance.proxy.$root.$store
        
        onMounted(async () => {
            store.dispatch("fetchTodos");
        })

        //get the list of todos
        const todoList = computed(() => {
            return  store.getters.allTodos;
        });

        //toggle todo to completed and incomplete
        const updTodo = (todo) => {
            const updatedTodo = {
                id: todo.id,
                title: todo.title,
                completed: !todo.completed
            }
            store.dispatch("updateTodo", updatedTodo);
        }

        //remove Todo
        const removeTodo = (id) => {
            store.dispatch("removeTodo", id);
        }

         
        return {
            todoList,
            updTodo,
            removeTodo
        }
    }

}
</script>

<style scoped>
    .todos {
        display:grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }

    .todo {
        border: 1px solid #ccc;
        background: #41b883;
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
        cursor: pointer;
        color:white;
    }

    .fa-trash-alt {
        position: absolute;
        bottom: 10px;
        right: 10px;
        color: white;
        cursor:pointer;
    }

    .toggle-todo {
        position: absolute;
        bottom: 10px;
        left: 10px;
        color: white;
        cursor:pointer;
    }

    .is-complete {
         background: #35495e;
    }

    @media (max-width: 500px) {
        .todos {
            grid-template-columns: 1fr;
        }
    }

</style>