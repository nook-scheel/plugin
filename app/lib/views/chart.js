App.ChartView = Em.View.extend({
  classNames: ['chart'],
  flotrOptions: {
    xaxis: {
      ticks: [],
      labelsAngle: 60
    },
    mouse : {
      track : true,
      relative : true
    },
    yaxis : {
      min : 0,
      autoscaleMargin : 1
    }
  },
  currentData: [],
  content: [
    {"data":[],"label":"Количество просмотров, шт","lines":{"fill":true,"show":true},"points":{"show":true}},
    {"data":[],"label":"Длительность, сек","lines":{"fill":true,"show":true},"points":{"show":true}},
    {"data":[],"label":"Длительность живого, сек","lines":{"fill":true,"show":true},"points":{"show":true}},
    {"data":[],"label":"Закрыто, шт","lines":{"fill":true,"show":true},"points":{"show":true}},
    {"data":[],"label":"Просмотрено полностью, шт","lines":{"fill":true,"show":true},"points":{"show":true}},
    {"data":[],"label":"Ушли со страницы, шт","lines":{"fill":true,"show":true},"points":{"show":true}}
  ],
  didInsertElement: function() {
    this.addObserver('content', this, '_contentDidChange');
    return this._draw();
  },
  _contentDidChange: function() {
    return this._draw();
  },
  _draw: function() {
    var content = this.get('content');
    if (content) {
      var layer = this.$();
      Flotr.draw(layer, content, this.get('flotrOptions'));
      //$.plot(layer, content, this.plotOptions);
      //this.previousPoint = null;
      //return layer.bind("plothover", this._plotHover);
    }
  },
  _plotHover: function(event, pos, item) {
    var value, x, y;
    if (item && this.previousPoint !== item.dataIndex) {
      this.previousPoint = item.dataIndex;
      value = item.datapoint[1].toFixed(0);
      x = item.pageX;
      y = item.pageY - 10;
      if (this.tooltip) {
        this.tooltip.hide();
        delete this.tooltip;
      }
      this.tooltip = new App.ChartTooltip(x, y, value);
      return this.tooltip.show();
    } else if (!item) {
      this.previousPoint = null;
      if (this.tooltip) {
        return this.tooltip.hide();
      }
    }
  }
});
