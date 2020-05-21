
const calendar = new FullCalendar.Calendar(calendarEl, {
  columnHeader:true,
  columnHeaderText: date => `${date.getDate()}-${months[date.getMonth()]} ${date.getFullYear()}`,
  contentHeight: 'auto',
  defaultView: "timeGridDay",
  eventLimit: true,
  header:{ left: 'prev', center: 'today', right: 'next'},
  googleCalendarApiKey: googleApikey,
  eventSources: [
                {
                  googleCalendarId: googleCalendarId_1,
                  className: gCalClass_1
                },
                {
                  googleCalendarId: googleCalendarId_2,
                  className: gCalClass_2
                }
                ],
  nowIndicator:'true',
  now : changeNow,
  plugins: ['timeGrid', 'bootstrap', 'googleCalendar'],
  slotDuration: "00:30:00",
  timeZone: 'local',
  themeStyle:'bootstrap'
});

calendar.render();
