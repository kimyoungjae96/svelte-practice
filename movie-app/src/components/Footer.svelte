<style lang="scss">
  footer {
    padding: 70px;
    text-align: center;
    a {
      color: $color-white-10;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>

<footer>
  <div>
    <a
      href="https://github.com/kimyoungjae96/svelte-practice/tree/master/movie-app"
      >GitHub Repo</a
    >
  </div>
  <div>
    <a href="https://kimyoungjae96.github.io/portfolio/">
      @{new Date().getFullYear()}
      YoungJae
    </a>
  </div>
</footer>
