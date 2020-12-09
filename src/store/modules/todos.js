import axios from "axios";

const state = {
    todos: []
}

const getters = {
    allTodos: (state) => state.todos
}

const actions = {
    async fetchTodos({commit}) {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        commit("setTodos", response.data); //commit the changes to the state
    },

    async addTodo({commit}, title) {
        const response = await axios.post("https://jsonplaceholder.typicode.com/todos", {title, completed: false});
        commit("newTodo", response.data)
    },
    async removeTodo({commit}, todoId)  {
        await axios.delete("https://jsonplaceholder.typicode.com/todos/"+ todoId);
        commit("removeTodo", todoId);
    },
    async filterTodos({commit}, e) {
        let limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText);
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos?_limit="+ limit);
        commit("filterTodos", response.data)
    },
    async updateTodo({commit}, payload) {
        //  await axios.put(`https://jsonplaceholder.typicode.com/todos/${payload.id}`, payload); - only works on original list
        commit("updTodo", payload);
    }
   
}

const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => 
        (state.todos = state.todos.filter(todo => todo.id !== id)),
    filterTodos: (state, todos) => (state.todos = todos),
    updTodo: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id);
        if (index !== -1){
            state.todos.splice(index, 1, updTodo);
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}