const buttons = document.querySelectorAll(".card-buttons button");
const sections = document.querySelectorAll(".card-section");
const card = document.querySelector(".card");

const handleButtonClick = (e) => {
    const targetSection = e.target.getAttribute("data-section");
    const section = document.querySelector(targetSection);
    targetSection !== "#about" ?
        card.classList.add("is-active") :
        card.classList.remove("is-active");
    card.setAttribute("data-state", targetSection);
    sections.forEach((s) => s.classList.remove("is-active"));
    buttons.forEach((b) => b.classList.remove("is-active"));
    e.target.classList.add("is-active");
    section.classList.add("is-active");
};

buttons.forEach((btn) => {
    btn.addEventListener("click", handleButtonClick);
});


const htmlMob = `<div class="mySlides">
                            <div class="row">
                                <div class="col-12">
                                    <ul class="fs-3" style="list-style:none; padding:0">
                                        <li>
                                            <span class="mr-2 text-gradient2">Whitepaper V1</span>
                                            <i class="bx bx-check-shield text-success" style="vertical-align:middle;"></i>
                                        </li>
                                        <li>
                                            <span class="mr-2 text-gradient2">Private Sale</span>
                                            <i class="bx bx-check-shield text-success" style="vertical-align:middle;"></i>
                                        </li>
                                        <li>
                                            <span class="mr-2 text-gradient2" style="">Socials Setup</span>
                                            <i class="bx bx-check-shield text-success" style="vertical-align:middle;"></i>
                                        </li>
                                        <li>
                                            <span class="mr-2 text-gradient2" style="">Launch Website</span>
                                            <i class="bx bx-check-shield text-success" style="vertical-align:middle;"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="mySlides">
                            <div class="row">
                                <div class="col-12">
                                    <ul class="fs-3" style="list-style:none; padding:0">
                                        <li>
                                            <span class="mr-2 text-gradient2" style="">Dapp V1</span>
                                            <i class="bx bx-check-shield text-success" style="vertical-align:middle;"></i>
                                        </li>
                                        <li>
                                            <span class="mr-2 text-gradient2" style="">Presale on Pinksale</span>
                                            <i class="bx bx-check-shield text-success" style="vertical-align:middle;"></i>
                                        </li>
                                        <li>
                                            <span class="mr-2 text-gradient2">PinkLock LQ Lock 1 year</span>
                                            <i class="bx bx-check-shield text-success" style="vertical-align:middle;"></i>
                                        </li>
                                        <li>
                                            <span class="mr-2 text-gradient2">AMAs with NW, Rudes CL, Brian's CLL and more.</span>
                                            <i class="bx bx-check-shield text-success" style="vertical-align:middle;"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="mySlides">
                            <div class="row">
                                <div class="col-12">
                                    <ul class="fs-3" style="list-style:none; padding:0">
                                        <li>
                                            <span class="mr-2 text-gradient2">Twitter Campaign</span>
                                            <i class="bx bx-x text-danger" style="vertical-align:middle;"></i>
                                        </li>
                                        <li>
                                            <span class="mr-2 text-gradient2">Listing on Coin Listing Sites</span>
                                            <i class="bx bx-check-shield text-success" style="vertical-align:middle;"></i>
                                        </li>
                                        <li>
                                            <span class="mr-2 text-gradient2">Youtube Campaign</span>
                                            <i class="bx bx-x text-danger" style="vertical-align:middle;"></i>
                                        </li>
                                        <li>
                                            <span class="mr-2 text-gradient2" style="">Coingecko Listing</span>
                                            <i class="bx bx-x text-danger" style="vertical-align:middle;"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="mySlides">
                            <div class="row">
                                <div class="col-12">
                                    <ul class="fs-3" style="list-style:none; padding:0">
                                        <li>
                                            <span class="mr-2 text-gradient2">Coinmarket Cap Listing</span>
                                            <i class="bx bx-x text-danger" style="vertical-align:middle;"></i>
                                        </li>
                                        <li>
                                            <span class="mr-2 text-gradient2">More AMAs</span>
                                            <i class="bx bx-check-shield text-success" style="vertical-align:middle;"></i>
                                        </li>
                                        <li>
                                            <span class="mr-2 text-gradient2">Release NFT set</span>
                                            <i class="bx bx-check-shield text-success" style="vertical-align:middle;"></i>
                                        </li>
                                        <li>
                                            <span class="mr-2 text-gradient2" style="">Release NFT Staking</span>
                                            <i class="bx bx-check-shield text-success" style="vertical-align:middle;"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="mySlides">
                            <div class="row">
                                <div class="col-12">
                                    <ul class="fs-3" style="list-style:none; padding:0">
                                        <li>
                                            <span class="mr-2 text-gradient2">FlokiGrow CEOLottery Dapp</span>
                                            <i class="bx bx-x text-danger" style="vertical-align:middle;"></i>
                                        </li>
                                        <li>
                                            <span class="mr-2 text-gradient2">Merchandise Store</span>
                                            <i class="bx bx-x text-danger" style="vertical-align:middle;"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <a class="prev text-gradient" onclick="plusSlides(-1)" style="margin-left:-1rem;">&#10094;</a>
                        <a class="next text-gradient" onclick="plusSlides(1)" style="margin-right:-1rem;">&#10095;</a>`;

const htmlPC = `         <div class="mySlides">
                            <div class="row">
                                <div class="col-6">
                                    <ul class="fs-3" style="list-style:none; padding:0">
                                        <li>
                                            <span class="mr-2 text-gradient2">Whitepaper V1</span>
                                            <i class="bx bx-check-shield text-success" style="vertical-align:middle;"></i>
                                        </li>
                                        <li>
                                            <span class="mr-2 text-gradient2">Private Sale</span>
                                            <i class="bx bx-check-shield text-success" style="vertical-align:middle;"></i>
                                        </li>
                                        <li>
                                            <span class="mr-2 text-gradient2" style="">Socials Setup</span>
                                            <i class="bx bx-check-shield text-success" style="vertical-align:middle;"></i>
                                        </li>
                                        <li>
                                            <span class="mr-2 text-gradient2" style="">Launch Website</span>
                                            <i class="bx bx-check-shield text-success" style="vertical-align:middle;"></i>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-6">
                                    <ul class="fs-3" style="list-style:none; padding:0">
                                        <li>
                                            <span class="mr-2 text-gradient2" style="">Dapp V1</span>
                                            <i class="bx bx-check-shield text-success" style="vertical-align:middle;"></i>
                                        </li>
                                        <li>
                                            <span class="mr-2 text-gradient2" style="">Presale on Pinksale</span>
                                            <i class="bx bx-check-shield text-success" style="vertical-align:middle;"></i>
                                        </li>
                                        <li>
                                            <span class="mr-2 text-gradient2">PinkLock LQ Locked 1 year</span>
                                            <i class="bx bx-check-shield text-success" style="vertical-align:middle;"></i>
                                        </li>
                                        <li>
                                            <span class="mr-2 text-gradient2">AMAs with NW, Rudes CL, Brian's CLL and more.</span>
                                            <i class="bx bx-check-shield text-success" style="vertical-align:middle;"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="mySlides">
                            <div class="row">
                                <div class="col-6">
                                    <ul class="fs-3" style="list-style:none; padding:0">
                                        <li>
                                            <span class="mr-2 text-gradient2">Twitter Campaign</span>
                                            <i class="bx bx-x text-danger" style="vertical-align:middle;"></i>
                                        </li>
                                        <li>
                                            <span class="mr-2 text-gradient2">Listing on Coin Listing Sites</span>
                                            <i class="bx bx-check-shield text-success" style="vertical-align:middle;"></i>
                                        </li>
                                        <li>
                                            <span class="mr-2 text-gradient2">YouTube Campaign</span>
                                            <i class="bx bx-x text-danger" style="vertical-align:middle;"></i>
                                        </li>
                                        <li>
                                            <span class="mr-2 text-gradient2" style="">Coingecko Listing</span>
                                            <i class="bx bx-x text-danger" style="vertical-align:middle;"></i>
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-6">
                                    <ul class="fs-3" style="list-style:none; padding:0">
                                        <li>
                                            <span class="mr-2 text-gradient2">Coinmarket Cap Listing</span>
                                            <i class="bx bx-x text-danger" style="vertical-align:middle;"></i>
                                        </li>
                                        <li>
                                            <span class="mr-2 text-gradient2" style="">More AMAs</span>
                                            <i class="bx bx-check-shield text-success" style="vertical-align:middle;"></i>
                                        </li>
                                        <li>
                                            <span class="mr-2 text-gradient2" style="">Release NFT Set</span>
                                            <i class="bx bx-check-shield text-success" style="vertical-align:middle;"></i>
                                        </li>
                                        <li>
                                            <span class="mr-2 text-gradient2">Release NFT Staking</span>
                                            <i class="bx bx-check-shield text-success" style="vertical-align:middle;"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="mySlides">
                            <div class="row">
                                <div class="col-6">
                                    <ul class="fs-3" style="list-style:none; padding:0">
                                        <li>
                                            <span class="mr-2 text-gradient2">FlokiGrow CEOLottery Dapp</span>
                                            <i class="bx bx-x text-danger" style="vertical-align:middle;"></i>
                                        </li>
                                        <li>
                                            <span class="mr-2 text-gradient2">Merchandise Store</span>
                                            <i class="bx bx-x text-danger" style="vertical-align:middle;"></i>
                                        </li>
                                    </ul>
                                </div>                                
                            </div>
                        </div>

                        <a class="prev text-gradient" onclick="plusSlides(-1)" style="margin-left:-1rem;">&#10094;</a>
                        <a class="next text-gradient" onclick="plusSlides(1)" style="margin-right:-1rem;">&#10095;</a>`;

const dotsMob = `<span class="dot" onclick="currentSlide(1)"></span>
                 <span class="dot" onclick="currentSlide(2)"></span>
                 <span class="dot" onclick="currentSlide(3)"></span>
                <span class="dot" onclick="currentSlide(4)"></span>
                <span class="dot" onclick="currentSlide(5)"></span>`;

const dotsPC = `<span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
                <span class="dot" onclick="currentSlide(3)"></span>`;

var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}