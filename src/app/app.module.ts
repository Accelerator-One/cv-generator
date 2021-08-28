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
import { MatListModule } from '@angular/material/list';
import { GradeTypePipe } from './shared/pipes/grade-type.pipe';
import { MatButtonModule } from '@angular/material/button';
import { DialogComponent } from './cmp/dialog/dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RmPanelComponent } from './shared/rm-panel/rm-panel.component';
import { HoverEditComponent } from './shared/hover-edit/hover-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    IntroComponent,
    AboutComponent,
    LeftComponent,
    RightComponent,
    GradeTypePipe,
    DialogComponent,
    RmPanelComponent,
    HoverEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
