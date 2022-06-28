"use strict";(self.webpackChunkbedework_guide=self.webpackChunkbedework_guide||[]).push([[322],{3905:function(e,a,t){t.d(a,{Zo:function(){return u},kt:function(){return c}});var i=t(7294);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function n(e,a){if(null==e)return{};var t,i,s=function(e,a){if(null==e)return{};var t,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=i.createContext({}),o=function(e){var a=i.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},u=function(e){var a=o(e.components);return i.createElement(p.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},v=i.forwardRef((function(e,a){var t=e.components,s=e.mdxType,r=e.originalType,p=e.parentName,u=n(e,["components","mdxType","originalType","parentName"]),v=o(t),c=s,d=v["".concat(p,".").concat(c)]||v[c]||b[c]||r;return t?i.createElement(d,l(l({ref:a},u),{},{components:t})):i.createElement(d,l({ref:a},u))}));function c(e,a){var t=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var r=t.length,l=new Array(r);l[0]=v;var n={};for(var p in a)hasOwnProperty.call(a,p)&&(n[p]=a[p]);n.originalType=e,n.mdxType="string"==typeof e?e:s,l[1]=n;for(var o=2;o<r;o++)l[o]=t[o];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}v.displayName="MDXCreateElement"},8423:function(e,a,t){t.r(a),t.d(a,{assets:function(){return u},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return n},metadata:function(){return o},toc:function(){return b}});var i=t(7462),s=t(3366),r=(t(7294),t(3905)),l=["components"],n={sidebar_position:10},p="Creating Custom URLs",o={unversionedId:"admin/custom",id:"admin/custom",title:"Creating Custom URLs",description:"To build a link, you'll need to place the block number right after bwNav",source:"@site/docs/admin/custom.md",sourceDirName:"admin",slug:"/admin/custom",permalink:"/bedework-guide/docs/admin/custom",editUrl:"https://github.com/Nashville-Public-Library/bedework-guide/docs/admin/custom.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Approving Events",permalink:"/bedework-guide/docs/admin/approving-events"}},u={},b=[{value:"Age Groups",id:"age-groups",level:2},{value:"Locations",id:"locations",level:2},{value:"Browse by Topic",id:"browse-by-topic",level:2},{value:"Series",id:"series",level:2},{value:"Example Links",id:"example-links",level:2},{value:"Studio NPL",id:"studio-npl",level:3},{value:"Week to Week",id:"week-to-week",level:3}],v={toc:b};function c(e){var a=e.components,t=(0,s.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-custom-urls"},"Creating Custom URLs"),(0,r.kt)("p",null,"To build a link, you'll need to place the block number right after ",(0,r.kt)("inlineCode",{parentName:"p"},"bwNav")),(0,r.kt)("p",null,"In the array, this is how it is written: First the bwNav block number, then a dash, then the alias OR view OR block name"),(0,r.kt)("p",null,"Here are your alias / view / block name examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"0 Age",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Children - ",(0,r.kt)("inlineCode",{parentName:"li"},"useragrpcalsuiteMainCampusChildrens")),(0,r.kt)("li",{parentName:"ul"},"Teens - ",(0,r.kt)("inlineCode",{parentName:"li"},"useragrpcalsuiteMainCampusTeens")))),(0,r.kt)("li",{parentName:"ul"},"1 Locations",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Green Hills - ",(0,r.kt)("inlineCode",{parentName:"li"},"publicaliasesLocationsGreenHills")))),(0,r.kt)("li",{parentName:"ul"},"2 Topics",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Writing - ",(0,r.kt)("inlineCode",{parentName:"li"},"publicaliasesBrowseByTopicWriting")))),(0,r.kt)("li",{parentName:"ul"},"3 Series",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Studio NPL - ",(0,r.kt)("inlineCode",{parentName:"li"},"useragrpcalsuiteMainCampusSeriesStudioNPL"))))),(0,r.kt)("p",null,"To build a search, add your search terms in the parentheses right after ",(0,r.kt)("inlineCode",{parentName:"p"},"https://events.library.nashville.org/cal/main/listEvents.do?b=de&listMode=true&setappvar=bwQuery(Nashville%20Public%20Library%20Board%20of%20Trustees%20Meeting)")),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"%20")," in between each search term to act as a space in the search box."),(0,r.kt)("h2",{id:"age-groups"},"Age Groups"),(0,r.kt)("p",null,"The variable part is after ",(0,r.kt)("inlineCode",{parentName:"p"},"useragrpcalsuite")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Adults:\n",(0,r.kt)("a",{parentName:"li",href:"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(bwNav0-useragrpcalsuiteMainCampusAdults%7C%7C%7C)&setappvar=bwQuery()"},"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(bwNav0-useragrpcalsuiteMainCampusAdults|||)&setappvar=bwQuery()"),"  "),(0,r.kt)("li",{parentName:"ul"},"Teens:\n",(0,r.kt)("a",{parentName:"li",href:"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(bwNav0-useragrpcalsuiteMainCampusTeens%7C%7C%7C)&setappvar=bwQuery()"},"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(bwNav0-useragrpcalsuiteMainCampusTeens|||)&setappvar=bwQuery()")),(0,r.kt)("li",{parentName:"ul"},"Children:\n",(0,r.kt)("a",{parentName:"li",href:"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(bwNav0-useragrpcalsuiteMainCampusChildrens%7C%7C%7C)&setappvar=bwQuery()"},"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(bwNav0-useragrpcalsuiteMainCampusChildrens|||)&setappvar=bwQuery()"))),(0,r.kt)("h2",{id:"locations"},"Locations"),(0,r.kt)("p",null,"The variable part is after ",(0,r.kt)("inlineCode",{parentName:"p"},"publicaliasesLocations")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bellevue: ",(0,r.kt)("a",{parentName:"li",href:"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(%7CbwNav1-publicaliasesLocationsBellevue%7C%7C)&setappvar=bwQuery()"},"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(|bwNav1-publicaliasesLocationsBellevue||)&setappvar=bwQuery()")),(0,r.kt)("li",{parentName:"ul"},"Edgehill: ",(0,r.kt)("a",{parentName:"li",href:"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(%7CbwNav1-publicaliasesLocationsEdgehill%7C%7C)&setappvar=bwQuery()"},"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(|bwNav1-publicaliasesLocationsEdgehill||)&setappvar=bwQuery()"))),(0,r.kt)("h2",{id:"browse-by-topic"},"Browse by Topic"),(0,r.kt)("p",null,"The variable part is after ",(0,r.kt)("inlineCode",{parentName:"p"},"publicaliasesBrowseByTopic")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Arts and Crafts: ",(0,r.kt)("a",{parentName:"li",href:"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(%7C%7CbwNav2-publicaliasesBrowseByTopicArtsandCrafts%7C)&setappvar=bwQuery()"},"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(||bwNav2-publicaliasesBrowseByTopicArtsandCrafts|)&setappvar=bwQuery()")),(0,r.kt)("li",{parentName:"ul"},"Music: ",(0,r.kt)("a",{parentName:"li",href:"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(%7C%7CbwNav2-publicaliasesBrowseByTopicMusic%7C)&setappvar=bwQuery()"},"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(||bwNav2-publicaliasesBrowseByTopicMusic|)&setappvar=bwQuery()")),(0,r.kt)("li",{parentName:"ul"},"Computers & Technology:\n",(0,r.kt)("a",{parentName:"li",href:"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(%7C%7CbwNav2-publicaliasesBrowseByTopicComputersandTechnology,bwNav2-publicaliasesBrowseByTopicJobs%7C)&setappvar=bwQuery()"},"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(||bwNav2-publicaliasesBrowseByTopicComputersandTechnology,bwNav2-publicaliasesBrowseByTopicJobs|)&setappvar=bwQuery()"))),(0,r.kt)("h2",{id:"series"},"Series"),(0,r.kt)("p",null,"The variable part is after ",(0,r.kt)("inlineCode",{parentName:"p"},"useragrpcalsuiteMainCampusSeries")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Be Well at NPL:\n",(0,r.kt)("a",{parentName:"li",href:"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(%7C%7C%7CbwNav3-useragrpcalsuiteMainCampusSeriesBeWellatNPL)&setappvar=bwQuery()"},"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(|||bwNav3-useragrpcalsuiteMainCampusSeriesBeWellatNPL)&setappvar=bwQuery()")),(0,r.kt)("li",{parentName:"ul"},"Salon@615:\n",(0,r.kt)("a",{parentName:"li",href:"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(%7C%7C%7CbwNav3-useragrpcalsuiteMainCampusSeriesSalonat615)&setappvar=bwQuery()"},"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(|||bwNav3-useragrpcalsuiteMainCampusSeriesSalonat615)&setappvar=bwQuery()")),(0,r.kt)("li",{parentName:"ul"},"StudioNPL\n",(0,r.kt)("a",{parentName:"li",href:"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(%7C%7C%7CbwNav3-useragrpcalsuiteMainCampusSeriesStudioNPL)&setappvar=bwQuery()"},"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(|||bwNav3-useragrpcalsuiteMainCampusSeriesStudioNPL)&setappvar=bwQuery()")),(0,r.kt)("li",{parentName:"ul"},"Movies at Main\n",(0,r.kt)("a",{parentName:"li",href:"https://events.library.nashville.org/cal/main/listEvents.do?b=de&listMode=true&setappvar=bwFilters(%7C%7C%7CbwNav3-useragrpcalsuiteMainCampusSeriesMoviesatMain)&setappvar=bwQuery()"},"https://events.library.nashville.org/cal/main/listEvents.do?b=de&listMode=true&setappvar=bwFilters(|||bwNav3-useragrpcalsuiteMainCampusSeriesMoviesatMain)&setappvar=bwQuery()")),(0,r.kt)("li",{parentName:"ul"},"Series > Community of Many Faces\n",(0,r.kt)("a",{parentName:"li",href:"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(%7C%7C%7CbwNav3-useragrpcalsuiteMainCampusSeriesCommunityofManyFaces)&setappvar=bwQuery()"},"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(|||bwNav3-useragrpcalsuiteMainCampusSeriesCommunityofManyFaces)&setappvar=bwQuery()"))),(0,r.kt)("h2",{id:"example-links"},"Example Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Topic > Writing: ",(0,r.kt)("a",{parentName:"p",href:"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(%7C%7CbwNav2-publicaliasesBrowseByTopicWriting%7C)&setappvar=bwQuery()"},"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(||bwNav2-publicaliasesBrowseByTopicWriting|)&setappvar=bwQuery()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Topic > Health and Wellness:\n",(0,r.kt)("a",{parentName:"p",href:"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(%7C%7CbwNav2-publicaliasesBrowseByTopicHealthandWellness%7C)&setappvar=bwQuery()"},"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(||bwNav2-publicaliasesBrowseByTopicHealthandWellness|)&setappvar=bwQuery()"),"   ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Series > Studio NPL: ",(0,r.kt)("a",{parentName:"p",href:"https://events.library.nashville.org/cal/main/listEvents.do?b=de&listMode=true&setappvar=bwFilters(%7C%7C%7CbwNav3-useragrpcalsuiteMainCampusSeriesStudioNPL)&setappvar=bwQuery()"},"https://events.library.nashville.org/cal/main/listEvents.do?b=de&listMode=true&setappvar=bwFilters(|||bwNav3-useragrpcalsuiteMainCampusSeriesStudioNPL)&setappvar=bwQuery()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Series > Be Well at NPL issues:\n",(0,r.kt)("a",{parentName:"p",href:"https://events.library.nashville.org/cal/main/listEvents.do?b=de&listMode=true&setappvar=bwFilters(%7C%7C%7CbwNav3-useragrpcalsuiteMainCampusSeriesBeWellatNPL)&setappvar=bwQuery()"},"https://events.library.nashville.org/cal/main/listEvents.do?b=de&listMode=true&setappvar=bwFilters(|||bwNav3-useragrpcalsuiteMainCampusSeriesBeWellatNPL)&setappvar=bwQuery()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Topic > Story Time AND Location > Green Hills AND Age > Children:\n",(0,r.kt)("a",{parentName:"p",href:"https://events.library.nashville.org/cal/main/listEvents.do?setappvar=bwFilters(bwNav0-useragrpcalsuiteMainCampusChildrens%7CbwNav1-publicaliasesLocationsGreenHills%7CbwNav2-publicaliasesBrowseByTopicStoryTime%7C)&setappvar=bwQuery()"},"https://events.library.nashville.org/cal/main/listEvents.do?setappvar=bwFilters(bwNav0-useragrpcalsuiteMainCampusChildrens|bwNav1-publicaliasesLocationsGreenHills|bwNav2-publicaliasesBrowseByTopicStoryTime|)&setappvar=bwQuery()"),"  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Age > Teen AND Series > Studio NPL AND Topic > Music AND Location > East: ",(0,r.kt)("a",{parentName:"p",href:"https://events.library.nashville.org/cal/main/listEvents.do?setappvar=bwFilters(bwNav0-useragrpcalsuiteMainCampusTeens%7CbwNav1-publicaliasesLocationsEast%7CbwNav2-publicaliasesBrowseByTopicMusic%7CbwNav3-useragrpcalsuiteMainCamupsSeriesStudioNPL)&setappvar=bwQuery()"},"https://events.library.nashville.org/cal/main/listEvents.do?setappvar=bwFilters(bwNav0-useragrpcalsuiteMainCampusTeens|bwNav1-publicaliasesLocationsEast|bwNav2-publicaliasesBrowseByTopicMusic|bwNav3-useragrpcalsuiteMainCamupsSeriesStudioNPL)&setappvar=bwQuery()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"One Location: Online (NPL Universe): ",(0,r.kt)("a",{parentName:"p",href:"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(%7CbwNav1-publicaliasesLocationsOnline%7C%7C)&setappvar=bwQuery()"},"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(|bwNav1-publicaliasesLocationsOnline||)&setappvar=bwQuery()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"TWO locations:\n",(0,r.kt)("a",{parentName:"p",href:"https://events.library.nashville.org/cal/main/listEvents.do?setappvar=bwFilters(%7CbwNav1-publicaliasesLocationsEast,bwNav1-publicaliasesLocationsSoutheast%7C%7C)&setappvar=bwQuery()"},"https://events.library.nashville.org/cal/main/listEvents.do?setappvar=bwFilters(|bwNav1-publicaliasesLocationsEast,bwNav1-publicaliasesLocationsSoutheast||)&setappvar=bwQuery()"),(0,r.kt)("br",{parentName:"p"}),"\n","comma after the first location then put in the second location - because it is an array and those are separated by commas\nboth locations need to be in the same pipe")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Story Time around the system\n",(0,r.kt)("a",{parentName:"p",href:"https://events.library.nashville.org/cal/main/listEvents.do?setappvar=bwFilters(%7C%7CbwNav2-publicaliasesBrowseByTopicStoryTime%7C)&setappvar=bwQuery()"},"https://events.library.nashville.org/cal/main/listEvents.do?setappvar=bwFilters(||bwNav2-publicaliasesBrowseByTopicStoryTime|)&setappvar=bwQuery()"),"    ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Search ONE term:\n",(0,r.kt)("a",{parentName:"p",href:"https://events.library.nashville.org/cal/main/listEvents.do?b=de&listMode=true&setappvar=bwQuery(meditation)"},"https://events.library.nashville.org/cal/main/listEvents.do?b=de&listMode=true&setappvar=bwQuery(meditation)"),"  "))),(0,r.kt)("h3",{id:"studio-npl"},"Studio NPL"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Main Studio NPL ",(0,r.kt)("a",{parentName:"p",href:"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(%7CbwNav1-publicaliasesLocationsMAIN%7C%7CbwNav3-useragrpcalsuiteMainCampusSeriesStudioNPL)&setappvar=bwQuery()"},"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(|bwNav1-publicaliasesLocationsMAIN||bwNav3-useragrpcalsuiteMainCampusSeriesStudioNPL)&setappvar=bwQuery()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"East Studio\n",(0,r.kt)("a",{parentName:"p",href:"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(%7CbwNav1-publicaliasesLocationsEast%7C%7CbwNav3-useragrpcalsuiteMainCampusSeriesStudioNPL)&setappvar=bwQuery()"},"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(|bwNav1-publicaliasesLocationsEast||bwNav3-useragrpcalsuiteMainCampusSeriesStudioNPL)&setappvar=bwQuery()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Edgehill Studio\n",(0,r.kt)("a",{parentName:"p",href:"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(%7CbwNav1-publicaliasesLocationsEdgehill%7C%7CbwNav3-useragrpcalsuiteMainCampusSeriesStudioNPL)&setappvar=bwQuery()"},"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(|bwNav1-publicaliasesLocationsEdgehill||bwNav3-useragrpcalsuiteMainCampusSeriesStudioNPL)&setappvar=bwQuery()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Goodlettsville Studio\n",(0,r.kt)("a",{parentName:"p",href:"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(%7CbwNav1-publicaliasesLocationsGoodlettsville%7C%7CbwNav3-useragrpcalsuiteMainCampusSeriesStudioNPL)&setappvar=bwQuery()"},"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(|bwNav1-publicaliasesLocationsGoodlettsville||bwNav3-useragrpcalsuiteMainCampusSeriesStudioNPL)&setappvar=bwQuery()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Madison Studio\n",(0,r.kt)("a",{parentName:"p",href:"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(%7CbwNav1-publicaliasesLocationsMadison%7C%7CbwNav3-useragrpcalsuiteMainCampusSeriesStudioNPL)&setappvar=bwQuery()"},"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(|bwNav1-publicaliasesLocationsMadison||bwNav3-useragrpcalsuiteMainCampusSeriesStudioNPL)&setappvar=bwQuery()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Southeast Studio\n",(0,r.kt)("a",{parentName:"p",href:"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(%7CbwNav1-publicaliasesLocationsSoutheast%7C%7CbwNav3-useragrpcalsuiteMainCampusSeriesStudioNPL)&setappvar=bwQuery()"},"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(|bwNav1-publicaliasesLocationsSoutheast||bwNav3-useragrpcalsuiteMainCampusSeriesStudioNPL)&setappvar=bwQuery()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Main Studio Audio Production\n",(0,r.kt)("a",{parentName:"p",href:"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(%7CbwNav1-publicaliasesLocationsMAIN%7C%7CbwNav3-useragrpcalsuiteMainCampusSeriesStudioNPL)&setappvar=bwQuery(audio)"},"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(|bwNav1-publicaliasesLocationsMAIN||bwNav3-useragrpcalsuiteMainCampusSeriesStudioNPL)&setappvar=bwQuery(audio)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Bordeaux Studio\n",(0,r.kt)("a",{parentName:"p",href:"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(%7CbwNav1-publicaliasesLocationsBordeaux%7C%7CbwNav3-useragrpcalsuiteMainCampusSeriesStudioNPL)&setappvar=bwQuery()"},"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(|bwNav1-publicaliasesLocationsBordeaux||bwNav3-useragrpcalsuiteMainCampusSeriesStudioNPL)&setappvar=bwQuery()"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"East Cypher\n",(0,r.kt)("a",{parentName:"p",href:"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(%7CbwNav1-publicaliasesLocationsEast%7C%7C)&setappvar=bwQuery(cypher)"},"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(|bwNav1-publicaliasesLocationsEast||)&setappvar=bwQuery(cypher)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Edmondson Pike Studio\n",(0,r.kt)("a",{parentName:"p",href:"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(%7CbwNav1-publicaliasesLocationsEdmondsonPike%7C%7CbwNav3-useragrpcalsuiteMainCampusSeriesStudioNPL)&setappvar=bwQuery()"},"https://events.library.nashville.org/cal/main/setSelectionList.do?b=de&listMode=true&setappvar=bwFilters(|bwNav1-publicaliasesLocationsEdmondsonPike||bwNav3-useragrpcalsuiteMainCampusSeriesStudioNPL)&setappvar=bwQuery()")))),(0,r.kt)("h3",{id:"week-to-week"},"Week to Week"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"See the Week-to-week view with descriptions in the results list:\n",(0,r.kt)("a",{parentName:"li",href:"https://events.library.nashville.org/cal/main/showEvents.rdo?b=de&setappvar=summaryMode(details)"},"https://events.library.nashville.org/cal/main/showEvents.rdo?b=de&setappvar=summaryMode(details)"))))}c.isMDXComponent=!0}}]);