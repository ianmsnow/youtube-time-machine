//Written as part of Clock operation by 3rd party
var context = {
  tranx: 0,
  trany: 0,
  arc: 0,
  data: [],
  translate: function(x, y) {
    this.tranx += x;
    this.trany += y;
  },
  rotate: function(arc) {
    this.arc += arc;
  },
  save: function() {
    this.data.push(this.tranx, this.trany, this.arc);
  },
  restore: function() {
    this.arc = this.data.pop();
    this.trany = this.data.pop();
    this.tranx = this.data.pop();
  },
  div: null
};

function Line(ctx, x1, y1, length, lineWidth, colour) {
  var ctx = ctx;
  var x1 = x1;
  var y1 = y1;
  var x2 = x2;
  var y2 = y2;
  var lineWidth = lineWidth;
  var colour = colour;
  var drawn = false;
  var line = null;
  this.draw = function() {
    if(ctx.moveTo) { // FF, Opera, Chrome, Safari
      ctx.strokeStyle = colour;
      ctx.lineWidth = lineWidth;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x1 + length, y1);
      ctx.lineCap = 'round';
      ctx.stroke();
    } else { // IE
      if(!drawn) {
        line = document.createElement('v:line');
        line.from = (ctx.tranx - (y1 * Math.sin(ctx.arc)) + (x1 * Math.cos(ctx.arc))).toString() + ";" + (ctx.trany + (y1 * Math.cos(ctx.arc)) + (x1 * Math.sin(ctx.arc))).toString();
        line.to = (ctx.tranx - (y1 * Math.sin(ctx.arc)) + (x1 * Math.cos(ctx.arc)) + (length * Math.cos(ctx.arc))).toString() + ";" + (ctx.trany + (y1 * Math.cos(ctx.arc)) + (x1 * Math.sin(ctx.arc)) + (length * Math.sin(ctx.arc))).toString();
        line.strokecolor = colour;
        line.strokeweight = lineWidth / 3 * 2;
        ctx.div.appendChild(line);
        drawn = true;
      } else {
        line.from = (ctx.tranx - (y1 * Math.sin(ctx.arc)) + (x1 * Math.cos(ctx.arc))).toString() + ";" + (ctx.trany + (y1 * Math.cos(ctx.arc)) + (x1 * Math.sin(ctx.arc))).toString();
        line.to = (ctx.tranx - (y1 * Math.sin(ctx.arc)) + (x1 * Math.cos(ctx.arc)) + (length * Math.cos(ctx.arc))).toString() + ";" + (ctx.trany + (y1 * Math.cos(ctx.arc)) + (x1 * Math.sin(ctx.arc)) + (length * Math.sin(ctx.arc))).toString();
      }
    }
  }
};
var jsEvent = {
  addListener: function(element, name_event, callback) {
    if(document.addEventListener) {
      for(var i = 0; i < element.length; i++) {
        element[i].addEventListener(name_event, callback, false);
      }
    } else if(document.attachEvent) {
      for(var i = 0; i < element.length; i++) {
        element[i].attachEvent('on' + name_event, callback);
      }
    } else {
      for(var i = 0; i < element.length; i++) {
        element[i].setAttribute('on' + name_event, callback);
      }
    }
  },
  removeListener: function(element, name_event, callback) {
    if(document.removeEventListener) {
      for(var i = 0; i < element.length; i++) {
        element[i].removeEventListener(name_event, callback, false);
      }
    } else if(document.detachEvent) {
      for(var i = 0; i < element.length; i++) {
        element[i].detachEvent('on' + name_event, callback);
      }
    } else {
      for(var i = 0; i < element.length; i++) {
        element[i].attributes['on' + name_event].value = null;
        element[i].removeAttribute('on' + name_event);
      }
    }
  },
  getEvent: function(evt) {
    return evt || window.event;
  },
  getTarget: function(evt) {
    var target = (typeof evt.target !== 'undefined') ? evt.target : evt.srcElement;
    return target;
  },
  stopPropagation: function(evt) {
    if(evt.stopPropagation) {
      evt.stopPropagation();
    } else if(evt.cancelBubble !== 'undefined') {
      evt.cancelBubble = true;
    }
  },
  preventDefault: function(evt) {
    if(evt.preventDefault) {
      evt.preventDefault();
    } else if(evt.returnValue !== 'undefined') {
      evt.returnValue = false;
    }
  }
};