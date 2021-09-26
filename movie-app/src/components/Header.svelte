<style lang="scss">
  header :global(a.active) {
    color: red;
  }
</style>

<script>
  import { link } from 'svelte-spa-router';
  import active from 'svelte-spa-router/active';
  import Logo from '~/components/Logo';

  const menus = [
    {
      href: '/',
      name: 'Search',
    },
    {
      href: '/movie/tt4520988',
      name: 'Movie',
    },
    {
      href: '/about',
      name: 'About',
    },
  ];
</script>

<header>
  <Logo />
  <nav>
    <ul>
      {#each menus as { href, name } (name)}
        <li>
          <a use:link use:active="{href}" href="{href}">{name}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>
