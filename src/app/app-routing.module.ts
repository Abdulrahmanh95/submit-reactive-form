import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConcatComponent } from './modules/observables/combine/concat.component';
import { RetryWhenComponent } from './modules/observables/errors/retry-when.component';
import { NgFormComponent } from './modules/form-submission-state/ng-form/ng-form.component';

const routes: Routes = [
  { path: 'lazy', loadChildren: () => import('./modules/lazy/lazy.module').then(m => m.LazyModule) },
  {
    path: 'concat',
    component: ConcatComponent
  },
  {
    path: 'retryWhen',
    component: RetryWhenComponent
  },
  {
    path: 'ng-form',
    component: NgFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
