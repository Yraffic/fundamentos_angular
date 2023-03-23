import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimaryComponent } from './primary-component/primary.component';
import { SecundaryComponentComponent } from './secundary-component/secundary-component.component';
import { MultiplicarPorPipe } from './multiplicar-por.pipe';
import { PipeExComponent } from './pipe-ex/pipe-ex.component';
import { TwoWayDataBindingComponent } from './two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { RenderListComponent } from './render-list/render-list.component';
import { CustomComponentComponent } from './custom-component/custom-component.component';
import { ComponentePaiComponent } from './componente-pai/componente-pai.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { ExemploServicos1Component } from './exemplo-servicos1/exemplo-servicos1.component';
import { ExemploServicos2Component } from './exemplo-servicos2/exemplo-servicos2.component';
import { CicloDeVidaComponent } from './ciclo-de-vida/ciclo-de-vida.component';
import { CicloDeVidaPaiComponent } from './ciclo-de-vida-pai/ciclo-de-vida-pai.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimaryComponent,
    SecundaryComponentComponent,
    MultiplicarPorPipe,
    PipeExComponent,
    TwoWayDataBindingComponent,
    RenderListComponent,
    CustomComponentComponent,
    ComponentePaiComponent,
    ComponenteFilhoComponent,
    ExemploServicos1Component,
    ExemploServicos2Component,
    CicloDeVidaComponent,
    CicloDeVidaPaiComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
