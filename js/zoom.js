// zoom.js
// Een script dat ervoor zorgt dat een afbeelding kan worden vergroot door erop te klikken.
// Gemaakt door: Volodymyr Korobkin

document.addEventListener('DOMContentLoaded', function() {
    const imgs = document.querySelectorAll('.zoom');
    imgs.forEach(function(img) {
        img.addEventListener('click', function() {
            if (img.classList.contains('zoomed')) {
                img.classList.remove('zoomed');
            } else {
                let backGround = document.createElement('div');
                backGround.style.position = 'fixed';
                backGround.style.top = '0';
                backGround.style.left = '0';
                backGround.style.width = '100%';
                backGround.style.height = '100%';

                backGround.style.backgroundColor = 'rgba(0, 0, 0, 0)';
                backGround.style.transition = 'all 0.25s';

                document.body.appendChild(backGround);




                let newImg = document.createElement('img');
                newImg.classList.add('img-overlay');

                newImg.src = img.src;
                newImg.style.top = img.offsetTop - window.scrollY + 'px';
                newImg.style.left = img.offsetLeft - window.scrollX + 'px';
                newImg.style.width = img.width + 'px';
                newImg.style.height = img.height + 'px';

                document.body.appendChild(newImg);

                newImg.addEventListener("load", function() {

                    setTimeout(function() {
                        img.style.opacity = '0';

                        newImg.classList.add('zoomed');
                        newImg.style.top = '0';
                        newImg.style.left = '0';

                        newImg.style.width = '100%';
                        newImg.style.height = '100%';

                        backGround.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';

                    }, 1);

                    setTimeout(function() {
                        newImg.addEventListener('click', function() {
                            newImg.classList.remove('zoomed');
                            newImg.style.top = img.offsetTop - window.scrollY + 'px';
                            newImg.style.left = img.offsetLeft - window.scrollX + 'px';

                            newImg.style.width = img.width + 'px';
                            newImg.style.height = img.height + 'px';

                            backGround.style.backgroundColor = 'rgba(0, 0, 0, 0)';

                            setTimeout(function() {
                                backGround.remove();
                            }, 200);

                            setTimeout(function() {     
                                img.style.opacity = '1';
                                newImg.remove();
                            }, 250);
                        });
                    }, 250);


                });
            }
        });
    });
});