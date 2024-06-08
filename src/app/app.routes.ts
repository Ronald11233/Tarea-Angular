import { Routes } from '@angular/router';
import { CabeceraComponent } from './boot/cabecera/cabecera.component';
import { BodyComponent } from './boot/body/body.component';
import { FooterComponent } from './boot/footer/footer.component';
export const routes: Routes = [
    {
        path:'cabecera', component:CabeceraComponent
    },
    {
        path:'body',component:BodyComponent
    },
    {
        path:'footer',component:FooterComponent
    }
];
