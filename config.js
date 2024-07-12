module.exports = {
  name: 'sde-test2',
  entry: './src/index.ts',
  esbuildPlugins: [],
  port: 3000,
  esbuildExternals: [],
  aws: {
    region: 'us-west-2',
    profile: 'quickgame',
    cpu: 256,
    concurrentExecutions: 3,
    memory: 512,
    healthCheckRoute: '/',
    sslCertificateARN: 'arn:aws:acm:us-west-2:388098074003:certificate/fa3f6d37-1580-441b-a207-221a8d0579bf',
    vpcId: 'vpc-06226d9bcb15e66d1',
    accountId: '388098074003',
    hostedZoneID: 'Z04016231YNZ02E3V4Y2F',
    domainName: 'horse.quickga.me',
    zoneName: 'quickga.me',
  },
  envs: {
    prod: {
      env: {
        NODE_ENV: 'development',
      },
    },
  },
};
