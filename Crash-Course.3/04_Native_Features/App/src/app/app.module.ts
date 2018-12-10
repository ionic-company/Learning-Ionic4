import { NgModule }							from "@angular/core";
import { BrowserModule }					from "@angular/platform-browser";
import { IonicModule }						from "@ionic/angular";

import { IonicRouteStrategy }				from "@ionic/angular";
import { RouteReuseStrategy } 				from "@angular/router";

import { SplashScreen }						from "@ionic-native/splash-screen/ngx";
import { StatusBar }						from "@ionic-native/status-bar/ngx";

import { IonicStorageModule }				from '@ionic/storage';

import { AppRoutingModule }					from "./app-routing.module";
import { AppComponent }						from "./app.component";

import { HttpClientModule }					from "@angular/common/http";
import { ApiProvider }						from "../providers/api/api";
import { FavoriteProvider }					from "../providers/favorite/favorite";

@NgModule({
	declarations: [AppComponent],
	entryComponents: [],
	imports: [
		BrowserModule,
		HttpClientModule,
		IonicModule.forRoot(),
		AppRoutingModule,
		IonicStorageModule.forRoot()
	],
	providers: [
		StatusBar,
		SplashScreen,
		ApiProvider,
		FavoriteProvider,
		{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
