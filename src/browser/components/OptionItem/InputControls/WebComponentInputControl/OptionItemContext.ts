import { IWebComponentOptions } from "@schirkan/reactron-interfaces";
import * as React from "react";

export class WebComponentFormContextData {
    public parentComponent: IWebComponentOptions;
}

export const WebComponentFormContext = React.createContext<WebComponentFormContextData>(new WebComponentFormContextData());