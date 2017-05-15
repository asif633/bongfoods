import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../../../shared/models/menuitem.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() menuitem: MenuItem;

}
