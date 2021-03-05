import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../Category';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() catSelected: string;
  outputList: string;
  Category1: Category;
  Category2: Category;
  Category3: Category;
  Category4: Category;
  constructor() {
    this.Category1 = {
      productList: [{
        likes: 0,
        link: 'https://www.amazon.com/HyperX-Cloud-Stinger-Core-Lightweight/dp/B08634653D/ref=sr_1_6?dchild=1&keywords=hyperx&qid=1614097503&sr=8-6',
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/61CR5qZToXL._AC_SL1500_.jpg',
        name: 'HyperX Cloud Stinger Core',
        description: 'Wireless Gaming Headset, for PC, 7.1 Surround Sound, Noise Cancelling Microphone, Lightweight',
        rating: 4.5,
        category: 1
      },
      {
        likes: 0,
        link: 'https://www.amazon.com/New19-5V-Adapter-Charger-ADP-150XB-Connector/dp/B07S7VSWPY/ref=sr_1_20_sspa?dchild=1&keywords=hp+omen&qid=1614106911&sr=8-20-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyU1o2RUtRQzM4MVZKJmVuY3J5cHRlZElkPUEwNTM0ODg3MkgxM1NaRE5aT1U5VCZlbmNyeXB0ZWRBZElkPUEwMjcyODQ1MjRCWDZETVdTVkVWVCZ3aWRnZXROYW1lPXNwX2J0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/61qTjRcQXwL._AC_SL1200_.jpg',
        name: 'New19.5V 7.7A 150W AC Adapter Charger',
        description: 'New19.5V 7.7A 150W AC Adapter Charger,Fit for HP ZBook 15 G3 G4,HP ZBook Studio G3 G4,HP ZBook 15u G3 G4,HP OMEN 15, OMEN x by HP Laptop ADP-150XB B Power Supply Connector 4.5mm x 3.0mm',
        rating: 4.7,
        category: 1
      },
      {
        likes: 0,
        link: 'https://www.amazon.com/HyperX-Pulsefire-Surge-Customization-Programmable/dp/B07B9TVQ82/ref=sr_1_21?dchild=1&keywords=hyperx&qid=1614097503&sr=8-21',
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/81hR-aCjxML._AC_SL1500_.jpg',
        name: 'Omen by HP 25-Inch Monitor',
        description: 'Omen by HP 25-Inch FHD Gaming Monitor with Tilt Adjustment and AMD Freesync Technology (Black)',
        rating: 3.8,
        category: 1
      },
      {
        likes: 0,
        link: 'https://www.amazon.com/Desktop-GeForce-i7-10700F-Lighting-GT12-0060/dp/B0891SX6XN/ref=sr_1_11?dchild=1&keywords=hp+omen&qid=1614106911&sr=8-11',
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/71NWEjWw9YL._AC_SL1500_.jpg',
        name: 'OMEN 25L Gaming Desktop PC',
        description: 'NVIDIA GeForce RTX 2060, 10th Generation Intel Core i7-10700F Processor, HyperX 16 GB RAM, 512 GB SSD and 1 TB Hard Drive, Windows 10 Home (GT12-0060, 2020), Shadow black',
        rating: 4.2,
        category: 1
      },
      {
        likes: 0,
        link: 'https://www.amazon.com/WIWU-Repellent-Protection-Inspiron-Pavilion/dp/B079HYKPCW/ref=sr_1_14_sspa?dchild=1&keywords=hp+omen&qid=1614106911&sr=8-14-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyU1o2RUtRQzM4MVZKJmVuY3J5cHRlZElkPUEwNTM0ODg3MkgxM1NaRE5aT1U5VCZlbmNyeXB0ZWRBZElkPUExMDA4MzM0M0lBOVdJMkpTRDdUMCZ3aWRnZXROYW1lPXNwX210ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/81SoplA1pHL._AC_SL1500_.jpg',
        name: 'WIWU 17.3 Inch Diamond Laptop Sleeve Case Cover',
        description: 'WIWU 17.3 Inch Diamond Laptop Sleeve Case Cover with Super Corner Protection Water Repellent Computer Bag for MacBook Pro Air Dell Inspiron MSI HP Pavilion Lenovo ideapad Acer HP Omen',
        rating: 4.8,
        category: 1
      }],
      name: 'cat1'
    };
    this.Category2 = {
      productList: [{
        likes: 0,
        link: 'https://www.amazon.com/HyperX-Cloud-Alpha-Gaming-Headset/dp/B074NBSF9N/ref=sr_1_2?dchild=1&keywords=hyperx&qid=1614097503&sr=8-2',
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/71-hkFn17zL._AC_SL1428_.jpg',
        name: 'HyperX Cloud Alpha',
        description: 'Gaming Headset, Dual Chamber Drivers, Award Winning Comfort, Durable Aluminum Frame, Detachable Microphone, Works on PC, PS4, Xbox One, Nintendo Switch, and Mobile Devices – Red',
        rating: 4.4,
        category: 2
      },
      {
        likes: 0,
        link: 'https://www.amazon.com/Beats-Pill-Portable-Speaker-Black/dp/B016QXV2QK/ref=sr_1_3?dchild=1&keywords=speaker&qid=1614107673&sr=8-3',
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/61yOlmCeChL._AC_SL1500_.jpg',
        name: 'Beats Portable Wireless Speaker',
        description: 'Beats Pill+ Portable Wireless Speaker - Stereo Bluetooth, 12 Hours of Listening Time, Microphone for Phone Calls - Black',
        rating: 3.6,
        category: 2
      },
      {
        likes: 0,
        link: 'https://www.amazon.com/HyperX-Alloy-Origins-Core-Customization/dp/B07YMHGP86/ref=sr_1_5?dchild=1&keywords=hyperx&qid=1614097503&sr=8-5',
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/61b%2B3QeNq-L._AC_SL1428_.jpg',
        name: 'HyperX Alloy Origins Core',
        description: 'Tenkeyless Mechanical Gaming Keyboard, Software Controlled Light & Macro Customization, Compact Form Factor, RGB LED Backlit, Linear HyperX Red Switch',
        rating: 5.0,
        category: 2
      },
      {
        likes: 0,
        link: 'https://www.amazon.com/HyperX-FURY-Optimized-Precision-450x400x4mm/dp/B072J47KJC/ref=sr_1_11?dchild=1&keywords=hyperx&qid=1614097503&sr=8-11',
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/81wHbWlU4sL._AC_SL1500_.jpg',
        name: 'HyperX FURY S',
        description: 'Pro Gaming Mouse Pad, Cloth Surface Optimized for Precision, Stitched Anti-Fray Edges, Large 450x400x4mm',
        rating: 5.0,
        category: 2
      },
      {
        likes: 0,
        link: 'https://www.amazon.com/GeForce-i7-10750H-Windows-Keyboard-17-cb1080nr/dp/B087Z21FXV/ref=sr_1_4?dchild=1&keywords=hp+omen&qid=1614106911&sr=8-4',
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/81lbQdxkB3L._AC_SL1500_.jpg',
        name: 'OMEN 17 Gaming Laptop',
        description: 'NVIDIA GeForce RTX 2070, Intel Core i7-10750H, 16 GB DDR4 RAM, 512 GB PCIe NVMe SSD, 17.3" 144Hz Full HD, Windows 10 Home, RGB Keyboard (17-cb1080nr, 2020 Model)',
        rating: 4.7,
        category: 2
      }],
      name: 'cat2'
    };
    this.Category3 = {
      productList: [
      {
        likes: 0,
        link: 'https://www.amazon.com/TCL-43S325-Inch-1080p-Smart/dp/B07G9W9ZR9/ref=sr_1_1?dchild=1&keywords=tv&qid=1614972876&sr=8-1',
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/71YZlXXFktL._AC_SL1500_.jpg',
        name: 'TCL 43S325 43 Inch 1080p Smart LED Roku TV (2019)',
        description: 'Easy Voice Control: Works with Amazon Alexa or Google Assistant to help you find movie titles, launch or change channels, even switch inputs, using just your voice.',
        rating: 4.7,
        category: 3
      },
      {
        likes: 0,
        link: 'https://www.amazon.com/Samsung-UN40N5200AFXZA-40-Inch-Assistant-Compatibility/dp/B07YXH57B8/ref=sr_1_2?dchild=1&keywords=tv&qid=1614972876&sr=8-2',
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/81oINpjJtGL._AC_SL1500_.jpg',
        name: 'SAMSUNG 40 inches LED Smart FHD TV 1080P (2019 Model)',
        description: 'Full HD 1080p Resolution PurColorSamsung Smart TV SmartThings App Support',
        rating: 4.8,
        category: 3
      },
      {
        likes: 0,
        link: 'https://www.amazon.com/Konka-40-Inch-Android-Remote-40H33A/dp/B08D5MNWBH/ref=pd_sbs_2?pd_rd_w=KUfXY&pf_rd_p=5e0f7f8d-f321-4a3e-bdac-3142fcd848d7&pf_rd_r=BD8DVA2Y3TREQ477W4FM&pd_rd_r=ffe0792c-37af-4444-ad5e-be3af615c009&pd_rd_wg=BkdxY&pd_rd_i=B08D5MNWBH&psc=1',
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/61uOZ8R4MnL._AC_SL1334_.jpg',
        name: 'Konka 40-Inch Class H3 Series 1080p Full HD Smart TV with Android TV and Voice Remote (40H33A, 2020 Model)',
        description: 'Android TV includes the Google Play Store for simple access to over 500,000 Movies and TV Shows. Built-in Google Assistant allows you to search for your desired video content',
        rating: 4.4,
        category: 3
      },
      {
        likes: 0,
        link: 'https://www.amazon.com/TCL-43S325-Inch-1080p-Smart/dp/B07G9W9ZR9/ref=sr_1_1?dchild=1&keywords=tv&qid=1614972876&sr=8-1',
        imgSrc: 'https://m.media-amazon.com/images/I/81NCnG8UvYL._AC_UY218_.jpg',
        name: 'All-New Insignia NS-39DF310NA21 39-inch Smart HD 720p TV - Fire TV Edition',
        description: 'Easy Voice Control: Works with Amazon Alexa or Google Assistant to help you find movie titles, launch or change channels, even switch inputs, using just your voice.',
        rating: 4.2,
        category: 3
      },
      {
        likes: 0,
        link: 'https://www.amazon.com/TCL-43S325-Inch-1080p-Smart/dp/B07G9W9ZR9/ref=sr_1_1?dchild=1&keywords=tv&qid=1614972876&sr=8-1',
        imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/71YZlXXFktL._AC_SL1500_.jpg',
        name: 'Sceptre X328BV-SR 32-Inch 720p LED TV (2017 Model)',
        description: 'Easy Voice Control: Works with Amazon Alexa or Google Assistant to help you find movie titles, launch or change channels, even switch inputs, using just your voice. Also available through the Roku mobile app',
        rating: 4.7,
        category: 3
      }
      ],
      name: 'cat3'
    };
    this.Category4 = {
      productList: [
        {
          likes: 0,
          link: 'https://www.amazon.com/OSTBA-Convection-Rotisserie-Dehydrator-Accessories/dp/B088D2R6B7/ref=sr_1_2_sspa?dchild=1&keywords=oven&qid=1614977223&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyRFMxVzZJR0o1N0owJmVuY3J5cHRlZElkPUEwNzgyNjkwMTFGSTg3Q0hMWUhSNSZlbmNyeXB0ZWRBZElkPUEwNjQ2NzgwMU9PVjI3UUVFSFo0MCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
          imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/81TwABID%2BQL._AC_SL1500_.jpg',
          name: 'OSTBA Air Fryer Oven 26 Quart 10-in-1 Convection Toaster Oven',
          description: 'All in One Air Fryer Oven',
          rating: 4.5,
          category: 3
        },
        {
          likes: 0,
          link: 'https://www.amazon.com/OSTBA-Convection-Rotisserie-Dehydrator-Accessories/dp/B088D2R6B7/ref=sr_1_2_sspa?dchild=1&keywords=oven&qid=1614977223&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyRFMxVzZJR0o1N0owJmVuY3J5cHRlZElkPUEwNzgyNjkwMTFGSTg3Q0hMWUhSNSZlbmNyeXB0ZWRBZElkPUEwNjQ2NzgwMU9PVjI3UUVFSFo0MCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
          imgSrc: 'https://m.media-amazon.com/images/I/81fUs9or5fL._AC_UY218_.jpg',
          name: 'COMFEE Toaster Oven Countertop, 4-Slice, Compact Size',
          description: 'All in One Air Fryer Oven',
          rating: 4.5,
          category: 3
        },
        {
          likes: 0,
          link: 'https://www.amazon.com/OSTBA-Convection-Rotisserie-Dehydrator-Accessories/dp/B088D2R6B7/ref=sr_1_2_sspa?dchild=1&keywords=oven&qid=1614977223&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyRFMxVzZJR0o1N0owJmVuY3J5cHRlZElkPUEwNzgyNjkwMTFGSTg3Q0hMWUhSNSZlbmNyeXB0ZWRBZElkPUEwNjQ2NzgwMU9PVjI3UUVFSFo0MCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
          imgSrc: 'https://m.media-amazon.com/images/I/81hRlGdO63L._AC_UY218_.jpg',
          name: 'Toshiba AC25CEW-SS Digital Toaster Oven with Convection Cooking',
          description: 'All in One Air Fryer Oven',
          rating: 4.5,
          category: 3
        },
        {
          likes: 0,
          link: 'https://www.amazon.com/OSTBA-Convection-Rotisserie-Dehydrator-Accessories/dp/B088D2R6B7/ref=sr_1_2_sspa?dchild=1&keywords=oven&qid=1614977223&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyRFMxVzZJR0o1N0owJmVuY3J5cHRlZElkPUEwNzgyNjkwMTFGSTg3Q0hMWUhSNSZlbmNyeXB0ZWRBZElkPUEwNjQ2NzgwMU9PVjI3UUVFSFo0MCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
          imgSrc: 'https://m.media-amazon.com/images/I/71YCEVxTDGL._AC_UY218_.jpg',
          name: 'LUBY Large Toaster Oven Countertop, French Door Designed, 18 Slices',
          description: 'All in One Air Fryer Oven',
          rating: 4.5,
          category: 3
        },
        {
          likes: 0,
          link: 'https://www.amazon.com/OSTBA-Convection-Rotisserie-Dehydrator-Accessories/dp/B088D2R6B7/ref=sr_1_2_sspa?dchild=1&keywords=oven&qid=1614977223&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyRFMxVzZJR0o1N0owJmVuY3J5cHRlZElkPUEwNzgyNjkwMTFGSTg3Q0hMWUhSNSZlbmNyeXB0ZWRBZElkPUEwNjQ2NzgwMU9PVjI3UUVFSFo0MCZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
          imgSrc: 'https://images-na.ssl-images-amazon.com/images/I/81TwABID%2BQL._AC_SL1500_.jpg',
          name: 'Elite Gourmet ETO-4510M Double French Door Countertop Convection Toaster Oven',
          description: 'All in One Air Fryer Oven',
          rating: 4.5,
          category: 3
        }
      ],
      name: 'cat4'
    };
  }

  ngOnInit(): void {
  }
  removeProduct(name: string): void {
    if (this.catSelected === this.Category1.name) {
      this.Category1.productList = this.Category1.productList.filter((x) => x.name !== name);
    }
    else if (this.catSelected === this.Category2.name) {
      this.Category2.productList = this.Category2.productList.filter((x) => x.name !== name);
    }
    else if (this.catSelected === this.Category3.name) {
      this.Category3.productList = this.Category3.productList.filter((x) => x.name !== name);
    }
    else if (this.catSelected === this.Category4.name) {
      this.Category4.productList = this.Category4.productList.filter((x) => x.name !== name);
    }
  }
}
