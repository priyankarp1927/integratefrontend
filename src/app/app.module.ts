import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MdAutocompleteModule} from '@angular/material';
import { HttpModule } from '@angular/http';
import { FormControl, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppComponent } from './app.component';
import { DomainComponent } from './domain/domain.component';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { ConceptService} from './service/concept.service';
import { SwisitMaterialModule } from './swisit-material.module';
import { AppRouterModule } from './approuter.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
     DomainComponent , 
    SearchbarComponent,

       ],
  imports: [MdAutocompleteModule,
   BrowserModule,
   HttpModule ,
   ReactiveFormsModule,
   SwisitMaterialModule,
   AppRouterModule,
   FlexLayoutModule,
   FormsModule
 
      ],  
    providers: [ ConceptService],
  bootstrap: [AppComponent]
})
export class AppModule { }
