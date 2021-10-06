import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.scss']
})
export class GenericListComponent implements OnInit {

  @Input()
  list;
  constructor() { }

  ngOnInit(): void {
  }

}
