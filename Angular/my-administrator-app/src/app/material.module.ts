import { NgModule } from "@angular/core";
import { 
  MatButtonModule, 
  MatTableModule,
  MatPaginatorModule   
} from "@angular/material";

import { 
  MatInputModule  
} from "@angular/material/input";

import {
  MatFormFieldModule
} from '@angular/material/form-field'; 

@NgModule ({
    imports: [
      MatButtonModule,
      MatTableModule,
      MatPaginatorModule,
      MatInputModule
    ],
    exports: [
      MatButtonModule,
      MatTableModule, 
      MatPaginatorModule,
      MatInputModule      
    ]
})
export class MaterialModule {

}