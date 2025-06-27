import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-week-bundle',
  templateUrl: './week-bundle.component.html',
  styleUrls: ['./week-bundle.component.css']
})
export class WeekBundleComponent {
constructor(
  private dialog: MatDialog,
  private router: Router
) {}
  
viewBundle() {
  this.router.navigate(['/bundle'], {
      queryParams: { search: 'juicer' }

  })
  this.closeDialog();
}

closeDialog() {
  this.dialog.closeAll();
}

}
