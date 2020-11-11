import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlumbingServicesComponent } from './plumbing-services/plumbing-services.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PlumbingServicesDublinComponent } from './services/plumbing-services-dublin/plumbing-services-dublin.component';
import { BoilerInstallationComponent } from './services/boiler-installation/boiler-installation.component';
import { LeakDetectionComponent } from './services/leak-detection/leak-detection.component';
import { HeatingServicesComponent } from './services/heating-services/heating-services.component';
import { ServicesFooterComponent } from './services/common/services-footer/services-footer.component';
import { ServicesMainComponent } from './services/common/services-main/services-main.component';
import { ServicesSidebarComponent } from './services/common/services-sidebar/services-sidebar.component';
import { AreasComponent } from './areas/areas.component';
import { FaqsComponent } from './faqs/faqs.component';
import { EmergencyPlumbingPricesComponent } from './emergency-plumbing-prices/emergency-plumbing-prices.component';
import { AboutUsComponent } from './common/about-us/about-us.component';
import { ContactDublinPlumberComponent } from './contact-dublin-plumber/contact-dublin-plumber.component';
import { PlumberSwordsComponent } from './areas/plumber-swords/plumber-swords.component';
import { NonEmergencyPlumbingPricesComponent } from './non-emergency-plumbing-prices/non-emergency-plumbing-prices.component';
import { CommonComponent } from './common/common.component';
import { FooterComponent } from './common/footer/footer.component';
import { ContactQuoteFormComponent } from './common/contact-quote-form/contact-quote-form.component';


//Contentful:
// import the new Contentful service
import { ContentfulService } from './contentful.service/contentful.service';


//Markdown
import { NgxMdModule } from 'ngx-md';
//import { HttpClientModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BlogComponent } from './blog/blog.component';


@NgModule({
  declarations: [
    AppComponent,
    PlumbingServicesComponent,
    HomeComponent,
    ServicesComponent,
    PlumbingServicesDublinComponent,
    BoilerInstallationComponent,
    LeakDetectionComponent,
    HeatingServicesComponent,
    ServicesFooterComponent,
    ServicesMainComponent,
    ServicesSidebarComponent,
    AreasComponent,
    FaqsComponent,
    EmergencyPlumbingPricesComponent,
    AboutUsComponent,
    ContactDublinPlumberComponent,
    PlumberSwordsComponent,
    NonEmergencyPlumbingPricesComponent,
    CommonComponent,
    FooterComponent,
    ContactQuoteFormComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //Markdown
    HttpClientModule,
    NgxMdModule.forRoot(),
    
  ],
  providers: [ContentfulService],
  bootstrap: [AppComponent]
})
export class AppModule { }
