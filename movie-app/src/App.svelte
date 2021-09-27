<script>
  import Router from 'svelte-spa-router';
  import Header from '~/components/Header.svelte';
  import routes from '~/routes';
  import Footer from './components/Footer.svelte';
</script>

<Header />
<Router routes="{routes}" />
<Footer />
