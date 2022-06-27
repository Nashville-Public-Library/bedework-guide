"use strict";(self.webpackChunkbedework_guide=self.webpackChunkbedework_guide||[]).push([[736],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(t),f=l,h=p["".concat(d,".").concat(f)]||p[f]||u[f]||r;return t?a.createElement(h,i(i({ref:n},c),{},{components:t})):a.createElement(h,i({ref:n},c))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,i=new Array(r);i[0]=p;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8662:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var a=t(7462),l=t(3366),r=(t(7294),t(3905)),i=["components"],o={sidebar_position:2},d="Cancel or Reschedule",s={unversionedId:"admin/cancel",id:"admin/cancel",title:"Cancel or Reschedule",description:"There are few instances where we will actually delete a listing from the events calendar. In most cases, we mark events canceled instead of deleting them.",source:"@site/docs/admin/cancel.md",sourceDirName:"admin",slug:"/admin/cancel",permalink:"/bedework-guide/docs/admin/cancel",editUrl:"https://github.com/Nashville-Public-Library/bedework-guide/docs/admin/cancel.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Copy an Event",permalink:"/bedework-guide/docs/orientation/copy-event"},next:{title:"Users and Passwords",permalink:"/bedework-guide/docs/admin/passwords"}},c={},u=[{value:"Canceling Events",id:"canceling-events",level:2},{value:"Deleting Events",id:"deleting-events",level:2},{value:"Rescheduled Events",id:"rescheduled-events",level:2},{value:"Extended Closure",id:"extended-closure",level:2},{value:"Cancel or Update",id:"cancel-or-update",level:2}],p={toc:u};function f(e){var n=e.components,t=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cancel-or-reschedule"},"Cancel or Reschedule"),(0,r.kt)("p",null,"There are few instances where we will actually delete a listing from the events calendar. In most cases, we mark events canceled instead of deleting them."),(0,r.kt)("h2",{id:"canceling-events"},"Canceling Events"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Select \u201ccanceled\u201d radio button."),(0,r.kt)("li",{parentName:"ul"},"Replace description with \u201cThis event is canceled\u201d or some other brief explanation.")),(0,r.kt)("h2",{id:"deleting-events"},"Deleting Events"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You CAN delete events from the calendar in the following instances:"),(0,r.kt)("li",{parentName:"ul"},"Duplicate entries - If an event listing is a duplicate, delete the extra instance."),(0,r.kt)("li",{parentName:"ul"},"Canceled and NOT printed in Unbound - If an event is canceled and it was NOT printed in Unbound back of book, delete the listing."),(0,r.kt)("li",{parentName:"ul"},"Holidays / Closed Days -"),(0,r.kt)("li",{parentName:"ul"},"Approving events - Approvers should delete all event listings that fall on holidays / closed days before approving."),(0,r.kt)("li",{parentName:"ul"},"Prior to Exporting Pixie Dust - Delete all events that fall on holidays / closed days before exporting the final Pixie Dust document for back of book."),(0,r.kt)("li",{parentName:"ul"},"Do NOT delete an event in the following cases:"),(0,r.kt)("li",{parentName:"ul"},"Event canceled, listed in Unbound back of book - Once an event is published in Unbound, we do not delete it from the calendar. Instead, mark the event canceled."),(0,r.kt)("li",{parentName:"ul"},"Closed day, listed in Unbound back of book - Even if the event falls on a holiday, if the event is published in Unbound back of book, we leave the event in the calendar and mark it canceled.")),(0,r.kt)("h2",{id:"rescheduled-events"},"Rescheduled Events"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If event was canceled and has been rescheduled, leave the original marked canceled and create a new event. If the canceled event is still in the future, note the new date/time in the description of the original canceled listing.")),(0,r.kt)("h2",{id:"extended-closure"},"Extended Closure"),(0,r.kt)("p",null,"During the period when we are NOT offering any in-person events, we will do the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Delete in-person events from Bedework for the affected period. We will no longer mark these as canceled."),(0,r.kt)("li",{parentName:"ol"},"Add a single event to Bedework for each affected day. Event title will be \u201cCANCELED: In-Person Library Events Canceled\u201d"),(0,r.kt)("li",{parentName:"ol"},"Add virtual event offerings to Bedework. Staff should follow event listing guidelines that have been newly-added to NPL Style Guide and Bedework User Manual.\nDuring the period when we offer both in-person AND streaming events, we will do the following:"),(0,r.kt)("li",{parentName:"ol"},"Mark canceled in-person events in Bedework as \u201ccanceled.\u201d"),(0,r.kt)("li",{parentName:"ol"},"When canceling an event, put \u201cCanceled:\u201d at the start of the event title. This will ensure that patrons looking at calendar widgets will see that an event is canceled.")),(0,r.kt)("h2",{id:"cancel-or-update"},"Cancel or Update"),(0,r.kt)("p",null,"When do we mark an event canceled vs just updating the existing event listing with new info? No different than usual."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Room Change: If an event moves from in-person to online and date/time is the same, we\u2019ll update the existing event listing to add virtual event details so patrons can connect. Essentially, the \u201croom\u201d changed from IN to Facebook. For this to work, we need \u201conline\u201d or \u201cvirtual\u201d somewhere in the title."),(0,r.kt)("li",{parentName:"ul"},"Canceled: If the event is totally canceled and isn\u2019t just moving online, we\u2019ll mark the event canceled."),(0,r.kt)("li",{parentName:"ul"},"Time Change Only: If an event moves from in-person to online and the date is the same but the time changes, we update the existing event listing with new info."),(0,r.kt)("li",{parentName:"ul"},"Date Change (or Date/Time both change): If an event moves to a different dayIf an event moves from in-person to online and the date/time is different (or event moves to a different time or day).")))}f.isMDXComponent=!0}}]);