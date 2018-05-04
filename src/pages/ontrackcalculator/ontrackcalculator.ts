import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MinLengthValidator } from '@angular/forms';
@Component({
  selector: 'page-ontrackcalculator',
  templateUrl: 'ontrackcalculator.html'
})


export class OnTrackCalculator {
  constructor(public navCtrl: NavController) {
  window.onload = function()
  {
    var submit = document.getElementById("calculate")
    submit.addEventListener("click", (e:Event) => DataRetrieval())
    var genderRadio = document.getElementsByName("gender")
    for (var i = 0; i <= genderRadio.length; i++)
    {
      genderRadio[i]
    }  
  };
    var age = 0
    var tempVar
    var FiftyFree = 0
    var OneFree = 0
    var TwoFree = 0
    var FourFree = 0
    var EightFree = 0
    var Mile = 0
    var OneBack = 0
    var TwoBack = 0
    var OneBreast = 0
    var TwoBreast = 0
    var OneFly = 0
    var TwoFly = 0
    var TwoMedley = 0
    var FourMedley = 0
    var Male = false 
    var Female = false
    var trackOneTimes: number [] = [tempVar]
    
    function AgeDetermination()
    {
      return age
    }
    
    /* takes in 3 values as parameters from HTML file ontrackcalculator.html
       parses those 3 values into floats, converts minutes into seconds and divdes the hundredths value by 100
       to get a proper decimal value.
    */
    function DataRetrieval() : any
    {
      console.log("button was pressed")
      var total = 0
      // var array: HTMLElement[] = [min, sec, hund]
      let min = document.getElementById("min") as HTMLInputElement
      let sec = document.getElementById("sec") as HTMLInputElement
      let hund = document.getElementById("hund") as HTMLInputElement
      console.log(min.value)
      var minutes = parseFloat(min.value.toString())
      console.log(minutes)
      var seconds = parseFloat(sec.value.toString())      
      console.log(seconds)   
      var hundredths = parseFloat(hund.value.toString())
      console.log(hundredths)
      if (minutes == null || seconds == null || hundredths == null)
      {
        console.log("incorrect input, please input a number into all fields")
        return;
      }
      minutes = minutes * 60
      hundredths = hundredths / 100

      total = minutes + seconds + hundredths
      console.log(total)
      Calculate(total)  
    }
    function Calculate(float)
    {
      
    }
    /*
      all relevant variables and values for Male Track 1, if male wasn't selected an error value must be thrown
    */
    function FemaleTrackOne(int)
    {

    }
    function MaleTrackOne(int) 
    {
      if (this.Male != true || this.Female == true)
      {
        console.log("This is the male section Something has gone wrong")
        return;
      }
      if (this.Male == true && this.age == 15)
      {
        tempVar = 6
        TwoFree = 113.74
        FourFree = 242.71
        EightFree = 500.80
        Mile = 985.16
        TwoBack = 125.27
        TwoBreast = 143.80
        FourMedley = 278.64
        trackOneTimes = [TwoFree, FourFree, EightFree, Mile, TwoBack, TwoBreast, FourMedley]
      }
      else if (this.Male == true && this.age == 18 || this.Male == true && this.age == 19)
      {
        if (this.age == 18)
        {
          FiftyFree = 23.18
          OneFree = 49.89
          TwoFree = 108.40
          FourFree = 230.20
          EightFree = 478.31
          Mile = 929.77
          OneBack = 55.46
          TwoBack = 119.01
          OneBreast = 63.02
          TwoBreast = 133.57
          OneFly = 53.75
          TwoFly = 119.84
          TwoMedley = 122.56
          FourMedley = 261.36
        }
        else
        {
          FiftyFree = 22.84;
          OneFree = 49.17;
          TwoFree = 107.15;
          FourFree = 227.43;
          EightFree = 474.31;
          Mile = 917.75;
          OneBack = 54.65;
          TwoBack = 117.58;
          OneBreast = 61.90;
          TwoBreast = 131.26;
          OneFly = 52.83;
          TwoFly = 118.04;
          TwoMedley = 121.00;
          FourMedley = 257.88;
        }
      }
    }
  }  
}
