#include "DHT.h"            
const int DHTPIN = 5;      
const int DHTTYPE = DHT22;  

DHT dht(DHTPIN, DHTTYPE);
void setup() {
  Serial.begin(115200);
  dht.begin();       
}

void loop() {
  float h = dht.readHumidity();    
  float t = dht.readTemperature(); 

  Serial.print("Nhiet do: ");
  Serial.println(t);               
  Serial.print("Do am: ");
  Serial.println(h);  
              
  Serial.println();               
  delay(1000);                     
}
