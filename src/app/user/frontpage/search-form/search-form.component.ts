import { Component, OnInit } from '@angular/core';
import { City } from '../../../shared/models/city.model';
import { Area } from '../../../shared/models/area.model';
import { CityService } from '../../../shared/models/city.service';
import { AreaService } from '../../../shared/models/area.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  constructor(private cityServ: CityService, private areaServ: AreaService) { }

  ngOnInit() {
    this.cities = this.cityServ.cities;
    this.areas = this.areaServ.areas;
  }

  cities: City[];
  areas: Area[];

}
