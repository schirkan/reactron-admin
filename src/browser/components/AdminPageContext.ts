import { IReactronComponentContext } from "@schirkan/reactron-interfaces";
import * as React from "react";

export const AdminPageContext = React.createContext<IReactronComponentContext>({} as IReactronComponentContext);