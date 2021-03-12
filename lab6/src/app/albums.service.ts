import { Injectable } from '@angular/core';
import {Album, Photo} from './models';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private client: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }
  getAlbum(id: number): Observable<Album|undefined> {
    return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
  updateAlbum(album: Album): Observable<Album> {
    return this.client.put<Album>(`https://jsonplaceholder.typicode.com/albums/${album.id}`, album);
  }
  deleteAlbum(id: number): Observable<any> {
    return this.client.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
  getPhotos(id: number): Observable<Photo[]> {
    return this.client.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }
}
