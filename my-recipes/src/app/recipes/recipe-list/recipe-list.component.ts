import { Component, OnInit } from '@angular/core';

import {Recipe} from '../recipe-model';
import {DataStorageService} from '../../shared/data-storage.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[]=[
  /*  new Recipe("A test recipe","Simply a test","https://i.imgur.com/fMdnwbd.jpg%22"),
    new Recipe("Second test recipe","Simply a test","https://i.imgur.com/fMdnwbd.jpg%22"),
    new Recipe("Third test recipe","Simply a test","https://i.imgur.com/fMdnwbd.jpg%22")*/
  ]

  constructor( private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
    this.dataStorageService.sendGetRequest('recipes').subscribe((data:any[]) => {
      console.log(data);
      this.recipes=data;
     })
  }

}