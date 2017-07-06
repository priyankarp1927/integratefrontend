import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ConceptService} from '../app/service/concept.service';
import { DomainComponent} from '../app/domain/domain.component';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

model1: any;
model2: any;
conceptDomain : string;

constructor(private route: ActivatedRoute, private conceptService : ConceptService,
       private domainComponent : DomainComponent) {}

  ngOnInit() {
     this.route.params.subscribe(params =>{this.conceptDomain = params['domain']});
       
       this.route.params
        .switchMap((params: Params) =>
         this.conceptService.tofetch(params['domain']))
        .subscribe((concept ) => { this.conceptDomain = concept;
         //console.log("concept"+concept);
        });
      }

    concepts: string[] =
      ["this", "is", "array", "of", "text"];

        terms: string[] =
      ["this", "is", "array", "of", "text"];  
 
}

 




 //  Submit(value){
 //  	console.log("this is "+value);
 //    //this.conceptService.search(value).subscribe( a => this.concept = a);
 //    this.conceptService.searchTerm(value).subscribe( a => this.term = a);
 //    console.log("came back");
 //    //this.terms(value);
 //  }
 // terms(value)
 // {
 //   console.log("getting terms");
 //   this.conceptService.searchTerm(value).subscribe( a => this.term = a);
 // }


