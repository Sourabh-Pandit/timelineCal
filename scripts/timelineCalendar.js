
const calendar = new FullCalendar.Calendar(calendarEl, {
  columnHeader:true,
  columnHeaderText: date => `${date.getDate()}-${months[date.getMonth()]} ${date.getFullYear()}`,
  contentHeight: 'auto',
  defaultView: "timeGridDay",
  eventLimit: true,
  header:{ left: 'prev', center: 'today', right: 'next'},
  googleCalendarApiKey: googleApikey,
  events: googleCalendarId,
  nowIndicator:'true',
  now : changeNow,
  plugins: ['timeGrid', 'bootstrap', 'googleCalendar'],
  slotDuration: "00:30:00",
  timeZone: 'local',
  themeStyle:'bootstrap'
});

calendar.render();
