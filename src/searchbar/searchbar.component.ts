import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ConceptService} from '../app/service/concept.service';
import { DomainComponent} from '../app/domain/domain.component';
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import {MdAutocompleteModule} from '@angular/material';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
	
  conceptCtrl : FormControl;
  termCtrl : FormControl;
  
  filteredConcepts : any;
  filteredDomain: any;
  filteredTerm : any;
  concept: String[];
  term: String[];
  conceptDomain  : string;

// domain = [
//     'Java',
//     'Python',
//     'Perl',
//     'Angular',
//     'C',
//     'C++'
//     ];
    concepts= [
    'Java',
    'Python',
    'Perl',
    'Angular',
    'C',
    'C++'
    ];

// terms = [
//     'Java',
//     'Python',
//     'Perl',
//     'Angular',
//     'C',
//     'C++'
//     ];


constructor(private route: ActivatedRoute, private conceptService : ConceptService,
       private domainComponent : DomainComponent) {
/*
        this.domainCtrl = new FormControl();
    this.filteredDomain = this.domainCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterDomain(name));
*/
    this.conceptCtrl = new FormControl();
    this.filteredConcepts = this.conceptCtrl.valueChanges
        .startWith(null)
        .map(name => this.filterConcepts(name));
      

    //  this.termCtrl = new FormControl();
    // this.filteredTerm = this.termCtrl.valueChanges
    //     .startWith(null)
    //     .map(name => this.filterTerm(name));
     

        
      }
   

  ngOnInit() {
     this.route.params.subscribe(params =>{this.conceptDomain = params['domain']});
     // this.route.params
     //    .switchMap((params: Params) =>
     //     this.conceptService.getConcept(params['domain']))
     //    .subscribe((concept ) => { this.conceptDomain = concept;
     //     //console.log("concept"+concept);
     //    });
 }


/*
   filterDomain(val: string) {
    return val ? this.domain.filter(s => s.toLowerCase().indexOf(val.toLowerCase()) === 0)
               : this.domain;
  }
*/
  filterConcepts(val: string) {
    //return val;
     return val ? this.concepts.filter(s => s.toLowerCase().indexOf(val.toUpperCase()) === 0)
                : this.concepts;
  }

  // filterTerm(val: string) {
  //   //return val;
  //    return val ? this.terms.filter(s => s.toLowerCase().indexOf(val.toUpperCase()) === 0)
  //               : this.terms;
  // }


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

}
