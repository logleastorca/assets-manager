class OpenseaService {
  init(web3, privateKey, usePrivateKey = true) {
    this.openseaPort = new OpenSeaPort(web3.currentProvider, {
      networkName: Network.Main,
      useReadOnlyProvider: false,
      ...(usePrivateKey && { apiKey: process.env.OPENSEA_API_KEY }),
    });
    this.privateKey = privateKey;
  }

  async getUserAssets(ownerAddress) {
    try {
      return (
        await this.openseaPort.api.getAssets({
          owner: ownerAddress,
        })
      ).assets;
    } catch (err) {
      console.log(err);
      return null;
    }
  }
}
