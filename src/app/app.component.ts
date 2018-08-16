import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'resort';
  singlepage=true;
  url:string;
  constructor(private router: Router){}
  public ngOnInit() {
    this.router.events.subscribe((events) => {
      if (events instanceof NavigationStart) {
        if (events.url === '/' || events.url === '/login' || events
        .url==='/register') {
          this.singlepage = true;
        } else {
          this.singlepage = false;
        }
        this.url=events.url;
      
      }
    });
  }
  isSelected(selected){
if(("/"+selected)==this.url){
  return true;
}
  }
}
