/*navbar............*/
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0px";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}

/*
/*......................button 1........................
let btn1 = document.getElementById('btn1');
btn2.addEventListener('click', show_1);
function show_1() {
  let pan2 = document.getElementById('item2');
  let pan1 = document.getElementById('item1');
  let pan3 = document.getElementById('item3');
  let pan4 = document.getElementById('item4');
  let pan5 = document.getElementById('item5');
  let str = '';
  var i=1;
  while(i<5)
  {
  str+=`<div class="portfolio-item-inner outer-shadow">
  <div class="portfolio-item-img">
    <img src="thumbnail/pic${i}.png" alt="website"
      data-screenshots="project-1/pic1.png,project-1/pic2.png,project-1/pic3.png,project-1/pic4.png,project-1/pic5.png,project-1/pic6.png,project-1/pic7.png,project-1/pic8.png,project-1/pic9.png,project-1/pic12.png">



    <!-------------view project------------------>
    <span class="view-project">view-project</span>
  </div>
  <p class="portfolio-item-title">website</p>
</div>`;
    i++;
  }
  
  pan1.style.display="";
  pan1.innerHTML=str;
  pan2.style.display="none";
  pan3.style.display="none";
  pan4.style.display="none";
  pan5.style.display="none";
  
}*/
/*......................button 2........................*/
let btn2 = document.getElementById('btn2');
btn2.addEventListener('click', show_2);
function show_2() {
  let pan2 = document.getElementById('item2');
  let pan1 = document.getElementById('item1');
  let pan3 = document.getElementById('item3');
  let pan4 = document.getElementById('item4');
  let pan5 = document.getElementById('item5');
  let str = '';
  var i = 1;
  while (i < 5) {
    str += `<div class="portfolio-item-inner outer-shadow">
  <div class="portfolio-item-img">
    <img src="project-1/pic${i}.png" alt="website"
      data-screenshots="project-1/pic1.png,project-1/pic2.png,project-1/pic3.png,project-1/pic4.png,project-1/pic5.png,project-1/pic6.png,project-1/pic7.png,project-1/pic8.png,project-1/pic9.png,project-1/pic12.png">



    <!-------------view project------------------>
    <a href="https://subham-misra.github.io/animatedbutton-${i}/">view-project</a>
  </div>
  <p class="portfolio-item-title">Animated website</p>
</div>`;
    i++;
  }
  var j = 1;
  var k=8;
  while (j < 3) {
    str += `<div class="portfolio-item-inner outer-shadow">
    <div class="portfolio-item-img">
      <img src="project-1/pic${k}.png" alt="website"
        data-screenshots="project-1/pic1.png,project-1/pic2.png,project-1/pic3.png,project-1/pic4.png,project-1/pic5.png,project-1/pic6.png,project-1/pic7.png,project-1/pic8.png,project-1/pic9.png,project-1/pic12.png">
  
  
  
      <!-------------view project------------------>
      <a href="https://subham-misra.github.io/animatedRing-${j}/">view-project</a>
    </div>
    <p class="portfolio-item-title">Animated website</p>
  </div>`;
    j++;
    k++;
  }
  //.............text shine
  str += `<div class="portfolio-item-inner outer-shadow">
  <div class="portfolio-item-img">
    <img src="project-1/pic6.png" alt="website"
      data-screenshots="project-1/pic1.png,project-1/pic2.png,project-1/pic3.png,project-1/pic4.png,project-1/pic5.png,project-1/pic6.png,project-1/pic7.png,project-1/pic8.png,project-1/pic9.png,project-1/pic12.png">



    <!-------------view project------------------>
    <a href="https://subham-misra.github.io/text-shinning/">view-project</a>
  </div>
  <p class="portfolio-item-title">Animated website</p>
</div>`;

  //...........smoke text
  str += `<div class="portfolio-item-inner outer-shadow">
  <div class="portfolio-item-img">
    <img src="project-1/pic7.png" alt="website"
      data-screenshots="project-1/pic1.png,project-1/pic2.png,project-1/pic3.png,project-1/pic4.png,project-1/pic5.png,project-1/pic6.png,project-1/pic7.png,project-1/pic8.png,project-1/pic9.png,project-1/pic12.png">



    <!-------------view project------------------>
    <a href="https://subham-misra.github.io/smokeName/">view-project</a>
  </div>
  <p class="portfolio-item-title">Animated website</p>
</div>`;

  //...........wave text
  str += `<div class="portfolio-item-inner outer-shadow">
  <div class="portfolio-item-img">
    <img src="C:/Users/Subham/Desktop/Desktop Files/WEB DEV COLLEGE/Tech Fest-Portfolio Website/project-1/pic12 (2).png" alt="website"
      data-screenshots="project-1/pic1.png,project-1/pic2.png,project-1/pic3.png,project-1/pic4.png,project-1/pic5.png,project-1/pic6.png,project-1/pic7.png,project-1/pic8.png,project-1/pic9.png,project-1/pic12.png">



    <!-------------view project------------------>
    <a href="https://subham-misra.github.io/textWave/">view-project</a>
  </div>
  <p class="portfolio-item-title">Animated website</p>
</div>`;

  pan2.style.display = "";
  pan2.innerHTML = str;
  pan1.style.display = "none";
  pan3.style.display = "none";
  pan4.style.display = "none";
  pan5.style.display = "none";

}
/*......................button 3........................*/
let btn3 = document.getElementById('btn3');
btn3.addEventListener('click', show_3);
function show_3() {
  let pan2 = document.getElementById('item2');
  let pan1 = document.getElementById('item1');
  let pan3 = document.getElementById('item3');
  let pan4 = document.getElementById('item4');
  let pan5 = document.getElementById('item5');
  let str = '';
  var i = 1;
  while (i < 4) {
    str += `<div class="portfolio-item-inner outer-shadow">
  <div class="portfolio-item-img">
    <img src="project-2/pic${i}.png" alt="website"
      data-screenshots="project-1/pic1.png,project-1/pic2.png,project-1/pic3.png,project-1/pic4.png,project-1/pic5.png,project-1/pic6.png,project-1/pic7.png,project-1/pic8.png,project-1/pic9.png,project-1/pic12.png">



    <!-------------view project------------------>
    <span class="view-project">view-project</span>
  </div>
  <p class="portfolio-item-title">E-Commers</p>
</div>`;
    i++;
  }
  pan3.style.display = "";
  pan3.innerHTML = str;
  pan1.style.display = "none";
  pan2.style.display = "none";
  pan4.style.display = "none"; pan5.style.display = "none";

}
/*......................button 4........................*/
let btn4 = document.getElementById('btn4');
btn4.addEventListener('click', show_4);
function show_4() {
  let pan2 = document.getElementById('item2');
  let pan1 = document.getElementById('item1');
  let pan3 = document.getElementById('item3');
  let pan4 = document.getElementById('item4');
  let pan5 = document.getElementById('item5');
  let str = '';
  var i = 1;
  while (i < 6) {
    if (i == 1) {
      str += `<div class="portfolio-item-inner outer-shadow">
  <div class="portfolio-item-img">
    <img src="project-3/pic${i}.png" alt="website"
      data-screenshots="project-1/pic1.png,project-1/pic2.png,project-1/pic3.png,project-1/pic4.png,project-1/pic5.png,project-1/pic6.png,project-1/pic7.png,project-1/pic8.png,project-1/pic9.png,project-1/pic12.png">



    <!-------------view project------------------>
    <a href="https://subham-misra.github.io/snakegame/">view-project</a>
  </div>
  <p class="portfolio-item-title">Games</p>
</div>`;
    }
    else if (i == 2) {
      str += `<div class="portfolio-item-inner outer-shadow">
      <div class="portfolio-item-img">
        <img src="project-3/pic${i}.png" alt="website"
          data-screenshots="project-1/pic1.png,project-1/pic2.png,project-1/pic3.png,project-1/pic4.png,project-1/pic5.png,project-1/pic6.png,project-1/pic7.png,project-1/pic8.png,project-1/pic9.png,project-1/pic12.png">
    
    
    
        <!-------------view project------------------>
        <a href="https://subham-misra.github.io/CarGame-subham-misra/">view-project</a>
      </div>
      <p class="portfolio-item-title">Games</p>
    </div>`;
    }
    else {
      str += `<div class="portfolio-item-inner outer-shadow">
      <div class="portfolio-item-img">
        <img src="project-3/pic${i}.png" alt="website"
          data-screenshots="project-1/pic1.png,project-1/pic2.png,project-1/pic3.png,project-1/pic4.png,project-1/pic5.png,project-1/pic6.png,project-1/pic7.png,project-1/pic8.png,project-1/pic9.png,project-1/pic12.png">
    
    
    
        <!-------------view project------------------>
        <a href="https://subham-misra.github.io/dragongame/">view-project</a>
      </div>
      <p class="portfolio-item-title">Games</p>
    </div>`;
    }
    i++;
  }
  pan4.style.display = "";
  pan4.innerHTML = str;
  pan1.style.display = "none";
  pan2.style.display = "none";
  pan3.style.display = "none";
  pan5.style.display = "none";

}
/*......................button 5........................*/
let btn5 = document.getElementById('btn5');
btn5.addEventListener('click', show_5);
function show_5() {
  let pan2 = document.getElementById('item2');
  let pan1 = document.getElementById('item1');
  let pan3 = document.getElementById('item3');
  let pan4 = document.getElementById('item4');
  let pan5 = document.getElementById('item5');
  let str = '';
  var i = 1;
  while (i < 7) {

    if (i >= 1 || i <= 3) {
      str += `<div class="portfolio-item-inner outer-shadow">
      <div class="portfolio-item-img">
      <img src="project-4/pic${i}.png" alt="website"
      data-screenshots="project-1/pic1.png,project-1/pic2.png,project-1/pic3.png,project-1/pic4.png,project-1/pic5.png,project-1/pic6.png,project-1/pic7.png,project-1/pic8.png,project-1/pic9.png,project-1/pic12.png">



    <!-------------view project------------------>
    <a href="https://subham-misra.github.io/makautdemo/">view-project</a>
    </div>
    <p class="portfolio-item-title">Education-site</p>
    </div>`;
    }
    else {
      str += `<div class="portfolio-item-inner outer-shadow">
      <div class="portfolio-item-img">
        <img src="project-4/pic${i}.png" alt="website"
          data-screenshots="project-1/pic1.png,project-1/pic2.png,project-1/pic3.png,project-1/pic4.png,project-1/pic5.png,project-1/pic6.png,project-1/pic7.png,project-1/pic8.png,project-1/pic9.png,project-1/pic12.png">
    
    
    
        <!-------------view project------------------>
        <a href="https://subham-misra.github.io/eduraka/">view-project</a>
        
      </div>
      <p class="portfolio-item-title">Education-site</p>
    </div>`;
    }
    i++;
  }
  pan5.style.display = "";
  pan5.innerHTML = str;
  pan1.style.display = "none";
  pan2.style.display = "none";
  pan3.style.display = "none";
  pan4.style.display = "none";

}

// return message........................
function myfunc() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var Name = name;
  my_window = window.open("", "mywindow1", "status=1,width=350,height=150");
  var divDisplay = '<div><h1> Thank you ' + Name + '</h1><p>' + email + '</p> <br><p>' + subject + '</p><div>';
  //my_window = window.open("file:///C:/Users/Subham/Desktop/Desktop%20Files/mystory.html");
  my_window.document.write(divDisplay);
  //my_window.document.write('<h1>'+fullName+'</h1>');
}