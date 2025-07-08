import { Address, beginCell, Cell, toNano } from '@ton/core';
import { NFTCollection } from '../wrappers/NFTCollection';
import { compile, NetworkProvider } from '@ton/blueprint';
import { NFTMetadata, RandomAddresses } from '../utils/constants';

export async function run(provider: NetworkProvider) {
    const encodeMetadataNft = (content: string): Cell => {
        return beginCell()
            .storeStringTail(content)
        .endCell()
    }

    const usedIndexes = new Set();

    function getUniqueRand() {
        let num;
        do {
            num = Math.floor(Math.random() * (999999 - 1000 + 1)) + 1000;
        } while (usedIndexes.has(num));
        usedIndexes.add(num);
        return num;
    }

    const items = [
        {
            to: Address.parse(RandomAddresses.addresses[0]),
            index: getUniqueRand(), 
            itemValue: toNano("0.045"),
            content: encodeMetadataNft(NFTMetadata.nftMetadata[1]),
        },
        {
            to: Address.parse(RandomAddresses.addresses[1]),
            index: getUniqueRand(), 
            itemValue: toNano("0.045"),
            content: encodeMetadataNft(NFTMetadata.nftMetadata[2]),
        },
        {
            to: Address.parse(RandomAddresses.addresses[1]),
            index: getUniqueRand(), 
            itemValue: toNano("0.045"),
            content: encodeMetadataNft(NFTMetadata.nftMetadata[3]),
        }
    ];

    const nftCollectionContract = provider.open(NFTCollection.createFromAddress(Address.parse("kQCxqewMUskqoVFg9EjwTS3ZuNPw4Uh65uywefVOBktgVIBa")));

    await nftCollectionContract.sendBatchDeployNFT(provider.sender(), 
        
            {
                value: toNano("0.1"),
                queryId: Math.floor(Date.now() / 1000),
                items: items
            }
    );

    // run methods on `nftCollectionContract`
}
