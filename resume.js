//Progress bar
// ablities progress bar: on scroll
window.onscroll = function() {scrollFunction(), myScroll()};
var counter=0;
function myScroll(){
  if(counter==0){
    if (document.body.scrollTop > 650 || document.documentElement.scrollTop > 650){
      myFunction();
      counter++;
    }
  }
}

// ablities progress bar
function move(num, percentage) {
  var elem = document.getElementsByClassName('containerin');
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= percentage) {
      clearInterval(id);
    } else {
      width++;
      elem[num].style.width = width + '%'; //to do: not staggered
    }
  }
}

// ablities progress bar: call for every bar
function myFunction() {
      move(0,90);
      move(1,95);
      move(2,80);
      move(3,85);
      move(4,70);
      // move(5,85);
      // move(6,90);
      // move(7,70);
}

// Kelip Kelip
var TxtType = function(el, toRotate, period) {
            this.toRotate = toRotate;
            this.el = el;
            this.loopNum = 0;
            this.period = parseInt(period, 10) || 2000;
            this.txt = '';
            this.tick();
            this.isDeleting = false;
        };

        TxtType.prototype.tick = function() {
            var i = this.loopNum % this.toRotate.length;
            var fullTxt = this.toRotate[i];

            if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
            } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
            }

            this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

            var that = this;
            var delta = 200 - Math.random() * 100;

            if (this.isDeleting) { delta /= 2; }

            if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
            } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
            }

            setTimeout(function() {
            that.tick();
            }, delta);
        };

        window.onload = function() {
            var elements = document.getElementsByClassName('typewrite');
            for (var i=0; i<elements.length; i++) {
                var toRotate = elements[i].getAttribute('data-type');
                var period = elements[i].getAttribute('data-period');
                if (toRotate) {
                  new TxtType(elements[i], JSON.parse(toRotate), period);
                }
            }
            // INJECT CSS
            var css = document.createElement("style");
            css.type = "text/css";
            css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
            document.body.appendChild(css);
        };



//Slideshow

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 8000); // Change image every 2 seconds
}

//accordian

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

//MOUSE cursor#####################################################################
// <![CDATA[
var colour="white";
var sparkles=100;

var x=ox=400;
var y=oy=300;
var swide=800;
var shigh=600;
var sleft=sdown=0;
var tiny=new Array();
var star=new Array();
var starv=new Array();
var starx=new Array();
var stary=new Array();
var tinyx=new Array();
var tinyy=new Array();
var tinyv=new Array();
window.onload=function() { if (document.getElementById) {
var i, rats, rlef, rdow;
for (var i=0; i<sparkles; i++) {
var rats=createDiv(3, 3);
rats.style.visibility="hidden";
document.body.appendChild(tiny[i]=rats);
starv[i]=0;
tinyv[i]=0;
var rats=createDiv(5, 5);
rats.style.backgroundColor="transparent";
rats.style.visibility="hidden";
var rlef=createDiv(1, 5);
var rdow=createDiv(5, 1);
rats.appendChild(rlef);
rats.appendChild(rdow);
rlef.style.top="3px";
rlef.style.left="0px";
rdow.style.top="0px";
rdow.style.left="3px";
document.body.appendChild(star[i]=rats);
}
set_width();
sparkle();
}}
function sparkle() {
var c;
if (x!=ox || y!=oy) {
ox=x;
oy=y;
for (c=0; c<sparkles; c++) if (!starv[c]) {
star[c].style.left=(starx[c]=x)+"px";

star[c].style.top=(stary[c]=y)+"px";
star[c].style.clip="rect(0px, 5px, 5px, 0px)";
star[c].style.visibility="visible";
starv[c]=50;
break;
}
}
for (c=0; c<sparkles; c++) {
if (starv[c]) update_star(c);
if (tinyv[c]) update_tiny(c);
}
setTimeout("sparkle()", 40);
}
function update_star(i) {
if (--starv[i]==25) star[i].style.clip="rect(1px, 4px, 4px, 1px)";
if (starv[i]) {
stary[i]+=1+Math.random()*3;
if (stary[i]<shigh+sdown) {
star[i].style.top=stary[i]+"px";
starx[i]+=(i%5-2)/5;
star[i].style.left=starx[i]+"px";
}
else {
star[i].style.visibility="hidden";
starv[i]=0;
return;
}

}
else {
tinyv[i]=50;
tiny[i].style.top=(tinyy[i]=stary[i])+"px";
tiny[i].style.left=(tinyx[i]=starx[i])+"px";
tiny[i].style.width="2px";
tiny[i].style.height="2px";
star[i].style.visibility="hidden";
tiny[i].style.visibility="visible"
}
}
function update_tiny(i) {
if (--tinyv[i]==25) {
tiny[i].style.width="1px";
tiny[i].style.height="1px";
}
if (tinyv[i]) {
tinyy[i]+=1+Math.random()*3;
if (tinyy[i]<shigh+sdown) {
tiny[i].style.top=tinyy[i]+"px";
tinyx[i]+=(i%5-2)/5;
tiny[i].style.left=tinyx[i]+"px";
}
else {

tiny[i].style.visibility="hidden";
tinyv[i]=0;
return;
}
}
else tiny[i].style.visibility="hidden";
}
document.onmousemove=mouse;
function mouse(e) {
set_scroll();
y=(e)?e.pageY:event.y+sdown;
x=(e)?e.pageX:event.x+sleft;
}
function set_scroll() {
if (typeof(self.pageYOffset)=="number") {
sdown=self.pageYOffset;
sleft=self.pageXOffset;
}
else if (document.body.scrollTop || document.body.scrollLeft) {
sdown=document.body.scrollTop;
sleft=document.body.scrollLeft;
}
else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {
sleft=document.documentElement.scrollLeft;
sdown=document.documentElement.scrollTop;
}
else {
sdown=0;
sleft=0;
}
}
window.onresize=set_width;
function set_width() {
if (typeof(self.innerWidth)=="number") {
swide=self.innerWidth;
shigh=self.innerHeight;
}
else if (document.documentElement && document.documentElement.clientWidth) {
swide=document.documentElement.clientWidth;
shigh=document.documentElement.clientHeight;
}
else if (document.body.clientWidth) {
swide=document.body.clientWidth;
shigh=document.body.clientHeight;
}
}
function createDiv(height, width) {
var div=document.createElement("div");
div.style.position="absolute";
div.style.height=height+"px";
div.style.width=width+"px";
div.style.overflow="hidden";
div.style.backgroundColor=colour;
return (div);
}
// ]]>
