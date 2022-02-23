import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: Product[], filterText: string ): Product[] {
    // filterText = filterText ? filterText.toLocaleLowerCase() : null;
    // return filterText
    //   ? value.filter(
    //       (p: Product) => p.name.toLocaleLowerCase().indexOf(filterText) !== -1
    //     )
    //   : value;
    if (!value) {
      return [];
    }
    if (!filterText) {
      return value;
    }
    filterText = filterText.toLocaleLowerCase();
    return value.filter(p => {
      return p.name!.toLocaleLowerCase().includes(filterText);
    });
  }
}
