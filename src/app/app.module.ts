import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {HttpClientModule} from "@angular/common/http";
import {NeptunesPrideService} from "./services/neptunes-pride.service";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";
import { MathComponent } from './components/math/math.component';
import { PlayerComponent } from './components/player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    MathComponent,
    PlayerComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        DragDropModule,
        HttpClientModule,
        MatCardModule,
        MatListModule,
        MatGridListModule
    ],
  providers: [NeptunesPrideService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
