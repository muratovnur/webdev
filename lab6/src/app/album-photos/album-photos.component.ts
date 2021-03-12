import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import {AlbumsService} from '../albums.service';
import {Photo} from '../models';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  constructor(private location: Location,
              private albumsService: AlbumsService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      // @ts-ignore
      const id = +params.get('id');
      this.getPhotos(id);
    });
  }
  getPhotos(id: number): void {
    this.albumsService.getPhotos(id).subscribe((photos) => {
      this.photos = photos;
    });
  }
  goBack(): void {
    this.location.back();
  }
}
