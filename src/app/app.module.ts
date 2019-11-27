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
import { ProjectService } from "./project/project.service";
import { RouterModule, Router } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomePageComponent,
    FooterComponent,
    ProjectsPageComponent,
    ProjectComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {
        path: "",
        component: HomePageComponent
      },
      {
        path: "projects",
        component: ProjectsPageComponent
      },
      {
        path: "**",
        component: NotFoundComponent
      }
    ])
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule {}
