import { Component, Input, OnInit } from '@angular/core';
import { StoreItemDTO } from 'app/shared/models/store-items.model';

@Component({
  selector: 'app-multiple-selector',
  templateUrl: './multiple-selector.component.html',
  styleUrls: ['./multiple-selector.component.scss']
})
export class MultipleSelectorComponent implements OnInit {

  constructor() { }

  @Input()
  SelectedItems: StoreItemDTO[] = [];

  @Input()
  NonSelectedItems: StoreItemDTO[] = [];

  ngOnInit(): void {
  
  }

  select(item: StoreItemDTO, index: number){
    this.SelectedItems.push(item);
    this.NonSelectedItems.splice(index, 1);
  }

  deselect(item: StoreItemDTO, index: number){
    this.NonSelectedItems.push(item);
    this.SelectedItems.splice(index, 1);
  }

  selectAll(){
    this.SelectedItems.push(...this.NonSelectedItems);
    this.NonSelectedItems = [];
  }

  deSelectAll(){
    this.NonSelectedItems.push(...this.SelectedItems);
    this.SelectedItems = [];
  }

}
