import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./access/login/login.component";

import { AboutusComponent } from "./pages/aboutus/aboutus.component";
import { ApartmentComponent } from "./pages/apartment/apartment.component";
import { ContactusComponent } from "./pages/contactus/contactus.component";
import { HomeComponent } from "./pages/home/home.component";
import { ProjectComponent } from "./pages/project/project.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'contactus', component: ContactusComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'project/:id', component: ProjectComponent },
    { path: 'apartment/:id', component: ApartmentComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}