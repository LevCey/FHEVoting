pragma solidity ^0.8.24;

import {FHE, ebool, externalEbool} from "@fhevm/solidity/lib/FHE.sol";
import {SepoliaConfig} from "@fhevm/solidity/config/ZamaConfig.sol";

contract FHEVoting is SepoliaConfig {
    mapping(address => bool) public hasVoted;

    ebool private _yesCount;
    ebool private _noCount;

    constructor() {
        _yesCount = FHE.asEbool(false);
        _noCount = FHE.asEbool(false);
    }

    function vote(externalEbool voteEncrypted, bytes calldata proof) external {
        require(!hasVoted[msg.sender], "You have already voted");

        ebool voteBool = FHE.fromExternal(voteEncrypted, proof);
        hasVoted[msg.sender] = true;

        // ebool == true means "yes"
        _yesCount = FHE.or(_yesCount, voteBool); 
        _noCount = FHE.or(_noCount, FHE.not(voteBool));

        FHE.allow(_yesCount, msg.sender);
        FHE.allow(_noCount, msg.sender);
    }

    function getEncryptedYesCount() external view returns (ebool) {
        return _yesCount;
    }

    function getEncryptedNoCount() external view returns (ebool) {
        return _noCount;
    }
}
