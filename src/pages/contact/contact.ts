import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  constructor(public navCtrl: NavController) {
    var name = document.getElementById("name") as HTMLInputElement      
    var min = document.getElementById("min") as HTMLInputElement
    var sec = document.getElementById("sec") as HTMLInputElement
    var hund = document.getElementById("hund") as HTMLInputElement
    console.log(name, min.value, sec.value, hund.value)
    var minutes = parseFloat(min.value.toString())
    var seconds = parseFloat(sec.value.toString())
    var hundredths = parseFloat(hund.value.toString())
}

}
