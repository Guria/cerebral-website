var request = require('request')

module.exports = tree => {
  tree.match({ tag: 'a', attrs: { href: /^https:\/\/github.*\/blob\// } }, node => {
    if (node.matched) {
      return node
    }
    node.matched = true

    var url = node.attrs.href
      .replace('github.com', 'raw.githubusercontent.com')
      .replace('/blob', '')

    console.log(url)

    return node
  })
}