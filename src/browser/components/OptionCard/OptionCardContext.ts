import { IWebComponentOptions, IReactronComponentContext } from "@schirkan/reactron-interfaces";
import * as React from "react";
import { SimpleEvent } from "./SimpleEvent";

export class OptionsCardContextData {
  public onSave = new SimpleEvent();
  // public onValidate = new SimpleEvent();
  private removedWebComponents: IWebComponentOptions[] = [];
  private changedWebComponents: IWebComponentOptions[] = [];
  private createdWebComponents: IWebComponentOptions[] = [];
  private components: IWebComponentOptions[] = [];

  constructor(private context?: IReactronComponentContext) {
    this.saveWebComponents = this.saveWebComponents.bind(this);
    this.onSave.subscribe(this.saveWebComponents);
  }

  public async init() {
    if (this.context) {
      this.components = await this.context.services.components.getWebComponentOptions();
    }
  }

  public getClipBoardComponents() {
    return this.components.filter(x => !x.parentId);
  }

  private async saveWebComponents(): Promise<void> {
    console.log('removedWebComponents', this.removedWebComponents);
    console.log('createdWebComponents', this.createdWebComponents);
    console.log('changedWebComponents', this.changedWebComponents);

    if (this.context) {
      // delete webComponents
      for (const item of this.removedWebComponents) {
        await this.context.services.components.deleteWebComponentOptions(item.id);
      }

      // add webComponents
      for (const item of this.createdWebComponents) {
        await this.context.services.components.setWebComponentOptions(item);
      }

      // change webComponents
      for (const item of this.changedWebComponents) {
        await this.context.services.components.setWebComponentOptions(item);
      }
    }

    // reset context
    this.removedWebComponents = [];
    this.changedWebComponents = [];
    this.createdWebComponents = [];
  }

  public webComponentRemoved(item: IWebComponentOptions) {
    console.log('webComponentRemoved', item);

    // check if previously created
    const createdItemIndex = this.createdWebComponents.findIndex(x => x.id === item.id);
    if (createdItemIndex >= 0) {
      // remove from createdWebComponents
      this.createdWebComponents.splice(createdItemIndex, 1);
    } else {
      // add to removedWebComponents
      this.removedWebComponents.push(item);
    }

    // remove from list
    this.components = this.components.filter(x => x.id !== item.id);
  }

  public webComponentChanged(item: IWebComponentOptions) {
    console.log('webComponentChanged', item);

    // check if previously created
    const createdItemIndex = this.createdWebComponents.findIndex(x => x.id === item.id);
    if (createdItemIndex >= 0) {
      // remove old item from createdWebComponents
      this.createdWebComponents.splice(createdItemIndex, 1);
      // and add new item to createdWebComponents
      this.changedWebComponents.push(item);
    } else {
      // remove previously changed items
      this.changedWebComponents = this.changedWebComponents.filter(x => x.id !== item.id);
      // add to changedWebComponents
      this.changedWebComponents.push(item);
    }

    // check if previously removed
    const removedItemIndex = this.removedWebComponents.findIndex(x => x.id === item.id);
    if (removedItemIndex >= 0) {
      // remove old item from removedWebComponents
      this.removedWebComponents.splice(removedItemIndex, 1);
    }

    // add / update list
    const existingComponentIndex = this.components.findIndex(x => x.id === item.id);
    if (existingComponentIndex >= 0) {
      this.components[existingComponentIndex] = item;
    } else {
      this.components.push(item);
    }
  }

  public webComponentCreated(item: IWebComponentOptions) {
    console.log('webComponentCreated', item);

    // add to createdWebComponents
    this.createdWebComponents.push(item);
  }
}

export const OptionCardContext = React.createContext<OptionsCardContextData>(new OptionsCardContextData());