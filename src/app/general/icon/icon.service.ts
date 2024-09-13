import { Injectable } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IconDefinition, icon as faIcon } from '@fortawesome/fontawesome-svg-core';
import { IconPicker, Item } from '../../../typings';

@Injectable({
  providedIn: 'root'
})
export class IconService {
  public loadedIcons: Map<string,IconDefinition> = new Map();

  constructor(private library: FaIconLibrary) {}

  async addFAIcon(iconKey: string): Promise<void> {
    const iconName:string = iconKey.substring(0,3) == "fa-" ? iconKey.slice(3) : iconKey;

    if (this.loadedIcons.has(iconKey)) {
      return;
    }

    try {
      //check brand icons
      const iconModule = await import('@fortawesome/free-brands-svg-icons');
      let iconValue = (iconModule as any)[`fa${iconName.charAt(0).toUpperCase() + iconName.slice(1)}`] as IconDefinition;

      //if icon not found check brand icons
      if(!iconValue)
      {
        const iconModule = await import('@fortawesome/free-solid-svg-icons');
        iconValue = (iconModule as any)[`fa${iconName.charAt(0).toUpperCase() + iconName.slice(1)}`] as IconDefinition;
      }

      if (iconValue) {
        this.library.addIcons(iconValue);
        this.loadedIcons.set(iconKey, iconValue);
      } else {
        console.warn(`Icon '${iconName}' not found`);
      }
    } catch (error) {
      console.error(`Error loading icon '${iconName}':`, error);
    }
  }

  async addIconList(iconList:Item[]) {
    await this.addFAIcon('fa-question');

    for (const item of iconList) {
      if (item.value?.name && item.value.name.slice(0, 2) == 'fa') {
        await this.addFAIcon(item.value?.name);
      }
    }
  }
}
