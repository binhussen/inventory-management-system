import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  Form,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { StoreHeader } from '../../../shared/models/store.model';
import {CompanyService} from '../../../shared/services/company.service';
import {Company} from '../../../shared/models/company.model';

@Component({
  selector: 'app-store-form',
  templateUrl: './store-form.component.html',
  styleUrls: ['./store-form.component.scss'],
})
export class StoreFormComponent implements OnInit {
  visible = false;
  company: Company[];

  form = this.formBuilder.group({
    supplierId: [''],
    graNo: ['', Validators.required],
    storeItems: this.formBuilder.array([]),
  });
  @Input()
  model: StoreHeader;

  @Output()
  onSaveChanges: EventEmitter<StoreHeader> = new EventEmitter<StoreHeader>();

  constructor(private formBuilder: FormBuilder, private companyService: CompanyService ) {}

  ngOnInit() {
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
    this.companyService.getAll().subscribe((company) => {
          this.company = company;
        }
    );
  }

  saveChanges() {
    this.onSaveChanges.emit(this.form.value);
  }

  get storeItems() {
    return this.form.controls['storeItems'] as FormArray;
  }

  addItem() {
    const storeItems = this.formBuilder.group({
      name: ['', [Validators.required]],
      itemSpecification: ['', [Validators.required]],
      unit: ['', [Validators.required]],
      qtyOrdered: ['', [Validators.required, Validators.min(1)]],
      qtyReceived: ['', [Validators.required, Validators.min(1)]],
      unitPrice: ['', [Validators.required, Validators.min(1)]],
    });
    this.storeItems.push(storeItems);
    this.visible = true;
  }

  deleteItem(Index: number) {
    this.storeItems.removeAt(Index);
    if (this.storeItems.length == 0) {
      this.visible = false;
    }
  }
}
