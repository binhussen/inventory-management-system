import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-load-list",
  templateUrl: "./load-list.component.html",
  styleUrls: ["./load-list.component.scss"],
})
export class LoadListComponent implements OnInit {
  @Input() list;
  constructor() {}

  ngOnInit(): void {}
}
