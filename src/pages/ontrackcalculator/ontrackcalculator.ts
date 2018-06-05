import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MinLengthValidator } from '@angular/forms';
@Component({
  selector: 'page-ontrackcalculator',
  templateUrl: 'ontrackcalculator.html'
})
export class OnTrackCalculator {
  constructor(public navCtrl: NavController) {
  var Male = false
  var Female = false
  var male
  var female
  window.onload = function()
  {
    male = document.getElementById("gender_male")
    female = document.getElementById("gender_female")
    female.addEventListener("click", (e:Event) => GenderSwap("female"))
    male.addEventListener("click", (e:Event) => GenderSwap("male"))
    var submit = document.getElementById("calculate")
    submit.addEventListener("click", (e:Event) => DataRetrieval())
  };
    var age = 0
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
    var trackOneTimes: number [] 
    var trackOneNames: string []     
    /* takes in 3 values as parameters from HTML file ontrackcalculator.html
       parses those 3 values into floats, converts minutes into seconds and divdes the hundredths value by 100
       to get a proper decimal value.
    */
    function DataRetrieval() : any
    {
      console.log("button was pressed")
      var total = 0
      let min = document.getElementById("min") as HTMLInputElement
      let sec = document.getElementById("sec") as HTMLInputElement
      let hund = document.getElementById("hund") as HTMLInputElement
      console.log(min.value)
      var minutes = parseFloat(min.value.toString())
      console.log(minutes)
      if (min.value == "")
      {
        minutes = 0
      }
      if (sec.value == "" || hund.value == "")
      {
        alert("error: please enter a valid integer in the seconds and hundredths fields!")
      }
      var seconds = parseFloat(sec.value.toString())      
      console.log(seconds)   
      var hundredths = parseFloat(hund.value.toString())
      console.log(hundredths)
      if (seconds == null || hundredths == null)
      {
        alert("incorrect input, please input a number into proper fields")
        console.log("incorrect input, please input a number into seconds and hundredths fields")
        return;
      }
      minutes = minutes * 60
      hundredths = hundredths / 100
      total = minutes + seconds + hundredths
      console.log(total)
      Calculate(total)  
    }
    function Calculate(timeIn)
    {
      var trackOne
      var percentageOff
      var comparableTimes: number []
      var comparableRaces: string []
      let race = document.getElementById("race") as HTMLInputElement
      if (Male == true && Female == false)
      {
        console.log("Male got here")
        comparableTimes = MaleTrackOneTimes()
        comparableRaces = MaleTrackOneEvents()  
      }
      else if (Female == true && Male == false)
      {
        console.log("got here")
        comparableTimes = FemaleTrackOneTimes()
        comparableRaces = FemaleTrackOneEvents()
      }
      console.log(race.value)
      
      for(var i = 0; i < comparableTimes.length; i ++)
      {
        if (race.value == comparableRaces[i])
        {
          trackOne = comparableTimes[i]
          break;
        }
        console.log("nope")
      }
      percentageOff = trackOne/timeIn * 100
      alert("The Athlete is currently " + percentageOff + "% on track!")
      console.log("The Athlete is currently " + percentageOff + "% on track!")
    }
    function GenderSwap(X)
    {
      console.log(X)
      if(X == "male")
      {
        Male = true
        Female = false
        console.log(Male)
        console.log(Female)
      }
      else if(X == "female")
      { 
        Male = false
        Female = true
        console.log(Male)
        console.log(Female)
      }
      else 
      {
        console.log("Something went wrong. No gender selected")
      }
    }
    /*
      all relevant variables and values for Male Track 1, if male wasn't selected an error value must be thrown
    */
    function FemaleTrackOneEvents()
    {
      let swimmerAge = document.getElementById("Age") as HTMLInputElement
      age = parseInt(swimmerAge.value)
      console.log(age)
      if (Female != true || Male == true)
      {
        alert("Female section and female not selected... what sourcery are you up to?")
        console.log("Female section and Female not selected..... what are you playing at?")
      }
      else if (Female == true && (age < 13 || age > 21))
      {
        alert("This is not a valid age grouping for this gender or event")
        console.log("This is not a valid age grouping for this calculator")
      }
      else if (Female == true && age == 13)
      {
        trackOneNames = ["EightFree", "Mile", "TwoBack"]
      }
      else if (Female == true && age == 14)
      {
        trackOneNames = ["TwoFree", "FourFree", "EightFree", "Mile", "OneBack", "TwoBack",
          "OneBreast", "TwoBreast", "TwoFly", "TwoMedley", "FourMedley"]
      }
      else if (Female == true && (age == 15 || age == 16))
      {
        trackOneNames = ["OneFree", "TwoFree", "FourFree", "EightFree", "Mile", "OneBack", "TwoBack", "OneBreast", "TwoBreast",
          "OneFly", "TwoFly", "TwoMedley", "FourMedley"]
      }
      else if (Female == true && age == 17)
      {
        trackOneNames = ["FiftyFree", "OneFree", "TwoFree", "FourFree", "EightFree", "Mile", "OneBack", "TwoBack", "OneBreast", "TwoBreast",
          "OneFly", "TwoFly", "TwoMedley", "FourMedley"]
      }
      else if (Female == true && age == 18)
      {
        trackOneNames = ["FiftyFree", "OneFree", "TwoFree", "FourFree", "OneBack", "OneBreast",
          "TwoBreast", "OneFly", "TwoFly", "TwoMedley"]
      }
      else if (Female == true && age == 19)
      {
        trackOneNames = ["FiftyFree", "OneFree", "OneFly"]
      }
      else if (Female == true && (age == 20 || age == 21))
      {
        trackOneNames = ["FiftyFree"]
      }

      return trackOneNames
    }
    function FemaleTrackOneTimes()
    {
      let swimmerAge = document.getElementById("Age") as HTMLInputElement
      age = parseInt(swimmerAge.value)
      console.log(age)
      if (Female != true || Male == true)
      {
        console.log("Female section and Female not selected..... what are you playing at?")
      }
      else if (Female == true && (age < 13 || age > 21))
      {
        console.log("This is not a valid age grouping for this calculator")
      }
      else if (Female == true && age == 13)
      {
        EightFree = 547.18
        Mile = 1079.24
        TwoBack = 260.75
        FourMedley = 298.15
        trackOneTimes = [EightFree, Mile, TwoBack]
      }
      else if (Female == true && age == 14)
      {
        TwoFree = 124.86
        FourFree = 261.51
        EightFree = 536.28
        Mile = 1050.49
        OneBack = 64.46
        TwoBack = 137.55
        OneBreast = 71.35
        TwoBreast = 175.28
        TwoFly = 137.55
        TwoMedley = 140.78
        FourMedley = 292.16
        trackOneTimes = [TwoFree, FourFree, EightFree, Mile,
                        OneBack, TwoBack, OneBreast, TwoBreast, TwoFly,
                        TwoMedley, FourMedley]
      }
      else if (Female == true && (age == 15 || age == 16))
      {
        if (age == 15)
        {
          OneFree = 57.18
          TwoFree = 122.61
          FourFree = 257.31
          EightFree = 527.15
          Mile = 1036.55
          OneBack = 63.36
          TwoBack = 134.83
          OneBreast = 70.10
          TwoBreast = 152.62
          OneFly = 61.31
          TwoFly = 134.96
          TwoMedley = 138.31
          FourMedley = 286.98
        }
        else
        {
          OneFree = 56.34
          TwoFree = 120.69
          FourFree = 253.75
          EightFree = 519.15
          Mile = 1017.14
          OneBack = 62.41
          TwoBack = 132.56
          OneBreast = 69.00
          TwoBreast = 150.29
          OneFly = 60.31
          TwoFly = 132.64
          TwoMedley = 136.21
          FourMedley = 282.59
        }
        trackOneTimes = [OneFree, TwoFree, FourFree, EightFree, Mile, 
                        OneBack, TwoBack, OneBreast, TwoBreast, OneFly, TwoFly,
                        TwoMedley, FourMedley]
      }
      else if (Female == true && age == 17)
      {
        FiftyFree = 25.69
        OneFree = 55.62
        TwoFree = 119.07
        FourFree = 250.76
        EightFree = 513.73
        Mile = 1002.04
        OneBack = 61.59
        TwoBack = 130.68
        OneBreast = 68.04
        TwoBreast = 148.29
        OneFly = 59.46
        TwoFly = 130.73
        TwoMedley = 134.45
        FourMedley = 278.91
        trackOneTimes = [FiftyFree, OneFree, TwoFree, FourFree, EightFree, Mile, 
          OneBack, TwoBack, OneBreast, TwoBreast, OneFly, TwoFly,
          TwoMedley, FourMedley]
      }
      else if (Female == true && age == 18)
      {
        FiftyFree = 25.43
        OneFree = 55.01
        TwoFree = 117.74
        FourFree = 248.34
        OneBack = 60.89
        OneBreast = 67.22  
        TwoBreast = 146.58
        OneFly = 58.74
        TwoFly = 129.21
        TwoMedley = 133.01
        trackOneTimes = [FiftyFree, OneFree, TwoFree, FourFree, OneBack, 
          OneBreast, TwoBreast, OneFly, TwoFly, TwoMedley]
      }
      else if (Female == true && age == 19)
      {
        FiftyFree = 25.20
        OneFree = 54.50
        OneFly = 58.15
        trackOneTimes = [FiftyFree, OneFree, OneFly]
      }
      else if (Female == true && age == 20)
      {
        FiftyFree = 25.00
        trackOneTimes = [FiftyFree]
      }
      else if (Female == true && age == 21)
      {
        FiftyFree = 24.82
        trackOneTimes = [FiftyFree]
      }
      return trackOneTimes
    }
    function MaleTrackOneEvents()
    {
      let swimmerAge = document.getElementById("Age") as HTMLInputElement
      age = parseInt(swimmerAge.value)
      console.log(age)
      if (Male != true && Female == true)
      {
        alert("This is the male section Something has gone wrong... Not that I'm assuming your gender or anything. Just that you selected Female and you're in the male section... So something somwhere went horribly wrong");
        console.log("This is the male section Something has gone wrong... Not that I'm assuming your gender or anything. Just that you selected Female and you're in the male section... So something somwhere went horribly wrong");
        return
      }
      else if (Male == true && (age <= 14 || age >= 23))
      {
        alert("This age category is not accepted for the male category")
        console.log("This age category is not accepted for the male category")
        return
      }
      else if (Male == true && age == 15)
      {
        trackOneNames = ["TwoFree", "FourFree", "EightFree", "Mile", "TwoBack", "TwoBreast", "FourMedley"]
      }
      else if (Male == true && age == 16 || Male == true && age == 17)
      {
        trackOneNames = ["OneFree", "TwoFree", "FourFree", "EightFree", "Mile", "OneBack", "TwoBack", "OneBreast",
                          "TwoBreast", "OneFly", "TwoFly", "TwoMedley", "FourMedley"]
      }
      else if ((Male == true && age == 18) || (Male == true && age == 19))
      {
        trackOneNames = ["FiftyFree", "OneFree", "TwoFree", "FourFree", "EightFree", "Mile", "OneBack", "TwoBack",
                          "OneBreast", "TwoBreast", "OneFly", "TwoFly", "TwoMedley", "FourMedley"]        
      }
      else if (Male == true && age == 20)
      {
        trackOneNames = ["FiftyFree", "OneFree", "OneBack", "OneBreast", "OneFly", "TwoFly", "TwoMedley"]
      }
      else if (Male == true && age == 21)
      {
        trackOneNames = ["FiftyFree", "OneBreast"]
      }
      else if (Male == true && age == 22)
      {
        trackOneNames = ["FiftyFree"]
      }
      return trackOneNames
    }
    function MaleTrackOneTimes() 
    {
      let swimmerAge = document.getElementById("Age") as HTMLInputElement
      age = parseInt(swimmerAge.value)
      console.log(age)
      if (Male != true && Female == true)
      {
        console.log("This is the male section Something has gone wrong... Not that I'm assuming your gender or anything. Just that you selected Female and you're in the male section... So something somwhere went horribly wrong");
        return;
      }
      else if (Male == true && (age <= 14 || age >= 23))
      {
        console.log("This age category is not accepted for the male category")
      }
      if (Male == true && age == 15)
      {        
        TwoFree = 113.74
        FourFree = 242.71
        EightFree = 500.80
        Mile = 985.16
        TwoBack = 125.27
        TwoBreast = 143.80
        FourMedley = 278.64
        return trackOneTimes = [TwoFree, FourFree, EightFree, Mile, TwoBack, TwoBreast, FourMedley]           
      }
      else if (Male == true && age == 16)
      {                       
        OneFree = 51.72;
        TwoFree = 111.68;
        FourFree = 237.78;
        EightFree = 491.33;
        Mile = 963.20;
        OneBack = 57.59;
        TwoBack = 122.84;
        TwoBreast = 139.78;
        OneFly = 56.19;
        TwoFly = 125.10;
        TwoMedley = 126.77;
        FourMedley = 271.64;
        return trackOneTimes = [OneFree, TwoFree, FourFree, EightFree, Mile, OneBack,
            TwoBack, TwoBreast, OneFly, TwoFly, TwoMedley, FourMedley]
                  
      }
      else if (Male == true && age == 17)
      {
        OneFree = 50.74;
        TwoFree = 109.90;
        FourFree = 233.62;
        EightFree = 483.97;
        Mile = 944.8;
        OneBack = 56.44;
        TwoBack = 120.76;
        OneBreast = 64.38;
        TwoBreast = 136.39;
        OneFly = 54.87;
        TwoFly = 122.17;
        TwoMedley = 124.47;
        FourMedley = 265.91;
        return trackOneTimes = [OneFree, TwoFree, FourFree, EightFree, Mile, OneBack,
          TwoBack, OneBreast, TwoBreast, OneFly, TwoFly, TwoMedley, FourMedley]
      }
      else if (Male == true && age == 18)
      {
        console.log("Hmmm?")
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
        return trackOneTimes = [FiftyFree, OneFree, TwoFree, FourFree, EightFree, Mile, OneBack, TwoBack, OneBreast,
                          TwoBreast, OneFly, TwoFly, TwoMedley, FourMedley]  
      }
      else if (Male == true && age == 19)
      {
        FiftyFree = 22.84
        OneFree = 49.17
        TwoFree = 107.15
        FourFree = 227.43
        EightFree = 474.31
        Mile = 917.75
        OneBack = 54.65
        TwoBack = 117.58
        OneBreast = 61.90
        TwoBreast = 131.26
        OneFly = 52.83
        TwoFly = 118.04
        TwoMedley = 121.00
        FourMedley = 257.88
        return trackOneTimes = [FiftyFree, OneFree, TwoFree, FourFree, EightFree, Mile, OneBack, TwoBack, OneBreast,
          TwoBreast, OneFly, TwoFly, TwoMedley, FourMedley,]
      }
      else if (Male == true && age == 20)
      {
          
        FiftyFree = 22.55;
        OneFree = 48.58;
        OneBack = 53.99;
        OneBreast = 60.98;
        OneFly = 52.08;
        TwoFly = 116.72;
        TwoMedley = 119.77;
        return trackOneTimes = [FiftyFree, OneFree, OneBack, OneBreast, OneFly, TwoFly, TwoMedley]
      }
      else if (Male == true && age == 21)
      {
         
          FiftyFree = 22.30;
          OneBreast = 60.26;
          return trackOneTimes = [FiftyFree, OneBreast]
      }
       else if (Male == true && age == 22)
      {
        FiftyFree = 22.10; 
        return trackOneTimes = [FiftyFree];
      }
    }
  }  
}
