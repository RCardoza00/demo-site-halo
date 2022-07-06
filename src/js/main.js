import "../css/main.css";
import "../css/scheme.css";

const moreOptions = document.querySelector("#bmore");
const bShowMobileLinks = document.querySelector("#bmenu");
const mobileMenu = document.querySelector(".links");
const moreMenu = document.querySelector(".more .menu");

//listeners
bShowMobileLinks.addEventListener("click",(e) => {
e.preventDefault();
mobileMenu.classList.toggle("show");
});
moreOptions.addEventListener("click",(e) => {
e.preventDefault();
moreMenu.classList.toggle("show");
});

//videos
const videos = [
    {
        id:"aOYPc3fJbvc"
    },
    {
        id:"PyMlV5_HRWk"
    },
    {
        id:"Fmdb-KmlzD8"
    },
    {
        id:"2sb1E7HM-jA"
    },
    {
        id:"OkMY1hRAlfc"
    },
];
const sliderContainer = document.querySelector('#slider');
const currentContainer = document.querySelector('#current');
const videosContainer = document.querySelector('#videos-container');
const bNext = document.querySelector('#next');
const bPrev = document.querySelector('#prev');
let current = 0;
bNext.addEventListener("click",(e) =>{
    let changed = current;
    current = current+1 < videos.length ? current+1: current;
    if(current!=changed){
        renderCurrentVideo(videos[current].id);
    }

  
});
bPrev.addEventListener("click",(e) =>{
    let changed = current;
    current = current-1 >=0 ? current-1: current;
    if(current!=changed){
        renderCurrentVideo(videos[current].id);
    }
});
renderCurrentVideo(videos[current].id);
function renderCurrentVideo(id){
    currentContainer.innerHTML = `<iframe width="100%" height="800" src="https://www.youtube.com/embed/${id}" title="Tonos de Azul" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}
renderVideos();
function renderVideos(){
    const html = videos.map((video, index) => {
      return `<div class="item">
      <a href="#" data-id="${index}">
        <img src="https://i.ytimg.com/vi/${video.id}/mqdefault.jpg"/>
      </a>
      </div>`;
    });
    videosContainer.innerHTML = html.join("");
    document.querySelectorAll('.item a').forEach((item) => {
      item.addEventListener('click',(e) =>{
        e.preventDefault();
        const id = +item.getAttribute("data-id");
        current = id;
        renderCurrentVideo(videos[current].id)
      });
    });
}