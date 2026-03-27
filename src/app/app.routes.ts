import { Routes } from '@angular/router';
import { DiamondListPageComponent } from './components/smart/diamond-list-page/diamond-list-page.component';
import { DiamondDetailPageComponent } from './components/smart/diamond-detail-page/diamond-detail-page.component';

export const routes: Routes = [
    {path: 'diamonds', component: DiamondListPageComponent},//route qui dirige vers la liste des diamants
    {path: 'diamonds/show/:diamsID',component: DiamondDetailPageComponent},//route qui dirige vers la vue details contenant un parametre dynamique 
    {path: '', redirectTo : 'diamonds', pathMatch: 'full'}, //route par defaut qui pointe vers la liste des diamants
];
