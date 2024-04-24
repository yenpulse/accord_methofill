app.register("S09_Subcutaneous_Route", function () {
  return {
    events: {
      "tap [data-overlay]": "toggleOverlay",
    },
    toggleOverlay: function (event) {
      const overlayId = event.target.getAttribute("data-overlay");
      const overlay = app.view.get("overlay-content");
      if (overlay)
        overlay.open(
          `<img class="popup-background" src="assets/${overlayId}.jpg" alt="...">`
        );
    },
  };
});
