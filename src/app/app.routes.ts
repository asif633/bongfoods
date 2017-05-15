import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignContainerComponent } from './sign/sign-container/sign-container.component';
import { FrontpageComponent } from './user/frontpage/frontpage.component';
import { MenupageComponent } from './user/menupage/menupage.component';
import { FranchiseFormComponent } from './user/franchise-form/franchise-form.component';
import { BeforeOrderComponent } from './user/before-order/before-order.component';
import { CityAreaContainerComponent } from './admin/city-area-container/city-area-container.component';
import { TimeslotContainerComponent } from './admin/timeslot-container/timeslot-container.component';
import { MenuTypeCategoryItemContainerComponent } from './admin/menu-type-category-item-container/menu-type-category-item-container.component';

const appRoutes: Routes = [
    {path: '', component: AppComponent, children: [
        {path: '', component: NavbarComponent, children: [
            {path: '', component: FrontpageComponent},
            {path: 'sign', component: SignContainerComponent},
            {path: 'menu', component: MenupageComponent},
            {path: 'franchise', component: FranchiseFormComponent},
            {path: 'beforeorder', component: BeforeOrderComponent},
            {path: 'cityarea', component: CityAreaContainerComponent},
            {path: 'timeslot', component: TimeslotContainerComponent},
            {path: 'menurelated', component: MenuTypeCategoryItemContainerComponent},
            // {path: 'signup', component: SignupComponent},
            // {path: 'signedup', component: SignedupComponent},
            // {path: 'lawyercase', component: LawyercaseContainerComponent, canActivate: [AuthGuard]},
            // {path: 'case', component: CaseContainerComponent, canActivate: [AuthGuard]},
            // {path: 'client', component: ClientContainerComponent, canActivate: [AuthGuard]}
        ]}
    ]}
];

export const routes = RouterModule.forRoot(appRoutes,{useHash: false}); 
