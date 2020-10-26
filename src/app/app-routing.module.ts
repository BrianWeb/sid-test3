import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

//Services:
import { PlumbingServicesComponent } from './plumbing-services/plumbing-services.component';
import { BoilerInstallationComponent } from './services/boiler-installation/boiler-installation.component';
import { HeatingServicesComponent } from './services/heating-services/heating-services.component';
import { LeakDetectionComponent } from './services/leak-detection/leak-detection.component';
import { PlumbingServicesDublinComponent } from './services/plumbing-services-dublin/plumbing-services-dublin.component';

//Areas:
import { AreasComponent } from './areas/areas.component';  
import { PlumberSwordsComponent } from './areas/plumber-swords/plumber-swords.component';  

//Rates:
import { EmergencyPlumbingPricesComponent } from './emergency-plumbing-prices/emergency-plumbing-prices.component';
import { NonEmergencyPlumbingPricesComponent } from './non-emergency-plumbing-prices/non-emergency-plumbing-prices.component';

//Contact:
import { ContactDublinPlumberComponent } from './contact-dublin-plumber/contact-dublin-plumber.component';

//About:
import { AboutUsComponent } from './common/about-us/about-us.component';



const routes: Routes = [

  //Services:
  { path: 'plumbing-services', component: PlumbingServicesComponent },
  { path: 'services/boiler-installation', component: BoilerInstallationComponent },
  { path: 'services/leak-detection', component: LeakDetectionComponent  },
  { path: 'services/plumbing-services-dublin', component: PlumbingServicesDublinComponent  },
  { path: 'services/heating-services', component: HeatingServicesComponent },

  //Areas:
  { path: 'areas', component: AreasComponent },
  { path: 'areas/plumber-swords', component: PlumberSwordsComponent },

  //Rates
  { path: 'emergency-plumbing-prices', component: EmergencyPlumbingPricesComponent },
  { path: 'non-emergency-plumbing-prices', component: NonEmergencyPlumbingPricesComponent },

  //Contact
  { path: 'contact-dublin-plumber', component: ContactDublinPlumberComponent },

  //About
  { path: 'about-us', component: AboutUsComponent },

  { path: 'home', component: HomeComponent },

  { path: '**', component: HomeComponent }


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
