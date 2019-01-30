import { IWebComponentOptions, IWebPageOptions } from "@schirkan/reactron-interfaces";
import * as React from "react";

export class WebComponentFormContextData {
  constructor(public parentComponent?: IWebComponentOptions, public parentPage?: IWebPageOptions) { }

  public getParentId() {
    return this.parentComponent && this.parentComponent.id || this.parentPage && this.parentPage.id || '';
  }
}

export const WebComponentFormContext = React.createContext<WebComponentFormContextData>(new WebComponentFormContextData());