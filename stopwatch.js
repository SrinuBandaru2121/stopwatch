let[ms,s,mins,hrs]=[0,0,0,0];
let displayTime=document.querySelector(".display");
let int=null;
document.getElementById("start").addEventListener("click",()=>{
    if(int!==null){
        clearInterval(int);
    }
   int= setInterval(displayTimer,10);
});
document.getElementById("stop").addEventListener("click",()=>{
    clearInterval(int);
});
document.getElementById("reset").addEventListener("click",()=>{
    clearInterval(int);
    [ms,s,mins,hrs]=[0,0,0,0];
    displayTime.innerHTML="00:00:00:000";
});
function displayTimer(){
    ms+=10;
    if(ms==1000){
        ms=0;
        s++;
        if(s==60){
            s=0;
            mins++;
            if(mins==60){
                mins=0;
                hrs++;
            }
        }
    }
    let h=hrs<10?"0"+hrs:hrs;
    let m=mins<10?"0"+mins:mins;
    let sec=s<10?"0"+s:s;
    let msec=ms<10?"00"+ms:ms<100?"0"+ms:ms;
    displayTime.innerHTML=`${h}:${m}:${sec}:${msec}`;
}
