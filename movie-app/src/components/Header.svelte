<style lang="scss">
  header {
    padding: 20px 40px;
    background-color: $color-black-90;
    position: sticky;
    top: 0;
    z-index: 9;
    display: flex;
    align-items: flex-end;
    nav {
      margin-left: 40px;
      ul {
        display: flex;
        li {
          margin-left: 10px;
          &:first-child {
            margin-left: 0;
          }
          a {
            font-size: 14px;
            font-weight: 700;
            color: $color-white-50;
            text-decoration: none;
          }
        }
      }
    }
    .user {
      width: 40px;
      height: 40px;
      padding: 6px;
      box-sizing: border-box;
      border-radius: 50%;
      background-color: $color-area;
      cursor: pointer;
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      right: 40px;
      transition: 0.4s;
      &:hover {
        background-color: lighten($color-area, 20%);
      }
      img {
        width: 100%;
      }
    }
  }
  header :global(a.active) {
    color: $color-primary !important;
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
      path: '/',
    },
    {
      href: '/movie/tt4520988',
      name: 'Movie',
      path: '/movie/*',
    },
    {
      href: '/about',
      name: 'About',
      path: '/about',
    },
  ];
</script>

<header>
  <Logo />
  <nav>
    <ul>
      {#each menus as { href, name, path } (name)}
        <li>
          <a use:link use:active="{path}" href="{href}">{name}</a>
        </li>
      {/each}
    </ul>
  </nav>
  <div class="user">
    <img src="/assets/svelte.png" alt="user" />
  </div>
</header>
