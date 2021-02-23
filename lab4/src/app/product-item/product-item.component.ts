import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  products: any[];

  constructor() {
    this.products = [
      {
        link: 'https://www.amazon.com/HyperX-Cloud-Alpha-Gaming-Headset/dp/B074NBSF9N/ref=sr_1_2?dchild=1&keywords=hyperx&qid=1614097503&sr=8-2',
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/71-hkFn17zL._AC_SL1428_.jpg',
        name: 'HyperX Cloud Alpha',
        description: 'Gaming Headset, Dual Chamber Drivers, Award Winning Comfort, Durable Aluminum Frame, Detachable Microphone, Works on PC, PS4, Xbox One, Nintendo Switch, and Mobile Devices – Red',
        rating: 4.4
      },
      {
        link: 'https://www.amazon.com/HyperX-Alloy-Origins-Core-Customization/dp/B07YMHGP86/ref=sr_1_5?dchild=1&keywords=hyperx&qid=1614097503&sr=8-5',
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/61b%2B3QeNq-L._AC_SL1428_.jpg',
        name: 'HyperX Alloy Origins Core',
        description: 'Tenkeyless Mechanical Gaming Keyboard, Software Controlled Light & Macro Customization, Compact Form Factor, RGB LED Backlit, Linear HyperX Red Switch',
        rating: 5.0
      },
      {
        link: 'https://www.amazon.com/HyperX-Cloud-Stinger-Core-Lightweight/dp/B08634653D/ref=sr_1_6?dchild=1&keywords=hyperx&qid=1614097503&sr=8-6',
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/61CR5qZToXL._AC_SL1500_.jpg',
        name: 'HyperX Cloud Stinger Core',
        description: 'Wireless Gaming Headset, for PC, 7.1 Surround Sound, Noise Cancelling Microphone, Lightweight',
        rating: 4.5
      },
      {
        link: 'https://www.amazon.com/HyperX-FURY-Optimized-Precision-450x400x4mm/dp/B072J47KJC/ref=sr_1_11?dchild=1&keywords=hyperx&qid=1614097503&sr=8-11',
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/81wHbWlU4sL._AC_SL1500_.jpg',
        name: 'HyperX FURY S',
        description: 'Pro Gaming Mouse Pad, Cloth Surface Optimized for Precision, Stitched Anti-Fray Edges, Large 450x400x4mm',
        rating: 5.0
      },
      {
        link: 'https://www.amazon.com/GeForce-i7-10750H-Windows-Keyboard-17-cb1080nr/dp/B087Z21FXV/ref=sr_1_4?dchild=1&keywords=hp+omen&qid=1614106911&sr=8-4',
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/81lbQdxkB3L._AC_SL1500_.jpg',
        name: 'OMEN 17 Gaming Laptop',
        description: 'NVIDIA GeForce RTX 2070, Intel Core i7-10750H, 16 GB DDR4 RAM, 512 GB PCIe NVMe SSD, 17.3" 144Hz Full HD, Windows 10 Home, RGB Keyboard (17-cb1080nr, 2020 Model)',
        rating: 4.7
      },
      {
        link: 'https://www.amazon.com/HyperX-Pulsefire-Surge-Customization-Programmable/dp/B07B9TVQ82/ref=sr_1_21?dchild=1&keywords=hyperx&qid=1614097503&sr=8-21',
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/81hR-aCjxML._AC_SL1500_.jpg',
        name: 'Omen by HP 25-Inch Monitor',
        description: 'Omen by HP 25-Inch FHD Gaming Monitor with Tilt Adjustment and AMD Freesync Technology (Black)',
        rating: 3.8
      },
      {
        link: 'https://www.amazon.com/Desktop-GeForce-i7-10700F-Lighting-GT12-0060/dp/B0891SX6XN/ref=sr_1_11?dchild=1&keywords=hp+omen&qid=1614106911&sr=8-11',
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/71NWEjWw9YL._AC_SL1500_.jpg',
        name: 'OMEN 25L Gaming Desktop PC',
        description: 'NVIDIA GeForce RTX 2060, 10th Generation Intel Core i7-10700F Processor, HyperX 16 GB RAM, 512 GB SSD and 1 TB Hard Drive, Windows 10 Home (GT12-0060, 2020), Shadow black',
        rating: 4.2
      },
      {
        link: 'https://www.amazon.com/WIWU-Repellent-Protection-Inspiron-Pavilion/dp/B079HYKPCW/ref=sr_1_14_sspa?dchild=1&keywords=hp+omen&qid=1614106911&sr=8-14-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyU1o2RUtRQzM4MVZKJmVuY3J5cHRlZElkPUEwNTM0ODg3MkgxM1NaRE5aT1U5VCZlbmNyeXB0ZWRBZElkPUExMDA4MzM0M0lBOVdJMkpTRDdUMCZ3aWRnZXROYW1lPXNwX210ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/81SoplA1pHL._AC_SL1500_.jpg',
        name: 'WIWU 17.3 Inch Diamond Laptop Sleeve Case Cover',
        description: 'WIWU 17.3 Inch Diamond Laptop Sleeve Case Cover with Super Corner Protection Water Repellent Computer Bag for MacBook Pro Air Dell Inspiron MSI HP Pavilion Lenovo ideapad Acer HP Omen',
        rating: 4.8
      },
      {
        link: 'https://www.amazon.com/New19-5V-Adapter-Charger-ADP-150XB-Connector/dp/B07S7VSWPY/ref=sr_1_20_sspa?dchild=1&keywords=hp+omen&qid=1614106911&sr=8-20-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyU1o2RUtRQzM4MVZKJmVuY3J5cHRlZElkPUEwNTM0ODg3MkgxM1NaRE5aT1U5VCZlbmNyeXB0ZWRBZElkPUEwMjcyODQ1MjRCWDZETVdTVkVWVCZ3aWRnZXROYW1lPXNwX2J0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/61qTjRcQXwL._AC_SL1200_.jpg',
        name: 'New19.5V 7.7A 150W AC Adapter Charger',
        description: 'New19.5V 7.7A 150W AC Adapter Charger,Fit for HP ZBook 15 G3 G4,HP ZBook Studio G3 G4,HP ZBook 15u G3 G4,HP OMEN 15, OMEN x by HP Laptop ADP-150XB B Power Supply Connector 4.5mm x 3.0mm',
        rating: 4.7
      },
      {
        link: 'https://www.amazon.com/Beats-Pill-Portable-Speaker-Black/dp/B016QXV2QK/ref=sr_1_3?dchild=1&keywords=speaker&qid=1614107673&sr=8-3',
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/61yOlmCeChL._AC_SL1500_.jpg',
        name: 'Beats Portable Wireless Speaker',
        description: 'Beats Pill+ Portable Wireless Speaker - Stereo Bluetooth, 12 Hours of Listening Time, Microphone for Phone Calls - Black',
        rating: 3.6
      }
    ];
  }
  ngOnInit(): void {
  }

}
