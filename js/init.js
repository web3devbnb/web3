const abiPCS = [{
    "inputs": [{
        "internalType": "address",
        "name": "_factory",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "_WETH",
        "type": "address"
    }],
    "stateMutability": "nonpayable",
    "type": "constructor"
}, {
    "inputs": [],
    "name": "WETH",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "tokenA",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "tokenB",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "amountADesired",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amountBDesired",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amountAMin",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amountBMin",
        "type": "uint256"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
    }],
    "name": "addLiquidity",
    "outputs": [{
        "internalType": "uint256",
        "name": "amountA",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amountB",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "liquidity",
        "type": "uint256"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "token",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "amountTokenDesired",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amountTokenMin",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amountETHMin",
        "type": "uint256"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
    }],
    "name": "addLiquidityETH",
    "outputs": [{
        "internalType": "uint256",
        "name": "amountToken",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amountETH",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "liquidity",
        "type": "uint256"
    }],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [],
    "name": "factory",
    "outputs": [{
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "amountOut",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "reserveIn",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "reserveOut",
        "type": "uint256"
    }],
    "name": "getAmountIn",
    "outputs": [{
        "internalType": "uint256",
        "name": "amountIn",
        "type": "uint256"
    }],
    "stateMutability": "pure",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "amountIn",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "reserveIn",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "reserveOut",
        "type": "uint256"
    }],
    "name": "getAmountOut",
    "outputs": [{
        "internalType": "uint256",
        "name": "amountOut",
        "type": "uint256"
    }],
    "stateMutability": "pure",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "amountOut",
        "type": "uint256"
    }, {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
    }],
    "name": "getAmountsIn",
    "outputs": [{
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "amountIn",
        "type": "uint256"
    }, {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
    }],
    "name": "getAmountsOut",
    "outputs": [{
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "amountA",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "reserveA",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "reserveB",
        "type": "uint256"
    }],
    "name": "quote",
    "outputs": [{
        "internalType": "uint256",
        "name": "amountB",
        "type": "uint256"
    }],
    "stateMutability": "pure",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "tokenA",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "tokenB",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "liquidity",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amountAMin",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amountBMin",
        "type": "uint256"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
    }],
    "name": "removeLiquidity",
    "outputs": [{
        "internalType": "uint256",
        "name": "amountA",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amountB",
        "type": "uint256"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "token",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "liquidity",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amountTokenMin",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amountETHMin",
        "type": "uint256"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
    }],
    "name": "removeLiquidityETH",
    "outputs": [{
        "internalType": "uint256",
        "name": "amountToken",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amountETH",
        "type": "uint256"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "token",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "liquidity",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amountTokenMin",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amountETHMin",
        "type": "uint256"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
    }],
    "name": "removeLiquidityETHSupportingFeeOnTransferTokens",
    "outputs": [{
        "internalType": "uint256",
        "name": "amountETH",
        "type": "uint256"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "token",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "liquidity",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amountTokenMin",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amountETHMin",
        "type": "uint256"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
    }, {
        "internalType": "bool",
        "name": "approveMax",
        "type": "bool"
    }, {
        "internalType": "uint8",
        "name": "v",
        "type": "uint8"
    }, {
        "internalType": "bytes32",
        "name": "r",
        "type": "bytes32"
    }, {
        "internalType": "bytes32",
        "name": "s",
        "type": "bytes32"
    }],
    "name": "removeLiquidityETHWithPermit",
    "outputs": [{
        "internalType": "uint256",
        "name": "amountToken",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amountETH",
        "type": "uint256"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "token",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "liquidity",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amountTokenMin",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amountETHMin",
        "type": "uint256"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
    }, {
        "internalType": "bool",
        "name": "approveMax",
        "type": "bool"
    }, {
        "internalType": "uint8",
        "name": "v",
        "type": "uint8"
    }, {
        "internalType": "bytes32",
        "name": "r",
        "type": "bytes32"
    }, {
        "internalType": "bytes32",
        "name": "s",
        "type": "bytes32"
    }],
    "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
    "outputs": [{
        "internalType": "uint256",
        "name": "amountETH",
        "type": "uint256"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "address",
        "name": "tokenA",
        "type": "address"
    }, {
        "internalType": "address",
        "name": "tokenB",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "liquidity",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amountAMin",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amountBMin",
        "type": "uint256"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
    }, {
        "internalType": "bool",
        "name": "approveMax",
        "type": "bool"
    }, {
        "internalType": "uint8",
        "name": "v",
        "type": "uint8"
    }, {
        "internalType": "bytes32",
        "name": "r",
        "type": "bytes32"
    }, {
        "internalType": "bytes32",
        "name": "s",
        "type": "bytes32"
    }],
    "name": "removeLiquidityWithPermit",
    "outputs": [{
        "internalType": "uint256",
        "name": "amountA",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amountB",
        "type": "uint256"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "amountOut",
        "type": "uint256"
    }, {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
    }],
    "name": "swapETHForExactTokens",
    "outputs": [{
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
    }],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "amountOutMin",
        "type": "uint256"
    }, {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
    }],
    "name": "swapExactETHForTokens",
    "outputs": [{
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
    }],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "amountOutMin",
        "type": "uint256"
    }, {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
    }],
    "name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "amountIn",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amountOutMin",
        "type": "uint256"
    }, {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
    }],
    "name": "swapExactTokensForETH",
    "outputs": [{
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "amountIn",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amountOutMin",
        "type": "uint256"
    }, {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
    }],
    "name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "amountIn",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amountOutMin",
        "type": "uint256"
    }, {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
    }],
    "name": "swapExactTokensForTokens",
    "outputs": [{
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "amountIn",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amountOutMin",
        "type": "uint256"
    }, {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
    }],
    "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "amountOut",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amountInMax",
        "type": "uint256"
    }, {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
    }],
    "name": "swapTokensForExactETH",
    "outputs": [{
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{
        "internalType": "uint256",
        "name": "amountOut",
        "type": "uint256"
    }, {
        "internalType": "uint256",
        "name": "amountInMax",
        "type": "uint256"
    }, {
        "internalType": "address[]",
        "name": "path",
        "type": "address[]"
    }, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {
        "internalType": "uint256",
        "name": "deadline",
        "type": "uint256"
    }],
    "name": "swapTokensForExactTokens",
    "outputs": [{
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
    }],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "stateMutability": "payable",
    "type": "receive"
}];

$(document).ready(async function() {

    RebaseTimer();

    var burned = await contract.methods.balanceOf("0x000000000000000000000000000000000000dead").call();
    burned = Number(burned) / Math.pow(10, 5);

    var pcsRouter = new web3.eth.Contract(abiPCS, "0x10ED43C718714eb63d5aA57B78B54704E256024E");

    var priceInfo = await pcsRouter.methods.getAmountsOut("100000", ["0x", "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c", "0xe9e7cea3dedca5984780bafc599bd69add087d56"]).call();

    var priceRaw = Number(web3.utils.fromWei(priceInfo[2]));
    var price = Math.round((priceRaw + Number.EPSILON) * 1000000000) / 1000000000;
    $("#price").text(price.toFixed(2).toString().substring(0, 12) + "$");

    var supply = await contract.methods.totalSupply().call();
    supply = Number(supply) / Math.pow(10, 5);
    var marketcap = Number(supply) * priceRaw;

    if (burned > 0) {
        var perc = burned / supply;
        var diluted = supply * priceRaw;
        marketcap = diluted * (1 - perc);
    }

    marketcap = Math.round((marketcap + Number.EPSILON) * 100) / 100;

    $("#marketcap").text(numberWithCommas(marketcap.toFixed(0)) + "$");
    $("#burned").text(Math.round(burned) + " FlokiGrowCeo");
    $("#holders").text(supply.toFixed(0) + " FlokiGrowCeo");



});


function LoadSlides() {
    if (window.innerWidth <= 767) {
        $("#roadmap-slides").html(htmlMob);
        $("#roadmap-dots").html(dotsMob);
    } else {
        $("#roadmap-slides").html(htmlPC);
        $("#roadmap-dots").html(dotsPC);
    }
    showSlides(slideIndex);
}

function ToggleMenu() {
    toggle = true;
    $(".nav-mob").show(400);
    $(document.body).css('overflow', 'hidden');
}

function HideMenu() {
    $(".nav-mob").hide(400);
    $(document.body).css('overflow', 'visible');
}



async function RebaseTimer() {
    var timer;
    var firstRB = 1660695451;
    firstRB = new Date(Number(firstRB) * 1000);

    timer = setInterval(function() {
        var td = new Date();
        var dif = td.getTime() - firstRB.getTime();
        var Seconds_from_T1_to_T2 = dif / 1000;
        var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);
        var Minutes_Between_Dates = Seconds_Between_Dates / 60;
        var Quarters_Between_Dates = Minutes_Between_Dates / 15;
        var floor = Math.floor(Quarters_Between_Dates);
        var floorDiff = Quarters_Between_Dates - floor;

        var minutes = 15 - (floorDiff * 15);
        var minutesFlat = Math.floor(minutes);
        var seconds = Math.floor((minutes - minutesFlat) * 60);

        $("#timer").text(Math.floor(minutes) + "M " + seconds + "S");

        if (minutes == 0 && seconds == 0) {
            $("#timer").text("Rebasing");
            clearInterval(timer);
            setTimeout(function() {
                RebaseTimer()
            }, 1500);
        }

    }, 1000);
}



$(function() {
    var playerTrack = $("#player-track"),
        bgArtwork = $("#bg-artwork"),
        bgArtworkUrl,
        albumName = $("#album-name"),
        trackName = $("#track-name"),
        albumArt = $("#album-art"),
        sArea = $("#s-area"),
        seekBar = $("#seek-bar"),
        trackTime = $("#track-time"),
        insTime = $("#ins-time"),
        sHover = $("#s-hover"),
        playPauseButton = $("#play-pause-button"),
        i = playPauseButton.find("i"),
        tProgress = $("#current-time"),
        tTime = $("#track-length"),
        seekT,
        seekLoc,
        seekBarPos,
        cM,
        ctMinutes,
        ctSeconds,
        curMinutes,
        curSeconds,
        durMinutes,
        durSeconds,
        playProgress,
        bTime,
        nTime = 0,
        buffInterval = null,
        tFlag = false,
        albums = [
            "Rudes Crypto Lounge",
            "Caesars Calls",
            "Dream Calls",
            "Coin Launch Lounge",
            "Chomys Coin Talk",
            "Canes Degen Lounge",
            "Crypto AMA Lounge",
            "Dex Lounge",
            "Forbez",
            "Nordic Whales",
            "Ultra Lounge",
            "Crypto Disco Lounge",
            "Crypto Disco Lounge",
            "Cheesus Lounge",
            "Ninja Lounge"
        ],
        trackNames = [
            "2022-08-20",
            "2022-08-23",
            "2022-08-22",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "Part 1",
            "Part 2",
            "",
            ""
        ],
        albumArtworks = ["_1", "_2", "_3", "_4", "_5", "_6", "_7", "_8", "_9", "_10", "_11", "_12", "_13", "_14", "_15"],
        trackUrl = [
            "ogg/Rudes Lounge.ogg",
            "ogg/Caesar.ogg",
            "ogg/dreamcall.ogg",
            "ogg/CLL.ogg",
            "ogg/chomys.ogg",
            "ogg/canes.ogg",
            "ogg/Crypto AMA Lounge.ogg",
            "ogg/dexlounge.ogg",
            "ogg/forbez.ogg",
            "ogg/nordic.ogg",
            "ogg/ultra.ogg",
            "ogg/rollerlounge1.ogg",
            "ogg/rollerlounge2.ogg",
            "ogg/cheesus.ogg",
            "ogg/ninjalounge.ogg",
        ],
        playPreviousTrackButton = $("#play-previous"),
        playNextTrackButton = $("#play-next"),
        currIndex = -1;

    function playPause() {
        setTimeout(function() {
            if (audio.paused) {
                playerTrack.addClass("active");
                albumArt.addClass("active");
                checkBuffering();
                i.attr("class", "bx bx-pause");
                audio.play();
            } else {
                playerTrack.removeClass("active");
                albumArt.removeClass("active");
                clearInterval(buffInterval);
                albumArt.removeClass("buffering");
                i.attr("class", "bx bx-play");
                audio.pause();
            }
        }, 300);
    }

    function showHover(event) {
        seekBarPos = sArea.offset();
        seekT = event.clientX - seekBarPos.left;
        seekLoc = audio.duration * (seekT / sArea.outerWidth());

        sHover.width(seekT);

        cM = seekLoc / 60;

        ctMinutes = Math.floor(cM);
        ctSeconds = Math.floor(seekLoc - ctMinutes * 60);

        if (ctMinutes < 0 || ctSeconds < 0) return;

        if (ctMinutes < 0 || ctSeconds < 0) return;

        if (ctMinutes < 10) ctMinutes = "0" + ctMinutes;
        if (ctSeconds < 10) ctSeconds = "0" + ctSeconds;

        if (isNaN(ctMinutes) || isNaN(ctSeconds)) insTime.text("--:--");
        else insTime.text(ctMinutes + ":" + ctSeconds);

        insTime.css({
            left: seekT,
            "margin-left": "-21px"
        }).fadeIn(0);
    }

    function hideHover() {
        sHover.width(0);
        insTime.text("00:00").css({
            left: "0px",
            "margin-left": "0px"
        }).fadeOut(0);
    }

    function playFromClickedPos() {
        audio.currentTime = seekLoc;
        seekBar.width(seekT);
        hideHover();
    }

    function updateCurrTime() {
        nTime = new Date();
        nTime = nTime.getTime();

        if (!tFlag) {
            tFlag = true;
            trackTime.addClass("active");
        }

        curMinutes = Math.floor(audio.currentTime / 60);
        curSeconds = Math.floor(audio.currentTime - curMinutes * 60);

        durMinutes = Math.floor(audio.duration / 60);
        durSeconds = Math.floor(audio.duration - durMinutes * 60);

        playProgress = (audio.currentTime / audio.duration) * 100;

        if (curMinutes < 10) curMinutes = "0" + curMinutes;
        if (curSeconds < 10) curSeconds = "0" + curSeconds;

        if (durMinutes < 10) durMinutes = "0" + durMinutes;
        if (durSeconds < 10) durSeconds = "0" + durSeconds;

        if (isNaN(curMinutes) || isNaN(curSeconds)) tProgress.text("00:00");
        else tProgress.text(curMinutes + ":" + curSeconds);

        if (isNaN(durMinutes) || isNaN(durSeconds)) tTime.text("00:00");
        else tTime.text(durMinutes + ":" + durSeconds);

        if (
            isNaN(curMinutes) ||
            isNaN(curSeconds) ||
            isNaN(durMinutes) ||
            isNaN(durSeconds)
        )
            trackTime.removeClass("active");
        else trackTime.addClass("active");

        seekBar.width(playProgress + "%");

        if (playProgress == 100) {
            i.attr("class", "fa fa-play");
            seekBar.width(0);
            tProgress.text("00:00");
            albumArt.removeClass("buffering").removeClass("active");
            clearInterval(buffInterval);
        }
    }

    function checkBuffering() {
        clearInterval(buffInterval);
        buffInterval = setInterval(function() {
            if (nTime == 0 || bTime - nTime > 1000) albumArt.addClass("buffering");
            else albumArt.removeClass("buffering");

            bTime = new Date();
            bTime = bTime.getTime();
        }, 100);
    }

    function selectTrack(flag) {
        if (flag == 0 || flag == 1) ++currIndex;
        else --currIndex;

        if (currIndex > -1 && currIndex < albumArtworks.length) {
            if (flag == 0) i.attr("class", "bx bx-play");
            else {
                albumArt.removeClass("buffering");
                i.attr("class", "bx bx-pause");
            }

            seekBar.width(0);
            trackTime.removeClass("active");
            tProgress.text("00:00");
            tTime.text("00:00");

            currAlbum = albums[currIndex];
            currTrackName = trackNames[currIndex];
            currArtwork = albumArtworks[currIndex];

            audio.src = trackUrl[currIndex];

            nTime = 0;
            bTime = new Date();
            bTime = bTime.getTime();

            if (flag != 0) {
                audio.play();
                playerTrack.addClass("active");
                albumArt.addClass("active");

                clearInterval(buffInterval);
                checkBuffering();
            }

            albumName.text(currAlbum);
            trackName.text(currTrackName);
            albumArt.find("img.active").removeClass("active");
            $("#" + currArtwork).addClass("active");

            bgArtworkUrl = $("#" + currArtwork).attr("src");

            bgArtwork.css({
                "background-image": "url(" + bgArtworkUrl + ")"
            });
        } else {
            if (flag == 0 || flag == 1) --currIndex;
            else ++currIndex;
        }
    }

    function initPlayer() {
        audio = new Audio();

        selectTrack(0);

        audio.loop = false;

        playPauseButton.on("click", playPause);

        sArea.mousemove(function(event) {
            showHover(event);
        });

        sArea.mouseout(hideHover);

        sArea.on("click", playFromClickedPos);

        $(audio).on("timeupdate", updateCurrTime);

        playPreviousTrackButton.on("click", function() {
            selectTrack(-1);
        });
        playNextTrackButton.on("click", function() {
            selectTrack(1);
        });
    }

    initPlayer();
});

var recentMail = false;

async function SendEmail() {
    try {
        if (recentMail) {
            $("#select-error").text("You sent an email less than 60 seconds ago, please do not spam our mailbox.");
        }

        var name = $("#select-name").val();
        var handle = $("#select-handle").val();
        var subject = $("#select-subject option:selected").text();
        var message = encodeURIComponent($("#select-message").val());

        if (name == "" || subject == "Select a Subject" || message == "") {
            $("#select-error").text("Please Fill in All Fields");
            return;
        }

        await $.ajax({
            type: 'post',
            url: 'https://dutchdapps-api.vercel.app/sendemail',
            data: `{"name": "${name}", "subject": "${subject}", "handle": "${handle}", "message": "${message}"}`,
            contentType: "application/json; charset=utf-8",
            success: function(data) {
                console.log(data);
                $("#select-info").text("Email Sent Succesfully");
                recentMail = true;
            },
            error: function(error) {
                console.log(error);
            }
        });

        $("#select-name").val("");
        $("#select-handle").val("");
        $("#select-message").val("");
        $("#select-error").text("");
        setTimeout(function() {
            $("#select-info").text("");
        }, 3000);
        setTimeout(function() {
            recentMail = false;
        }, 60000);
    } catch (error) {
        $("#select-error").text("Error Sending Email, please try again later.");
        setTimeout(function() {
            $("#select-error").text("");
        }, 3000);
    }
}