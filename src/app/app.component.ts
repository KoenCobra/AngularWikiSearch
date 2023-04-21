import {Component} from '@angular/core';
import {WikipediaService} from "./wikipedia.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private wikiService: WikipediaService) {
  }

  onTerm(term: string) {
    this.wikiService.search(term).subscribe((response)=>{
      console.log(response)
    })
  }
}
