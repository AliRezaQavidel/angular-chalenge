import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/services/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        animate(300, keyframes([
          style({ opacity: 0, transform: 'translateY(100%)', offset: 0 }),
          style({ opacity: 1, transform: 'translateY(25px)', offset: 0.5 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1.0 })
        ]))
      ])
    ])
  ]
})
export class MainComponent implements OnInit {

  numbersJsonContent: any = [];

  constructor(private httpService: HttpService,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getNumberJson();
  }

  getNumberJson = () => {
    this.httpService.getNumbersJson().subscribe((response: any) => {
      response.forEach((item, index) => {
        setTimeout(() => {
          this.numbersJsonContent.push(item);
        }, 1000 * index);
      });
    }, error => {
      this.openSnackBar('Server Error');
    })
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Remove', {
      duration: 5000,
    });
  }

}
