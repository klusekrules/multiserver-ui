import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutesModule } from './app.routes.module';
import { AppComponent } from './app.component';
import { MovieModalComponent } from './movie/movie-modal/movie-modal.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { RegisterComponent } from './register/register.component';
import { ReposComponent } from './repos/repos.component';
import { ReposAddModalComponent } from './repos-add-modal/repos-add-modal.component';
import { ToastModule } from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { UtilsModule } from './utils/utils.module';
import { ReposService } from './repos.service';
import { MegaMenuModule } from 'primeng/megamenu';

@NgModule({
  declarations: [
    AppComponent,
    MovieModalComponent,
    LoginComponent,
    RegisterComponent,
    ReposComponent,
    ReposAddModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutesModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    CardModule,
    ToastModule,
    DynamicDialogModule,
    UtilsModule,
    TableModule,
    MegaMenuModule,
  ],
  providers: [
    ReposService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
