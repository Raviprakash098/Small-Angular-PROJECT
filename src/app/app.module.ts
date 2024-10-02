import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateAClientComponent } from './create-a-client/create-a-client.component';
import { CreateAMettingSchdueleComponent } from './create-a-metting-schduele/create-a-metting-schduele.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateAClientComponent,
    CreateAMettingSchdueleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
