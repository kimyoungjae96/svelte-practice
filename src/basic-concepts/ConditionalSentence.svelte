<script>
    let name = 'youngjae'
    let toggle = false

</script>

<button on:click={()=>{toggle = !toggle}}>toggle</button>
{#if toggle}
    <h1>toggle</h1>
{:else}
    <h1>else sentence</h1>
{/if}
