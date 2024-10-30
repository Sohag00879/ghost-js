var isGallery = document.querySelectorAll(".sqs-gallery-design-carousel")[0];
if (isGallery !== undefined && isGallery !== null) {
    document.querySelectorAll(".sqs-gallery-design-carousel").forEach(function (e) {
        var headerTextElement = e.querySelector(".summary-header-text");
        if ((headerTextElement.innerText || headerTextElement.textContent) === "aiko") {
            let svgQuote = `
<svg width="76" height="62" viewBox="0 0 76 62" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.68035 62C1.56012 52.8148 0 43.7062 0 34.6741C0 24.2642 2.67449 15.921 8.02346 9.64446C13.3724 3.21482 21.173 0 31.4252 0V14.4667C23.5503 14.4667 19.6129 19.6716 19.6129 30.0815V33.5259H33.8768V62H4.68035ZM46.8035 62C43.8319 52.6617 42.346 43.5531 42.346 34.6741C42.346 24.2642 44.9462 15.921 50.1466 9.64446C55.4956 3.21482 63.2962 0 73.5484 0V14.4667C65.8221 14.4667 61.9589 19.6716 61.9589 30.0815V33.5259H76V62H46.8035Z" fill="white"></path>
</svg>
            `;
            
            e.classList.add("aiko-plugin");
            e.closest("section").classList.add("section-with-aiko-slider");
            var sectionId = e.closest(".sqs-block").getAttribute("id");
            
            e.insertAdjacentHTML("beforeend", `
<div class="aiko-wrapper swiper-container"><div class="aiko-inner-wrapper swiper-wrapper"></div></div>
            `);

            var innerWrapper = e.querySelector(".aiko-inner-wrapper");

            e.querySelectorAll(".summary-item").forEach(function (item, index) {
                var slideId = `${sectionId}-slide-${index}`;
                item.setAttribute("data-slide-id", slideId);

                let titleElement = item.querySelector(".summary-title-link"),
                    title = titleElement ? (titleElement.innerText || titleElement.textContent) : "",
                    tagsElement = item.querySelector(".summary-metadata-item--tags"),
                    tags = tagsElement ? (tagsElement.innerHTML || tagsElement.textContent) : "",
                    excerptElement = item.querySelector(".summary-excerpt p"),
                    excerpt = excerptElement ? excerptElement.outerHTML || excerptElement.textContent : "";

                let slideHTML = `
<div class="aiko-slide image-slide swiper-slide" data-slide-img-id="${slideId}">
    <div class="aiko-wrapper">
        <div class="left-part">
            <div class="image-slide-inner"><img data-src="${item.querySelector(".summary-thumbnail img").getAttribute("data-src")}" src="${item.querySelector(".summary-thumbnail img").getAttribute("data-src")}" class="ali"></div>
        </div>
        <div class="right-part">
            <div class="desc-slide">
                <div class="svg-quote">${svgQuote}</div>
                <div class="wrap-content">
                    <div class="desc-wrapper"><p>${excerpt}</p></div>
                    <div class="author-info">
                        <div class="info">
                            <div class="title-wrapper"><h3>${title}</h3></div>
                            <div class="author-position"><p>${tags}</p></div>
                        </div>
                    </div>
                </div>
                <div class="svg-quote quote-bottom">${svgQuote}</div>
            </div>
        </div>
    </div>
</div>
                `;
                innerWrapper.insertAdjacentHTML("beforeend", slideHTML);
            });

            e.insertAdjacentHTML("beforeend", `
<div class="aiko-control-wrapper">
    <div class="slider-control aiko-control">
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</div>
            `);

            e.insertAdjacentHTML("afterend", `
<div class="aiko-pagination swiper-pagination"></div>
            `);

            let autoplaySettings = false;
            if (globalGhostaikoParams.autoplay) {
                autoplaySettings = { delay: globalGhostaikoParams.autoplayDelay };
            }

            new Swiper(".aiko-plugin .swiper-container", {
                loop: true,
                autoplay: autoplaySettings,
                slidesPerView: 1,
                breakpoints: {
                    800: { slidesPerView: 1, spaceBetween: 30 }
                },
                spaceBetween: 40,
                speed: 600,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                },
                navigation: {
                    nextEl: ".aiko-control-wrapper .swiper-button-next",
                    prevEl: ".aiko-control-wrapper .swiper-button-prev"
                },
                preloadImages: false,
                updateOnImagesReady: false
            });
        }
        e.classList.add("loaded-carousel");
    });
}
