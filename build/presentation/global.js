app.register("global", function() {

  function getCurrent() {
    const id = app.slideshow.get();
    const length = app.slideshow.getSize();
    return {
      id,
      index: parseInt(id.substring(1, 3)),
      length
    };
  }

  function emitNavigation() {
    const current = getCurrent();
    app.registry.get('ag-references').close();
    app.registry.get('ag-navigation').onEnter(current);
    app.registry.get('ag-menu').onEnter(current);
    app.registry.get('ag-header').onEnter(current);
  }

  app.on('enter:element', event => {
    emitNavigation();
  });

  return {
    clearOverlay: function() {
      app.registry.get('ag-menu').onClearOverlay();
    }
  }
  
});
