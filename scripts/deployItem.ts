import { Address, beginCell, Cell, toNano } from '@ton/core';
import { NFTCollection } from '../wrappers/NFTCollection';
import { compile, NetworkProvider } from '@ton/blueprint';
import { NFTMetadata } from '../utils/constants';

export async function run(provider: NetworkProvider) {
    const encodeMetadataNft = (content: string): Cell => {
        return beginCell()
            .storeStringTail(content)
        .endCell()
    }

    const rand = Math.floor(Math.random() * (999999 - 1000 + 1)) + 1000;

    const nftCollectionContract = provider.open(NFTCollection.createFromAddress(Address.parse("kQCxqewMUskqoVFg9EjwTS3ZuNPw4Uh65uywefVOBktgVIBa")));

    await nftCollectionContract.sendDeployNft(provider.sender(), 
        {
            to: provider.sender().address as Address, 
            queryId: Math.floor(Date.now() / 1000),
            index: rand,
            value: toNano("0.05"),
            itemValue: toNano("0.045"),
            content: encodeMetadataNft(NFTMetadata.nftMetadata[0])
        }
    );

    // run methods on `nftCollectionContract`
}
