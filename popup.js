// Saves options to chrome.storage.sync
function save_options() {
  var background_option = document.getElementById('background_option').value;
  chrome.storage.sync.set({
    background: background_option
  }, function() {
    // Update status to let user know options were saved
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 2000);
  });
}

// Restores selected option from chrome.storage
function restore_options() {
  chrome.storage.sync.get({
    background: background_option
  }, function(items) {
    document.getElementById('background_option').value = items.background;
  });
}
// Runs restoration when page loads
document.addEventListener('DOMContentLoaded', restore_options);
// Runs save when save button is clicked
document.getElementById('save').addEventListener('click',
    save_options);