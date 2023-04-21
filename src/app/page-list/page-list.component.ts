import {Component, Input} from '@angular/core';

export interface page {
  title: string,
  wordcount: number,
  snippet: string
}
@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent {
  @Input() pages:page[] = [];
}
