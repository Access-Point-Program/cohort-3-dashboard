// <reference types="@angular/localize" />

// Import the platformBrowserDynamic from the Angular platform-browser-dynamic package
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Import the root module of the Angular application
import { AppModule } from './app/app.module';

// Bootstrap the Angular application module dynamically
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
