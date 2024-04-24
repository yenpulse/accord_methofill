app.register("S13_Device_004", function () {
  return {
    navigate: function (event) {
      var link = event.target;
      var path;
      var regex = new RegExp(/app\./);

      if (link) {
        if (!link.hasAttribute("data-goto")) link = link.parentNode;
        path = link.getAttribute("data-goto");
        if (path) {
          if (regex.test(path)) {
            eval(path);
          } else {
            app.goTo(path);
          }
        }
      }
    },
  };
});
