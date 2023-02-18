function get_minmax_input(){ 
  var temp=document.getElementById("slider_lamp").min;
  document.getElementById("min_lamp").innerHTML=temp;
  var temp=document.getElementById("slider_lamp").max;
  document.getElementById("max_lamp").innerHTML=temp;

  var temp=document.getElementById("slider_air").min;
  document.getElementById("min_air").innerHTML=temp;
  var temp=document.getElementById("slider_air").max;
  document.getElementById("max_air").innerHTML=temp;

  var temp=document.getElementById("slider_fan").min;
  document.getElementById("min_fan").innerHTML=temp;
  var temp=document.getElementById("slider_fan").max;
  document.getElementById("max_fan").innerHTML=temp;
}
function get_minmax_input_fridge(){ 
  var temp=document.getElementById("slider_fridge").min;
  document.getElementById("min_fridge").innerHTML=temp;
  var temp=document.getElementById("slider_fridge").max;
  document.getElementById("max_fridge").innerHTML=temp;
}
function get_value_input(){
  var temp=document.getElementById("slider_lamp").value;
  document.getElementById("value_lamp").innerHTML=temp;

  var temp=document.getElementById("slider_air").value;
  document.getElementById("value_air").innerHTML=temp;
  
  var temp=document.getElementById("slider_fan").value;
  document.getElementById("value_fan").innerHTML=temp;
}
function get_value_input_fridge(){
  var temp=document.getElementById("slider_fridge").value;
  document.getElementById("value_fridge").innerHTML=temp;
}
function get_time(){ 
  const monthday = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var d = new Date();
  var day=weekday[d.getDay()];
  var date=d.getDate();
  var month=monthday[d.getMonth()];
  var year=d.getFullYear();
  document.getElementById("time").innerHTML=day+","+" "+date+" "+month+" "+year;

  var hour=d.getHours();
  var minute = d.getMinutes().toString().padStart(2, '0');
  document.getElementById("clock").innerHTML=hour+":"+minute;

  const hello=["Good morning","Good afternoon","Good evening"];
  var temp;
  if(hour>=4 && hour<12){
    temp=0;
  }
  if(hour>=12 && hour<18){
    temp=1;
  }
  if(hour >=18|| hour<4){
    temp=2;
  }
  document.getElementById("title").innerHTML=hello[temp];
}
function outside(){
  const room=["outside","livingroom","kitchen","bathroom","bedroom","readingroom","dryingroom"];
  var status_room=["active","none","none","none","none","none","none"];
  for(let i=0;i<room.length;i++){
      document.getElementById(room[i]).className=status_room[i];
  }

  const appliance=["appliance_Lamp","appliance_Fridge","appliance_Curtain","appliance_Speaker","appliance_Fan","appliance_Air","appliance_Tivi","appliance_Heater","appliance_Vacuum","appliance_Door","appliance_Drying"];
  var status_appliance=["none","none","none","none","none","none","none","none","none","flex","none"];
  for(let j=0;j<appliance.length;j++){
      document.getElementById(appliance[j]).style.display=status_appliance[j];
  }
}
function livingroom(){
  const room=["outside","livingroom","kitchen","bathroom","bedroom","readingroom","dryingroom"];
  var status_room=["none","active","none","none","none","none","none"];
  for(let i=0;i<room.length;i++){
      document.getElementById(room[i]).className=status_room[i];
  }

  const appliance=["appliance_Lamp","appliance_Fridge","appliance_Curtain","appliance_Speaker","appliance_Fan","appliance_Air","appliance_Tivi","appliance_Heater","appliance_Vacuum","appliance_Door","appliance_Drying"];
  var status_appliance=["flex","none","none","none","flex","flex","flex","none","none","none","none"];
  for(let j=0;j<appliance.length;j++){
      document.getElementById(appliance[j]).style.display=status_appliance[j];
  }
}
function kitchen(){
  const room=["outside","livingroom","kitchen","bathroom","bedroom","readingroom","dryingroom"];
  var status_room=["none","none","active","none","none","none","none"];
  for(let i=0;i<room.length;i++){
    document.getElementById(room[i]).className=status_room[i];
  }

  const appliance=["appliance_Lamp","appliance_Fridge","appliance_Curtain","appliance_Speaker","appliance_Fan","appliance_Air","appliance_Tivi","appliance_Heater","appliance_Vacuum","appliance_Door","appliance_Drying"];
  var status_appliance=["flex","flex","none","none","none","none","none","none","none","none","none"];
  for(let j=0;j<appliance.length;j++){
    document.getElementById(appliance[j]).style.display=status_appliance[j];
  }
}
function bathroom(){
  const room=["outside","livingroom","kitchen","bathroom","bedroom","readingroom","dryingroom"];
  var status_room=["none","none","none","active","none","none","none"];
  for(let i=0;i<room.length;i++){
    document.getElementById(room[i]).className=status_room[i];
  }

  const appliance=["appliance_Lamp","appliance_Fridge","appliance_Curtain","appliance_Speaker","appliance_Fan","appliance_Air","appliance_Tivi","appliance_Heater","appliance_Vacuum","appliance_Door","appliance_Drying"];
  var status_appliance=["flex","none","none","none","none","none","none","flex","none","none","none"];
  for(let j=0;j<appliance.length;j++){
    document.getElementById(appliance[j]).style.display=status_appliance[j];
  }
}
function bedroom(){
  const room=["outside","livingroom","kitchen","bathroom","bedroom","readingroom","dryingroom"];
  var status_room=["none","none","none","none","active","none","none"];
  for(let i=0;i<room.length;i++){
    document.getElementById(room[i]).className=status_room[i];
  }

  const appliance=["appliance_Lamp","appliance_Fridge","appliance_Curtain","appliance_Speaker","appliance_Fan","appliance_Air","appliance_Tivi","appliance_Heater","appliance_Vacuum","appliance_Door","appliance_Drying"];
  var status_appliance=["flex","none","flex","none","none","flex","flex","none","none","none","none"];
  for(let j=0;j<appliance.length;j++){
    document.getElementById(appliance[j]).style.display=status_appliance[j];
  }
}
function readingroom(){
  const room=["outside","livingroom","kitchen","bathroom","bedroom","readingroom","dryingroom"];
  var status_room=["none","none","none","none","none","active","none"];
  for(let i=0;i<room.length;i++){
    document.getElementById(room[i]).className=status_room[i];
  }

  const appliance=["appliance_Lamp","appliance_Fridge","appliance_Curtain","appliance_Speaker","appliance_Fan","appliance_Air","appliance_Tivi","appliance_Heater","appliance_Vacuum","appliance_Door","appliance_Drying"];
  var status_appliance=["flex","none","none","flex","none","flex","none","none","flex","none","none"];
  for(let j=0;j<appliance.length;j++){
    document.getElementById(appliance[j]).style.display=status_appliance[j];
  }
}
function dryingroom(){
  const room=["outside","livingroom","kitchen","bathroom","bedroom","readingroom","dryingroom"];
  var status_room=["none","none","none","none","none","none","active"];
  for(let i=0;i<room.length;i++){
    document.getElementById(room[i]).className=status_room[i];
  }

  const appliance=["appliance_Lamp","appliance_Fridge","appliance_Curtain","appliance_Speaker","appliance_Fan","appliance_Air","appliance_Tivi","appliance_Heater","appliance_Vacuum","appliance_Door","appliance_Drying"];
  var status_appliance=["none","none","none","none","none","none","none","none","none","none","flex"];
  for(let j=0;j<appliance.length;j++){
    document.getElementById(appliance[j]).style.display=status_appliance[j];
  }
}
outside();
setInterval(get_value_input,100);
setInterval(get_minmax_input,100);
setInterval(get_value_input_fridge,100);
setInterval(get_minmax_input_fridge,100);
setInterval(get_time,100);