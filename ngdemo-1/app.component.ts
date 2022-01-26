import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interpolation Demo';
  
  //Numeric
  num1=9
  num2=30
  sum=0
  diff=0
  quo=0
  prod=0

  //String Interpolation
  appName = 'ADWEB Interpolation Demonstration!';
  
  //Property Binding
  clientName:boolean = false;

  //Style Binding
  appliedCSSClass="green";
  nonappliedCSSClass="false";
  myColor='red';

  //Two-way data binding demo

  showData($event:any){
    console.log("Button is Clicked!");
  }
  // Functions and using alert

  getMessage(msg:any)
  {
    alert(msg)
  }
  
  //Console Warning

  getMessage2(msg2:any)
  {
    console.warn(msg2)
  }

  //Console Warning
  
  getData(data:any)
  {
    console.warn(data)
  }

  //Using [(ngModel)]
  userName:string = "Enter your name:";
  
  
}
