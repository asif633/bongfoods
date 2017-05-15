import { Injectable } from '@angular/core';
import { MenuCategory } from './menucategory.model';

export class MenuCategoryService{

    constructor(){
        this.menucategories = [
            {name: 'Thalis' , menuitems: [ {name: 'Thali 1', price: '100' },{name: 'Thali 1', price: '100' }, {name: 'Thali 2', price: '100' } ]},
            {name: 'Chickens' , menuitems: [ {name: 'Thali 1', price: '100' },{name: 'Chicken 1', price: '100' }, {name: 'Chicken 2', price: '100' } ]},
            {name: 'Desserts', menuitems: [ {name: 'Thali 1', price: '100' },{name: 'Desserts 1', price: '100' }, {name: 'Dessert 2', price: '100' } ]},
        ]
    }

    menucategories: MenuCategory[];

}