export class NFTMetadata {
    static collectionMetadata: string = "https://softwaremaestro16.github.io/nft_collection/folder_for_mintory/nft_collection.json";
  
    static nftMetadata: string[] = [
      "https://softwaremaestro16.github.io/nft_collection/folder_for_mintory/nft_meta_1.json",
      "https://softwaremaestro16.github.io/nft_collection/folder_for_mintory/nft_meta_2.json",
      "https://softwaremaestro16.github.io/nft_collection/folder_for_mintory/nft_meta_3.json",
      "https://softwaremaestro16.github.io/nft_collection/folder_for_mintory/nft_meta_4.json",
      "https://softwaremaestro16.github.io/nft_collection/folder_for_mintory/nft_meta_5.json",
    ];
};

export class JettonData {
    static jettonMinterAddress: string = "kQBpqkbPrhSjleAQ8W9TJpZBj6K3GKijCH-Uz_6H7UnaqVTI";
    static jettonWalletCode: string = "te6cckECEQEAAyMAART/APSkE/S88sgLAQIBYgIQAgLMAwYCAdQEBQDDCDHAJJfBOAB0NMDAXGwlRNfA/AM4PpA+kAx+gAxcdch+gAx+gAwc6m0AALTH4IQD4p+pVIgupUxNFnwCeCCEBeNRRlSILqWMUREA/AK4DWCEFlfB7y6k1nwC+BfBIQP8vCAAET6RDBwuvLhTYAIBIAcPAgEgCAoB8VA9M/+gD6QCHwAe1E0PoA+kD6QNQwUTahUirHBfLiwSjC//LiwlQ0QnBUIBNUFAPIUAT6AljPFgHPFszJIsjLARL0APQAywDJIPkAcHTIywLKB8v/ydAE+kD0BDH6ACDXScIA8uLEd4AYyMsFUAjPFnD6AhfLaxPMgJAJ6CEBeNRRnIyx8Zyz9QB/oCIs8WUAbPFiX6AlADzxbJUAXMI5FykXHiUAioE6CCCcnDgKAUvPLixQTJgED7ABAjyFAE+gJYzxYBzxbMye1UAgEgCw4C9ztRND6APpA+kDUMAjTP/oAUVGgBfpA+kBTW8cFVHNtcFQgE1QUA8hQBPoCWM8WAc8WzMkiyMsBEvQA9ADLAMn5AHB0yMsCygfL/8nQUA3HBRyx8uLDCvoAUaihggiYloBmtgihggiYloCgGKEnlxBJEDg3XwTjDSXXCwGAMDQBwUnmgGKGCEHNi0JzIyx9SMMs/WPoCUAfPFlAHzxbJcYAQyMsFJM8WUAb6AhXLahTMyXH7ABAkECMAfMMAI8IAsI4hghDVMnbbcIAQyMsFUAjPFlAE+gIWy2oSyx8Syz/JcvsAkzVsIeIDyFAE+gJYzxYBzxbMye1UANc7UTQ+gD6QPpA1DAH0z/6APpAMFFRoVJJxwXy4sEnwv/y4sIFggkxLQCgFrzy4sOCEHvdl97Iyx8Vyz9QA/oCIs8WAc8WyXGAGMjLBSTPFnD6AstqzMmAQPsAQBPIUAT6AljPFgHPFszJ7VSAAg9QBBrkPaiaH0AfSB9IGoYAmmPwQgLxqKMqRBdQQg97svvCd0JWPlxYumfmP0AGAnQKBHkKAJ9ASxniwDni2Zk9qpAAboPYF2omh9AH0gfSBqGG7XEd1";
} 

export class RandomAddresses {
    static addresses: string[] = [
      "0QCsMm47egxSofgw5Y-l34ZeMw6vPYUUyTIjYT3HTafpmH9O",
      "0QCSES0TZYqcVkgoguhIb8iMEo4cvaEwmIrU5qbQgnN8fo2A",
      "0QCxEal2I247XpkKJQQGCYvmDqfBokLNQFWndLEG2rlo58GG",
    ];

    static getRandomAddress(): string {
      const idx = Math.floor(Math.random() * this.addresses.length);
      return this.addresses[idx];
    }
  }