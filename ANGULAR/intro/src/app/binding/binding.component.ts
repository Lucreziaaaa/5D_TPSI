import { Component } from '@angular/core';

@Component({
  selector: 'binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  numTests: number=25;//variabile usata per prova interpolazione
  car={
    model:"Alfa Romeo Giulia",
    //non copip l'immagine ma copio l'indirizzo
    img:"data:image/jpeg;base64,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",
    available:false
  }//oggetto usato per prova proprietà vincolanti


  //variabili utilizzate per la propretà vincolante class
  myclass:string="red";
  setBlueClass:boolean=false;

  //variabili per direttiva ngClass
  componentClasses={
    show:true,
    warning:false
  }
  formOK:boolean=false;
  admin:boolean=false;

  //oggetto per direttiva ngStyle
  componentStyle={
    'width':'300px',
    'height.px':100,
    'backgroundColor':'forestgreen'
  }

  //variabile utilizzata per two-way binding con [(ngModel)]
  textSize:number=20;
  username:string="";
  voto:number=6;

  //vettore utilizzato per la direttiva ngFor
  ingredients=[
    'avocado',
    'pomodoro',
    'riso',
    'speck',
    'ceci',
    'pepe',
    'tonno'
  ]


  getClick(){
    console.log("btn clicked");
    this.car.available=!this.car.available;
    this.setBlueClass=!this.setBlueClass;
    this.myclass="blue";
    this.formOK=!this.formOK;
    this.admin=!this.admin;
  }

  inviaDati(){
    console.log("nome utente inserito: "+ this.username);
  }
  getColor(){
    if(this.voto>=6){
      return "lightgreen";
    }else{
      return "red";
    }
  }
  delete(item:string){
    this.ingredients=this.ingredients.filter(function (element){
      return element!=item;//modifica ingredients
    });
  }
}

