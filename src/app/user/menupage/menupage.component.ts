import { Component, OnInit } from '@angular/core';
import { MenuCategoryService } from '../../shared/models/menucategory.service';
import { MenuCategory } from '../../shared/models/menucategory.model';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.scss']
})
export class MenupageComponent implements OnInit {

  constructor(private menuCatServ: MenuCategoryService) { }

  ngOnInit() {
    this.menucategories = this.menuCatServ.menucategories;
  }

  menucategories: MenuCategory[];

}
