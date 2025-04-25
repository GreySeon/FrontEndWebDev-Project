import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventsService } from '../services/events.service';
import { IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
  standalone: true,
  imports: [IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader, IonCard, IonMenuButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
  providers: [EventsService],
})
export class EventsPage implements OnInit {
  events: any[] = []; // Generic array

  constructor(private eventsService: EventsService) { }

  // Asynchronously load the data into the array from web
  ngOnInit() {
    this.eventsService.getEvents().subscribe((data) => {
      // console.log('Event data loaded:', data);
      this.events = data.Events;
    });
  }

}
