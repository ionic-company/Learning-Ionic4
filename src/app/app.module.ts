import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SwipeDirective } from './swipe.directive';
import { SampleComponentComponent } from './sample-component/sample-component.component';
import { SampleDirectiveDirective } from './sample-directive.directive';
import { SamplePipePipe } from './sample-pipe.pipe';

@NgModule({
  declarations: [AppComponent, SwipeDirective, SampleComponentComponent, SampleDirectiveDirective, SamplePipePipe],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
