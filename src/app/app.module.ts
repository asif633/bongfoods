import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { routes } from './app.routes';
import { SigninComponent } from './sign/signin/signin.component';
import { SignupComponent } from './sign/signup/signup.component';
import { SignContainerComponent } from './sign/sign-container/sign-container.component';
import { FrontpageComponent } from './user/frontpage/frontpage.component';
import { SearchFormComponent } from './user/frontpage/search-form/search-form.component';
import { CityService } from './shared/models/city.service';
import { AreaService } from './shared/models/area.service';
import { MenupageComponent } from './user/menupage/menupage.component';
import { MenuItemComponent } from './user/menupage/menu-item/menu-item.component';
import { CartAreaComponent } from './user/menupage/cart-area/cart-area.component';
import { MenuCategoryService } from './shared/models/menucategory.service';
import { FranchiseFormComponent } from './user/franchise-form/franchise-form.component';
import { SlotChooseComponent } from './user/slot-choose/slot-choose.component';
import { AddressListComponent } from './user/address-list/address-list.component';
import { AddressComponent } from './user/address/address.component';
import { AddressFormComponent } from './user/address-form/address-form.component';
import { BeforeOrderComponent } from './user/before-order/before-order.component';
import { CitiesTableComponent } from './admin/cities-table/cities-table.component';
import { CityFormComponent } from './admin/city-form/city-form.component';
import { AreasTableComponent } from './admin/areas-table/areas-table.component';
import { AreaFormComponent } from './admin/area-form/area-form.component';
import { TimeslotsTableComponent } from './admin/timeslots-table/timeslots-table.component';
import { TimeslotFormComponent } from './admin/timeslot-form/timeslot-form.component';
import { MenutypesTableComponent } from './admin/menutypes-table/menutypes-table.component';
import { MenutypeFormComponent } from './admin/menutype-form/menutype-form.component';
import { MenucategoriesTableComponent } from './admin/menucategories-table/menucategories-table.component';
import { MenucategoryFormComponent } from './admin/menucategory-form/menucategory-form.component';
import { MenuitemsTableComponent } from './admin/menuitems-table/menuitems-table.component';
import { MenuitemFormComponent } from './admin/menuitem-form/menuitem-form.component';
import { MenuTypeService } from './shared/models/menutype.service';
import { MenuItemService } from './shared/models/menuitem.service';
import { TimeSlotService } from './shared/models/timeslot.service';
import { CityAreaContainerComponent } from './admin/city-area-container/city-area-container.component';
import { TimeslotContainerComponent } from './admin/timeslot-container/timeslot-container.component';
import { MenuTypeCategoryItemContainerComponent } from './admin/menu-type-category-item-container/menu-type-category-item-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    SignContainerComponent,
    FrontpageComponent,
    SearchFormComponent,
    MenupageComponent,
    MenuItemComponent,
    CartAreaComponent,
    FranchiseFormComponent,
    SlotChooseComponent,
    AddressListComponent,
    AddressComponent,
    AddressFormComponent,
    BeforeOrderComponent,
    CitiesTableComponent,
    CityFormComponent,
    AreasTableComponent,
    AreaFormComponent,
    TimeslotsTableComponent,
    TimeslotFormComponent,
    MenutypesTableComponent,
    MenutypeFormComponent,
    MenucategoriesTableComponent,
    MenucategoryFormComponent,
    MenuitemsTableComponent,
    MenuitemFormComponent,
    CityAreaContainerComponent,
    TimeslotContainerComponent,
    MenuTypeCategoryItemContainerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [CityService, AreaService, MenuCategoryService, MenuTypeService, MenuItemService, TimeSlotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
