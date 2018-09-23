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
      var total = min.value + ":" + sec.value + "." + hund.value
      console.log(min.value)
      console.log(sec.value)
      console.log(hund.value)
      console.log(total)
      console.log(name.value)
      console.log(event.value)
      console.log(age.value)
      PostRequest(total, name.value, event.value, gender.value, age.value)
    }
    function PostRequest(total, name, race, gender, age)
    {
      
      var headers = new Headers()
      headers.append("Accept", 'application/json')
      headers.append('Content-Type', 'application/json')
      let options = new RequestOptions({headers: headers })
      let postParams = {
        name: name,
        age: age,
        gender: gender,
        race: race, 
        total: total
      }
      console.log(name, age, gender, race, total)
      http.post("http://172.16.1.78/goldfins.php", postParams, options)
      .subscribe(data=> {console.log(data); alert("Thank you " + name 
      + "'s " + "time has successfully been entered")}, 
      error =>{console.log(error, 'problem');});
    }
    
  }
}
