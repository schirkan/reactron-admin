interface IModuleCatalogItem {
  name: string;
  displayName: string;
  url: string;
}

// TODO load from url
export const catalog: IModuleCatalogItem[] = [{
  name: 'reactron-openweathermap',
  displayName: 'Weather (openweathermap.com)',
  url: 'https://github.com/schirkan/reactron-openweathermap'
}, {
  name: 'reactron-analog-clock',
  displayName: 'Analog clock',
  url: 'https://github.com/schirkan/reactron-analog-clock'
}, {
  name: 'reactron-scifi-dashboard',
  displayName: 'Scifi-Dashboard',
  url: 'https://github.com/schirkan/reactron-scifi-dashboard'
}, {
  name: 'reactron-bring-shopping-list',
  displayName: 'Shopping list (getbring.com)',
  url: 'https://github.com/schirkan/reactron-bring-shopping-list'
}, {
  name: 'reactron-vrr-departure',
  displayName: 'Public transport (vrr.de)',
  url: 'https://github.com/schirkan/reactron-vrr-departure'
}, {
  name: 'reactron-icalendar',
  displayName: 'Calendar (via iCal-URL)',
  url: 'https://github.com/schirkan/reactron-icalendar'
}, {
  name: 'reactron-rss-feed',
  displayName: 'RSS Feed',
  url: 'https://github.com/schirkan/reactron-rss-feed'
}];
