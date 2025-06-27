import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-details-dialog',
  templateUrl: './product-details-dialog.component.html',
  styleUrls: ['./product-details-dialog.component.css']
})
export class ProductDetailsDialogComponent {
  currentImageIndex: number = 0;

  constructor(
    public dialogRef: MatDialogRef<ProductDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

  nextImage(): void {
    if (this.data.images.length > 1) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.data.images.length;
    }
  }

  previousImage(): void {
    if (this.data.images.length > 1) {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.data.images.length) % this.data.images.length;
    }
  }

  getCurrentImage(): string {
    return this.data.images[this.currentImageIndex];
  }
 
} 