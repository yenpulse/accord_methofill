app.register("S01_Home", function() {

  return {
    onEnter: function(el) {
      app.registry.get("ag-navigation").updateBackground('dark');
      app.registry.get("ag-references").setReferences('');
    }
  }

});