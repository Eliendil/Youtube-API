!function(e){var i={};function n(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=i,n.d=function(e,i,t){n.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,i){if(1&i&&(e=n(e)),8&i)return e;if(4&i&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var o in e)n.d(t,o,function(i){return e[i]}.bind(null,o));return t},n.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(i,"a",i),i},n.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},n.p="",n(n.s=12)}([function(e,i){e.exports=function(){window.body=document.body,window.searchContainer=document.createElement("div"),searchContainer.className="search-container",body.appendChild(searchContainer),window.searchInput=document.createElement("input"),searchInput.id="search-input",searchInput.placeholder="Search ",searchInput.type="text",searchContainer.appendChild(searchInput),window.searchButton=document.createElement("button"),searchButton.className="search-button",searchButton.type="search-button",searchButton.innerHTML="<i class='fas fa-search fa-2x'></i>",searchContainer.appendChild(searchButton),window.mainContainerBig=document.createElement("div"),mainContainerBig.className="main-container",body.appendChild(mainContainerBig),window.mainContainerMid=document.createElement("div"),mainContainerMid.className="main-container",body.appendChild(mainContainerMid),window.mainContainerSmall=document.createElement("div"),mainContainerSmall.className="main-container",body.appendChild(mainContainerSmall),window.errorContainer=document.createElement("div"),errorContainer.className="error-container",errorContainer.innerHTML="NO RESULT",body.appendChild(errorContainer),window.navigationConatiner=document.createElement("div"),navigationConatiner.className="navigation-conatiner",body.appendChild(navigationConatiner),window.videosListBig=document.createElement("ul"),videosListBig.className="videos-list",navigationConatiner.appendChild(videosListBig),window.videosListMid=document.createElement("ul"),videosListMid.className="videos-list",navigationConatiner.appendChild(videosListMid),window.videosListSmall=document.createElement("ul"),videosListSmall.className="videos-list",navigationConatiner.appendChild(videosListSmall),window.videoElementsBig=document.createElement("div"),videoElementsBig.className="video-elements",body.appendChild(videoElementsBig),window.videoElementsMid=document.createElement("div"),videoElementsMid.className="video-elements",body.appendChild(videoElementsMid),window.videoElementsSmall=document.createElement("div"),videoElementsSmall.className="video-elements",body.appendChild(videoElementsSmall)}},function(e,i){e.exports=function(){window.pageToken=0,window.newX=0,window.start=null,window.videoCountBig=0,window.videoCountMid=0,window.videoCountSmall=0,window.listCountBig=0,window.listCountMid=0,window.listCountSmall=0,window.allVideosArr=[],window.statVideosArr=[],window.allVideosStr="",window.searchItems=document.getElementById("search-input").value,window.videoContainerArrBig=document.getElementsByClassName("video-container-big"),window.videoContainerArrMid=document.getElementsByClassName("video-container-mid"),window.videoContainerArrSmall=document.getElementsByClassName("video-container-small"),window.videoElementsArrBig=document.getElementsByClassName("video-element-big"),window.videoElementsArrMid=document.getElementsByClassName("video-element-mid"),window.videoElementsArrSmall=document.getElementsByClassName("video-element-small"),window.mainContainerArr=document.getElementsByClassName("main-container"),window.listContainerArrBig=document.getElementsByClassName("videos-list-li-big"),window.listContainerArrMid=document.getElementsByClassName("videos-list-li-mid"),window.listContainerArrSmall=document.getElementsByClassName("videos-list-li-small"),window.listContainerArr=document.getElementsByClassName("videos-list")}},function(e,i){e.exports=function(){document.body.clientWidth<=1200||(mainContainerArr[0].style.display="flex",mainContainerArr[1].style.display="none",mainContainerArr[2].style.display="none",listContainerArr[0].style.display="flex",listContainerArr[1].style.display="none",listContainerArr[2].style.display="none"),document.body.clientWidth<1200&&document.body.clientWidth>550&&(mainContainerArr[0].style.display="none",mainContainerArr[1].style.display="flex",mainContainerArr[2].style.display="none",listContainerArr[0].style.display="none",listContainerArr[1].style.display="flex",listContainerArr[2].style.display="none"),document.body.clientWidth<550&&(mainContainerArr[0].style.display="none",mainContainerArr[1].style.display="none",mainContainerArr[2].style.display="flex",listContainerArr[0].style.display="none",listContainerArr[1].style.display="none",listContainerArr[2].style.display="flex"),console.log(mainContainerArr)}},function(e,i){e.exports=function(){pageToken=0,newX=0,start=null,listCountBig=0,listCountMid=0,listCountSmall=0,videoCountBig=0,videoCountMid=0,videoCountSmall=0,videosListBig.innerHTML="",videosListMid.innerHTML="",videosListSmall.innerHTML="",mainContainerBig.innerHTML="",mainContainerMid.innerHTML="",mainContainerSmall.innerHTML=""}},function(e,i){e.exports=function(){for(var e=0,i=0;i<videoContainerArrBig.length;i+=1){for(var n=e;n<e+4;n+=1)videoContainerArrBig[i].appendChild(videoElementsArrBig[n]);e+=4}e=0;for(var t=0;t<videoContainerArrMid.length;t+=1){for(var o=e;o<e+2;o+=1)videoContainerArrMid[t].appendChild(videoElementsArrMid[o]);e+=2}e=0;for(var r=0;r<videoContainerArrSmall.length;r+=1){for(var l=e;l<e+1;l+=1)videoContainerArrSmall[r].appendChild(videoElementsArrSmall[l]);e+=1}}},function(e,i){e.exports=function(e){for(var i=0;i<16;i+=1){if(i%4==0){var n=document.createElement("div");n.className="video-container-big",mainContainerBig.appendChild(n)}if(i%2==0){var t=document.createElement("div");t.className="video-container-mid",mainContainerMid.appendChild(t)}if(i%1==0){var o=document.createElement("div");o.className="video-container-small",mainContainerSmall.appendChild(o)}var r="".concat('<img class="video-container-img" src="').concat(e[i].snippet.thumbnails.high.url,'">')+'<a class="video-container-link" href="https://www.youtube.com/watch?v='.concat(e[i].id.videoId,'" ')+'target="_blank" >'.concat(e[i].snippet.title,"</a>")+'<ul class="video-container-ul"><li class="video-container-ul-li">'+'<i class="fas fa-user fa-2x" style="color: black"></i>'.concat(e[i].snippet.channelTitle)+'</li><li class="video-container-ul-li">'+'<i class="fas fa-calendar-alt fa-2x" style="color: black"></i>'.concat(e[i].snippet.publishedAt.substr(0,10))+'</li><li class="video-container-ul-li">'+'<i class="fas fa-eye fa-2x" style="color: black"></i>'.concat(statVideosArr[i].statistics.viewCount)+"</li></ul>"+'<p class="video-container-text">'.concat(e[i].snippet.description,"</p>"),l=document.createElement("div");l.className="video-element-big",l.innerHTML=r,videoElementsBig.appendChild(l);var a=document.createElement("div");a.className="video-element-mid",a.innerHTML=r,videoElementsMid.appendChild(a);var s=document.createElement("div");s.className="video-element-small",s.innerHTML=r,videoElementsSmall.appendChild(s)}}},function(e,i){e.exports=function(){for(var e=0;e<listContainerArrBig.length;e+=1)listContainerArrBig[e].innerHTML="".concat(e+1),0===e&&(listContainerArrBig[e].style.backgroundColor="grey");for(var i=0;i<listContainerArrSmall.length;i+=1)listContainerArrSmall[i].innerHTML="".concat(i+1),0===i&&(listContainerArrMid[i].style.backgroundColor="grey");for(var n=0;n<listContainerArrMid.length;n+=1)listContainerArrMid[n].innerHTML="".concat(n+1),0===n&&(listContainerArrSmall[n].style.backgroundColor="grey")}},function(e,i){e.exports=function(e,i,n,t){window.searchItems=document.getElementById("search-input").value,fetch("https://content.googleapis.com/youtube/v3/search?maxResults=30&part=snippet&q=".concat(searchItems,"&key=AIzaSyCCqDJQC4lVsw4pDBHE9D7NbPnlLtqO4yE")).then(function(e){return e.json()}).then(function(o){pageToken=o.nextPageToken,allVideosArr=o.items,allVideosStr=allVideosArr.map(function(e){return e.id.videoId}),fetch("https://content.googleapis.com/youtube/v3/videos?&part=statistics&&id=".concat(allVideosStr,"&key=AIzaSyCCqDJQC4lVsw4pDBHE9D7NbPnlLtqO4yE")).then(function(e){return e.json()}).then(function(o){if(statVideosArr=o.items,statVideosArr.length<17)mainContainerBig.style.display="none",mainContainerMid.style.display="none",mainContainerSmall.style.display="none",errorContainer.style.display="flex";else{e(allVideosArr);for(var r=0;r<4;r+=1){var l=document.createElement("li");l.className="videos-list-li-big",0===r&&(l.style.backgroundColor="gold"),videosListBig.appendChild(l);var a=document.createElement("li");a.className="videos-list-li-mid",0===r&&(a.style.backgroundColor="gold"),videosListMid.appendChild(a);var s=document.createElement("li");s.className="videos-list-li-small",0===r&&(s.style.backgroundColor="gold"),videosListSmall.appendChild(s)}errorContainer.style.display="none",n(),t(),i(),videoContainerArrBig[0].style.opacity="1",videoContainerArrBig[0].style.transform="scale(1)",videoContainerArrMid[0].style.opacity="1",videoContainerArrMid[0].style.transform="scale(1)",videoContainerArrSmall[0].style.opacity="1",videoContainerArrSmall[0].style.transform="scale(1)"}})})}},function(e,i){e.exports=function(e,i,n,t,o,r,l,a,s){function d(e){newX=e.pageX,mainContainerBig.onselectstart=function(){return!1},mainContainerMid.onselectstart=function(){return!1},mainContainerSmall.onselectstart=function(){return!1}}function C(e){e.pageX<newX?s():e.pageX>newX&&a(l,n,o),newX=e.pageX}mainContainerBig.addEventListener("mouseup",C),mainContainerBig.addEventListener("mousedown",d),mainContainerMid.addEventListener("mouseup",C),mainContainerMid.addEventListener("mousedown",d),mainContainerSmall.addEventListener("mouseup",C),mainContainerSmall.addEventListener("mousedown",d),window.addEventListener("touchstart",function(e){1===e.touches.length?start=e.touches.item(0).clientX:start=null}),window.addEventListener("touchend",function(e){if(start){var i=e.changedTouches.item(0).clientX;i>start+20&&s(),i<start-20&&a(l,n,o)}}),document.addEventListener("keydown",function(l){switch(l.key){case"Enter":e(n,t,o,r),i()}}),searchButton.addEventListener("click",function(){e(n,t,o,r),i()}),window.addEventListener("resize",function(){"flex"!==mainContainerBig.style.display&&"flex"!==mainContainerMid.style.display&&"flex"!==mainContainerSmall.style.display||r()})}},function(e,i){e.exports=function(e,i){var n=document.getElementById("search-input").value;fetch("https://content.googleapis.com/youtube/v3/search?pageToken=".concat(pageToken,"&maxResults=30&part=snippet&q=").concat(n,"&key=AIzaSyCCqDJQC4lVsw4pDBHE9D7NbPnlLtqO4yE")).then(function(e){return e.json()}).then(function(e){pageToken=e.nextPageToken,allVideosArr=e.items,allVideosStr=allVideosArr.map(function(e){return e.id.videoId}),fetch("https://content.googleapis.com/youtube/v3/videos?&part=statistics&&id=".concat(allVideosStr,"&key=AIzaSyCCqDJQC4lVsw4pDBHE9D7NbPnlLtqO4yE")).then(function(e){return e.json()}).then(function(e){statVideosArr=e.items})}).then(function(){e(allVideosArr),i()})}},function(e,i){e.exports=function(e,i,n){if("flex"===mainContainerBig.style.display||"flex"===mainContainerMid.style.display||"flex"===mainContainerSmall.style.display){if("flex"===mainContainerArr[0].style.display&&(videoCountBig+=1,videoCountMid+=2,videoCountSmall+=4,videoContainerArrBig[videoCountBig].style.opacity="1",videoContainerArrBig[videoCountBig].style.transform="scale(1)",videoContainerArrBig[videoCountBig-1].style.transform="scale(0)",videoContainerArrBig[videoCountBig-1].style.opacity="0",videoContainerArrMid[videoCountMid-2].style.transform="scale(0)",videoContainerArrMid[videoCountMid-2].style.opacity="0",videoContainerArrMid[videoCountMid].style.opacity="1",videoContainerArrMid[videoCountMid].style.transform="scale(1)",videoContainerArrSmall[videoCountSmall-4].style.transform="scale(0)",videoContainerArrSmall[videoCountSmall-4].style.opacity="0",videoContainerArrSmall[videoCountSmall].style.opacity="1",videoContainerArrSmall[videoCountSmall].style.transform="scale(1)",listCountBig+=1,listCountMid+=2,listCountSmall+=4),"flex"===mainContainerArr[1].style.display&&(videoCountMid+=1,videoContainerArrMid[videoCountMid].style.opacity="1",videoContainerArrMid[videoCountMid].style.transform="scale(1)",videoContainerArrMid[videoCountMid-1].style.transform="scale(0)",videoContainerArrMid[videoCountMid-1].style.opacity="0",0!==videoCountMid&&videoCountMid%2==0&&(videoCountBig+=1,listCountBig+=1,videoContainerArrBig[videoCountBig].style.opacity="1",videoContainerArrBig[videoCountBig].style.transform="scale(1)",videoContainerArrBig[videoCountBig-1].style.transform="scale(0)",videoContainerArrBig[videoCountBig-1].style.opacity="0"),videoCountSmall+=2,videoContainerArrSmall[videoCountSmall-2].style.transform="scale(0)",videoContainerArrSmall[videoCountSmall-2].style.opacity="0",videoContainerArrSmall[videoCountSmall].style.opacity="1",videoContainerArrSmall[videoCountSmall].style.transform="scale(1)",listCountMid+=1,listCountSmall+=2),"flex"===mainContainerArr[2].style.display&&(videoCountSmall+=1,videoContainerArrSmall[videoCountSmall].style.opacity="1",videoContainerArrSmall[videoCountSmall].style.transform="scale(1)",videoContainerArrSmall[videoCountSmall-1].style.transform="scale(0)",videoContainerArrSmall[videoCountSmall-1].style.opacity="0",listCountSmall+=1,0!==videoCountSmall&&videoCountSmall%2==0&&(videoCountMid+=1,listCountMid+=1,videoContainerArrMid[videoCountMid].style.opacity="1",videoContainerArrMid[videoCountMid].style.transform="scale(1)",videoContainerArrMid[videoCountMid-1].style.transform="scale(0)",videoContainerArrMid[videoCountMid-1].style.opacity="0"),0!==videoCountSmall&&videoCountSmall%4==0&&(videoCountBig+=1,listCountBig+=1,videoContainerArrBig[videoCountBig].style.opacity="1",videoContainerArrBig[videoCountBig].style.transform="scale(1)",videoContainerArrBig[videoCountBig-1].style.transform="scale(0)",videoContainerArrBig[videoCountBig-1].style.opacity="0")),videoContainerArrBig[videoCountBig+2]||e(i,n),listCountBig>3){for(var t=0;t<listContainerArrBig.length;t+=1)listContainerArrBig[t].innerHTML="".concat(videoCountBig+t+1),listContainerArrBig[t].style.backgroundColor="whitesmoke";listContainerArrBig[0].style.backgroundColor="gold",listCountBig=0}else 0!==listCountBig&&(listContainerArrBig[listCountBig-1].style.backgroundColor="whitesmoke",listContainerArrBig[listCountBig].style.backgroundColor="gold");if(0!==listCountMid&&listCountMid>3){for(var o=0;o<listContainerArrMid.length;o+=1)listContainerArrMid[o].innerHTML="".concat(videoCountMid+o+1),listContainerArrMid[o].style.backgroundColor="whitesmoke";listContainerArrMid[0].style.backgroundColor="gold",listCountMid=0}else 0!==listCountMid&&listCountMid<4&&("flex"===mainContainerArr[0].style.display?listContainerArrMid[listCountMid-2].style.backgroundColor="whitesmoke":listContainerArrMid[listCountMid-1].style.backgroundColor="whitesmoke",listContainerArrMid[listCountMid].style.backgroundColor="gold");if(listCountSmall>3){for(var r=0;r<listContainerArrSmall.length;r+=1)listContainerArrSmall[r].innerHTML="".concat(videoCountSmall+r+1),listContainerArrSmall[r].style.backgroundColor="whitesmoke";listContainerArrSmall[0].style.backgroundColor="gold",listCountSmall=0}else 0!==listCountSmall&&listCountSmall<4&&("flex"===mainContainerArr[1].style.display?listContainerArrSmall[listCountSmall-2].style.backgroundColor="whitesmoke":listContainerArrSmall[listCountSmall-1].style.backgroundColor="whitesmoke",listContainerArrSmall[listCountSmall].style.backgroundColor="gold")}}},function(e,i){e.exports=function(){if("flex"===mainContainerBig.style.display||"flex"===mainContainerMid.style.display||"flex"===mainContainerSmall.style.display){if("flex"===mainContainerArr[0].style.display&&videoCountBig>0&&(videoContainerArrBig[videoCountBig].style.transform="scale(0)",videoContainerArrBig[videoCountBig].style.opacity="0",videoContainerArrBig[videoCountBig-1].style.opacity="1",videoContainerArrBig[videoCountBig-1].style.transform="scale(1)",videoContainerArrMid[videoCountMid].style.transform="scale(0)",videoContainerArrMid[videoCountMid].style.opacity="0",videoContainerArrMid[videoCountMid-2].style.opacity="1",videoContainerArrMid[videoCountMid-2].style.transform="scale(1)",videoContainerArrSmall[videoCountSmall].style.transform="scale(0)",videoContainerArrSmall[videoCountSmall].style.opacity="0",videoContainerArrSmall[videoCountSmall-4].style.opacity="1",videoContainerArrSmall[videoCountSmall-4].style.transform="scale(1)",listCountBig-=1,listCountMid-=2,listCountSmall-=4,videoCountBig-=1,videoCountMid-=2,videoCountSmall-=4),"flex"===mainContainerArr[1].style.display&&videoCountMid>0&&(videoContainerArrMid[videoCountMid].style.transform="scale(0)",videoContainerArrMid[videoCountMid].style.opacity="0",videoContainerArrMid[videoCountMid-1].style.opacity="1",videoContainerArrMid[videoCountMid-1].style.transform="scale(1)",videoCountMid%2==0&&(videoContainerArrBig[videoCountBig-1].style.opacity="1",videoContainerArrBig[videoCountBig-1].style.transform="scale(1)",videoContainerArrBig[videoCountBig].style.transform="scale(0)",videoContainerArrBig[videoCountBig].style.opacity="0",videoCountBig-=1,listCountBig-=1),videoContainerArrSmall[videoCountSmall].style.transform="scale(0)",videoContainerArrSmall[videoCountSmall].style.opacity="0",videoContainerArrSmall[videoCountSmall-2].style.opacity="1",videoContainerArrSmall[videoCountSmall-2].style.transform="scale(1)",videoCountSmall-=2,videoCountMid-=1,listCountMid-=1,listCountSmall-=2),"flex"===mainContainerArr[2].style.display&&videoCountSmall>0&&(videoContainerArrSmall[videoCountSmall-1].style.opacity="1",videoContainerArrSmall[videoCountSmall-1].style.transform="scale(1)",videoContainerArrSmall[videoCountSmall].style.transform="scale(0)",videoContainerArrSmall[videoCountSmall].style.opacity="0",videoCountSmall%2==0&&(videoContainerArrMid[videoCountMid-1].style.opacity="1",videoContainerArrMid[videoCountMid-1].style.transform="scale(1)",videoContainerArrMid[videoCountMid].style.transform="scale(0)",videoContainerArrMid[videoCountMid].style.opacity="0",videoCountMid-=1,listCountMid-=1),videoCountSmall%4==0&&(videoContainerArrBig[videoCountBig-1].style.opacity="1",videoContainerArrBig[videoCountBig-1].style.transform="scale(1)",videoContainerArrBig[videoCountBig].style.transform="scale(0)",videoContainerArrBig[videoCountBig].style.opacity="0",videoCountBig-=1,listCountBig-=1),listCountSmall-=1,videoCountSmall-=1),listCountBig<0){for(var e=0;e<listContainerArrBig.length;e+=1)listContainerArrBig[e].innerHTML="".concat(videoCountBig+e-2),listContainerArrBig[e].style.backgroundColor="whitesmoke";listContainerArrBig[3].style.backgroundColor="gold",listCountBig=3}else listCountBig<3&&listCountBig>-1&&(listContainerArrBig[listCountBig+1].style.backgroundColor="whitesmoke",listContainerArrBig[listCountBig].style.backgroundColor="gold");if(listCountMid<0){if("flex"===mainContainerArr[0].style.display)for(var i=0;i<listContainerArrMid.length;i+=1)listContainerArrMid[i].innerHTML="".concat(videoCountMid+i-1),listContainerArrMid[i].style.backgroundColor="whitesmoke";else for(var n=0;n<listContainerArrMid.length;n+=1)listContainerArrMid[n].innerHTML="".concat(videoCountMid+n-2),listContainerArrMid[n].style.backgroundColor="whitesmoke";listContainerArrMid[4-Math.abs(listCountMid)].style.backgroundColor="gold",listCountMid=4-Math.abs(listCountMid)}else listCountMid<3&&listCountMid>-1&&("flex"===mainContainerArr[0].style.display&&(listContainerArrMid[listCountMid+2].style.backgroundColor="whitesmoke",listContainerArrMid[listCountMid].style.backgroundColor="gold"),"flex"===mainContainerArr[2].style.display?((videoCountSmall+1)%2==0&&(listContainerArrMid[listCountMid+1].style.backgroundColor="whitesmoke"),listContainerArrMid[listCountMid].style.backgroundColor="gold"):(listContainerArrMid[listCountMid+1].style.backgroundColor="whitesmoke",listContainerArrMid[listCountMid].style.backgroundColor="gold"));if(listCountSmall<0){if("flex"===mainContainerArr[0].style.display)for(var t=0;t<listContainerArrSmall.length;t+=1)listContainerArrSmall[t].innerHTML="".concat(videoCountSmall+t+1),listContainerArrSmall[t].style.backgroundColor="whitesmoke";else if("flex"===mainContainerArr[1].style.display)for(var o=0;o<listContainerArrSmall.length;o+=1)listContainerArrSmall[o].innerHTML="".concat(videoCountSmall+o-1),listContainerArrSmall[o].style.backgroundColor="whitesmoke";else if("flex"===mainContainerArr[2].style.display)for(var r=0;r<listContainerArrSmall.length;r+=1)listContainerArrSmall[r].innerHTML="".concat(videoCountSmall+r-2),listContainerArrSmall[r].style.backgroundColor="whitesmoke";listContainerArrSmall[4-Math.abs(listCountSmall)].style.backgroundColor="gold",listCountSmall=4-Math.abs(listCountSmall)}else listCountSmall<3&&listCountSmall>-1&&("flex"===mainContainerArr[1].style.display?(listContainerArrSmall[listCountSmall+2].style.backgroundColor="whitesmoke",listContainerArrSmall[listCountSmall].style.backgroundColor="gold"):(listContainerArrSmall[listCountSmall+1].style.backgroundColor="whitesmoke",listContainerArrSmall[listCountSmall].style.backgroundColor="gold"))}}},function(e,i,n){"use strict";n.r(i);var t=n(0),o=n.n(t),r=n(1),l=n.n(r),a=n(2),s=n.n(a),d=n(3),C=n.n(d),m=n(4),c=n.n(m),u=n(5),v=n.n(u),y=n(6),g=n.n(y),p=n(7),A=n.n(p),f=n(8),M=n.n(f),S=n(9),B=n.n(S),h=n(10),w=n.n(h),b=n(11),k=n.n(b);o()(),l()(),M()(A.a,C.a,v.a,g.a,c.a,s.a,B.a,w.a,k.a)}]);