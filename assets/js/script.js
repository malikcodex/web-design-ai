let carousal = document.querySelector("#carousal") || "";
let carousel_2 = document.querySelector("#carousal-2") || "";
let load_video_one = document.querySelectorAll("#load-video-one") || "";
let menu_in = document.querySelector("#menu_in");
let menu_out = document.querySelector("#menu_out");
let submenus = menu_out.querySelectorAll("a");
let img = document.querySelectorAll("img");

if( img ) {
    img.forEach(images => {
        images.setAttribute("loading" , "lazy");
        if(images.parentElement.getAttribute("id") == "carousal-2" || images.parentElement.getAttribute("id") == "carousal") {
            images.classList.add("filter_white");
        }
    })
}

if( carousal && carousel_2 ) {
    function carousal_scroll() {
        setTimeout(() => {
            carousal.scrollLeft += 100;
            if(carousal.scrollLeft >= carousal.scrollWidth - carousal.clientWidth) {
                carousal.scrollLeft = 0;
            }
            carousal_scroll();
        }, 1200);
    }

    
    function carousel_scroll_2() {
        setTimeout(() => {
            carousel_2.scrollLeft -= 100;
            if (carousel_2.scrollLeft <= 0) {
                carousel_2.scrollLeft = carousel_2.scrollWidth - carousel_2.clientWidth;
            }
            carousel_scroll_2();
        }, 1200);
    }

    carousal_scroll();
    carousel_scroll_2();
    carousel_2.scrollLeft = carousel_2.scrollWidth - carousel_2.clientWidth;
}

if( load_video_one ) {
    window.onscroll = () => {
        load_video_frames();
    }

    function load_video_frames() {
        load_video_one.forEach(allVideos => {
            allVideos.play().catch(error => {
            });
        })
    }

    load_video_one.onmouseover = () => {
        load_video_frames();
    }
}

if( menu_in && menu_out && submenus ) {
    menu_in.onclick = (e) => {
        e.preventDefault();
        menu_out.classList.toggle("header-flex-none");
    }
    
    submenus.forEach( sub => { 
            sub.onclick = (e) => {
                let div = e.target.nextElementSibling
                let status = (div) && (div.getAttribute("id") == "submenu") ? true : false;
                status == true ? e.preventDefault() : e.stopPropagation();
                status == true ? div.classList.toggle("header-flex-none") : false;
            }
    })
}

function resizeFont(e) {
    let top_2 = document.querySelector(".top_h2");
    if( window.innerWidth > 768 ) {
        top_2.textContent = "Explore how fine-tuning LLMs can revolutionize cost-effective GenAI inference at scale.";
    } else {
        top_2.textContent = top_2.textContent.substring(0 , 29) + "...";
    }

    console.log("Created By: MalikCodex <code><a href='https://malikcodex.blogspot.com'>Check Out</a></code>");
}

let btn = document.querySelectorAll("button");
let tabs = document.querySelectorAll("#tabs section");
let btnStatus = "";

if( tabs && btn ) {
    btn.forEach(btns => {
        btns.onclick = (e) => {
            document.querySelector("button.header-bg-purple").classList.remove("header-bg-purple");
            btns.classList.add("header-bg-purple");
            btnStatus = e.target.getAttribute("id").replace("btn","tab");
            changeTabBox(btnStatus);
        }
    })
    
    function changeTabBox( event ) {
        tabs.forEach(alltabs => {
            if(event == alltabs.getAttribute("id")) {
                alltabs.classList.remove("header-flex-none");
            } else {
                alltabs.classList.add("header-flex-none");
            }
        })
    }
}

window.addEventListener("resize" , resizeFont);
window.addEventListener("load" , resizeFont);
