module.exports = {
  external: ['penguin.js'],
  plugins: [
    require('rollup-plugin-node-resolve')(),
    require('rollup-plugin-commonjs')(),
    require('rollup-plugin-buble')()
  ],
  format: 'es'
}
