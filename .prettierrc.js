module.exports = {
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  bracketSameLine: false,
  endOfLine: "auto",
  overrides: [
    {
      files: ['*.md'],
      options: {
        parser: 'markdown-nocjsp',
      },
    },
    {
      files: ['*.mdx'],
      options: {
        parser: 'mdx-nocjsp',
      },
    },
  ]
}
