<script>
    let text = ''
</script>

<h1>
    {text}
</h1>

<input type="text" bind:value={text}>
<button on:click={()=>{text = 'hihi~'}}>버튼</button>

