import { toNano } from '@ton/core';
import { NFTCollection } from '../wrappers/NftCollectionContract';
import { compile, NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    const nftCollectionContract = provider.open(NFTCollection.createFromConfig({}, await compile('NftCollectionContract')));

    await nftCollectionContract.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(nftCollectionContract.address);

    // run methods on `nftCollectionContract`
}
