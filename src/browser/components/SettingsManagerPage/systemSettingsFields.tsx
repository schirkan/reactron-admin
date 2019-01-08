import { IFieldDefinition, IInputComponentProps } from '@schirkan/reactron-interfaces';
import moment from 'moment';
import momentTimezone from 'moment-timezone';
import * as React from 'react';
import { PageInputControl } from './PageInputControl';

interface ITimezone {
  value: string;
  text: string;
}

const timezoneNames = momentTimezone.tz.names();
const timezones: ITimezone[] = [];

timezoneNames.forEach(timezone => {
  timezones.push({
    text: "(GMT" + moment.tz(timezone).format('Z') + ") " + timezone.replace('_', ' '),
    value: timezone
  });
});

timezones.sort((a, b) => a.text.localeCompare(b.text));

class FormattedTime extends React.Component<IInputComponentProps> {
  public render() {
    const value = this.props.value || 0;
    let hour: any = Math.floor(value / 60);
    let minutes: any = value % 60;

    if (hour < 10) {
      hour = '0' + hour;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    return (
      <span>{hour} : {minutes}</span>
    );
  }
}

export const systemSettingsFields: IFieldDefinition[] = [{
  description: 'Localized text, time format and number format',
  displayName: 'Language',
  name: 'lang',
  valueType: 'string',
  values: [
    { value: 'de', text: 'German' },
    { value: 'en', text: 'English' },
    { value: 'fr', text: 'French' },
    { value: 'es', text: 'Spanish' },
    { value: 'it', text: 'Italian' },
    { value: 'ru', text: 'Russian' },
  ]
  // }, {
  //   description: 'Location',
  //   displayName: 'Location',
  //   name: 'location',
  //   valueType: 'string'
}, {
  description: 'Timezone',
  displayName: 'Timezone',
  name: 'timezone',
  valueType: 'string',
  values: [...timezones]
}, {
  description: 'Page to show on startup',
  displayName: 'Startup page',
  name: 'startupPath',
  valueType: 'string',
  inputControl: PageInputControl
}, {
  description: 'Autorefresh',
  displayName: 'Autorefresh',
  name: 'autorefresh',
  isArray: true,
  valueType: 'object',
  fields: [{
    description: 'from',
    displayName: 'from',
    name: 'from',
    valueType: 'number',
    minValue: 0,
    maxValue: 1440,
    stepSize: 15,
    defaultValue: 480,
    inputControl: FormattedTime
  }, {
    description: 'to',
    displayName: 'to',
    name: 'to',
    valueType: 'number',
    minValue: 0,
    maxValue: 1440,
    stepSize: 15,
    defaultValue: 600,
    inputControl: FormattedTime
  }, {
    description: 'interval',
    displayName: 'interval',
    name: 'interval',
    valueType: 'number',
    minValue: 1,
    maxValue: 120,
    stepSize: 1,
    defaultValue: 10
  }]
}];