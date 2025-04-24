import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Browser } from '@capacitor/browser';
import { IonMenuButton, IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
  standalone: true,
  imports: [IonLabel, IonIcon, IonButton, IonMenuButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class AboutPage implements OnInit {

  constructor() { }

  // Open Facebook in the browser
  async openFacebook() {
    await Browser.open({ url: 'https://www.facebook.com/profile.php?id=100057095784280' });
  }

  // Open Instagram in the browser
  async openInstagram() {
    await Browser.open({ url: 'https://www.instagram.com/tribal_running/?hl=en' });
  }

  ngOnInit() {
  }

}
