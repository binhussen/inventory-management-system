import { Component, Input, OnInit } from '@angular/core';
import {StoreItem} from '../../models/store.model';

@Component({
  selector: 'app-multiple-selector',
  templateUrl: './multiple-selector.component.html',
  styleUrls: ['./multiple-selector.component.scss'],
})
export class MultipleSelectorComponent implements OnInit {
  constructor() {}

  @Input()
  SelectedItems: StoreItem[] = [];

  @Input()
  NonSelectedItems: StoreItem[] = [];

  ngOnInit(): void {}

  select(item: StoreItem, index: number) {
    this.SelectedItems.push(item);
    this.NonSelectedItems.splice(index, 1);
  }

  deselect(item: StoreItem, index: number) {
    this.NonSelectedItems.push(item);
    this.SelectedItems.splice(index, 1);
  }

  selectAll() {
    this.SelectedItems.push(...this.NonSelectedItems);
    this.NonSelectedItems = [];
  }

  deSelectAll() {
    this.NonSelectedItems.push(...this.SelectedItems);
    this.SelectedItems = [];
  }
}
