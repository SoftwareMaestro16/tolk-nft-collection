import { Cell, toNano } from '@ton/core';
import { NFTItem } from '../wrappers/NftItemContract';
import { compile, NetworkProvider } from '@ton/blueprint';

export async function run(provider: NetworkProvider) {
    // const nftItemContract = provider.open(NFTItem.createFromConfig({}, await compile('NftItemContract')));

    // await nftItemContract.sendDeploy(provider.sender(), toNano('0.05'), Cell.EMPTY);

    // await provider.waitForDeploy(nftItemContract.address);

    // run methods on `nftItemContract`
}
