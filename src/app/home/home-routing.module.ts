import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'gallery',
        loadChildren: () => import('../gallery/gallery.module').then(m => m.GalleryPageModule)
      },
      {
        path: 'contacts',
        loadChildren: () => import('../contacts/contacts.module').then(m => m.ContactsPageModule)
      },
      {
        path: '',
        redirectTo: '/home/profile',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/profile',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
