import { Component, OnInit } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'app-viewitem',
  templateUrl: './viewitem.component.html',
  styleUrls: ['./viewitem.component.css']
})
export class ViewitemComponent implements OnInit {
items:Item[]=[];
item:Item;
name:string;
img:string;
  constructor() { }

  ngOnInit() {
  }
  Upload()
  {
    this.item=new Item();
    this.item.name=this.name;
    this.item.img=this.img;
    console.log(this.item)
    this.items.push(this.item);
    location.

  }

}
