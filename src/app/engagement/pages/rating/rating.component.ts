
import { Component } from '@angular/core';
import {AddRatingComponent} from '../../components/add-rating/add-rating.component';
import {ToolbarComponent} from '../../../public/components/toolbar/toolbar.component';

/**
 * Page component for event ratings
 * @class RatingComponent
 * @description
 * This component serves as the container page for the rating functionality.
 * It includes the toolbar for navigation and the add-rating form component
 * to allow users to submit ratings for events they have attended.
 */
@Component({
  selector: 'app-rating',
  imports: [
    AddRatingComponent,
    ToolbarComponent
  ],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent {
}
