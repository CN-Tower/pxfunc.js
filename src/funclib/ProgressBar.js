exports=module.exports=ProgressBar;function ProgressBar(t,r){this.stream=r.stream||process.stderr;if(typeof r=="number"){var e=r;r={};r.total=e}else{r=r||{};if("string"!=typeof t)throw new Error("format required");if("number"!=typeof r.total)throw new Error("total required")}this.fmt=t;this.curr=r.curr||0;this.total=r.total;this.width=r.width||this.total;this.clear=r.clear;this.chars={complete:r.complete||"=",incomplete:r.incomplete||"-",head:r.head||(r.complete||"=")};this.renderThrottle=r.renderThrottle!==0?r.renderThrottle||16:0;this.lastRender=-Infinity;this.callback=r.callback||function(){};this.tokens={};this.lastDraw=""}ProgressBar.prototype.tick=function(t,r){if(t!==0)t=t||1;if("object"==typeof t)r=t,t=1;if(r)this.tokens=r;if(0==this.curr)this.start=new Date;this.curr+=t;this.render();if(this.curr>=this.total){this.render(undefined,true);this.complete=true;this.terminate();this.callback(this);return}};ProgressBar.prototype.render=function(t,r){r=r!==undefined?r:false;if(t)this.tokens=t;if(!this.stream.isTTY)return;var e=Date.now();var s=e-this.lastRender;if(!r&&s<this.renderThrottle){return}else{this.lastRender=e}var i=this.curr/this.total;i=Math.min(Math.max(i,0),1);var a=Math.floor(i*100);var h,o,n;var l=new Date-this.start;var c=a==100?0:l*(this.total/this.curr-1);var m=this.curr/(l/1e3);var p=this.fmt.replace(":current",this.curr).replace(":total",this.total).replace(":elapsed",isNaN(l)?"0.0":(l/1e3).toFixed(1)).replace(":eta",isNaN(c)||!isFinite(c)?"0.0":(c/1e3).toFixed(1)).replace(":percent",a.toFixed(0)+"%").replace(":rate",Math.round(m));var f=Math.max(0,this.stream.columns-p.replace(":bar","").length);if(f&&process.platform==="win32"){f=f-1}var u=Math.min(this.width,f);n=Math.round(u*i);o=Array(Math.max(0,n+1)).join(this.chars.complete);h=Array(Math.max(0,u-n+1)).join(this.chars.incomplete);if(n>0)o=o.slice(0,-1)+this.chars.head;p=p.replace(":bar",o+h);if(this.tokens)for(var d in this.tokens)p=p.replace(":"+d,this.tokens[d]);if(this.lastDraw!==p){this.stream.cursorTo(0);this.stream.write(p);this.stream.clearLine(1);this.lastDraw=p}};ProgressBar.prototype.update=function(t,r){var e=Math.floor(t*this.total);var s=e-this.curr;this.tick(s,r)};ProgressBar.prototype.interrupt=function(t){this.stream.clearLine();this.stream.cursorTo(0);this.stream.write(t);this.stream.write("\n");this.stream.write(this.lastDraw)};ProgressBar.prototype.terminate=function(){if(this.clear){if(this.stream.clearLine){this.stream.clearLine();this.stream.cursorTo(0)}}else{this.stream.write("\n")}};