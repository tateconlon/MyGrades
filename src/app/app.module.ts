import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatButtonToggleModule, MatCheckboxModule, MatSliderModule, MatDialogModule} from '@angular/material';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AssnSliderComponent } from './assn-slider/assn-slider.component';
import { CourseCompComponent } from './course-comp/course-comp.component';
import { AssnDialogueComponent } from './assn-dialogue/assn-dialogue.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    AssnSliderComponent,
    CourseCompComponent,
    AssnDialogueComponent
    ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatCheckboxModule,
    MatDialogModule,
    FormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AssnDialogueComponent]
})
export class AppModule { }
