function get_minmax_input(){ 
    var temp=document.getElementById("slider_lamp").min;
    document.getElementById("min_lamp").innerHTML=temp;
    var temp=document.getElementById("slider_lamp").max;
    document.getElementById("max_lamp").innerHTML=temp;
  }
  function get_value_input(){
    var temp=document.getElementById("slider_lamp").value;
    document.getElementById("value_lamp").innerHTML=temp;
  }
  setInterval(get_value_input,100);
  setInterval(get_minmax_input,100);
  