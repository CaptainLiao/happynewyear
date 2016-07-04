/**
 * Created by Administrator on 16-6-27.
 */
window.onload=function (){
  var music=document.getElementById("music");
  var controlMusic=document.getElementById("controlMusic"),
      audio=document.getElementsByTagName("audio")[0],
      page1=document.getElementById("page1"),
      page2=document.getElementById("page2"),
      page3=document.getElementById("page3");

   //点击屏幕，进入好运2016
    page1.addEventListener("touchstart",function(){
        page1.style.display="none";
        page2.style.display="block";
        page3.style.display="block";
        page3.style.top="100%";
        setTimeout(function(){
            page2.setAttribute("class","page fadeOut");
            page3.setAttribute("class","page fadeIn");
        },5500);
    },false);

  //音乐结束，自动停止旋转效果
    audio.addEventListener("ended",function(){
        controlMusic.setAttribute("class","music-disc");
    },false);

    controlMusic.addEventListener("touchstart",function(){
        if(audio.paused){
            audio.play();
            this.setAttribute("class","music-disc play");
        }else{
            audio.pause();
            this.setAttribute("class","music-disc");
        }
    },false);


};