import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterOutlet, IonRouterLink, IonImg } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { FormsModule } from '@angular/forms';
import { archiveOutline, archiveSharp, informationCircleOutline, informationCircleSharp, imagesOutline, imagesSharp, trophyOutline, trophySharp } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [FormsModule,  IonImg, RouterLink, RouterLinkActive, IonApp, IonSplitPane, IonMenu, IonContent, IonList, IonNote, IonMenuToggle, IonItem, IonIcon, IonLabel, IonRouterLink, IonRouterOutlet],
})
export class AppComponent {
  public appPages = [
    { title: 'About', url: '/about', icon: 'information-circle' },
    { title: 'Events', url: '/events', icon: 'trophy' },
    { title: 'Photos', url: '/photos', icon: 'images' },
    { title: 'Archived', url: '/archived', icon: 'archive' },
  ];

  constructor() {
    addIcons({ informationCircleOutline, informationCircleSharp, trophyOutline, trophySharp, imagesOutline, imagesSharp, archiveOutline, archiveSharp });
  }

}
