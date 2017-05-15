import { Injectable } from '@angular/core';
import { City } from './city.model';

export class CityService{

    constructor(){
        this.cities = [
            {name: 'Delhi'},
            {name: 'Mumbai'},
            {name: 'Kolkata'},
            {name: 'Bengaluru'}
        ]
    }

    cities: City[];

}