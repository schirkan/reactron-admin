import * as SvgIcons from '@fortawesome/free-solid-svg-icons';
import * as FontAwesome from '@fortawesome/react-fontawesome';
import { IReactronComponentContext } from '@schirkan/reactron-interfaces';
import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
import { AdminPageContext } from '../AdminPageContext';
import ModuleManagerPage from '../ModuleManagerPage/ModuleManagerPage';
import Navigation from '../Navigation/Navigation';
import PageManagerPage from '../PageManagerPage/PageManagerPage';
import RoundButton from '../RoundButton/RoundButton';
import ServiceManagerPage from '../ServiceManagerPage/ServiceManagerPage';
import SettingsManagerPage from '../SettingsManagerPage/SettingsManagerPage';
import SystemPage from '../SystemPage/SystemPage';

import './Admin.scss';

export default class Admin extends React.Component {
  public context: IReactronComponentContext;

    public render() {
    return (
      <AdminPageContext.Provider value={this.context}>
        <section className="Admin">
          <header>
            <RoundButton to="/">
              <FontAwesome.FontAwesomeIcon icon={SvgIcons.faHome} /> Home
            </RoundButton>
            <div className="title">Reactron Admin</div>
          </header>
          <Navigation />
          <div className="content">
            <Switch>
              <Route path="/admin/ModuleManager" component={ModuleManagerPage} />
              <Route path="/admin/ServiceManager" component={ServiceManagerPage} />
              <Route path="/admin/Pages" component={PageManagerPage} />
              <Route path="/admin/Settings" component={SettingsManagerPage} />
              <Route path="/admin/System" component={SystemPage} />
              <Redirect to="/admin/ModuleManager" />
            </Switch>
          </div>
        </section>
      </AdminPageContext.Provider>
    );
  }
}
