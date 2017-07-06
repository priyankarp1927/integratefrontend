import { Component, OnInit } from '@angular/core';
import { Router , Params } from '@angular/router';
//import { Logger } from "angular2-logger/core";

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent   {
a:number;
b:number;

 constructor(private router: Router) {
 	 this.b=1;
 	 }
  clickondomain(domain : string)
{
	
	 console.log(domain);
	this.router.navigate(['app-searchbar', domain]);
	this.a=1;
	console.log(domain);
	 this.b=0;
}


}