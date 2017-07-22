import { CatalogoPage } from './catalogo';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
    declarations: [CatalogoPage],
    imports: [IonicPageModule.forChild(CatalogoPage)],
})
export class CatalogoPageModule { }