import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card'
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,  BrowserAnimationsModule,MatCardModule,FormsModule ,MatTableModule,MatButtonModule,ReactiveFormsModule
  ],

  exports:[  BrowserAnimationsModule,MatCardModule,MatInputModule,FormsModule,MatTableModule,MatCheckboxModule,MatButtonModule,ReactiveFormsModule]
})
export class SharedModule { }
