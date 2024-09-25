import { Injectable } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IconDefinition, icon as faIcon, icon } from '@fortawesome/fontawesome-svg-core';
import { IconPicker, Item } from '../../../typings';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  public loadedIcons: Map<string,Item> = new Map();

  constructor(private library: FaIconLibrary) {}

  async addFAIcon(item: Item, itemValue: IconPicker): Promise<void> {
    const iconKey:string = item.label;
    const itemName = itemValue.name;
    const iconName:string = itemName.substring(0,3) == "fa-" ? itemName.slice(3) : itemName;
    let iconProvider:string = 'fab'; //default library to brand icons

    try {
      //Check brand icons
      const iconModule = await import('@fortawesome/free-brands-svg-icons');
      let iconValue = (iconModule as any)[`fa${iconName.charAt(0).toUpperCase() + iconName.slice(1)}`] as IconDefinition;
      //if icon not found check brand icons
      if(!iconValue)
      {
        const iconModule = await import('@fortawesome/free-solid-svg-icons');
        iconValue = (iconModule as any)[`fa${iconName.charAt(0).toUpperCase() + iconName.slice(1)}`] as IconDefinition;
        iconProvider = 'fas';
      }


      if (iconValue) {
        this.library.addIcons(iconValue);
        const iconPicker:IconPicker = {provider: iconProvider, name: iconValue.iconName}
        item.value = iconPicker;
        this.loadedIcons.set(iconKey.toLowerCase(), item);
      } else {
        console.warn(`Icon '${iconName}' not found`);
      }
    } catch (error) {
      console.error(`Error loading icon '${iconName}':`, error);
    }
  }

  async addIconList(iconList:Item[]) {
    //manually add question icon to fontawesome library
    const iconModule = await import('@fortawesome/free-solid-svg-icons');
    let iconValue = (iconModule as any)['faQuestion'] as IconDefinition;
    this.library.addIcons(iconValue);

    for (const item of iconList) {
      if (!this.loadedIcons.has(item.label)) {
        if (item.value?.name && item.value.name.slice(0, 2) == 'fa') {
          await this.addFAIcon(item, item.value);
        }
        else {
          this.loadedIcons.set(item.label.toLowerCase(), item);
        }
      }
    }
  }
}
