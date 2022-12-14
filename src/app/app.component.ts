import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-ui';
  menu = [
    { path: 'autocomplete', accordion: false },
    { path: 'badge', accordion: false },
    { path: 'bottom-sheet', accordion: false },
    { path: 'buttons', accordion: false },
    { path: 'button-toggle', accordion: false },
    { path: 'card', accordion: false },
    { path: 'cdk', accordion: false },
    { path: 'checkbox', accordion: false },
    { path: 'chips', accordion: false },
    { path: 'datepicker', accordion: false },
    { path: 'dialog', accordion: false },
    { path: 'divider', accordion: false },
    { path: 'expansion-panel', accordion: false },
    { path: 'form-field', accordion: false },
    { path: 'grid-list', accordion: false },
    { path: 'icon', accordion: false },
    { path: 'inputs', accordion: false },
    { path: 'list', accordion: false },
    { path: 'menu', accordion: false },
    { path: 'paginator', accordion: false },
    { path: 'progress-bar', accordion: false },
    { path: 'radio', accordion: false },
    { path: 'ripple', accordion: false },
    { path: 'spinner', accordion: false },
    { path: 'select', accordion: false },
    { path: 'sidenav', accordion: false },
    { path: 'slider', accordion: false },
    { path: 'snackbar', accordion: false },
    { path: 'sort-header', accordion: false },
    { path: 'stepper', accordion: false },
    { path: 'table', accordion: false },
    { path: 'tabs', accordion: false },
    { path: 'toggle', accordion: false },
    { path: 'toolbar', accordion: false },
    { path: 'tooltip', accordion: false },
    { path: 'tree', accordion: false }
  ];
}
