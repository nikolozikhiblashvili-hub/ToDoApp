import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  imports: [FormsModule,CommonModule],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {
 newtext:string='';
todo:{text: string; done: boolean; isEditing:boolean }[]=[]

addtext(){
  if(this.newtext.trim()!==''){
   this.todo.push({text:this.newtext,done:false,isEditing:false})
 this.newtext='';
  }
}
deleteToDo(index:number){
this.todo.splice(index, 1);
}

toggleDone(item:any){
   item.done = !item.done;
}
edit(item:any){
  item.isEditing=true;
}
save(item:any){
  item.isEditing=false;
}
}
