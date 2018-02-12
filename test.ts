import { getTestBed } from '@angular/core/testing';

declare var jasmine: any;

import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// Unfortunately there's no typing for the `__karma__` variable. Just declare it as any.
declare const __karma__: any;
declare const require: any;

// Prevent Karma from running prematurely.
 __karma__.loaded = function () {};

  // First, initialize the Angular testing environment.
  getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
  // Then we find all the tests.
  const context = require.context('./', true, /\.spec\.ts$/);
  // And load the modules.
  context.keys().map(context);
  // Finally, start Karma to run the tests.
  __karma__.start();
