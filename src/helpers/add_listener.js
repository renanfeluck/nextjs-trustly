PayWithMyBank.addPanelListener(function (command, event) {
  if (command === 'event' && event.type === 'new_location') {
    if (event.data.indexOf('#success') === 0) {
      alert('success!');
    } else {
      alert('cancel!');
    }
    return false;
  }
});
