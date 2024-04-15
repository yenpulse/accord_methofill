app.register("S06_RA_Impact", function() {

  return {
    onEnter: function(el) {
      app.registry.get("ag-navigation").updateBackground('light');
      app.registry.get("ag-references").setReferences('1. Erol AM, <i>et al.</i> <i>Acta Rheumatol Port.</i> 2016;41:328–337.');
    }
  }

});