import { Component, OnInit } from '@angular/core';
import {Album} from '../models';
import {Location} from '@angular/common';
import {AlbumsService} from '../albums.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent implements OnInit {
  album: Album|undefined;
  constructor(private route: ActivatedRoute,
              private location: Location,
              private albumsService: AlbumsService) { }

  ngOnInit(): void {
    this.getAlbum();
  }
  getAlbum(): void {
    this.route.paramMap.subscribe((params) => {
      // @ts-ignore
      const id = +params.get('id');
      this.albumsService.getAlbum(id).subscribe((album) => {
        this.album = album;
      });
    });
  }
  updateAlbum(album: Album): void {
    this.albumsService.updateAlbum(album).subscribe(() => {
      console.log(album);
    });
  }
  goBack(): void {
    this.location.back();
  }
}
