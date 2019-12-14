import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule,
   MatIconModule, MatListModule, MatFormFieldModule, MatRadioModule } from '@angular/material';
import { TasLoginModule } from './login/login.module';
import { DisplayInfoComponent } from './display-info/display-info.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    SideNavigationComponent,
    DisplayInfoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    TasLoginModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    CommonModule ,
    MatRadioModule,
    ToastrModule.forRoot(),
    MatCardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
