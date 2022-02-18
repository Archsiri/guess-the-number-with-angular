import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
 
  vidas: number = 3;
  numInput: number = 1;
  numRandom = Math.floor(Math.random() * 20) + 1;
  derrota: boolean = false;
  victoria: boolean = false;
  msg:string = "";

  intentarAdivinar(){
    if(this.numInput === this.numRandom && this.vidas>0){
      this.derrota = false;
      this.msg = "Victory";
      this.victoria = true;
    }
    if(this.numInput !== this.numRandom && this.vidas>0){
      this.vidas -= 1;
      this.msg = "Try Again!"
    }
    if(this.numInput !== this.numRandom && this.vidas===0){
      this.msg = "Tray Again! the number was "+this.numRandom;
      this.derrota = true;

    }
  }

  deNuevo(){
    this.vidas = 3;
    this.numInput = 1;
    this.derrota = false;
    this.victoria = false;
    this.msg = "";
  }
}
