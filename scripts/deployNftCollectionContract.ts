import { Address, beginCell, Cell, toNano } from '@ton/core';
import { NFTCollection } from '../wrappers/NFTCollection';
import { compile, NetworkProvider } from '@ton/blueprint';
import { NFTMetadata } from '../utils/constants';

export async function run(provider: NetworkProvider) {
    const encodeRoyaltyParams = (params: { royaltyFactor: number, royaltyBase: number, royaltyAddress: Address}): Cell => {
        return beginCell()
            .storeUint(params.royaltyFactor, 16)
            .storeUint(params.royaltyBase, 16)
            .storeAddress(params.royaltyAddress)
        .endCell()
    }

    const encodeMetadataNft = (content: string): Cell => {
        return beginCell()
            .storeStringTail(content)
        .endCell()
    }

    const royaltyParams = {
        royaltyFactor: 3, 
        royaltyBase: 100,
        royaltyAddress: Address.parse("0QCsMm47egxSofgw5Y-l34ZeMw6vPYUUyTIjYT3HTafpmH9O")
        // royaltyAddress: provider.sender().address as Address
    }

    const royaltyParamsCell = encodeRoyaltyParams(royaltyParams);

    const commonContent2 = beginCell()
        .storeStringTail("")
    .endCell()

    const commonContent1 = beginCell()
        .storeUint(1, 8)
        .storeStringTail(NFTMetadata.collectionMetadata)
    .endCell()

    const collectionContent = beginCell()
        .storeUint(1, 8)
        .storeRef(commonContent1)
        .storeRef(commonContent2)
    .endCell()

    const nftCollectionContract = provider.open(NFTCollection.createFromConfig({
        ownerAddress: provider.sender().address as Address,
        nextItemIndex: 0,
        content: collectionContent,
        nftItemCode: await compile('NFTItem'),
        royaltyParams: royaltyParamsCell,
    }, await compile('NFTCollection')));

    await nftCollectionContract.sendDeploy(provider.sender(), toNano('0.05'));

    await provider.waitForDeploy(nftCollectionContract.address);

    // run methods on `nftCollectionContract`
}
