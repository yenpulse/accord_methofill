app.register("ag-references", function() {

  let contentLength = 0;

  return {
    setReferences: function(references) {
      contentLength = references.length;
      app.view.get('references-overlay').el.innerHTML = `<div class="references-content">${references}</div>`;
    },
    toggle: function() {
      if (contentLength > 0) {
        app.view.get('references-overlay').el.classList.toggle('hidden');
      }
      return contentLength > 0;
    },
    close: function() {
      app.view.get('references-overlay').el.classList.add('hidden');
    }
  }

});