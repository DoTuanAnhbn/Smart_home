// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXQO0Xt7h8DK2UgNIHYcl4chV6RWgcypI",
  authDomain: "smart-home-36c8d.firebaseapp.com",
  databaseURL: "https://smart-home-36c8d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smart-home-36c8d",
  storageBucket: "smart-home-36c8d.appspot.com",
  messagingSenderId: "689235828236",
  appId: "1:689235828236:web:4f210c4d6b40fd42c85829",
  measurementId: "G-69MLR7TXZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { getDatabase, ref, get, set, child, update, remove } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";

function device_update(){
    const db=getDatabase();
    const dbref = ref(db);
    const activeItem = document.querySelector(".category a.active");
    const temp="Smart_home/"+activeItem.id;
    get(child(dbref,temp)).then((snapshot)=>{
        if(snapshot.exists()){
            var door_status=snapshot.val().door_status;
            document.getElementById("door").checked=door_status;

            var drying_status=snapshot.val().drying_status;
            document.getElementById("drying").checked=drying_status;

            var lamp_status=snapshot.val().lamp_status;
            document.getElementById("lamp").checked=lamp_status;
            var lamp_value=snapshot.val().lamp_value;
            document.getElementById("slider_lamp").value=lamp_value;

            var air_status=snapshot.val().air_status;
            document.getElementById("air").checked=air_status;
            var air_value=snapshot.val().air_value;
            document.getElementById("slider_air").value=air_value;

            var fan_status=snapshot.val().fan_status;
            document.getElementById("fan").checked=fan_status;
            var fan_value=snapshot.val().fan_value;
            document.getElementById("slider_fan").value=fan_value;

            var tivi_status=snapshot.val().tivi_status;
            document.getElementById("tivi").checked=tivi_status;   
            
            var fridge_status=snapshot.val().fridge_status;
            document.getElementById("fridge").checked=fridge_status;
            var fridge_value=snapshot.val().fridge_value;
            document.getElementById("slider_fridge").value=fridge_value; 
        
            var heater_status=snapshot.val().heater_status;
            document.getElementById("heater").checked=heater_status;
        
            var curtain_status=snapshot.val().curtain_status;
            document.getElementById("curtain").checked=curtain_status;
        
            var speaker_status=snapshot.val().speaker_status;
            document.getElementById("speaker").checked=speaker_status;
        
            var vacuum_status=snapshot.val().vacuum_status;
            document.getElementById("vacuum").checked=vacuum_status;

        }
    }
    )
}
setInterval(device_update,500);
