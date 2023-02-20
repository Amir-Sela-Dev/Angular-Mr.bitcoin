import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactResolver } from './services/contact.resolver';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  {
    path: 'contact', component: ContactPageComponent
  },
  { path: 'contact/edit', component: ContactEditPageComponent },
  { path: 'contact/edit/:id', component: ContactEditPageComponent, resolve: { contact: ContactResolver } },

  {
    path: 'contact/:id', component: ContactDetailsPageComponent, resolve: { contact: ContactResolver }
  },
  { path: 'stats', component: ContactEditPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
