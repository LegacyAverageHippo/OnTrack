import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MinLengthValidator } from '@angular/forms';
@Component({
  selector: 'page-ontrackcalculator',
  templateUrl: 'ontrackcalculator.html'
})
/**
 * class OnTrackCalculator: Receives input from ontrackcalculator.ts in the form of HTMLElements
 * male & female variables: the gender radio buttons, these are given event listeners after the window loads
 * submit variable: also given an event listener after the window loads.
 */
export class OnTrackCalculator {
  constructor(public navCtrl: NavController) {
  var Male = false
  var Female = false
  var male
  var female
  var standard
  var course
  
  window.onload = function()
  {
    male = document.getElementById("gender_male")
    female = document.getElementById("gender_female")
    standard = document.getElementById("standard") as HTMLInputElement
    course = document.getElementById("course") as HTMLInputElement
    female.addEventListener("click", (e:Event) => GenderSwap("female"))
    male.addEventListener("click", (e:Event) => GenderSwap("male"))
    var submit = document.getElementById("calculate") as HTMLInputElement
    submit.addEventListener("click", (e:Event) => DataRetrieval())
  };
    /**
     * age of athlete set initially to zero
     * all the events swam in competitive swimming also initially set to zero, to be reset to one of 
     * the value sets below and returned to be calculated.
     */
    var age = 0
    var FiftyFree = 0
    var OneFree = 0
    var TwoFree = 0
    var FourFree = 0
    var EightFree = 0
    var Mile = 0
    var FiftyBack = 0
    var OneBack = 0
    var TwoBack = 0
    var FiftyBreast = 0
    var OneBreast = 0
    var TwoBreast = 0
    var FiftyFly = 0
    var OneFly = 0
    var TwoFly = 0
    var TwoMedley = 0
    var FourMedley = 0  
    var Times: number [] 
    var Names: string []     
    /*
       DataRetrieval: takes in 3 time values as parameters from HTML file ontrackcalculator.html
       parses those 3 values into floats, converts minutes into seconds and divdes the hundredths value by 100
       to get a proper decimal value stored in the variable total.
       standard: Specific group of time standards the entry time is to be compared to.
       */
   function DataRetrieval() : any
    {
      console.log("button was pressed")
      var total = 0
      let min = document.getElementById("min") as HTMLInputElement
      let sec = document.getElementById("sec") as HTMLInputElement
      let hund = document.getElementById("hund") as HTMLInputElement
      console.log(standard.value)
      console.log(course.value)
      var minutes = parseFloat(min.value.toString())
      console.log(minutes)
      if (min.value == "")
      {
        minutes = 0
        console.log(minutes)
      }
      if (sec.value == "" || hund.value == "")
      {
        alert("error: please enter a valid integer in the seconds and hundredths fields!")
        return
      }
      var seconds = parseFloat(sec.value.toString())      
      console.log(seconds)   
      var hundredths = parseFloat(hund.value.toString())
      console.log(hundredths)
      
      /**
       * If incorrect entry data input, an error message will pop up notifying
       * the individual using it
       */
      if (seconds == null || hundredths == null)
      {
        alert("incorrect input, please input a number into both the seconds and hundredths fields")
        console.log("incorrect input, please input a number into seconds and hundredths fields")
        return;
      }
      minutes = minutes * 60
      hundredths = hundredths / 100
      console.log(hundredths)
      total = minutes + seconds + hundredths
      console.log(total)
      Calculate(total, standard)  
    }
 function Calculate(timeIn, standard)
 {
   var trackOne
   var description
   var secondsOff
   var percentageOff
   var comparableTimes: number []
   var comparableRaces: string []
   let race = document.getElementById("race") as HTMLInputElement
      if (Male == true && Female == false)
      {
        console.log("Male got here")
        comparableTimes = MaleTimes()
        comparableRaces = MaleEvents()  
      }
      else if (Female == true && Male == false)
      {
        console.log("got here")
        comparableTimes = FemaleTimes()
        comparableRaces = FemaleEvents()
      }
      console.log(race.value)
      console.log(comparableTimes)
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
      if(trackOne > timeIn)
      {
        secondsOff = trackOne - timeIn
        console.log (secondsOff, trackOne, timeIn)
        description = " seconds faster than the current " + standard.value +" time! Great Work!"
      }
     else if(trackOne < timeIn)
      {
        secondsOff = timeIn - trackOne
        console.log (secondsOff, trackOne, timeIn)
        description = " seconds off of the current "+ standard.value +" time! Keep working hard!"
      }
     else
     {
       description = "You are exactly the same time! What are the chances?"
     }
      alert("The Athlete is currently " + secondsOff.toFixed(2) + description +" \nThat is: " + percentageOff.toFixed(2) + "%!")
      console.log("The Athlete is currently " + percentageOff + "%!")
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
    function FemaleEvents()
    {
      let swimmerAge = document.getElementById("Age") as HTMLInputElement
      age = parseInt(swimmerAge.value)
      console.log(age)
      if (Female != true || Male == true)
      {
        alert("Female section and female not selected... what sourcery are you up to?")
        console.log("Female section and Female not selected..... what are you playing at?")
      }
      else if (Female == true && (standard.value == "A" || standard.value== "AA"))
      {
       Names = ["FiftyFree", "OneFree", "TwoFree", "FourFree", "EightFree", "Mile", "FiftyBack", "OneBack", "TwoBack","FiftyBreast", "OneBreast", "TwoBreast",
        "FiftyFly", "OneFly", "TwoFly", "TwoMedley", "FourMedley"]
      }
      else if (Female == true && (age < 13 || age > 21) && standard.value == "OnTrack")
      {
       alert("This is not a valid age grouping for this gender or event")
        console.log("This is not a valid age grouping for this calculator")
      }
      else if (Female == true && age == 13 && standard.value == "OnTrack")
      {
       Names = ["EightFree", "Mile", "TwoBack"]
      }
      else if (Female == true && age == 14 && standard.value == "OnTrack")
      {
       Names = ["TwoFree", "FourFree", "EightFree", "Mile", "OneBack", "TwoBack",
          "OneBreast", "TwoBreast", "TwoFly", "TwoMedley", "FourMedley"]
      }
      else if (Female == true && (age == 15 || age == 16) && standard.value == "OnTrack")
      {
       Names = ["OneFree", "TwoFree", "FourFree", "EightFree", "Mile", "OneBack", "TwoBack", "OneBreast", "TwoBreast",
          "OneFly", "TwoFly", "TwoMedley", "FourMedley"]
      }
      else if (Female == true && age == 17 && standard.value == "OnTrack")
      {
       Names = ["FiftyFree", "OneFree", "TwoFree", "FourFree", "EightFree", "Mile", "OneBack", "TwoBack", "OneBreast", "TwoBreast",
          "OneFly", "TwoFly", "TwoMedley", "FourMedley"]
      }
      else if (Female == true && age == 18 && standard.value == "OnTrack")
      {
       Names = ["FiftyFree", "OneFree", "TwoFree", "FourFree", "OneBack", "OneBreast",
          "TwoBreast", "OneFly", "TwoFly", "TwoMedley"]
      }
      else if (Female == true && age == 19 && standard.value == "OnTrack")
      {
       Names = ["FiftyFree", "OneFree", "OneFly"]
      }
      else if (Female == true && (age == 20 || age == 21) && standard.value == "OnTrack")
      {
       Names = ["FiftyFree"]
      }
      return Names
    }
    function FemaleTimes()
    {
      let swimmerAge = document.getElementById("Age") as HTMLInputElement
      age = parseInt(swimmerAge.value)
      console.log(age)
      if (Female != true || Male == true)
      {
        console.log("Female section and Female not selected..... what are you playing at?")
      }
      else if (Female == true && (age < 13 || age > 21) && standard.value == "OnTrack")
      {
       console.log("This is not a valid age grouping for this calculator")
      }
      else if (Female == true && age <= 11 && standard.value == "A" && course.value == "SCM")
      {
       Times = [FiftyFree = 39.53, OneFree = 86.97, TwoFree = 189.12, FourFree = 398.87,
        EightFree = 827.68, Mile = 1625.10, FiftyBack = 45.66, OneBack = 197.22, TwoBack = 209.60,
        FiftyBreast = 51.01, OneBreast = 110.31, TwoBreast = 238.78, FiftyFly = 43.41, OneFly = 96.75,
        TwoFly = 218.83, TwoMedley = 213.59, FourMedley = 454.16]
      }
      else if (Female == true && age <= 11 && standard.value == "A" && course.value == "LCM")
      {
       Times = [FiftyFree = 40.47, OneFree = 88.48, TwoFree = 192.49, FourFree = 708.75, 
        EightFree = 849.30, Mile = 1665.60, FiftyBack = 46.65, OneBack = 99.39, TwoBack = 216.41,
        FiftyBreast = 51.89, OneBreast = 113.43, TwoBreast = 245.43, FiftyFly = 43.70, OneFly = 97.90,
        TwoFly = 224.57, TwoMedley = 219.83, FourMedley = 466.18]
      }
      else if (Female == true && age <= 11 && standard.value == "AA" && course.value == "SCM")
      {
       Times = [FiftyFree = 35.14, OneFree = 77.31, TwoFree = 168.11, FourFree = 354.55,
        EightFree = 735.72, Mile = 1444.54, FiftyBack = 40.58, OneBack = 86.41, TwoBack = 186.31,
        FiftyBreast = 45.34, OneBreast = 98.05, TwoBreast = 212.25, FiftyFly = 38.59, OneFly = 87.02,
        TwoFly = 199.62, TwoMedley = 195.40, FourMedley = 385.38]
      }
      else if (Female == true && age <= 11 && standard.value == "AA" && course.value == "LCM")
      {
       Times = [FiftyFree = 35.98, OneFree = 78.65, TwoFree = 171.10, FourFree = 663.34, 
        EightFree = 754.94, Mile = 1480.53, FiftyBack = 41.47, OneBack = 88.34, TwoBack = 192.36,
        FiftyBreast = 46.12, OneBreast = 100.83, TwoBreast = 218.16, FiftyFly = 38.84, OneFly = 87.02,
        TwoFly = 199.62, TwoMedley = 195.40, FourMedley = 414.38]
      }
      else if (Female == true && age == 12 && standard.value == "A" && course.value == "SCM")
      {
       Times = [FiftyFree = 36.77, OneFree = 80.89, TwoFree = 175.88, FourFree = 670.95, 
        EightFree = 769.75, Mile = 1511.35, FiftyBack = 42.46, OneBack = 90.41, TwoBack = 194.93,
        FiftyBreast = 47.44, OneBreast = 102.59, TwoBreast = 222.06, FiftyFly = 40.37, OneFly = 89.98,
        TwoFly = 203.51, TwoMedley = 198.64, FourMedley = 422.37]
      }
      else if (Female == true && age == 12 && standard.value == "A" && course.value == "LCM")
      {
       Times = [FiftyFree = 37.64, OneFree = 82.29, TwoFree = 197.01, FourFree = 380.14,
        EightFree = 789.85, Mile = 1549.01, FiftyBack = 43.39, OneBack = 92.43,
        TwoBack = 201.26, FiftyBreast = 48.26, OneBreast = 105.49, TwoBreast = 228.25, 
        FiftyFly = 40.64, OneFly = 151.04, TwoFly = 208.85, TwoMedley = 204.44, FourMedley = 433.55]
      }
      else if (Female == true && age == 12 && standard.value == "AA" && course.value == "LCM")
      {
       Times = [FiftyFree = 33.46, OneFree = 73.14, TwoFree = 159.12, FourFree = 337.90, 
        EightFree = 702.09, Mile = 1376.90, FiftyBack = 38.57, OneBack = 82.16, TwoBack = 178.90, 
        FiftyBreast = 42.90, OneBreast = 93.77, TwoBreast = 202.89, FiftyFly = 36.12, OneFly = 80.93,
        TwoFly = 185.65, TwoMedley = 181.72, FourMedley = 385.38]
      }
      else if (Female == true && age == 12 && standard.value == "AA" && course.value == "SCM")
      {
       Times = [FiftyFree = 32.68, OneFree = 71.90, TwoFree = 156.34, FourFree = 329.73, 
        EightFree = 684.22, Mile = 1343.42, FiftyBack = 37.74, OneBack = 80.36, TwoBack = 173.27, 
        FiftyBreast = 42.17, OneBreast = 91.19, TwoBreast = 197.39, FiftyFly = 35.88, OneFly = 78.98,
        TwoFly = 180.90, TwoMedley = 176.57, FourMedley = 675.44]
      }
      else if (Female == true && age == 13)
      {
        if(standard.value == "OnTrack")
        {
           Times = [EightFree = 547.18, Mile = 1079.24, TwoBack = 260.75, FourMedley = 298.15]
        }
        else if (standard.value == "A" && course.value == "SCM")
        {
           Times = [FiftyFree = 35.11, OneFree = 77.25, TwoFree = 167.97, FourFree = 354.25, 
          EightFree = 735.11, Mile = 1443.34, FiftyBack = 40.55, OneBack = 86.34, TwoBack = 186.15,
          FiftyBreast = 45.31, OneBreast = 97.97, TwoBreast = 212.07, FiftyFly = 38.55, OneFly = 85.93,
          TwoFly = 194.36, TwoMedley = 189.70, FourMedley = 403.36]
        }
        else if (standard.value == "A" && course.value == "LCM")
        {
           Times = [FiftyFree = 35.95, OneFree = 82.29, TwoFree = 170.96, FourFree = 363.03,
             EightFree = 754.31, Mile = 1479.30, FiftyBack = 41.44, OneBack = 92.43, TwoBack = 192.20, 
            FiftyBreast = 46.09, OneBreast = 100.74, TwoBreast = 217.98, FiftyFly = 38.81, 
            OneFly = 86.95, TwoFly = 199.45, TwoMedley = 195.24, FourMedley = 414.04]
        }
        else if (standard.value == "AA" && course.value == "SCM")
        {
           Times = [FiftyFree = 31.21, OneFree = 68.66, TwoFree = 149.30, FourFree = 314.89,
          EightFree = 653.43, Mile = 782.97, FiftyBack = 36.04, OneBack = 76.75, TwoBack = 165.47, 
          FiftyBreast = 40.27, OneBreast = 87.08, TwoBreast = 188.51, FiftyFly = 34.27, OneFly = 76.38,
          TwoFly = 172.76, TwoMedley = 268.62, FourMedley = 358.54]
        }
        else if (standard.value == "AA" && course.value == "LCM")
        {
           Times = [FiftyFree = 31.95, OneFree = 69.85, TwoFree = 151.96, FourFree = 322.70, 
            EightFree = 670.50, Mile = 1314.94, FiftyBack = 36.83, OneBack = 78.46, TwoBack = 170.85, 
            FiftyBreast = 40.97, OneBreast = 93.77, TwoBreast = 193.76, FiftyFly = 34.50,
             OneFly = 77.29, TwoFly = 177.29, TwoMedley = 173.55, FourMedley = 368.03]
        }
      }
      else if (Female == true && age == 14)
      {
        if (standard.value == "OnTrack")
        {
           Times = [TwoFree = 124.86, FourFree = 261.51, EightFree = 536.28, Mile = 1050.49,
                 OneBack = 64.46, TwoBack = 137.55, OneBreast = 71.35, TwoBreast =175.28, 
                 TwoFly =137.55, TwoMedley = 140.78, FourMedley = 292.16]
        }
        else if (standard.value == "A" && course.value == "SCM")
        {
           Times = [FiftyFree = 34.06, OneFree = 74.93, TwoFree = 162.93, FourFree = 343.63, EightFree = 713.05,
          Mile = 1400.04, FiftyBack = 39.33, OneBack = 83.75, TwoBack = 180.57, FiftyBreast = 43.95, OneBreast = 95.03,
          TwoBreast = 205.71, FiftyFly = 37.40, OneFly = 83.35, TwoFly = 188.53, TwoMedley = 184.01, FourMedley = 391.26]
        }
        else if (standard.value == "A" && course.value == "LCM")
        {
           Times = [FiftyFree = 34.87, OneFree = 76.23, TwoFree = 165.83, FourFree = 352.14, 
          EightFree = 731.68, Mile = 1434.92, FiftyBack = 40.19, OneBack = 85.62, TwoBack = 186.44,
          FiftyBreast = 44.70, OneBreast = 97.72, TwoBreast = 211.44, FiftyFly = 37.65, OneFly = 84.34,
          TwoFly = 193.47, TwoMedley = 189.38, FourMedley = 401.62]
        }
        else if (standard.value == "AA" && course.value == "SCM")
        {
           Times = [FiftyFree = 30.27, OneFree = 66.60, TwoFree = 144.83, FourFree = 305.45, 
          EightFree = 633.83, Mile = 1244.48, FiftyBack = 34.96, OneBack = 74.45, TwoBack = 160.51, 
          FiftyBreast = 39.06, OneBreast = 84.47, TwoBreast = 182.85, FiftyFly = 33.24, OneFly = 74.09,
          TwoFly = 167.58, TwoMedley = 163.56, FourMedley = 347.79]
        }
        else if(standard.value == "AA" && course.value == "LCM")
        {
        Times = [FiftyFree = 30.99, OneFree = 67.76, TwoFree = 147.40, FourFree = 313.02, 
          EightFree = 650.38, Mile = 1275.49, FiftyBack = 35.73, OneBack = 76.11, TwoBack = 165.72,
          FiftyBreast = 39.74, OneBreast =86.86, TwoBreast = 187.95, FiftyFly = 33.46, OneFly = 74.97,
          TwoFly = 171.97, TwoMedley = 168.34, FourMedley = 356.99]
        }
      }
     
      else if (Female == true && (age == 15 || age == 16))
      {
        if (standard.value == "OnTrack")
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
        Times = [OneFree, TwoFree, FourFree, EightFree, Mile, 
                  OneBack, TwoBack, OneBreast, TwoBreast, OneFly, TwoFly,
                  TwoMedley, FourMedley]
        }
        else if (Female == true && age == 15 && standard.value == "A" && course.value == "LCM")
        {
           Times = [FiftyFree = 34.35, OneFree = 75.08, TwoFree = 163.34, FourFree = 546.86, 
          EightFree = 720.70, Mile = 1413.40, FiftyBack = 39.59, OneBack = 84.34, TwoBack = 183.64,
          FiftyBreast = 44.03, OneBreast = 96.25, TwoBreast = 208.27, FiftyFly = 37.08, OneFly = 83.07,
          TwoFly = 190.57, TwoMedley = 186.54, FourMedley = 391.64]
        }
        else if (Female == true && age == 15 && standard.value == "A" && course.value == "SCM")
        {
           Times = [FiftyFree = 33.55, OneFree = 73.80, TwoFree = 160.48, FourFree = 338.47, 
          EightFree = 702.36, Mile = 1379.04, FiftyBack = 38.74, OneBack = 82.50, TwoBack = 177.86,
          FiftyBreast = 43.29, OneBreast = 93.60, TwoBreast = 202.62, FiftyFly = 36.84, OneFly = 82.10, 
          TwoFly = 185.70, TwoMedley = 182.25, FourMedley = 385.39]
        }
        else if (Female == true && age == 15 && standard.value == "AA" && course.value == "LCM")
        {
           Times = [FiftyFree = 30.53, OneFree = 66.74, TwoFree = 145.19, FourFree = 308.32, 
          EightFree = 640.63, Mile = 1256.36, FiftyBack = 35.19, OneBack = 74.97, TwoBack = 161.60,
          FiftyBreast = 38.75, OneBreast = 85.56, TwoBreast = 185.13, FiftyFly = 32.96, OneFly = 73.84,
          TwoFly = 169.39, TwoMedley = 165.81, FourMedley = 351.64]
        }
        else if (Female == true && age == 15 && standard.value == "AA" && course.value == "SCM")
        {
           Times = [FiftyFree = 29.82, OneFree = 65.60, TwoFree = 142.65, FourFree = 300.86, EightFree = 624.32,
          Mile = 1225.81, FiftyBack = 34.44, OneBack = 73.33, TwoBack = 158.10, FiftyBreast = 38.48, OneBreast = 83.20,
          TwoBreast = 180.11, FiftyFly = 32.74, OneFly = 72.98, TwoFly = 165.06, TwoMedley = 163.56, FourMedley = 342.57]
        }
        else if (Female == true && age >= 16 && standard.value == "A" && course.value == "SCM")
        {
           Times = [FiftyFree = 33.21, OneFree = 73.07, TwoFree = 158.88, FourFree = 335.09, EightFree = 695.34,
          Mile = 1365.25, FiftyBack = 38.36, OneBack = 81.67, TwoBack = 176.08, FiftyBreast = 42.86, OneBreast = 92.67,
          TwoBreast = 200.60, FiftyFly = 36.47, OneFly = 81.28, TwoFly = 183.84, TwoMedley = 179.44, FourMedley = 381.54]
        }
        else if (Female == true && age >= 16 && standard.value == "A" && course.value == "LCM")
        {
           Times = [FiftyFree = 34.00, OneFree = 74.33, TwoFree = 161.71, FourFree = 343.39,
          EightFree = 713.50, Mile = 1399.27, FiftyBack = 39.19, OneBack = 83.49, TwoBack = 181.80,
          FiftyBreast = 43.59, OneBreast = 95.29, TwoBreast = 206.19, FiftyFly = 36.71, OneFly = 82.24,
          TwoFly = 188.66, TwoMedley = 184.67, FourMedley = 391.64]
        }
        else if (Female == true && age >= 16 && standard.value == "AA" && course.value == "SCM")
        {
           Times = [FiftyFree = 29.52, OneFree = 64.95, TwoFree = 141.23, FourFree = 297.86, 
          EightFree = 618.08, Mile = 1213.55, FiftyBack = 34.09, OneBack = 82.60, TwoBack = 156.52,
          FiftyBreast = 38.09, OneBreast = 82.37, TwoBreast = 178.31, FiftyFly = 32.42, OneFly = 72.25, 
          TwoFly = 163.41, TwoMedley = 159.50, FourMedley = 339.15]
        }
        else if (Female == true && age >= 16 && standard.value == "AA" && course.value == "LCM")
        {
           Times = [FiftyFree = 30.22, OneFree = 66.07, TwoFree = 143.74, FourFree = 305.24,
          EightFree = 634.22, Mile = 1243.79, FiftyBack = 34.84, OneBack = 74.22, TwoBack = 161.60,
          FiftyBreast = 38.75, OneBreast = 84.70, TwoBreast = 183.28, FiftyFly = 32.63, OneFly = 73.10,
          TwoFly = 167.70, TwoMedley = 164.16, FourMedley = 348.12]
        }
      }
      else if (Female == true && age == 17 && standard.value == "OnTrack")
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
        Times = [FiftyFree, OneFree, TwoFree, FourFree, EightFree, Mile, 
          OneBack, TwoBack, OneBreast, TwoBreast, OneFly, TwoFly,
          TwoMedley, FourMedley]
      }
      else if (Female == true && age == 18 && standard.value == "OnTrack")
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
        Times = [FiftyFree, OneFree, TwoFree, FourFree, OneBack, 
          OneBreast, TwoBreast, OneFly, TwoFly, TwoMedley]
      }
      else if (Female == true && age == 19 && standard.value == "OnTrack")
      {
        FiftyFree = 25.20
        OneFree = 54.50
        OneFly = 58.15
        Times = [FiftyFree, OneFree, OneFly]
      }
      else if (Female == true && age == 20 && standard.value == "OnTrack")
      {
        FiftyFree = 25.00
        Times = [FiftyFree]
      }
      else if (Female == true && age == 21 && standard.value == "OnTrack")
      {
        FiftyFree = 24.82
        Times = [FiftyFree]
      }
      return Times
    }
    function MaleEvents()
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
      else if (Male == true && (standard.value == "A" || standard.value == "AA"))
      {
       Names = ["FiftyFree", "OneFree", "TwoFree", "FourFree", "EightFree", "Mile", "FiftyBack", "OneBack", "TwoBack",
         "FiftyBreast", "OneBreast", "TwoBreast", "FiftyFly", "OneFly", "TwoFly", "TwoMedley", "FourMeldey"]
      }
      else if (Male == true && (age <= 14 || age >= 23) && standard.value == "OnTrack")
      {
       alert("This age category is not accepted for the male category")
        console.log("This age category is not accepted for the male category")
        return
      }
      else if (Male == true && age == 15 && standard.value == "OnTrack")
      {
       Names = ["TwoFree", "FourFree", "EightFree", "Mile", "TwoBack", "TwoBreast", "FourMedley"]
      }
      else if ((Male == true && age == 16 || Male == true && age == 17)&& standard.value == "OnTrack")
      {
       Names = ["OneFree", "TwoFree", "FourFree", "EightFree", "Mile", "OneBack", "TwoBack", "OneBreast",
                          "TwoBreast", "OneFly", "TwoFly", "TwoMedley", "FourMedley"]
      }
      else if ((Male == true && age == 18) || (Male == true && age == 19) && standard.value == "OnTrack")
      {
       Names = ["FiftyFree", "OneFree", "TwoFree", "FourFree", "EightFree", "Mile", "OneBack", "TwoBack",
                          "OneBreast", "TwoBreast", "OneFly", "TwoFly", "TwoMedley", "FourMedley"]        
      }
      else if ((Male == true && age == 20) && standard.value == "OnTrack")
      {
       Names = ["FiftyFree", "OneFree", "OneBack", "OneBreast", "OneFly", "TwoFly", "TwoMedley"]
      }
      else if (Male == true && age == 21 && standard.value == "OnTrack")
      {
       Names = ["FiftyFree", "OneBreast"]
      }
      else if (Male == true && age == 22 && standard.value == "OnTrack")
      {
       Names = ["FiftyFree"]
      }
      return Names
    }
    function MaleTimes() 
    {
      let swimmerAge = document.getElementById("Age") as HTMLInputElement
      age = parseInt(swimmerAge.value)
      console.log(age)
      if (Male != true && Female == true)
      {
        console.log("This is the male section Something has gone wrong... Not that I'm assuming your gender or anything. Just that you selected Female and you're in the male section... So something somwhere went horribly wrong");
        return;
      }
      console.log (standard.value)
      console.log (course.value)
      if (Male == true && age <= 12 && standard.value == "A" && course.value =="SCM")
      {
       return Times = [FiftyFree = 36.92, OneFree = 80.67, TwoFree = 176.84, FourFree = 375.23, 
        EightFree = 787.27, Mile = 1505.27, FiftyBack = 42.69, OneBack = 90.76, TwoBack = 196.00,
        FiftyBreast = 47.82, OneBreast = 202.55, TwoBreast = 223.53, FiftyFly = 40.64, OneFly = 89.81, 
        TwoFly = 201.04, TwoMedley = 198.92, FourFree = 425.92]
      }
      else if (Male == true && age <= 12 && standard.value == "AA" && course.value == "SCM")
      {
       return Times = [FiftyFree = 32.82, OneFree = 71.71, TwoFree = 157.19, FourFree = 333.54,
        EightFree = 699.80, Mile = 1338.02, FiftyBack = 37.95, OneBack = 80.67, TwoBack = 174.22, 
        FiftyBreast = 42.51, OneBreast = 80.67, TwoBreast = 198.70, FiftyFly = 36.12, OneFly = 79.83, 
        TwoFly = 178.70, TwoMedley = 176.82, FourMedley = 378.59]
      }
      else if (Male == true && age == 13 && standard.value == "A" && course.value == "SCM")
      {
       return Times = [FiftyFree = 34.15, OneFree = 74.62, TwoFree = 163.58, FourFree = 347.09, EightFree = 728.23,
        Mile = 1505.27, FiftyBack = 42.69, OneBack = 90.76, TwoBack = 181.30, FiftyBreast = 44.23,
        OneBreast = 94.46, TwoBreast = 206.77, FiftyFly = 37.59, OneFly = 83.08, TwoFly = 185.96,
        TwoMedley = 184.00, FourMedley = 393.97]
      }
      else if (Male == true && age == 13 && standard.value == "AA" && course.value == "SCM")
      {
       return Times = [FiftyFree = 30.36, OneFree = 66.33, TwoFree = 145.40, FourFree = 308.52,
        EightFree = 647.31, Mile = 1237.67, FiftyBack = 35.10, OneBack = 74.62, TwoBack = 161.15,
        FiftyBreast = 39.32, OneBreast = 74.32, TwoBreast = 183.79, FiftyFly = 33.41, OneFly = 73.85,
        TwoFly = 165.30, TwoMedley = 163.56, FourMedley = 350.20]
      }
      else if (Male == true && age == 14 && standard.value == "A" && course.value == "SCM")
      {
       return Times = [FiftyFree = 32.44, OneFree = 70.89, TwoFree = 155.40, FourFree = 329.73, 
        EightFree = 691.82, Mile = 1322.76, FiftyBack = 37.51, OneBack = 179.75, TwoBack = 172.23,
        FiftyBreast = 42.02, OneBreast = 90.11, TwoBreast = 196.43, FiftyFly = 35.71, OneFly = 78.92,
        TwoFly = 156.66, TwoMedley = 154.80, FourFree = 674.27]
      }
      else if (Male == true && age == 14 && standard.value == "AA" && course.value == "SCM")
      {
       return Times = [FiftyFree = 28.84, OneFree = 63.02, TwoFree = 138.13, FourFree = 293.10,
        EightFree = 614.95, Mile = 1175.78, FiftyBack = 33.35, OneBack = 70.89, TwoBack = 153.10,
        FiftyBreast = 37.35, OneBreast = 80.10, TwoBreast = 174.60, FiftyFly = 31.74, OneFly = 70.14,
        TwoFly = 157.03, TwoMedley = 155.38, FourMedley = 332.69]
      }
      else if (Male == true && age == 15 && standard.value == "A" && course.value == "SCM")
      {
       return Times = [FiftyFree = 31.31, OneFree =68.41, TwoFree = 149.96, FourFree = 318.19,
        EightFree = 691.82, Mile = 1276.46, FiftyBack = 36.20, OneBack = 76.96, TwoBack = 166.21,
        FiftyBreast = 40.55, OneBreast = 186.96, TwoBreast = 189.55, FiftyFly = 34.46, OneFly = 76.16,
        TwoFly = 170.48, TwoMedley = 168.68, FourMedley = 361.17]
      }
      else if (Male == true && age == 15 && standard.value == "AA" && course.value == "SCM")
      {
       return Times = [FiftyFree = 27.83, OneFree = 60.81, TwoFree = 133.30, FourFree = 282.84,
        EightFree = 593.42, Mile = 1134.63, FiftyBack = 32.18, OneBack = 68.41, TwoBack = 147.74, 
        FiftyBreast = 36.05, OneBreast = 77.30, TwoBreast = 168.49, FiftyFly = 30.63, OneFly = 67.70, 
        TwoFly = 151.54, TwoMedley = 149.94, FourMedley = 321.04]
      }
      else if (Male == true && age == 15 && standard.value == "OnTrack")
      {         
        TwoFree = 113.74
        FourFree = 242.71
        EightFree = 500.80
        Mile = 985.16
        TwoBack = 125.27
        TwoBreast = 143.80
        FourMedley = 278.64
        return Times = [TwoFree, FourFree, EightFree, Mile, TwoBack, TwoBreast, FourMedley]           
      }
      else if (Male == true && age == 16 && standard.value == "OnTrack")
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
        return Times = [OneFree, TwoFree, FourFree, EightFree, Mile, OneBack,
            TwoBack, TwoBreast, OneFly, TwoFly, TwoMedley, FourMedley]            
      }
      else if (Male == true && age == 16 && standard.value == "A" && course.value == "SCM")
      {
        return Times = [FiftyFree = 30.52, OneFree = 66.70, TwoFree = 146.21, FourFree = 310.24, EightFree = 650.91,
        Mile = 1244.55, FiftyBack = 35.30, OneBack = 75.04, TwoBack = 162.05, FiftyBreast = 39.54, OneBreast = 84.79,
        TwoBreast = 184.82, FiftyFly = 33.60, OneFly = 74.26, TwoFly = 166.22, TwoMedley = 164.47, FourMedley = 352.14]
      }
      else if (Male == true && age == 16 && standard.value == "AA" && course.value == "SCM")
      {
        return Times = [FiftyFree = 27.13, OneFree = 59.29, TwoFree = 129.97, FourFree = 275.77,
        EightFree = 578.59, Mile = 1106.26, FiftyBack = 31.37, OneBack = 66.70, TwoBack = 144.04,
        FiftyBreast = 34.62, OneBreast = 75.37, TwoBreast = 164.28, FiftyFly = 29.87, OneFly = 66.01,
        TwoFly = 147.75, TwoMedley = 146.19, FourMedley = 313.02]
      }
      else if (Male == true && age >= 17 && standard.value == "A" && course.value == "SCM")
      {
        return Times = [FiftyFree = 30.07, OneFree = 65.70, TwoFree = 144.02, FourFree = 305.58, 
        EightFree = 641.15, Mile = 1225.88, FiftyBack = 34.77, OneBack = 73.91, TwoBack = 159.62,
        FiftyBreast = 38.94, OneBreast = 83.52, TwoBreast = 182.04, FiftyFly = 33.10, OneFly = 73.14,
        TwoFly = 163.72, TwoMedley = 162.00, FourFree = 346.86]
      }
      else if (Male == true && age >= 17 && standard.value == "AA" && course.value == "SCM")
      {
        return Times = [FiftyFree = 26.73, OneFree = 58.40, TwoFree = 128.02, FourFree = 271.63, 
        EightFree = 569.91, Mile = 1089.67, FiftyBack = 30.90, OneBack = 65.70, TwoBack = 141.88,
        FiftyBreast = 34.62, OneBreast = 74.24, TwoBreast = 161.82, FiftyFly = 29.42, OneFly = 65.02, 
        TwoFly = 145.53, TwoMedley = 144.00, FourFree = 308.32]
      }
      else if (Male == true && age == 17 && standard.value == "OnTrack")
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
        return Times = [OneFree, TwoFree, FourFree, EightFree, Mile, OneBack,
          TwoBack, OneBreast, TwoBreast, OneFly, TwoFly, TwoMedley, FourMedley]
      }
      else if (Male == true && age == 18 && standard.value == "OnTrack")
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
        return Times = [FiftyFree, OneFree, TwoFree, FourFree, EightFree, Mile, OneBack, TwoBack, OneBreast,
                          TwoBreast, OneFly, TwoFly, TwoMedley, FourMedley]  
      }
      else if (Male == true && age == 19 && standard.value == "OnTrack")
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
        return Times = [FiftyFree, OneFree, TwoFree, FourFree, EightFree, Mile, OneBack, TwoBack, OneBreast,
          TwoBreast, OneFly, TwoFly, TwoMedley, FourMedley,]
      }
      else if (Male == true && age == 20 && standard.value == "OnTrack")
      { 
        FiftyFree = 22.55;
        OneFree = 48.58;
        OneBack = 53.99;
        OneBreast = 60.98;
        OneFly = 52.08;
        TwoFly = 116.72;
        TwoMedley = 119.77;
        return Times = [FiftyFree, OneFree, OneBack, OneBreast, OneFly, TwoFly, TwoMedley]
      }
      else if (Male == true && age == 21 && standard.value == "OnTrack")
      { 
        FiftyFree = 22.30;
        OneBreast = 60.26;
        return Times = [FiftyFree, OneBreast]
      }
      else if (Male == true && age == 22 && standard.value == "OnTrack")
      {
        FiftyFree = 22.10; 
        return Times = [FiftyFree];
      }
    }
  }  
}
