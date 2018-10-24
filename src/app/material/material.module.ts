import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    MatCardModule,
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
  ],
  declarations: [],
})
export class MaterialModule { }
