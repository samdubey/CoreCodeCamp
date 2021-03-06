// main.ts
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { SponsorForm } from './sponsorForm';
import { SponsorService } from "./sponsorService";
import { ImageUploadService } from '../common/imageUploadService';

bootstrap(SponsorForm,
  [disableDeprecatedForms(),
    provideForms(),
    HTTP_PROVIDERS,
    SponsorService,
    ImageUploadService]);