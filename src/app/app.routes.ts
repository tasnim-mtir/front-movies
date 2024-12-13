import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ResultsComponent } from './results/results.component';

export const routes: Routes = [

    {path: '',component:HomepageComponent},
    {path: 'result',component:ResultsComponent},


];
