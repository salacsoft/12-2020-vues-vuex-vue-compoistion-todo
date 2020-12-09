<template>
    <div id="filter">
        <div class="filterTodo">
            Filter Todos :
            <select @change="filterTodos($event)">
                <option value="200">200</option>
                <option value="100">100</option>
                <option value="50">50</option>
                <option value="20">20</option>
                <option value="10">10</option>
                <option value="5">5</option>
            </select>
        </div>
      
    </div>
</template>

<script>
// import {mapActions} from 'vuex';
import {getCurrentInstance} from 'vue'
export default {
    name: "FilterTodos",
    // methods: mapActions(["filterTodos"]),
    setup() {

         //get the instance of root to access the store
        const instance = getCurrentInstance();
        const store = instance.proxy.$root.$store

        //this will fetch the original todos in the API and limit the response base onthe selected count
        const filterTodos = (event) => {
            store.dispatch("filterTodos", event)
        }
        
        return {
            filterTodos
        }
        
    }

   
}
</script>

<style scoped>

#filter {
    display: flex;
    margin: 10px 0px 10px 0;
}

select {
    flex: 1;
    padding: 5px;
}
</style>