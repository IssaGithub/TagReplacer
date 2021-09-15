import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagREplacerRoutingModule } from './tag-replacer-routing.module';
import { TagReplacerComponent } from './tag-replacer/tag-replacer.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TagReplacerComponent
  ],
  imports: [
    CommonModule,
    TagREplacerRoutingModule,SharedModule
  ],
  exports:[TagReplacerComponent]
})
export class TagREplacerModule { }
