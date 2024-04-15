app.register("S10_Device", function() {

  const references = [
    '1. Data on ﬁle UK-01466. 2. Methoﬁll<sup>&reg;</sup> solution for injection in pre-ﬁlled injector. SmPC. February 2022. <br>3. Data on ﬁle UK-01467.',
    '1. Data on ﬁle UK-01466. 2. Methoﬁll<sup>&reg;</sup> solution for injection in pre-ﬁlled injector. SmPC. February 2022. <br>3. Data on ﬁle UK-01467. 4. Erol AM, <i>et al.</i> <i>Acta Rheumatol Port.</i> 2016;4:328–337.',
    '1. Data on ﬁle UK-01466. 2. Methoﬁll<sup>&reg;</sup> solution for injection in pre-ﬁlled injector. SmPC. February 2022. 3. Data on ﬁle UK-01467. <br>4. Müller Ladner U, <i>et al.</i> <i>Open Rheumatol J.</i> 2010;4:15–22. 5. Jørgensen JT, <i>et al.</i> <i>Ann Pharmacother.</i> 1996;30:729–732. <br>6. Heise T, <i>et al.</i> <i>Diabetes Obes Metab.</i> 2014;16:971–976.',
    '1. Data on ﬁle UK-01466. 2. Methoﬁll<sup>&reg;</sup> solution for injection in pre-ﬁlled injector. SmPC. February 2022. <br>3. Data on ﬁle UK-01467. 4. Methoﬁll<sup>&reg;</sup> package leaﬂet: Information for the user. February 2022. <br>Available from: https://www.medicines.org.uk/emc/product/9057/smpc Last accessed: March 2022.',
    '1. Data on ﬁle UK-01466. 2. Methoﬁll<sup>&reg;</sup> solution for injection in pre-ﬁlled injector. SmPC. February 2022. <br>3. Data on ﬁle UK-01467. 4. Data on ﬁle UK-01464.',
  ];
  const screenReferences = [ 0, 0, 0, 1, 0, 2, 3, 4 ];

  let screenIndex = 0;
  let backgrounds = [];
  let button = null;

  function getReferences(screen) {
    const referenceIndex = screenReferences[screen];
    return references[referenceIndex];
  }

  return {
    events: {
      "tap [data-screen]": "updateScreen",
      "tap [data-overlay]": "toggleOverlay"
    },
    onRender: function(el) {
      backgrounds = document.querySelectorAll('#S10_Device .background');
      button = document.querySelector('#S10_Device .overlay-button');
    },
    onEnter: function(el) {
      app.registry.get("ag-navigation").updateBackground('light');
      app.registry.get("ag-references").setReferences(getReferences(0));
    },
    onExit: function() {
      this.setScreen(0);
      this.setButton(false);
    },
    updateScreen: function(event) {
      const screen = parseInt(event.target.getAttribute('data-screen'));
      this.setScreen(screen);
      this.toggleButton(event);
    },
    setScreen: function(screen) {
      if (screen !== screenIndex) {
        backgrounds[screen].classList.add('active');
        backgrounds[screenIndex].classList.remove('active');
        screenIndex = screen;
        app.registry.get("ag-references").setReferences(getReferences(screenIndex));
      }
    },
    toggleOverlay: function(event) {
      const overlayId = event.target.getAttribute('data-overlay');
      const overlay = app.view.get('overlay-content');
      if (overlay)
        overlay.open(`<img class="popup-background" src="assets/${overlayId}.png" alt="...">`);
    },
    toggleButton: function(event) {
      const buttonState = event.target.getAttribute('data-button') === '1';
      this.setButton(buttonState);
    },
    setButton: function(state) {
      const action = state ? 'remove': 'add';
      button.classList[action]('hidden');
    }
  }

});