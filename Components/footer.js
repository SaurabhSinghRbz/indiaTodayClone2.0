function footer() {
    return `<div id="footerBox">
    <div id="footerBlock1">
        <div>INDIATODAY.IN</div>
        <div>
            <div>
                <div><a target="_blank" href="https://www.facebook.com/IndiaToday/"><img class="social-connect"
                            src="../Images/footer/fb.png"></a></div>
                <div><a target="_blank" href="https://twitter.com/indiatoday"><img class="social-connect"
                            src="../Images/footer/twitter.png"></a></div>
                <div><a href="#"><img class="social-connect" src="../Images/footer/rss.png"></a></div>
                <div><a href="#"><img class="social-connect" src="../Images/footer/search.png"></a></div>
            </div>
            <div id="hider"><a href="#"><img id="hiderImg" src="../Images/footer/hide.png"></a></div>
        </div>
    </div>
    <div id="footerBlock2">
        <div>
            <h4>PUBLICATIONS:</h4>
            <p class="footerMenu">Business Today</p>
            <p class="footerMenu">Cosmopolitan</p>
            <p class="footerMenu">India Today - Hindi</p>
            <p class="footerMenu">India Today</p>
            <p class="footerMenu">Mail Today</p>
            <p class="footerMenu">Money Today</p>
            <p class="footerMenu">Reader's Digest</p>
            <p class="footerMenu">Time</p>
        </div>
        <div>
            <h4>TELEVISION:</h4>
            <p class="footerMenu">Aaj Tak</p>
            <p class="footerMenu">Delhi Aaj Tak</p>
            <p class="footerMenu">Good News Today</p>
            <p class="footerMenu">India Today TV</p>
            <h4>RADIO:</h4>
            <p class="footerMenu">Ishq FM</p>
            <h4>GAMING:</h4>
            <p class="footerMenu">India Today Gaming</p>
            <p class="footerMenu">World Esports Cup</p>
            <p class="footerMenu">Esports Premier League</p>
        </div>
        <div>
            <h4>EDUCATION:</h4>
            <p class="footerMenu">India Today Education</p>
            <p class="footerMenu">Vasant Valley</p>
            <p class="footerMenu">Best Colleges India 2018</p>
            <p class="footerMenu">Best Universities India 2018</p>
            <p class="footerMenu">Aajtak Campus National Aptitude test</p>
            <h4>ONLINE SHOPPING:</h4>
        </div>
        <div>
            <h4>EVENTS:</h4>
            <p class="footerMenu">Agenda Aajtak</p>
            <p class="footerMenu">India Today Conclave</p>
            <p class="footerMenu">Robb Report India 2018</p>
            <p class="footerMenu">Sahitya Aaj Tak</p>
            <p class="footerMenu">The Red Lab</p>
        </div>
        <div>
            <h4>PRINTING:</h4>
            <p class="footerMenu">Thomson Press</p>
            <h4>WELFARE:</h4>
            <p class="footerMenu">Care Today</p>
            <h4>MUSIC:</h4>
            <p class="footerMenu">Music Today</p>
        </div>
        <div>
            <h4>SYNDICATIONS:</h4>
            <p class="footerMenu">India content</p>
            <p class="footerMenu">Headlines Today</p>
            <h4>DISTRIBUTION:</h4>
            <p class="footerMenu">Rate Card</p>
            <h4>USEFUL LINKS :</h4>
            <p class="footerMenu">Partners</p>
            <p class="footerMenu">Press Release</p>
            <p class="footerMenu">Sitemap</p>
            <p class="footerMenu">News</p>
            <p class="footerMenu">Newsletter</p>
            <p class="footerMenu">Privacy Policy</p>
            <p class="footerMenu">Correction Policy</p>
        </div>
    </div>
    <div id="footerBlock3">
        <p class="footerMenu">Download App</p>
        <div>
            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.indiatoday&hl=en">
                <img src="../Images/footer/androidApp.png">
            </a>
            <a target="_blank" href="https://apps.apple.com/in/app/india-today-live/id510733452">
                <img src="../Images/footer/IOSApp.png">
            </a>
            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.indiatoday.tv">
                <img src="../Images/footer/watchOnTv.png">
            </a>
        </div>
        <p class="footerMenu">Copyright © 2022 Living Media India Limited. For reprint rights: Syndications
            Today</p>
    </div>
</div>`
}

function expandFooter() {
    return `let hiderFalg = true;
    let hiderDiv = document.getElementById("hider").addEventListener('click', function () {
        if (hiderFalg) {
            document.getElementById("footerBlock2").style.display = "none"
            document.getElementById("hiderImg").src = "../Images/footer/expand.png"
            hiderFalg = false;
        } else {
            document.getElementById("footerBlock2").style.display = "grid"
            document.getElementById("hiderImg").src = "../Images/footer/hide.png"
            hiderFalg = true
        }
    })`
}

export { footer, expandFooter };