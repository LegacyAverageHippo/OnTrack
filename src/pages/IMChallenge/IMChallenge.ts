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
 * takes in httpinput as parameters (name, gender, age, type of pool, event, time)
 * encodes input elements as JSON objects, POSTS them to AWS PHP server. 
 * returns: Elements of the list being entered into. 
 */
export class IMChallenge {
  posts: any;
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
      var fullString
      if (sec.value == 'NT')
      {
        fullString = 'NT'
      }
      else if (min.value == "")
      {
        fullString = sec.value + "." + hund.value
      }
      else
      {
        fullString = min.value + ":" + sec.value + "." + hund.value
      }
      PostRequest(fullString, name.value, event.value, gender.value, age.value, pool.value)
      //GetRequest()
    }
    // function GetRequest()
    // {

    //   http.get('http://localhost/goldfins.php').subscribe((res) => console.log())
    //   // const req = new HttpRequest('GET', 'http://localhost/goldfins.php', file, {
    //   //   reportProgress: true
    //   // });
    //   // http.request('http://localhost/goldfins.php').pipe(
    //   //   console.log("GOES IN HERE!")

    //   // );
      
    //   // http.get("http://localhost/goldfins.php").map(res=>res.json()).subscribe(res=>{
    //   //   // this.posts = data.data.children;
    //   // alert(res.json);console.log(this.posts) });
    //   //   // map(res=>res.json()).
    // }
    function PostRequest(fullString, name, race, gender, age, pool)
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
        fullString: fullString
      }
      console.log(name, age, gender, race, fullString)
      // http.post("http://localhost/goldfins.php", postParams, options)
      // .subscribe(data=> {console.log(data); alert("Thank you " + name 
      // + "'s " + "time has successfully been entered")}, 
      // error =>{console.log(error, 'problem');alert('problem')});
      http.post("http://GoldfinsServer.qafrcjxsmx.us-east-2.elasticbeanstalk.com/goldfins.php", postParams, options)
      .subscribe(data=> {console.log(data); alert("Thank you " + name 
      + "'s " + "time has successfully been entered")}, 
      error =>{console.log(error, 'problem');alert('problem')}); 
    } 
  }
}
