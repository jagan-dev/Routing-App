import { AuthGuardService } from './services/guards/auth-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { UserComponent } from './user/user.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent}, // localhost:4200
  //{path: 'users', component: UsersComponent},
  //{path: 'users/:id/:name', component: UserComponent},
   {
     path: 'users',
     component: UsersComponent,
     canActivate: [AuthGuardService],
     children: [{path:':id/:name', component: UserComponent}],
   },
  {path: 'categories', component: CategoriesComponent},
  {path: 'not-found', component:PageNotFoundComponent},
  {path: '**', redirectTo:'not-found'}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
