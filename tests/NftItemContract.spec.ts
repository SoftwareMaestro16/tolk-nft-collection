import { Blockchain, SandboxContract, TreasuryContract } from '@ton/sandbox';
import { Cell, toNano } from '@ton/core';
import { NftItemContract } from '../wrappers/NFTItem';
import '@ton/test-utils';
import { compile } from '@ton/blueprint';

describe('NftItemContract', () => {
    let code: Cell;

    beforeAll(async () => {
        code = await compile('NftItemContract');
    });

    let blockchain: Blockchain;
    let deployer: SandboxContract<TreasuryContract>;
    let nftItemContract: SandboxContract<NftItemContract>;

    beforeEach(async () => {
        blockchain = await Blockchain.create();

        nftItemContract = blockchain.openContract(NftItemContract.createFromConfig({}, code));

        deployer = await blockchain.treasury('deployer');

        const deployResult = await nftItemContract.sendDeploy(deployer.getSender(), toNano('0.05'));

        expect(deployResult.transactions).toHaveTransaction({
            from: deployer.address,
            to: nftItemContract.address,
            deploy: true,
            success: true,
        });
    });

    it('should deploy', async () => {
        // the check is done inside beforeEach
        // blockchain and nftItemContract are ready to use
    });
});
