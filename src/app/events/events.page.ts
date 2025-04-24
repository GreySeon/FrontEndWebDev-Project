import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventsService } from '../services/events.service';
import { IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons } from '@ionic/angular/standalone';

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
  standalone: true,
  imports: [IonMenuButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
  providers: [EventsService],
})
export class EventsPage implements OnInit {
  events: any[] = [];

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.eventsService.getEvents().subscribe((data) => {
      console.log('Event data loaded:', data);
      // this.events = data.events; // depends on actual structure
    });
  }

}
