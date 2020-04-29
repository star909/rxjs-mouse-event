import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MouseEventComponent } from './modules/mouse-event/mouse-event.component';



const routes: Routes = [
  { path: '', component: MouseEventComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
