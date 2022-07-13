import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories:Category[]=[];
  constructor(private categoryservice:CategoryService ) { }

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories(){
    this.categoryservice.getCategories().subscribe(response=>{
      this.categories=response.data;

    })

  }

}
