import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

// angular materials
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { SearchResultScreenComponent } from './search-result-screen/search-result-screen.component';

@NgModule({
	declarations: [AppComponent, SearchBarComponent, SearchResultScreenComponent],
	imports: [
		AppRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,

		// angular material
		MatButtonModule,
		MatInputModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
