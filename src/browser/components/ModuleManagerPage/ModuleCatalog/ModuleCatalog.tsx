import * as BrandIcons from '@fortawesome/free-brands-svg-icons';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IModuleRepositoryItem } from '@schirkan/reactron-interfaces';
import * as React from 'react';
import UiButton from '../../UiButton/UiButton';
import UiCard from '../../UiCard/UiCard';
import UiCardTitle from '../../UiCardTitle/UiCardTitle';
import { catalog } from './catalog';

import './ModuleCatalog.scss';

export interface IModuleCatalogProps {
  modules: IModuleRepositoryItem[];
  onAdd: (url: string) => void;
}

export default class ModuleCatalog extends React.Component<IModuleCatalogProps> {
  private renderCatalogItems() {
    const items: JSX.Element[] = catalog.map(item => {
      const installed = this.props.modules.some(x => x.name === item.name);
      const install = () => this.props.onAdd(item.url);
      return (
        <div className="ModuleCatalogItem" key={item.name}>
          <a className="clickable" href={item.url} target="_blank">
            <FontAwesomeIcon icon={BrandIcons.faGithub} /> {item.displayName}
          </a>
          <UiButton disabled={installed} onClick={install}>
            <FontAwesomeIcon icon={SolidIcons.faDownload} /> Add
          </UiButton>
        </div>
      );
    });

    return items;
  }

  public render() {
    return (
      <UiCard className="ModuleCatalog">
        <UiCardTitle><FontAwesomeIcon icon={SolidIcons.faCubes} /> Module Catalog</UiCardTitle>
        {this.renderCatalogItems()}
      </UiCard>
    );
  }
}
