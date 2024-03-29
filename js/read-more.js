// read-more.js
// Een script dat ervoor zorgt dat een paragraaf kan worden uitgeklapt door op een link te klikken.
// Gemaakt door: Volodymyr Korobkin

let oldWidth;
function fillReadMore() {
    document.querySelectorAll('p.readmore').forEach(function(p) {
        let readMore = document.createElement('span');

        let text = p.textContent;
        let textShort = text.substring(0, 130);
        let lastSpace = textShort.lastIndexOf(' ');

        textShort = textShort.substring(0, lastSpace);
        if (textShort.charAt(textShort.length - 1).match(/[.,!?]/)) {
            textShort = textShort.substring(0, textShort.length - 1);
        }

        p.textContent = textShort + '...';

        readMore.textContent = ' lees meer';
        readMore.style.color = '#0550ae';

        readMore.addEventListener('click', function() {
            p.textContent = text;
        });

        p.appendChild(readMore);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 480) {
        fillReadMore();
    }
    oldWidth = window.innerWidth;
});


window.addEventListener('resize', function() {
    if (oldWidth <= 480 && window.innerWidth > 480) {
        document.querySelectorAll('p.readmore > span').forEach(function(span) {
            span.click();
        });
    }
    if (oldWidth > 480 && window.innerWidth <= 480) {
        fillReadMore();
    }

    oldWidth = window.innerWidth;
});

