import { Component, Input, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { Place } from 'src/app/places/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
  standalone: false,
})
export class CreateBookingComponent  implements OnInit {
  @Input() selectedPlace: Place | undefined;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel')
  }
  onBookPlace() {
    this.modalCtrl.dismiss({message: 'this place is booked'}, 'confirm')
  }

}
