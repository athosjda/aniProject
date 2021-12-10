import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { EpisodesComponent } from './search/episodes/episodes.component';
import { NavbarComponent } from './elements/navbar/navbar.component';
import { AnimeComponent } from './search/anime/anime.component';
import { AnimeResultComponent } from './search/anime-result/anime-result.component';

@NgModule({
  declarations: [
    AppComponent,
    EpisodesComponent,
    NavbarComponent,
    AnimeComponent,
    AnimeResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DatePipe, AnimeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }