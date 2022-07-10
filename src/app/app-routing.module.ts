import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookstoreAppComponent } from './components/bookstore-app/bookstore-app.component';

const routes: Routes = [{ path: '', component: BookstoreAppComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
