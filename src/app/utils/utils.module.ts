import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './topbar/topbar.component';
import { MenuComponent } from './menu/menu.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { ConfigService } from './config.service';
import { RestService } from './rest.service';
import { DictionariesService } from './dictionaries.service';
import { SecurityService } from './security.service';

@NgModule({
  declarations: [
    TopbarComponent,
    MenuComponent,
    UserMenuComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ConfigService,
    RestService,
    DictionariesService,
    SecurityService,
  ],
})
export class UtilsModule { }
