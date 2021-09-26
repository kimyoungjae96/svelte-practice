<script>
  import Todo from '../components/Todo.svelte'
  import {writable} from 'svelte/store'
  let title = ''
  let todos = writable([])
  let id = 0

  function createTodo(){
    $todos.push({
      id,
      title
    })
    $todos = $todos
    title = ''
    id += 1
  }
</script>

<input type="text" bind:value={title} on:keydown={(e)=>{
  e.key ==='Enter' && createTodo()
}}/>
<button on:click={createTodo}>Create Todo</button>
{#each $todos as todo}
    <Todo {todos} {todo} />
{/each}
