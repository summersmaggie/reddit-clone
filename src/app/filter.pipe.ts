import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post.model'

@Pipe({
  name: "hotCategory"
})

export class HotCategoryPipe implements PipeTransform {

  transform(allPosts: Post[]) {
    return allPosts.filter(post => post.tags);
  }
}
