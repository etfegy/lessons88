let listVideo = document.querySelectorAll('.video-list .vid'); 
let mainVideo = document.querySelector('.main-video video');
let title = document.querySelector('.main-video .title');

listVideo.forEach(video =>{
video.onclick = () =>{
listVideo.forEach(vid => vid.classList.remove('active')); 
video.classList.add('active');
if(video.classList.contains('active')){
let src = video.children[0].getAttribute('src'); 
mainVideo.src = src;
if(src == "images/vid2.mp4" )
{
  /*
  console.log("yes");
let text = video.children[1].innerHTML; 
title.innerHTML = text;
title.innerHTML=text +`<br/>` +`<a href="https://cvelearning.xeted.com/course/view.php?id=21" target="_blank" > اضغط هنا لبدء التعلم</a>`
*/
}
else
{
let text = video.children[1].innerHTML; 
title.innerHTML = text;
}

                                      };
                      };
                          });



/*
const icon = document.querySelector('.icon');
const nav = document.querySelector('nav');

icon.addEventListener('click', () => {
  icon.classList.toggle('close');
  nav.classList.toggle('show');
})
*/