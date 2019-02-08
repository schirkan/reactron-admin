interface IModuleCatalogItem {
  name: string;
  title: string;
  url: string;
}

// TODO load from url
export const catalog: IModuleCatalogItem[] = [{
  name: 'reactron-openweathermap',
  title: 'Weather (openweathermap.com)',
  url: 'https://github.com/schirkan/reactron-openweathermap'
}, {
  name: 'reactron-analog-clock',
  title: 'Analog clock',
  url: 'https://github.com/schirkan/reactron-analog-clock'
}, {
  name: 'reactron-scifi-dashboard',
  title: 'Scifi-Dashboard',
  url: 'https://github.com/schirkan/reactron-scifi-dashboard'
}, {
  name: 'reactron-bring-shopping-list',
  title: 'Shopping list (getbring.com)',
  url: 'https://github.com/schirkan/reactron-bring-shopping-list'
}, {
  name: 'reactron-vrr-departure',
  title: 'Public transport (vrr.de)',
  url: 'https://github.com/schirkan/reactron-vrr-departure'
}, {
  name: 'reactron-icalendar',
  title: 'Calendar (via iCal-URL)',
  url: 'https://github.com/schirkan/reactron-icalendar'
}, {
  name: 'reactron-rss-feed',
  title: 'RSS Feed',
  url: 'https://github.com/schirkan/reactron-rss-feed'
}];
