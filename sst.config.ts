/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "highland-skate-shop",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: { cloudflare: true },
    };
  },
  async run() {
    new sst.aws.Nextjs("MyWeb", {
      domain: { name: "highlandskateshop.com", dns: sst.cloudflare.dns() },
    });
  },
});
