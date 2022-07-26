import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';
import { Post } from './post';

@Pipe({
  name: 'postFilter'
})
export class PostFilterPipe implements PipeTransform {
  
  transform(value: Post[], filterText:string):Post[] {
    filterText=filterText?filterText.toLocaleLowerCase():"a"; // filtertext varsa küçük harfe çevir yoksa null dönder
    return filterText?value.filter((p:Post)=>p.title.toLocaleLowerCase().indexOf(filterText)!=-1):value;
  }


  
}
