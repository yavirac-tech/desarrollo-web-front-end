import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withComponentInputBinding} from '@angular/router';
import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import Theme from '@primeng/themes/material';
import {provideHttpClient} from '@angular/common/http';
import {definePreset} from '@primeng/themes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


const MyPreset = definePreset(Theme);
const firebaseConfig = {
  apiKey: "AIzaSyBD_pExY8QpTLzPiOJuzKlt6V1e4G99w0c",
  authDomain: "te-e02c2.firebaseapp.com",
  projectId: "te-e02c2",
  storageBucket: "te-e02c2.firebasestorage.app",
  messagingSenderId: "118524215225",
  appId: "1:118524215225:web:2ab21cffb58650ab790068",
  measurementId: "G-TS7H2RVRBJ"
};
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),

    provideRouter(routes, withComponentInputBinding()),

    provideAnimationsAsync(),

    providePrimeNG({
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: '.app-dark'
        }
      }
    }),

    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),

  ]
};
