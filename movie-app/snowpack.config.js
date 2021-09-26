module.exports = {
  mount:{
    public: '/',
    src: '/_dist_'
  },
  plugins:[
    ['@snowpack/plugin-svelte',{
      preprocess: require('svelte-preprocess')({
        scss:{
          prependData: '@import "./src/scss/main.scss";'
        },
        postcss:{
          plugins: [
            require('autoprefixer')()
          ]
        }
      })
    }]
  ]
}
