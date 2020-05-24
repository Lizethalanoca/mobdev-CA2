import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharactersDetailsPageRoutingModule } from './characters-details-routing.module';

import { CharacterDetailsPage } from './characters-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharactersDetailsPageRoutingModule
  ],
  declarations: [CharacterDetailsPage]
})
export class CharactersDetailsPageModule {}
