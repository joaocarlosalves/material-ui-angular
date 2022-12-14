import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'forms',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
    constructor(private _snackBar: MatSnackBar) {}

    openSnackBar(message: string, action: string) {
      this._snackBar.open(message, action);
    }

}
