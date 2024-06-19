module.exports = {
  name: 'sde-test1',
  entry: './src/index.ts',
  esbuildPlugins: [],
  port: 3000,
  esbuildExternals: [],
  envs: {
    prod: {
      aws: {
        region: 'us-west-2',
        profile: 'quickgame',
      },
      env: {
        NODE_ENV: 'development',
      },
    },
  },
};
