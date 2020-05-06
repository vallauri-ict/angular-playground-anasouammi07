import { Component, OnInit, ElementRef,EventEmitter, ViewChild, Output } from '@angular/core';
//import { EventEmitter } from 'events';
import {Ingredient} from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  @Output() ingredientAdded=new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddItem(){
    const ingName:string = this.nameInputRef.nativeElement.value;
    const ingAmount:number = this.amountInputRef.nativeElement.value;
    const newIngredient: Ingredient= new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient); //metto l'evento contenente il nuovo ingrediente così shopping list può prenderselo
  }
}
