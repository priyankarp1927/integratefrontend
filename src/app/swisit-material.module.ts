import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line:max-line-length
import { MdGridListModule , MdButtonModule, MdCheckboxModule,
         MdMenuModule, MdToolbarModule, MdIconModule, MdInputModule,
         MdAutocompleteModule, MdOptionModule,
        MdCardModule, MdProgressSpinnerModule,MdChipsModule} from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';        

@NgModule({
  imports: [
    MdAutocompleteModule,
    CommonModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdCheckboxModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdGridListModule,
    MdOptionModule,
    MdProgressSpinnerModule,
    MdChipsModule,
    NoopAnimationsModule
  ],
  exports: [
    MdAutocompleteModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdInputModule,
    MdCheckboxModule,
    MdGridListModule,
    MdOptionModule,
    MdProgressSpinnerModule,
    MdChipsModule,
    NoopAnimationsModule     
    ],
  declarations: []
})
export class SwisitMaterialModule { }