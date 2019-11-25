import { NgModule } from "@angular/core";

import { CommonModule } from "@angular/common";

import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatTableModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatListModule
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,

    MatToolbarModule,

    MatButtonModule,
    
    MatCardModule,

    MatInputModule,

    MatDialogModule,

    MatTableModule,

    MatMenuModule,

    MatIconModule,

    MatListModule,

    MatProgressSpinnerModule
  ],

  exports: [
    CommonModule,

    MatToolbarModule,

    MatButtonModule,

    MatCardModule,

    MatInputModule,

    MatDialogModule,

    MatTableModule,

    MatMenuModule,

    MatIconModule,

    MatListModule,

    MatProgressSpinnerModule
  ]
})
export class CustomMaterialModule {}
