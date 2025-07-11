import { CompilerConfig } from '@ton/blueprint';

export const compile: CompilerConfig = {
    lang: 'tolk',
    entrypoint: 'contracts/nft_item_contract.tolk',
    withStackComments: true,    // Fift output will contain comments, if you wish to debug its output
    withSrcLineComments: true,  // Fift output will contain .tolk lines as comments
    experimentalOptions: '',    // you can pass experimental compiler options here
};
