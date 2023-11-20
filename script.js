let dateDone = false;
let venueDone = false;
let underlineDone = false;
let quoteDone = false;

addEventListener('scroll', ()=> {
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    console.log(scrollTop);

    if (scrollTop > 500 && !dateDone) {
        document.getElementById("date-1").classList.add("typing");
        document.getElementById("date-2").classList.add("typing");
        dateDone = true;
    }

    if (scrollTop > 1000 && !venueDone) {
        document.getElementById("venue-label").classList.add("venue-fade");
        venueDone = true;
    }

    if (scrollTop > 1400 && !underlineDone) {
        let code = document.styleSheets[0].cssRules[37];
        code.style.animation = "underline 1s ease-out forwards"
        underlineDone = true;
    }

    if (scrollTop > 1800 && !quoteDone) {
        document.getElementById("line-1").classList.add("quote-anim");
        document.getElementById("line-2").classList.add("quote-anim");
        quoteDone = true;
    }
})