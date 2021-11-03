import { UserModule } from './features/user/user.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameModule } from './features/game/game.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { BoolToTextPipe } from './shared/pipes/bool-to-text.pipe';
import { BoolToColorDirective } from './shared/directives/bool-to-color.directive';
import { ProfileService } from './features/user/services/profile.service';
import { TestOneComponent } from './shared/test-one/test-one.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    TestOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GameModule,
    UserModule
  ],
  providers: [
    //ProfileService
  ],
  bootstrap: [AppComponent, HeaderComponent, SideBarComponent]
})
export class AppModule { }
