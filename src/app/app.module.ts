import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { InputComponent } from './cmps/input/input.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactFilterComponent } from './cmps/contact-filter/contact-filter.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { SideNavComponent } from './cmps/side-nav/side-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { TransferFundsComponent } from './cmps/transfer-funds/transfer-funds.component';
import { TransactionPreviewComponent } from './cmps/transaction-preview/transaction-preview.component';
import { TransactionListComponent } from './cmps/transaction-list/transaction-list.component';
import { StatsComponent } from './pages/stats/stats.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AvgMonthChartComponent } from './cmps/avg-month-chart/avg-month-chart.component';
import { MarketPriceChartComponent } from './cmps/market-price-chart/market-price-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactPageComponent,
    ContactEditPageComponent,
    ContactDetailsPageComponent,
    InputComponent,
    ContactPreviewComponent,
    ContactListComponent,
    ContactFilterComponent,
    AppHeaderComponent,
    SideNavComponent,
    LoginSignupComponent,
    TransferFundsComponent,
    TransactionPreviewComponent,
    TransactionListComponent,
    StatsComponent,
    AvgMonthChartComponent,
    MarketPriceChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
