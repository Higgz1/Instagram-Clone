import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-comments-modal',
  templateUrl: './comments-modal.page.html',
  styleUrls: ['./comments-modal.page.scss'],
})
export class CommentsModalPage implements OnInit {

  user;


  get comment() {
    return this.commentForm.get("comment");
  }

  commentForm = this.formBuilder.group({
    comment: ['', [Validators.required, Validators.maxLength(100)]],
  });

  constructor(
    public modalController: ModalController,
    private formBuilder: FormBuilder) { 
      
    }

  ngOnInit() {
    console.log(this.comment)
  }

  close() {
    this.modalController.dismiss();
  }

  submit() {
    console.log(this.commentForm.value);
  }
}
