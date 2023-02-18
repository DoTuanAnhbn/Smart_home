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
 
const lampCheckbox = document.getElementById("lamp");
lampCheckbox.addEventListener("change", function() {
    if (lampCheckbox.checked) {
        var data = {
            lamp_status:1,
            };
        } 
    else {
        var data = {
            lamp_status:0,
            };
        }
        const db=getDatabase();
        const dbref = ref(db);
        const activeItem = document.querySelector(".category a.active");
        const temp="Smart_home/"+activeItem.id;
        update(child(dbref, temp), data);
    });

const fanCheckbox = document.getElementById("fan");
fanCheckbox.addEventListener("change", function() {
    if (fanCheckbox.checked) {
        var data = {
            fan_status:1,
            };
        } 
    else {
        var data = {
            fan_status:0,
            };
        }
        const db=getDatabase();
        const dbref = ref(db);
        const activeItem = document.querySelector(".category a.active");
        const temp="Smart_home/"+activeItem.id;
        update(child(dbref, temp), data);
    });

const airCheckbox = document.getElementById("air");
airCheckbox.addEventListener("change", function() {
    if (airCheckbox.checked) {
        var data = {
            air_status:1,
            };
        } 
    else {
        var data = {
            air_status:0,
            };
        }
        const db=getDatabase();
        const dbref = ref(db);
        const activeItem = document.querySelector(".category a.active");
        const temp="Smart_home/"+activeItem.id;
        update(child(dbref, temp), data);
    });

const tiviCheckbox = document.getElementById("tivi");
tiviCheckbox.addEventListener("change", function() {
    if (tiviCheckbox.checked) {
        var data = {
            tivi_status:1,
            };
        } 
    else {
        var data = {
            tivi_status:0,
            };
        }
        const db=getDatabase();
        const dbref = ref(db);
        const activeItem = document.querySelector(".category a.active");
        const temp="Smart_home/"+activeItem.id;
        update(child(dbref, temp), data);
    });

const heaterCheckbox = document.getElementById("heater");
heaterCheckbox.addEventListener("change", function() {
    if (heaterCheckbox.checked) {
        var data = {
            heater_status:1,
            };
        } 
    else {
        var data = {
            heater_status:0,
            };
        }
        const db=getDatabase();
        const dbref = ref(db);
        const activeItem = document.querySelector(".category a.active");
        const temp="Smart_home/"+activeItem.id;
        update(child(dbref, temp), data);
    });

const fridgeCheckbox = document.getElementById("fridge");
fridgeCheckbox.addEventListener("change", function() {
    if (fridgeCheckbox.checked) {
        var data = {
            fridge_status:1,
            };
        } 
    else {
        var data = {
            fridge_status:0,
            };
        }
        const db=getDatabase();
        const dbref = ref(db);
        const activeItem = document.querySelector(".category a.active");
        const temp="Smart_home/"+activeItem.id;
        update(child(dbref, temp), data);
    });

const curtainCheckbox = document.getElementById("curtain");
curtainCheckbox.addEventListener("change", function() {
    if (curtainCheckbox.checked) {
        var data = {
            curtain_status:1,
            };
        } 
    else {
        var data = {
            curtain_status:0,
            };
        }
        const db=getDatabase();
        const dbref = ref(db);
        const activeItem = document.querySelector(".category a.active");
        const temp="Smart_home/"+activeItem.id;
        update(child(dbref, temp), data);
    });

const speakerCheckbox = document.getElementById("speaker");
speakerCheckbox.addEventListener("change", function() {
    if (speakerCheckbox.checked) {
        var data = {
            speaker_status:1,
            };
        } 
    else {
        var data = {
            speaker_status:0,
            };
        }
        const db=getDatabase();
        const dbref = ref(db);
        const activeItem = document.querySelector(".category a.active");
        const temp="Smart_home/"+activeItem.id;
        update(child(dbref, temp), data);
    });

const vacuumCheckbox = document.getElementById("vacuum");
vacuumCheckbox.addEventListener("change", function() {
    if (vacuumCheckbox.checked) {
        var data = {
            vacuum_status:1,
            };
        } 
    else {
        var data = {
            vacuum_status:0,
            };
        }
        const db=getDatabase();
        const dbref = ref(db);
        const activeItem = document.querySelector(".category a.active");
        const temp="Smart_home/"+activeItem.id;
        update(child(dbref, temp), data);
    });

const doorCheckbox = document.getElementById("door");
doorCheckbox.addEventListener("change", function() {
    if (doorCheckbox.checked) {
        var data = {
            door_status:1,
            };
        } 
    else {
        var data = {
            door_status:0,
            };
        }
        const db=getDatabase();
        const dbref = ref(db);
        const activeItem = document.querySelector(".category a.active");
        const temp="Smart_home/"+activeItem.id;
        update(child(dbref, temp), data);
    });

const dryingCheckbox = document.getElementById("drying");
dryingCheckbox.addEventListener("change", function() {
    if (dryingCheckbox.checked) {
        var data = {
            drying_status:1,
            };
        } 
    else {
        var data = {
            drying_status:0,
            };
        }
        const db=getDatabase();
        const dbref = ref(db);
        const activeItem = document.querySelector(".category a.active");
        const temp="Smart_home/"+activeItem.id;
        update(child(dbref, temp), data);
    });

var slider = document.getElementById("slider_lamp");
slider.addEventListener("input", function() {
    let value = this.value;
    var data = {
        lamp_value:value,
        };
    const db=getDatabase();
    const dbref = ref(db);
    const activeItem = document.querySelector(".category a.active");
    const temp="Smart_home/"+activeItem.id;
    update(child(dbref, temp), data);
});

var slider = document.getElementById("slider_fan");
slider.addEventListener("input", function() {
    let value = this.value;
    var data = {
        fan_value:value,
        };
    const db=getDatabase();
    const dbref = ref(db);
    const activeItem = document.querySelector(".category a.active");
    const temp="Smart_home/"+activeItem.id;
    update(child(dbref, temp), data);
});

var slider = document.getElementById("slider_air");
slider.addEventListener("input", function() {
    let value = this.value;
    var data = {
        air_value:value,
        };
    const db=getDatabase();
    const dbref = ref(db);
    const activeItem = document.querySelector(".category a.active");
    const temp="Smart_home/"+activeItem.id;
    update(child(dbref, temp), data);
});

