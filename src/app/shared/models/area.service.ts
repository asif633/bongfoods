import { Injectable } from '@angular/core';
import { Area } from './area.model';

export class AreaService{

    constructor(){
        this.areas = [
            {name: 'Kalkaji Mandir, New Delhi'},
            {name: 'JNU'},
            {name: 'Jasola'},
            {name: 'Noida Sector 63'}
        ]
    }

    areas: Area[];

}