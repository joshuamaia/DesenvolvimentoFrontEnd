import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SenadoresComponent } from './senadores/senadores.component';
import { DespesaSenadoresComponent } from './despesa-senadores/despesa-senadores.component';
import { TiposPipe } from './tipos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    RodapeComponent,
    SenadoresComponent,
    DespesaSenadoresComponent,
    TiposPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt',
    },

    /* if you don't provide the currency symbol in the pipe, 
  this is going to be the default symbol (R$) ... */
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
