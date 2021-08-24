import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchResultScreenComponent } from './search-result-screen/search-result-screen.component';

const routes: Routes = [
	{ path: '', redirectTo: '/search', pathMatch: 'full' },
	{ path: 'search', component: SearchBarComponent },
	{ path: 'result', component: SearchResultScreenComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
