import {Component} from '@angular/core';
import {WikipediaService} from "./wikipedia.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pages = [];

  constructor(private wikiService: WikipediaService) {
  }

  onTerm(term: string) {
    this.wikiService.search(term).subscribe((response: any) => {
      this.pages = response.query.search;
    })
  }
}
