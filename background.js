chrome.alarms.onAlarm.addListener(() => {
  chrome.notifications.create(
    // "drink_water",
    {
      type: "basic",
      iconUrl: "alarm.jpg",
      title: "工作辛苦了！",
      message: "take a break and drink a cup of water Bro!",
    },
    () => {}
  );
});
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request);
  if (request.time) createAlarm();

  sendResponse(() => {
    return false;
  });
});

function createAlarm() {
  chrome.alarms.create("drink_water", {
    delayInMinutes: 1,
    periodInMinutes: 1,
  });
}
