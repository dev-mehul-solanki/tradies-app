import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { TradiesComponent } from './pages/tradies/tradies.component';
import { CommunitiesComponent } from './pages/communities/communities.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { HeaderComponent } from './common-component/header/header.component';
import { StoreModule } from '@ngrx/store';
import { tradeReducer, tradiesReducer } from './store/trade.reducer';
import { FormattedArrayPipe } from './pipes/formatted-array.pipe';
import { KeyValueFormatPipe } from './pipes/key-value-format.pipe';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JobsComponent,
    TradiesComponent,
    CommunitiesComponent,
    NotificationsComponent,
    HeaderComponent,
    FormattedArrayPipe,
    KeyValueFormatPipe,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({ trades: tradeReducer, tradies: tradiesReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
