import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MenuBarComponent } from "./menu-bar/menu-bar.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { FooterComponent } from "./footer/footer.component";
import { ProjectsPageComponent } from "./projects-page/projects-page.component";
import { ProjectComponent } from "./project/project.component";
<<<<<<< HEAD
=======
import { ProjectService } from './project/project.service';
import { RouterModule, Router } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
>>>>>>> ea4e5bb... fix

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomePageComponent,
    FooterComponent,
    ProjectsPageComponent,
<<<<<<< HEAD
    ProjectComponent
  ],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
=======
		ProjectComponent,
		NotFoundComponent
  ],
	imports: [BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		RouterModule.forRoot([
			{
				path: '',
				component: HomePageComponent
			},
			{
				path: 'projects',
				component: ProjectsPageComponent
			},
			{
				path: '**',
				component: NotFoundComponent
			}
		])],
  providers: [ProjectService],
>>>>>>> ea4e5bb... fix
  bootstrap: [AppComponent]
})
export class AppModule {}
