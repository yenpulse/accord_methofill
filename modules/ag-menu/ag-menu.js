app.register("ag-menu", function() {
  
  let menu = null;
  let piToggle = null;
  let piState = false;
  let referencesToggle = null;
  let current = null;


  function showMenu() {
    menu.classList.remove('hidden');
  }
  function hideMenu() {
    menu.classList.add('hidden');
  }
  function updateCurrent() {
    var path = app.getPath();
    var parts = path.split('/');
    if (parts[1] && current !== parts[1]) {
      const section = parts[1];
      const newSection = menu.querySelector('.menu [data-section="' + section + '"]');
      if (current) current.classList.remove('selected');
      if (newSection) {
        current = newSection;
        current.classList.add('selected');
      }
    }
    if (referencesToggle) closeReferences();
  }
  function closeReferences() {
    app.registry.get("ag-references").close();
    referencesToggle.classList.remove('selected');
  }

  return {
    events: {
      "tap [data-goto]": "navigate",
      "tap .pi-toggle": "togglePi",
      "tap .references-toggle": "toggleReferences",
    },
    onRender: () => {
      menu = document.querySelector('[data-module="ag-menu"]');
      piToggle = document.querySelector('[data-module="ag-menu"] .pi-toggle');
      referencesToggle = document.querySelector('[data-module="ag-menu"] .references-toggle');
    },
    onEnter: (currentData) => {
      if (currentData.index < 1) {
        hideMenu();
      } else {
        showMenu();
      }
      updateCurrent(currentData);
    },
    navigate: function(event) {
      var link = event.target;
      var path;
      var regex = new RegExp(/app\./);

      if (link) {
        if (!link.hasAttribute('data-goto')) link = link.parentNode;
        path = link.getAttribute('data-goto');
        if (path) {
          if (regex.test(path)) {
              eval(path);
          }
          else {
            app.goTo(path);
          }
        }
      }
      this.closePi();
    },
    onClearOverlay: function() {
      if (piState) {
        this.closePi();
      }
    },
    togglePi: function(event) {
      if (!piState) {
        this.openPi();
      } else {
        this.closePi();
      }
    },
    openPi: function() {
      const overlay = app.view.get('overlay-pi');
      if (overlay && piToggle) {
        this.closeReferences();
        overlay.open(`<img class="popup-background" src="assets/overlay-pi.png" alt="...">`);
        piToggle.classList.add('selected');
        piState = true;
      }
    },
    closePi: function() {
      const overlay = app.view.get('overlay-pi');
      if (overlay && piToggle) {
        overlay.forceClose();
        piToggle.classList.remove('selected');
        piState = false;
      }
    },
    toggleReferences: function() {
      if (!piState) {
        const toggle = app.registry.get("ag-references").toggle();
        if (toggle) referencesToggle.classList.toggle('selected');
      }
    },
    closeReferences: closeReferences
  }

});