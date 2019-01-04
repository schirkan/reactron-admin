import * as RegularIcons from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IInputComponentProps } from '@schirkan/reactron-interfaces';
import * as React from 'react';
import UiButton from 'src/browser/components/UiButton/UiButton';

export class PasswordInputControl extends React.Component<IInputComponentProps, { show: boolean }> {
  constructor(props: IInputComponentProps) {
    super(props);
    this.state = { show: false };
    this.onInputChange = this.onInputChange.bind(this);
    this.toggleText = this.toggleText.bind(this);
  }

  private onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.props.valueChange(this.props.definition, e.currentTarget.value);
  }

  private toggleText() {
    this.setState(state => ({ show: !state.show }));
  }

  public render() {
    return (
      <div style={{ display: 'flex' }}>
        <input style={{ width: '100%' }} type={this.state.show ? 'text' : 'password'} id={this.props.uniqueId} value={this.props.value} onChange={this.onInputChange} />
        <UiButton onClick={this.toggleText}><FontAwesomeIcon icon={this.state.show ? RegularIcons.faEyeSlash : RegularIcons.faEye} /></UiButton>
      </div>
    );
  }
}
