import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from "@angular/forms";
@Component({
  selector: 'app-viewitem',
  templateUrl: './viewitem.component.html',
  styleUrls: ['./viewitem.component.css']
})
export class ViewitemComponent implements OnInit {
  itemForm:FormGroup;
  submitted=false;
  constructor(private builder:FormBuilder) { }

  ngOnInit() {
    this.itemForm=this.builder.group({
      id:[''],
      name:[''],
      price:[''],
      stock:['']
    });
  }
  get f() { return this.itemForm.controls; }

  onSubmit() {
      this.submitted = true;
      alert(this.itemForm.value["id"])
  }

  onReset() {
      this.submitted = false;
      this.itemForm.reset();
  }

}
