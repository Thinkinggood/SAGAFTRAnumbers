// Generated by CoffeeScript 1.4.0
(function(){var e,t,n;n=this;t=n.log;e=n.define;e(["jquery"],function(e){var t;t=function(){function t(){}t.onCameraSessionLineItems=function(t){var n,r,i,s,o,u,a,f,l;a=parseInt(e("#num-days").val(),10);s=[];n=0;while(n++<a){o=parseInt(e("#day-"+n+"-num-actors").val(),10);f=parseInt(e("#day-"+n+"-num-extras").val(),10);u=parseInt(e("#day-"+n+"-actors-wardrobe").val(),10);l=parseInt(e("#day-"+n+"-extras-wardrobe").val(),10);r=0;while(r++<o){i={label:"Day "+n+" Principal Actor "+r,first:{label:"Initial Session Fee",price:t.session_actor},items:[]};r<=u&&i.items.push({count:0,label:"Wardrobe Fitting",price:t.actor_wardrobe});s.push(i)}r=0;while(r++<f){i={label:"Day "+n+" General Extra "+r,first:{label:"Initial Session Fee",price:t.session_extra},items:[]};r<=l&&i.items.push({count:0,label:"Wardrobe Fitting",price:t.extra_wardrobe});s.push(i)}}return s};t.offCameraSessionLineItems=function(t){var n,r,i,s,o,u,a;s=parseInt(e("#num-actors").val(),10);u=parseInt(e("#num-versions").val(),10);o=parseInt(e("#num-tags").val(),10);a=0;o>1&&(a=t.tag_2_25);o>25&&(a=t.tag_26_50);o>50&&(a=t.tag_51);i=[];n=0;while(n++<s){r={label:"Principal Actor "+n,first:{label:"Initial Session Fee",price:t.session_actor},items:[]};u-1&&r.items.push({count:u-1,label:"Add'l Versions of the Script",price:t.session_actor});n===1&&a&&r.items.push({count:o-1,label:"Add'l Tags at $ "+a.toFixed(2),price:a});i.push(r)}return i};t.demoSessionLineItems=function(t){var n,r,i,s,o,u;s=parseInt(e("#num-actors").val(),10);o=[];e(".num-characters").each(function(t,n){return o[t]=parseInt(e(n).val(),10)});u=parseInt(e("#num-versions").val(),10);i=[];n=0;while(n++<s){r={label:"Principal Actor "+n,first:{label:"Initial Session Fee",price:t.session_actor},items:[]};o[n-1]-1&&r.items.push({count:o[n-1]-1,label:"Add'l Characters/Voices",price:t.session_actor});u-1&&r.items.push({count:u-1,label:"Add'l Versions of the Script",price:t.session_actor});i.push(r)}return i};t.onCameraUsageLineItems=function(t){var n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N;v=parseInt(e("#num-days").val(),10);d=0;m=0;u=0;while(u++<v){d+=parseInt(e("#day-"+u+"-num-actors").val(),10);m+=parseInt(e("#day-"+u+"-num-extras").val(),10)}N=parseInt(e("#use-type").val(),10);r=-1;a=-1;switch(N){case 0:r=parseInt(e("#broadcast-type").val(),10);break;case 1:a=parseInt(e("#internet-type").val(),10);break;case 2:r=parseInt(e("#broadcast-type").val(),10);a=parseInt(e("#internet-type").val(),10)}l=[];f={label:"",items:[]};switch(r){case 0:f={label:"Wild Spot - 13 week cycle",items:[]};n=e("#markets");b=n.val();h=[];e(b).each(function(e,t){return h[e]=n.find("[value="+t+"]").data("value")});s=[];o=0;i=h.indexOf("Chicago");if(i!==-1){s[s.length]=h.splice(i,1)[0];o=t.wild_13_major_chicago}c=h.indexOf("Los Angeles");if(c!==-1){s[s.length]=h.splice(c,1)[0];o=t.wild_13_major_los_angeles}p=h.indexOf("New York");if(p!==-1){s[s.length]=h.splice(p,1)[0];o=t.wild_13_major_new_york}s.length===2&&(o=t.wild_13_major_any_2);s.length===3&&(o=t.wild_13_major_all_3);o&&f.items.push({count:s.length,label:"Major Markets ("+s.join(", ")+")",price:o});g=h.length?h.reduce(function(e,t){return e+t})-1:0;x=0;g>1&&(x=t.wild_13_unit_2_25);if(g>25||s.length)x=t.wild_13_unit_26;x&&f.items.push({count:g,label:"Add'l Units at $ "+x.toFixed(2),price:x});!o&&!x&&f.items.push({count:0,label:"Please choose broadcast markets.",price:0});break;case 1:f={label:"Local Cable - 13 week cycle",items:[]};S=parseInt(e("#subscribers").val(),10);E=[t.local_1_50k,t.local_50k_100k,t.local_100k_150k,t.local_150k_200k,t.local_200k_250k,t.local_250k_500k,t.local_500k_750k,t.local_750k_1m];w=E[S]||0;d&&f.items.push({count:d,label:"Principal Actors",price:t.session_actor+w});m&&f.items.push({count:m,label:"General Extras",price:t.session_extra+w});break;case 2:f={label:"National Cable - 13 week cycle",items:[]};d&&f.items.push({count:d,label:"Principal Actors",price:t.national_min});m&&f.items.push({count:m,label:"General Extras",price:t.national_min});break;case 3:f={label:"Network Program Commercial",items:[]};y=parseInt(e("#num-uses").val(),10);T=0;y===2&&(T=t.network_2);y===3&&(T=t.network_3);y<14&&(T=t.network_4_13);y>=14&&(T=t.network_14);T&&f.items.push({count:y,label:"Program Class A Uses",price:T})}r!==-1&&l.push(f);switch(a){case 0:f={label:"Internet or New Media Use",items:[{count:0,label:"8 Week Option",price:t.internet_8_week}]};break;case 1:f={label:"Internet or New Media Use",items:[{count:0,label:"1 Year Option",price:t.internet_1_year}]}}a!==-1&&l.push(f);return l};t.offCameraUsageLineItems=function(t){var n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S;p=parseInt(e("#num-actors").val(),10);S=parseInt(e("#use-type").val(),10);r=-1;u=-1;switch(S){case 0:r=parseInt(e("#broadcast-type").val(),10);break;case 1:u=parseInt(e("#internet-type").val(),10);break;case 2:r=parseInt(e("#broadcast-type").val(),10);u=parseInt(e("#internet-type").val(),10)}f=[];a={label:"",items:[]};switch(r){case 0:a={label:"Wild Spot - 13 week cycle",items:[]};n=e("#markets");m=n.val();c=[];e(m).each(function(e,t){return c[e]=n.find("[value="+t+"]").data("value")});s=[];o=0;i=c.indexOf("Chicago");if(i!==-1){s[s.length]=c.splice(i,1)[0];o=t.wild_13_major_chicago}l=c.indexOf("Los Angeles");if(l!==-1){s[s.length]=c.splice(l,1)[0];o=t.wild_13_major_los_angeles}h=c.indexOf("New York");if(h!==-1){s[s.length]=c.splice(h,1)[0];o=t.wild_13_major_new_york}s.length===2&&(o=t.wild_13_major_any_2);s.length===3&&(o=t.wild_13_major_all_3);o&&a.items.push({count:s.length,label:"Major Markets ("+s.join(", ")+")",price:o});d=c.length?c.reduce(function(e,t){return e+t})-1:0;w=0;d>1&&(w=t.wild_13_unit_2_25);if(d>25||s.length)w=t.wild_13_unit_26;w&&a.items.push({count:d,label:"Add'l Units at $ "+w.toFixed(2),price:w});!o&&!w&&a.items.push({count:0,label:"Please choose broadcast markets.",price:0});break;case 1:a={label:"Local Cable - 13 week cycle",items:[]};b=parseInt(e("#subscribers").val(),10);y=[t.local_1_50k,t.local_50k_100k,t.local_100k_150k,t.local_150k_200k,t.local_200k_250k,t.local_250k_500k,t.local_500k_750k,t.local_750k_1m];g=y[b]||0;p&&a.items.push({count:p,label:"Principal Actors",price:t.session_actor+g});break;case 2:a={label:"Network Program Commercial",items:[]};v=parseInt(e("#num-uses").val(),10);E=0;v===2&&(E=t.network_2);v===3&&(E=t.network_3);v<14&&(E=t.network_4_13);v>=14&&(E=t.network_14);E&&a.items.push({count:v,label:"Program Class A Uses",price:E})}r!==-1&&f.push(a);switch(u){case 0:a={label:"Internet or New Media Use",items:[{count:0,label:"8 Week Option",price:t.internet_8_week}]};break;case 1:a={label:"Internet or New Media Use",items:[{count:0,label:"1 Year Option",price:t.internet_1_year}]}}u!==-1&&f.push(a);return f};return t}();return t})}).call(this);