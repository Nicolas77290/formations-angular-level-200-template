import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UneDecouverteRoutingModule } from './une-decouverte-routing.module';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { FiveComponent } from './five/five.component';
import { SixComponent } from './six/six.component';
import { SevenComponent } from './seven/seven.component';
import { TheDecouverteComponent } from './the-decouverte/the-decouverte.component';
import { TickNumberComponent } from './tick-number/tick-number.component';



@NgModule({
  declarations: [
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    FiveComponent,
    SixComponent,
    SevenComponent,
    TickNumberComponent,
    TheDecouverteComponent
  ],
  imports: [
    CommonModule,
    UneDecouverteRoutingModule
  ]
})
export class UneDecouverteModule { }
