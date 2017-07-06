import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
@Injectable()
export class ConceptService{

  constructor(private http : Http) { }

 tofetch(domain : string)
 { 
   console.log("domainToFetch");
     return this.http.get('http://localhost:8080/v1/api/movie')
   .map((response) => response.json() || []);
   //console.log("aaaaaaaa"+domain);
   //return Observable.of(domain);
 }  


  search(value:String){
  		console.log("inside service " +value);
  	 let url = 'http://localhost:8080/word';
  	 let encoded_data=value;
          let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
return this.http.post(url, encoded_data , options).map((res)=> res.json() || []);
	}

	searchTerm(value){
		console.log("inside service term");
  	 let url = 'http://localhost:8080/word/terms';
  	 let encoded_data=value;
          let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
return this.http.post(url,encoded_data, options).map((res)=> res.json() || []);	
	}

 
}