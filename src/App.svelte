<script>
	import ConditionalSentence
		from './basic-concepts/ConditionalSentence.svelte'
	import Loop from './basic-concepts/Loop.svelte'
	import Input from './basic-concepts/Input.svelte'
	import Name from './components/Name.svelte'
	import {storeName} from './store'
	import StoreTest from './components/StoreTest.svelte'

	let names = ['영재', 'youngjae', '영재2']
	$storeName = names[0]
</script>

<main>
	<h1>Hello!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<ConditionalSentence/>
	<Loop/>
	<StoreTest/>
	<Input/>
	{#each names as name}
		<Name {name}/>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
