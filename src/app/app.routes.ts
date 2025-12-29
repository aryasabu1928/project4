import { Routes } from '@angular/router';
import { Product } from './product/product';
import { Singleview } from './singleview/singleview';
import { Home } from './home/home';

export const routes: Routes = [
    {path:'product',component:Product},
    {path:'singleview/:titileid',component:Singleview},
    {path:'home',component:Home},
    {path:'',redirectTo:'home',pathMatch:'full'}
];
