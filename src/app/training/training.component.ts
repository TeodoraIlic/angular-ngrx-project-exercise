import { Component, OnInit } from '@angular/core';
import { TrainingService } from './training.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
  ongoingTraining = false;
  exerciseSub: Subscription;
  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.exerciseSub = this.trainingService.exerciseChanged.subscribe(ex=>{
      if(ex){
        this.ongoingTraining = true;
      }else{
        this.ongoingTraining = false;
      }
    });
  }

}
