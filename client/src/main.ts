import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic which is responsible for provideing the code to bootstrap our app module
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
