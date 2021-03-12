import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AlbumsComponent} from './albums/albums.component';
import {AboutComponent} from './about/about.component';
import {AlbumDetailComponent} from './album-detail/album-detail.component';
import {AlbumPhotosComponent} from './album-photos/album-photos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'albums', component: AlbumsComponent},
  {path: 'albums/:id', component: AlbumDetailComponent},
  {path: 'albums/:id/photos', component: AlbumPhotosComponent},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
