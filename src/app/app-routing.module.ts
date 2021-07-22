import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { BodyComponent } from './components/body/body.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: BodyComponent,
  },
  {
    path: "update/:id",
    component: UpdateComponent
  },
  {
    path: "create",
    component: CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
