import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions  } from '@angular/http';
import 'rxjs/add/operator/map';
import { map } from '../../../node_modules/rxjs/operator/map';
@Component({
  selector: 'page-IMChallenge',
  templateUrl: 'IMChallenge.html'
})
/**
 * takes in HMTLinput as parameters (name, gender, age, type of pool, event, time)
 * encodes input elements as HTTP/JSON objects, POSTS them to AWS PHP server. 
 * returns: Elements of the list being entered into. 
 */
export class IMChallenge {
  posts: any;
  constructor(public navCtrl: NavController, public http : Http) {
      var delayTime = 500;
      var minutes
      var seconds
      var hundredths
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
      var fullString
      if (sec.value == 'NT')
      {
        console.log("hello");
        total = 3600
      }
      else{
      minutes = parseFloat(min.value) * 60
      seconds = parseFloat(sec.value)
      hundredths = parseFloat(hund.value)/100
      total = minutes + seconds + hundredths
      console.log(total)
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
      http.post("http://localhost/goldfins.php", postParams, options)
      .subscribe(data=> {console.log(data); alert("Thank you " + name 
      + "'s " + "time has successfully been entered")}, 
      error =>{console.log(error, 'problem');alert('problem')});
      // http.post("http://GoldfinsServer.qafrcjxsmx.us-east-2.elasticbeanstalk.com/goldfins.php", postParams, options)
      // .subscribe(data=> {console.log(data); alert("Thank you " + name 
      // + "'s " + "time has successfully been entered")}, 
      // error =>{console.log(error, 'problem');alert('problem')}); 
    } 
  }
}
