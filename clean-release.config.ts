export default {
  include: [
    'dist/**/*.js',
    'dist/index.d.ts',
    'LICENSE',
    'package.json',
    'README.md'
  ],
  exclude: [
  ],
  base: 'dist',
  askVersion: true,
  changesGitStaged: true,
  postScript: ({ dir, tag, version }) => [
    tag ? `npm publish "${dir}" --access public --tag ${tag}` : `npm publish "${dir}" --access public`,
    'git add package.json',
    `git commit -m "${version}"`,
    `git tag -a v${version} -m 'v${version}'`,
    'git push',
    `git push origin v${version}`
  ]
}
