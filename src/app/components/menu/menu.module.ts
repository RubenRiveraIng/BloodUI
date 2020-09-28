import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { MenuPageRoutingModule } from './menu-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuPage } from './menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
