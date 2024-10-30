var isGallery=document.querySelectorAll(".sqs-gallery-design-carousel")[0];void 0!==isGallery&&null!=isGallery&&document.querySelectorAll(".sqs-gallery-design-carousel").forEach(function(e){var
    i=e.querySelector(".summary-header-text");if("aiko"==(i.innerText||i.textContent)){let i='
    <svg width="76" height="62" viewBox="0 0 76 62" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M4.68035 62C1.56012 52.8148 0 43.7062 0 34.6741C0 24.2642 2.67449 15.921 8.02346 9.64446C13.3724 3.21482 21.173 0 31.4252 0V14.4667C23.5503 14.4667 19.6129 19.6716 19.6129 30.0815V33.5259H33.8768V62H4.68035ZM46.8035 62C43.8319 52.6617 42.346 43.5531 42.346 34.6741C42.346 24.2642 44.9462 15.921 50.1466 9.64446C55.4956 3.21482 63.2962 0 73.5484 0V14.4667C65.8221 14.4667 61.9589 19.6716 61.9589 30.0815V33.5259H76V62H46.8035Z"
            fill="white"
        ></path>
    </svg>
    ';e.classList.add("aiko-plugin"),e.closest("section").classList.add("section-with-aiko-slider");var a=e.closest(".sqs-block").getAttribute("id");e.insertAdjacentHTML("beforeend",'
    <div class="aiko-wrapper swiper-container"><div class="aiko-inner-wrapper swiper-wrapper"></div></div>
    ');var t=e.querySelector(".aiko-inner-wrapper");e.querySelectorAll(".summary-item").forEach(function(e,s){var r=a+"-slide-"+s;e.setAttribute("data-slide-id",r);let
    l=e.querySelector(".summary-title-link"),o=l.innerText||l.textContent;console.log(o);let d=e.querySelector(".summary-metadata-item--tags");console.log(d);let n=d.innerHTML||d.textContent,c=e.querySelector(".summary-excerpt
    p").outerHTML||e.querySelector(".summary-excerpt p").textContent,p='
    <div class="aiko-slide image-slide swiper-slide" data-slide-img-id="'+r+'">
        <div class="aiko-wrapper">
            <div class="left-part">
                '+('
                <div class="image-slide-inner"><img data-src="'+e.querySelector(".summary-thumbnail img").getAttribute("data-src")+'" src="'+e.querySelector(".summary-thumbnail img").getAttribute("data-src")+'" class="ali"></div>
                ')+'
            </div>
            <div class="right-part">
                <div class="desc-slide">
                    <div class="svg-quote">'+i+'</div>
                    <div class="wrap-content">
                        '+('
                        <div class="desc-wrapper"><p>'+c+"</p></div>
                        ")+('
                        <div class="author-info">
                            <div class="info">
                                '+('
                                <div class="title-wrapper"><h3>'+o+"</h3></div>
                                ")+('
                                <div class="author-position"><p>'+n+"</p></div>
                                ")+"
                            </div>
                        </div>
                        ")+'
                    </div>
                    <div class="svg-quote quote-bottom">'+i+"</div>
                </div>
            </div>
        </div>
    </div>
    ";t.insertAdjacentHTML("beforeend",p)}),e.insertAdjacentHTML("beforeend",'
    <div class="aiko-control-wrapper">
        <div class="slider-control aiko-control">
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>
    '),e.insertAdjacentHTML("afterend",'
    <div class="aiko-pagination swiper-pagination"></div>
    ');var s=!1;globalGhostaikoParams.autoplay&&(s={delay:globalGhostaikoParams.autoplayDelay});new Swiper(".aiko-plugin
    .swiper-container",{loop:!0,autoplay:s,slidesPerView:1,breakpoints:{800:{slidesPerView:1,spaceBetween:30}},spaceBetween:40,speed:600,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".aiko-control-wrapper
    .swiper-button-next",prevEl:".aiko-control-wrapper .swiper-button-prev",preloadImages:!1,updateOnImagesReady:!1}})}e.classList.add("loaded-carousel")});
    