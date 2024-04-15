app.register("S02_Subcutaneous", function() {

  return {
    onEnter: function(el) {
      app.registry.get("ag-navigation").updateBackground('light');
      app.registry.get("ag-references").setReferences('1. Pincus T, <i>et al.</i> <i>Bull Hosp Jt Dis.</i> 2013;71(Suppl 1):S9−19.');
    }
  }

});