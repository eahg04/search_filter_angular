import { Component, Input,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <button class="btn btn-primary" >{{label}}</button>
  `,
  styleUrls: ['./button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ButtonComponent{
  @Input() label!:string;

 
 // constructor() { }
  // ngOnChanges(changes : SimpleChanges):void{
  //   console.log('Changes ->', changes)
  // }
  // ngOnDestroy(): void {
  //   console.log('OnDestroy')
  // }
  // ngOnInit(): void {
  //   console.log('OnInit')
  // } 
  

}
