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
      var min = document.getElementById("minutes") as HTMLInputElement
      var sec = document.getElementById("seconds") as HTMLInputElement
      var hund = document.getElementById("hundredths") as HTMLInputElement
      var name = document.getElementById("name") as HTMLInputElement  
      var age = document.getElementById("age") as HTMLInputElement   
      var event = document.getElementById("event") as HTMLInputElement
      var gender = document.getElementById("gender") as HTMLInputElement
      var pool = document.getElementById("pool") as HTMLInputElement
      var total
      if (sec.value == 'NT')
      {
        total = 'NT'
      }
      else if (min.value == null)
      {
        total = sec.value + "." + hund.value
      }
      else
      {
        total = min.value + ":" + sec.value + "." + hund.value
      }
      PostRequest(total, name.value, event.value, gender.value, age.value, pool.value)
    }
    function PostRequest(total, name, race, gender, age, pool)
    { 
      var headers = new Headers()
      headers.append('Accept', 'application/json')
      headers.append('Content-Type', 'application/json')
      let options = new RequestOptions({headers: headers })
      let postParams = {
        name: name,
        age: age,
        gender: gender,
        race: race,
        pool: pool, 
        total: total
      }
      console.log(name, age, gender, race, total)
      http.post("http://10.196.81.55/goldfins.php", postParams, options)
      .subscribe(data=> {console.log(data); alert("Thank you " + name 
      + "'s " + "time has successfully been entered")}, 
      error =>{console.log(error, 'problem');alert('problem')});
    }
    
  }
}
