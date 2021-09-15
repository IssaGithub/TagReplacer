import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Tags } from 'src/app/shared/models/tags.model';

@Component({
  selector: 'tagReplacer',
  templateUrl: './tag-replacer.component.html',
  styleUrls: ['./tag-replacer.component.scss']
})
export class TagReplacerComponent implements OnInit {

  private inputText = "";
  private outputText = "";
  private tags:Tags[]=[{tag:"{sdfsd}",replacement:"test"}];

  displayedColumns: string[] = ['select','tag','replacement'];
  dataSource = new MatTableDataSource<Tags>(this.Tags);
  selection = new SelectionModel<Tags>(true, []);

  constructor() { }

  get InputText(){
    return this.inputText;
  }

  set InputText(value:any){
    this.inputText = value;
  }

  get OutputText(){
    return this.outputText;
  }
  set OutputText(value:any){
    this.inputText = value;
  }

  get Tags(){
    return this.tags;
  }
  set Tags(value:any){
    this.tags.push(value)
  }
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Tags): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.tag }`;
  }

  ngOnInit(): void {
  }

}
