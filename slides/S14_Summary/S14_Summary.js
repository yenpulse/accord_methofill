app.register("S14_Summary", function() {

  const references = '1. Data on ﬁle UK-01466. 2. Data on ﬁle UK-01467. 3. Methoﬁll<sup>&reg;</sup> solution for injection in pre-ﬁlled injector SmPC. February 2022. <br>4. Data on ﬁle UK-01465. 5. EMJ. 2021;6(3):33–39.';

  return {
    onEnter: function(el) {
      app.registry.get("ag-navigation").updateBackground('light');
      app.registry.get("ag-references").setReferences(references);
    }
  }

});