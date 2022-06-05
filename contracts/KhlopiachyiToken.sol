pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract KhlopiachyiToken is ERC20 {
    mapping(address => uint256) internal _balances;

    constructor() ERC20("Khlopiachyi Pavlo", "KHLP") {
        _mint(_msgSender(), 1e25);
    }
}