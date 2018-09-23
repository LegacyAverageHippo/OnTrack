import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions  } from '@angular/http'; 
@Component({
  selector: 'page-IMChallenge',
  templateUrl: 'IMChallenge.html'
})
export class IMChallenge {
  constructor(public navCtrl: NavController, public http : Http) {
      var delayTime = 500;
      setTimeout(function(){
      var enter = document.getElementById("post")
      enter.addEventListener("click", (e:Event) => Post())
      }, delayTime)
       
    function Post() : any
    {
      console.log("button was pressed")
      var min = document.getElementById("minutes") as HTMLInputElement
      var sec = document.getElementById("seconds") as HTMLInputElement
      var hund = document.getElementById("hundredths") as HTMLInputElement
      var name = document.getElementById("name") as HTMLInputElement  
      var age = document.getElementById("age") as HTMLInputElement   
      var event = document.getElementById("event") as HTMLInputElement
      var gender = document.getElementById("gender") as HTMLInputElement
      console.log(min.value)
      console.log(sec.value)
      console.log(hund.value)
      console.log(name.value)
      console.log(event.value)
      console.log(age.value)
      PostRequest(min.value, sec.value, hund.value, name.value, event.value, gender.value, age.value)
    }
    function PostRequest(min, sec, hund, name, race, gender, age)
    {
      var headers = new Headers()
      headers.append("Accept", 'application/json')
      headers.append('Content-Type', 'application/json')
      headers.append('Access-Control-Allow-Origin', 'application/json')
      let options = new RequestOptions({headers: headers })
      let postParams = {
        name: name,
        min: min,
        sec: sec,
        hund: hund,
        race: race,
        gender: gender,
        age: age
      }
      http.post("http://10.230.69.162/goldfins.php", postParams, options)
      .subscribe(data=> {console.log(data);}, 
      error =>{console.log(error, 'problem');});
    }
    
  }
}
