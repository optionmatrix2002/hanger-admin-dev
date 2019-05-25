import { Component, ViewChild, ChangeDetectorRef} from '@angular/core';
import { AppSettings } from './app.settings';
import { Settings } from './app.settings.model';
import { Observable } from 'rxjs/Observable';
import { ToasterModule, ToasterService, ToasterConfig } from 'angular2-toaster';
import { LoaderService } from './shared/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  message$: Observable<any>;
  public settings: Settings;
  private toasterService: ToasterService;

  constructor(private cdref: ChangeDetectorRef, public appSettings:AppSettings, toasterService: ToasterService, public loaderService: LoaderService,){
    this.toasterService = toasterService;
    this.settings = this.appSettings.settings;
  } 

  public config: ToasterConfig =
    new ToasterConfig({
      showCloseButton: false,
      limit: 1,
      tapToDismiss: true,
      timeout: 2000,
      positionClass: 'toast-top-right',
      animation: 'fade'
    });

  ngOnInit() {
    this.message$ = this.loaderService.message$;
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }
}