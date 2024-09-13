import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  customSort<T>(array: T[], propertyName: keyof T): T[] {
    return array.sort((a, b) => {
      const valueA = a[propertyName];
      const valueB = b[propertyName];

      if (valueA instanceof Date && valueB instanceof Date) {
        return valueB.getTime() - valueA.getTime()-valueB.getTime();
      }

      if (typeof valueA === 'string' && !isNaN(Date.parse(valueA)) && typeof valueB === 'string' && !isNaN(Date.parse(valueB))) {
        return new Date(valueB).getTime() - new Date(valueA).getTime();
      }

      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return valueA - valueB;
      }

      return 0;
    });
  }

  isEmpty(value:any) {
    return (value == null || (typeof value === "string" && value.trim().length === 0));
  }
}
