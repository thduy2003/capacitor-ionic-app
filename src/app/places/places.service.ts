import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Masion',
      'In the heart of New York City',
      'https://thumbs.6sqft.com/wp-content/uploads/2014/06/21042534/Felix_Warburg_Mansion_007.jpg?w=1560&format=webp',
      149.99
    ),
    new Place(
      'p2',
      'L\'Amour Toujours',
      'A romantic place in Paris!',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3WrJ2omcocBTRX4vYlTGjLJ_KDpF7jamS8w&s',
      189.99
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'Not our average city trip!',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpUROCMRJDQhHEhok9xQrSIoeoLiweWVvb4w&s',
      99.99
    )
  ];
  get places() {
    return [...this._places];
  }
  constructor() {}
}
