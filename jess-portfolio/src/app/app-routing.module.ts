import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Adjust the path as necessary
// import { PortfolioComponent } from './portfolio/portfolio.component'; // Adjust the path as necessary

const routes: Routes = [
  { path: '', component: HomeComponent }, // Home path
//   { path: 'portfolio', component: PortfolioComponent }, // Portfolio path
  // Add more routes here as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

