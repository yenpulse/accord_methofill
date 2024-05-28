app.register("ag-overlay", function() {

  return {
    publish: {
        width: "100%",
        height: "100%",
        noBackground: true,
        noCloseBtn: false,
        content: "No content available"
    },
    events: {
        "tap": "close"
    },
    states: [
        {
            id: "ag-overlay-open",
            onEnter: function(data) {

              if (data && data.slideId) {
                // Load slide into overlay
                this.slideId = data.slideId;

                this.$('.ag-overlay-content')[0].innerHTML = "";

                // Need to remove slide if already loaded in presentation
                app.slide.remove(this.slideId, true);
                app.dom.insert([{id: this.slideId}], false, this.$('.ag-overlay-content')[0]);

              } else if (data && data.content) {
                // Load content string into overlay
                this.content = data.content;
                this.$('.ag-overlay-content')[0].innerHTML = this.content;
              }

              var slide;
              app.lock();
              if (this.slideId) {
                  setTimeout(function() {
                    slide = app.slide.get(this.slideId);
                    if (slide && slide.onEnter) slide.onEnter(app.dom.get(this.slideId));
                  }.bind(this),300);
              }
              app.trigger('open:overlay', {id: this.id, slideId: this.slideId});
            },
            onExit: function() {
              var slide;
              app.trigger('close:overlay', {id: this.id, slideId: this.slideId});
              app.unlock();
              if (this.slideId) {
                slide = app.slide.get(this.slideId);
                if (slide && slide.onExit) slide.onExit(app.dom.get(this.slideId));
                app.slide.remove(this.slideId, true);
              }
            }
        }
    ],
    close: function(event) {
        if (event.target.classList.contains('ag-overlay-close')) {
            this.reset();
            app.registry.get('global').clearOverlay();
        }
    },
    // Force close overlay
    forceClose: function() {
        this.reset();
    },
    // Open provided HTML
    open: function(content) {
      this.content = content || this.props.content;
      this.goTo('ag-overlay-open', { 'content' : this.content });
    },
    // Load a slide into the overlay
    load: function(slideId) {
      this.slideId = slideId;
      this.goTo('ag-overlay-open', { 'slideId' : this.slideId });
    },
    setDimensions: function(width, height) {
      var contentEl = this.$('.ag-overlay-content')[0];
      var closeBtn = this.$('.ag-overlay-x')[0];
      var wMargin;
      var hMargin;
      var wUnit = "%";
      var hUnit = "%";
      // Assume percentage
      if (width < 101) {
        wMargin = (100 - width) / 2;
      }
      // otherwise treat as pixels
      {
        // Only supports % for now
      }
      // Assume percentage
      if (height < 101) {
        hMargin = (100 - height) / 2;
      }
      // otherwise treat as pixels
      {
        // Only supports % for now
      }

      if (contentEl) {
        contentEl.style.top = hMargin + hUnit;
        contentEl.style.bottom = hMargin + hUnit;
        contentEl.style.left = wMargin + wUnit;
        contentEl.style.right = wMargin + wUnit;
      }
      if (contentEl) {
        closeBtn.style.top = (hMargin - 1) + hUnit;
        closeBtn.style.right = (wMargin - 1) + wUnit;
      }

    },
    onRender: function(el) {
      var content = this.el.innerHTML;
      var html = '';
      var width = parseInt(this.props.width);
      var height = parseInt(this.props.height);
      if (!this.props.noBackground) {
        html = '<div class="ag-overlay-background ag-overlay-close"></div>';
      }
          html += '<div class="ag-overlay-content">';
              html += content;
          html += '</div>';
      if (!this.props.noCloseBtn) {
        html += '<div class="ag-overlay-x ag-overlay-close"></div>';
      }
      // html += '</div>';
      this.el.innerHTML = html;
      this.setDimensions(width, height);
    },
    onRemove: function(el) {

    },
    onEnter: function(el) {

    },
    onExit: function(el) {

    }
  }

});
