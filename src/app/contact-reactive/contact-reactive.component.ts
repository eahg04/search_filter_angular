import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})
export class ContactReactiveComponent implements OnInit {
  contactForm! :FormGroup;

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.initForm();
    this.onPathValue();
    //this.onSetValue();
  } 

  onPathValue(): void {
    this.contactForm.patchValue({ name : 'Edwin'});
  }
  onSetValue(): void {
    //this.contactForm.setValue({ comment : 'Hello world'});
  }

  onSubmit(): void{
    console.log('Form ->' ,this.contactForm.value);
  }

  initForm():FormGroup{
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      checkAdult: ['', [Validators.required]],
      department: [''],
      comment: ['', [Validators.required]]
    })
  }
}