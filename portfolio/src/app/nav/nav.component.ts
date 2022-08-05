import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  variable1?: HTMLElement | null;
  variable2?: HTMLElement | null;
  variable3?: HTMLElement | null;
  variablefull?: HTMLElement[] | null;

  constructor() {}

  ngOnInit(): void {}
  displayer(i: number) {
    this.variablefull = Array.from(
      document.getElementsByClassName(
        'inner-card-body'
      ) as HTMLCollectionOf<HTMLElement>
    );

    if (this.variablefull != null) {
      if (this.variablefull[i].style.display == 'flex') {
        this.variablefull.forEach((element) => {
          element.style.display = 'none';
        });
        this.variablefull[i].style.display = 'flex';
        

      } else {
        this.variablefull.forEach((element) => {
          element.style.display = 'none';
        });

        this.variablefull[i].style.display = 'flex';
      }
    }
  }
}
