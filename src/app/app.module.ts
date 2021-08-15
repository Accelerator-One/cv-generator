import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ProfileComponent } from './cmp/profile/profile.component';
import { IntroComponent } from './cmp/intro/intro.component';
import { AboutComponent } from './cmp/about/about.component';
import { LeftComponent } from './cmp/left/left.component';
import { RightComponent } from './cmp/right/right.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    IntroComponent,
    AboutComponent,
    LeftComponent,
    RightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
