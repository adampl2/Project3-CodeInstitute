function showConfirmDeleteModal(noteId) {
  let deleteUrl = "/delete-note/" + noteId;
  $('#delete-confirm-button').attr('href', deleteUrl);
  $('#confirmDeleteModal').modal('show');
}

/** Hides flash message after 5 seconds of inactivity */

setTimeout(function() {
  $('#flashMessage').fadeOut('fast');
}, 5000);





