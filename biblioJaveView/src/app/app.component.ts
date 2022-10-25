import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'biblioJaveView';

  constructor(
    private route: ActivatedRoute,
  ) {}



  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log("Params: ")
      console.log(params["name"])
    });
  }

}
