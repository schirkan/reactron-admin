import { IFieldDefinition } from '@schirkan/reactron-interfaces';
import moment from 'moment';
import momentTimezone from 'moment-timezone';
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

export const systemSettingsFields: IFieldDefinition[] = [{
  description: 'Language',
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
  description: 'Path of page to show on startup',
  displayName: 'Startup page',
  name: 'startupPath',
  valueType: 'string',
  inputControl: PageInputControl
}];