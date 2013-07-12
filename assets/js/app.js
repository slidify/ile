$(document).ready(function(){
  //$("pre:has(code)").addClass('build');
  //$("div:has(img)").addClass('build')
  // var pop = Popcorn("#player")
  var adjust = 72100;
  mytimings =[
    {"slide":1,"time":1373570309948},
    {"time":81493,"slide":2,"action":"gotoSlide"},
    {"time":85175,"slide":2,"action":"nextSlide"},
    {"time":93125,"slide":2,"action":"nextSlide"},
    {"time":106399,"slide":2,"action":"nextSlide"},
    {"time":110519,"slide":2,"action":"nextSlide"},
    {"time":114110,"slide":2,"action":"nextSlide"},
    {"time":139622,"slide":3,"action":"gotoSlide"},
    {"time":192400,"slide":3,"action":"runCode"},
    {"time":269008,"slide":3,"action":"pause"}
  ]; 
  
  
  for (var i = 1; i < mytimings.length; i++) {
   mytimings[i].time = mytimings[i].time - adjust; 
  }
  syncSlides(mytimings, pop);
  
   mytimings2 =[
    {"slide":1,"time":1373570309948},
    {"time":81493,"slide":2,"action":"gotoSlide"},
    {"time":139622,"slide":3,"action":"gotoSlide"},
    {"time":269008,"slide":3,"action":"pause"}
  ];
  for (var i = 1; i < mytimings2.length; i++) {
   mytimings2[i].time = mytimings2[i].time - adjust; 
  }
  syncSlides2Video(mytimings2, pop)
});


var mytimings2 = [
  {"slide":1,"time":1373639971035},
  {"time":7710, "slide":2,"action":"gotoSlide"},
  {"time":10338,"slide":2,"action":"nextSlide"},
  {"time":11378,"slide":2,"action":"nextSlide"},
  {"time":12146,"slide":2,"action":"nextSlide"},
  {"time":12962,"slide":2,"action":"nextSlide"},
  {"time":13778,"slide":2,"action":"nextSlide"},
  {"time":14995,"slide":3,"action":"gotoSlide"},
  {"time":18362,"slide":3,"action":"nextSlide"},
  {"time":22810,"slide":3,"action":"pause"}
] 