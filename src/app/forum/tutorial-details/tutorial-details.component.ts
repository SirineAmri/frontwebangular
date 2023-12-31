import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TutorialService } from '../../service/tutorial.service';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {
  currentTutorial: any = null;
  message = '';

  constructor(
    private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.message = '';
    this.getTutorial(this.route.snapshot.paramMap.get('id'));
  }

  getTutorial(id: any): void {
    this.tutorialService.get(id).subscribe(
      (data: any) => {
        this.currentTutorial = data;
        console.log(data);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  updatePublished(status: any): void {
    const data = {
      title: this.currentTutorial.title,
      description: this.currentTutorial.description,
      published: status
    };

    this.tutorialService.update(this.currentTutorial.id, data).subscribe(
      (response: any) => {
        this.currentTutorial.published = status;
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  updateTutorial(): void {
    this.tutorialService.update(this.currentTutorial.id, this.currentTutorial).subscribe(
      (response: any) => {
        console.log(response);
        this.message = 'The tutorial was updated successfully!';
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  deleteTutorial(): void {
    this.tutorialService.delete(this.currentTutorial.id).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['/tutorials']);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
