// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PredictionMarket {

    struct Market {
        string question;
        uint yesPool;
        uint noPool;
    }

    Market[] public markets;

    function createMarket(string memory _question) public {
        markets.push(Market(_question,0,0));
    }

}
