!function(t){function e(t){var e=this;NIApi.common.resolveValues(t.getAttribute("url")).then(function(t){e.trackerUrl=t,e.loadTracker()})}var a=!1;e.prototype.loadTracker=function(){var t=this;if(!a){var e=document.createElement("script");e.setAttribute("type","text/javascript"),e.onload=function(){t.tag=new ATInternet.Tracker.Tag},e.src=this.trackerUrl,document.head.appendChild(e),a=!0}},e.prototype.trackPage=function(t,e,a){this.tag.page.send({name:t+"-"+a,customObject:{page:t,url:e,title:a}})},e.prototype.trackEvent=function(t,e,a,r){this.tag.click.send({type:t,customObject:{category:t,action:e,label:a,value:r}})},t.Class.XitiTracker=e}(webpublicationNamespace);