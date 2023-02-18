
#include "FirebaseESP8266.h"  // Install Firebase ESP8266 library
#include <WiFiClient.h>

#define FIREBASE_HOST "smart-home-36c8d-default-rtdb.asia-southeast1.firebasedatabase.app" //Without http:// or https:// schemes
#define FIREBASE_AUTH "AIzaSyBXQO0Xt7h8DK2UgNIHYcl4chV6RWgcypI"
#define WIFI_SSID "TienDat"
#define WIFI_PASSWORD "11061965"
#define relay 1

FirebaseData firebaseData;
FirebaseData ledData;
FirebaseJson json;

void setup()
{
//...........................................................................ket noi
  Serial.begin(115200);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED)
  {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
  Firebase.reconnectWiFi(true);



}
//..................................................................Nhiet do d0 am
void sensorUpdate() {
  // Reading temperature or humidity takes about 250 milliseconds!
  // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)
  int t=1;
  float h=0;
  if (Firebase.setFloat(firebaseData, "/Smart_home/livingroom/air_status", h))
  {
    Serial.println("PASSED");
  }
  else
  {
    Serial.println("FAILED");
  }
}


void pump(){
    if (Firebase.getString(ledData, "/Smart_home/livingroom/air_value")) {
    Serial.println(ledData.stringData());

  }
}
void loop() {
  sensorUpdate();
  pump();
  }
