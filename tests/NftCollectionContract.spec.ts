import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { Cell, toNano } from '@ton/core';
import { NftCollectionContract } from '../wrappers/NFTCollection';
import '@ton/test-utils';
import { compile } from '@ton/blueprint';

describe('NftCollectionContract', () => {
    let code: Cell;

    beforeAll(async () => {
        code = await compile('NftCollectionContract');
    });

    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let nftCollectionContract: SandboxContract<NftCollectionContract>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        nftCollectionContract = blockchain.openContract(NftCollectionContract.createFromConfig({}, code));

        deployer = await blockchain.treasury('deployer');

        const deployResult = await nftCollectionContract.sendDeploy(deployer.getSender(), toNano('0.05'));

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: nftCollectionContract.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and nftCollectionContract are ready to use
    });
});
