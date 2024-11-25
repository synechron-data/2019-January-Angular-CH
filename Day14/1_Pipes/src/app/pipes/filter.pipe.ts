import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {
    transform(value: string[], args = ""): Array<string> {
        return value.filter(n => n.toLowerCase().startsWith(args.toLowerCase()));
    }
}