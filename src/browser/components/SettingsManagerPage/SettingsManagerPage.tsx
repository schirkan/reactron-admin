import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import { ISystemSettings, IReactronComponentContext } from '@schirkan/reactron-interfaces';
import * as React from 'react';
import OptionCard from '../OptionCard/OptionCard';
import UiFlowLayout from '../UiFlowLayout/UiFlowLayout';
import UiLoadingCard from '../UiLoadingCard/UiLoadingCard';
import { systemSettingsFields } from './systemSettingsFields';
import { AdminPageContext } from '../AdminPageContext';

import './SettingsManagerPage.scss';

export interface IModuleManagerPageState {
  loading: boolean;
  settings?: ISystemSettings;
}

export default class SettingsManagerPage extends React.Component<any, IModuleManagerPageState>{
  public static contextType = AdminPageContext;
  public context: IReactronComponentContext;

  constructor(props: any) {
    super(props);

    this.state = { loading: true };

    this.loadSettings = this.loadSettings.bind(this);
    this.saveSettings = this.saveSettings.bind(this);
  }

  public componentDidMount() {
    this.loadSettings();
  }

  public loadSettings(): Promise<void> {
    return this.context.services.application.getSettings()
      .then(settings => this.setState({ settings, loading: false }))
      .catch(); // TODO
  }

  public saveSettings(newSettings: ISystemSettings): Promise<void> {
    return this.context.services.application.setSettings(newSettings)
      .catch(); // TODO
  }

  public render() {
    return (
      <section className="SettingsManagerPage">
        {this.state.loading && (
          <UiFlowLayout>
            <UiLoadingCard />
          </UiFlowLayout>
        )}
        {this.state.settings && (
          <UiFlowLayout>
            <OptionCard options={this.state.settings} onSave={this.saveSettings}
              fields={systemSettingsFields} icon={SolidIcons.faCogs}
              title="Settings" showReset={true}
            />
          </UiFlowLayout>
        )}
      </section>
    );
  }
}
