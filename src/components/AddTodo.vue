<template>
    <div class="add-todo">
        <form @submit.prevent="onSubmit">
            <input type="text"  
                v-model="title" 
                placeholder="Add Todo..." 
                required
            >
            <input type="submit" value="Add Todo">
        </form>
       
    </div>
</template>

<script>

import { mapActions} from 'vuex'
export default {
    name:"AddTodo",
    data() {
        return {
            title: ""
        }
    },
    methods: {
        ...mapActions(["addTodo"]),
        onSubmit() {
            this.addTodo(this.title)
        }

    }
}
</script>

<style scoped>

form {
    display: flex;
}


input[type="text"] {
    flex: 10;
    padding: 10px;
    border: 1px solid #41b883;
    outline: 0;
}

input[type="submit"] {
    flex: 2;
    background: #41b883;
    color: #fff;
    border: 1px solid #41b883;
    cursor: pointer;

}

.add-todo {
    margin-bottom: 10px;
}



</style>