"use strict";(self.webpackChunkbedework_guide=self.webpackChunkbedework_guide||[]).push([[249],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4712:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={sidebar_position:8},s="Troubleshooting",p={unversionedId:"admin/troubleshooting",id:"admin/troubleshooting",title:"Troubleshooting",description:"About Master and Instance Listings",source:"@site/docs/admin/troubleshooting.md",sourceDirName:"admin",slug:"/admin/troubleshooting",permalink:"/bedework-guide/docs/admin/troubleshooting",editUrl:"https://github.com/Nashville-Public-Library/bedework-guide/docs/admin/troubleshooting.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Theme",permalink:"/bedework-guide/docs/admin/theming"},next:{title:"Approving Events",permalink:"/bedework-guide/docs/admin/approving-events"}},u={},d=[{value:"About Master and Instance Listings",id:"about-master-and-instance-listings",level:2},{value:"Editing Recurrences / Master and instances",id:"editing-recurrences--master-and-instances",level:2},{value:"Disappearing Events",id:"disappearing-events",level:2},{value:"Bedework Widget Malfunctioning (but site is fine)",id:"bedework-widget-malfunctioning-but-site-is-fine",level:2},{value:"Emergency Restart",id:"emergency-restart",level:2},{value:"Event Stuck in Approval Queue",id:"event-stuck-in-approval-queue",level:2}],c={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("h2",{id:"about-master-and-instance-listings"},"About Master and Instance Listings"),(0,i.kt)("p",null,"Ellis thinks this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If instances are exception instances, updates to the master will NOT update the instance."),(0,i.kt)("li",{parentName:"ul"},"If the instances are normal instances, updates to the master WILL update each instance.")),(0,i.kt)("p",null,"Cook thinks this:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If instances are added with dates (not pattern), updates to the master will NOT update the instance."),(0,i.kt)("li",{parentName:"ul"},"If instances are added with pattern, updates to the master WILL update each instance.\nAre both of the above true?")),(0,i.kt)("h2",{id:"editing-recurrences--master-and-instances"},"Editing Recurrences / Master and instances"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If master is added with dates (not pattern), using the second Recurrence option on the form, future updates to the master will NOT update the instance. (Not sure if this is how it actually works, but this behavior doesn\u2019t seem correct. If this is busted, this may be a change that needs to happen to the whole Project.)"),(0,i.kt)("li",{parentName:"ul"},"If instances are added with pattern (every Tuesday, until apr 12), updates to the master WILL update each instance. (Yes, these are true.)"),(0,i.kt)("li",{parentName:"ul"},"After individual instance is updated, so it now differs from the Master, changes to the Master WILL NOT affect this instance. (Yes, these are true.)"),(0,i.kt)("li",{parentName:"ul"},"Role shouldn\u2019t affect any behavior. Should be separate from role.")),(0,i.kt)("h2",{id:"disappearing-events"},"Disappearing Events"),(0,i.kt)("p",null,"If an event is not visible in either the public client or the admin client, we need to report to Bedework Vendor."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Reindex Bedework."),(0,i.kt)("li",{parentName:"ol"},"Report to Bedework vendor if a reindex doesn't make the event surface.")),(0,i.kt)("h2",{id:"bedework-widget-malfunctioning-but-site-is-fine"},"Bedework Widget Malfunctioning (but site is fine)"),(0,i.kt)("p",null,"Display of events is happy (calendar is working), but the feed might be unhappy."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Look and see if widgets are busted EVERYWHERE or just in specific sites / instances (check all npl site pages, salon, nashville reads, digital signs).",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://library.nashville.org/"},"https://library.nashville.org/")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://library.nashville.org/event/be-well-npl"},"https://library.nashville.org/event/be-well-npl")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://library.nashville.org/locations/main-library"},"https://library.nashville.org/locations/main-library")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://library.nashville.org/income-tax-help"},"https://library.nashville.org/income-tax-help")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"http://nashvillepubliclibrary.org/nashvillereads/events/"},"http://nashvillepubliclibrary.org/nashvillereads/events/")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"http://nashvillepubliclibrary.org/salonat615/"},"http://nashvillepubliclibrary.org/salonat615/")),(0,i.kt)("li",{parentName:"ol"},"With image signs:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"http://firesign.library.nashville.org/MN_moviesAtMain.htm"},"http://firesign.library.nashville.org/MN_moviesAtMain.htm")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"http://firesign.library.nashville.org/MN_courtyardconcerts.html"},"http://firesign.library.nashville.org/MN_courtyardconcerts.html")))),(0,i.kt)("li",{parentName:"ol"},"No image signs:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"http://firesign.library.nashville.org/BL_NovelConversations.html"},"http://firesign.library.nashville.org/BL_NovelConversations.html")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"http://firesign.library.nashville.org/GO_PageTurners.html"},"http://firesign.library.nashville.org/GO_PageTurners.html")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"http://firesign.library.nashville.org/MN_killerthrillers.html"},"http://firesign.library.nashville.org/MN_killerthrillers.html")))),(0,i.kt)("li",{parentName:"ol"},"Restart Bedework."),(0,i.kt)("li",{parentName:"ol"},"Report to Bedework vendor, if restart doesn\u2019t fix widgets. Report where widgets are malfunctioning.")))),(0,i.kt)("p",null,"When we upgraded to 3.10, URLs changed. Bedework Vendor wrote a translator to that read old-style-urls and changed them to new-style-urls. Look to see if we are using any old style links:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Old style - webcache"),(0,i.kt)("li",{parentName:"ul"},"New style - feeder or vfeeder\n2020: reviewed code and it looks like we are NOT using any old style widgets.")),(0,i.kt)("h2",{id:"emergency-restart"},"Emergency Restart"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Notify Kyle Cook. If Kyle is not available, contact a backup. Contact in the following order:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Kyle Cook"),(0,i.kt)("li",{parentName:"ol"},"Jenny Ellis (backup)"),(0,i.kt)("li",{parentName:"ol"},"Bryan Jones (backup)"),(0,i.kt)("li",{parentName:"ol"},"Jesse Morros (backup)"))),(0,i.kt)("li",{parentName:"ol"},"Login to server via ssh. ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo reboot"),".")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If this fails, contact Bedework Vendor."),(0,i.kt)("li",{parentName:"ul"},"Post a note to the Intranet notifying staff that the events calendar is down and we are working on it."),(0,i.kt)("li",{parentName:"ul"},"If the calendar is affecting the home page, replace the homepage calendar feed with an alternate box (we\u2019d need to come up with some kind of alternate content and add it to the page code, commented out)."),(0,i.kt)("li",{parentName:"ul"},"Once calendar is back up:\n-Post a note to the Intranet notifying staff.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Reinstate the home page calendar feed and comment out the replacement box.")))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Past errors:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"1.  `Service Temporarily Unavailable\n")),(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"The server is temporarily unable to service your request due to maintenance downtime or capacity problems. Please try again later.",(0,i.kt)("inlineCode",{parentName:"p"}),"Apache/2.2.3 (Red Hat) Server at events.library.nashville.org Port 80`")))),(0,i.kt)("p",null,"Info: Bedework Vendor had a backup file saved somewhere and Bedework was trying to load two files at once. For some reason it started causing problems one day. He removed the backup file and the calendar was fine.`"),(0,i.kt)("h2",{id:"event-stuck-in-approval-queue"},"Event Stuck in Approval Queue"),(0,i.kt)("p",null,"Events stuck in approval queue that don\u2019t really exist."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Reindex Bedework."),(0,i.kt)("li",{parentName:"ol"},"Test."),(0,i.kt)("li",{parentName:"ol"},"If event is still in the database, and it is a master event, open the master event, then clear the recurrence pattern and reset it. Save the master event. Find the event in Bedework admin console and try to delete an instance again."),(0,i.kt)("li",{parentName:"ol"},"If the event is still stuck, notify Bedework Vendor.")))}h.isMDXComponent=!0}}]);