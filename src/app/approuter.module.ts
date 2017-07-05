import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { DomainComponent } from './domain/domain.component';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { ConceptService} from './service/concept.service';
import { FormControl, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SwisitMaterialModule } from './swisit-material.module';

const routes:Routes=[{path:'app-searchbar/:domain',component:SearchbarComponent}];

@NgModule({
    
      imports: [BrowserModule, SwisitMaterialModule,ReactiveFormsModule,
      		    RouterModule.forRoot(routes)],
      providers: [ ConceptService ],
      exports: [BrowserModule, SwisitMaterialModule,ReactiveFormsModule,
      			 RouterModule]
})


export class AppRouterModule 
{
 }
