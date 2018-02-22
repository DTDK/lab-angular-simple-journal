import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { JournalServicesService } from './services/journal-services.service';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SingleEntryComponent } from './components/single-entry/single-entry.component';

const routes: Routes = [
  { path: '', component: HomepageComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SingleEntryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [JournalServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
