<script>
    export let todo
    export let todos
    let isEdit = false
    let title = ''

    function onEdit(){
      isEdit = true
      title = todo.title
    }
    function offEdit(){
      isEdit = false
    }

    function updateTodo(){
      todo.title = title
      offEdit()
    }

    function onDelete(){
        $todos = $todos.filter(t => t.id !== todo.id)
    }
</script>
{#if isEdit}
    <div>
        <input type="text" bind:value={title} on:keydown={(e)=>{e.key === 'Enter' && updateTodo()}}/>
        <button on:click={updateTodo}>
            Ok
        </button>
        <button on:click={offEdit}>
            Cancel
        </button>
    </div>
{:else}
    <div>
        {todo.title}
        <button on:click={onEdit}>Edit</button>
        <button on:click={onDelete}>Delete</button>
    </div>
{/if}
