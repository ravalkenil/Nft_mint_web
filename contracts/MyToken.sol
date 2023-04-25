// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract MyToken is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    constructor() ERC721("MyToken", "MTK") {}
    event OrderPlaced(uint tokenId, uint BuyTime);

    function safeMint(address to, string memory uri) public onlyOwner returns(uint256) {
       
        _tokenIdCounter.increment();
         uint256 tokenId = _tokenIdCounter.current();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        emit OrderPlaced(tokenId,block.timestamp);
        return tokenId;
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}


// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/utils/Counters.sol";

// contract MyToken is ERC721, Ownable {
//     using Counters for Counters.Counter;

//     Counters.Counter private _tokenIdCounter;

//     constructor() ERC721("MyToken", "MTK") {}

//     function safeMint(address to,string memory tokenURI) public onlyOwner {
//         uint256 tokenId = _tokenIdCounter.current();
//         _tokenIdCounter.increment();
//         _safeMint(to, tokenId);
//     }
// }


// 0x800070991628CCB5f25845f152612C137503f44B