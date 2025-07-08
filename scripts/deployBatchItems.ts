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

    await nftCollectionContract.sendBatchDeployNFT(provider.sender(), 
        
            {
                value: toNano("0.1"),
                queryId: Math.floor(Date.now() / 1000),
                items: [
                    {
                        to: provider.sender().address as Address,
                        index: rand,
                        itemValue: toNano("0.045"),
                        content: encodeMetadataNft(NFTMetadata.nftMetadata[1])
                    },
                    {
                        to: provider.sender().address as Address,
                        index: rand,
                        itemValue: toNano("0.045"),
                        content: encodeMetadataNft(NFTMetadata.nftMetadata[2])
                    }
                ]
            }
    );

    // run methods on `nftCollectionContract`
}
