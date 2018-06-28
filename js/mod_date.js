// Mod: Date Range for Xin Calendar 2 (In-Page/Popup-Window)
// Copyright 2004  Xin Yang    All Rights Reserved.

function setRange(co,jb,fj){if(xc_cu(jb,fj)){xc_eg(co,"el","ik",[xc_fv(jb,xcDateFormat,xc_da),xc_fv(fj,xcDateFormat,xc_da)],0)}};function setWeekDays(co,sun,mon,tue,wed,thu,fri,sat){xc_eg(co,"el","io",{"type":"fc","cn":[sun,mon,tue,wed,thu,fri,sat]},1)};function setDays(co,sun,wk,sat){setWeekDays(co,sun,wk,wk,wk,wk,wk,sat)};function enableRange(co,jb,fj){if(xc_cu(jb,fj)){xc_eg(co,"el","io",{"type":"im","cn":[xc_fv(jb,xcDateFormat,xc_da),xc_fv(fj,xcDateFormat,xc_da)]},1)}};function disableRange(co,jb,fj){if(xc_cu(jb,fj)){xc_eg(co,"el","io",{"type":"il","cn":[xc_fv(jb,xcDateFormat,xc_da),xc_fv(fj,xcDateFormat,xc_da)]},1)}};function enableDates(co,ep){var ei=xc_ft(ep);for(var i=0;i<ei.length;i++){xc_eg(co,"el",xc_fv(ei[i],xcDateFormat,xc_da),false,0)}};function disableDates(co,ep){var ei=xc_ft(ep);for(var i=0;i<ei.length;i++){xc_eg(co,"el",xc_fv(ei[i],xcDateFormat,xc_da),true,0)}};function daysBefore(n){return xc_bu(new Date(),-n)};function daysAfter(n){return xc_bu(new Date(),n)};function dayOffset(eb,n){return xc_bu(toJSDate(eb||""),n)};function getWeekBegin(eb,n){var d=toJSDate(eb||"");d.setTime(d.getTime()+xc_du(7*(n||0)-d.getDay()+xcWeekStart));return toCalendarDate(d)};function getWeekEnd(eb,n){var d=toJSDate(eb||"");d.setTime(d.getTime()+xc_du(7*(n||0)-d.getDay()+6+xcWeekStart));return toCalendarDate(d)};function getMonthBegin(eb,n){var d=toJSDate(eb||""),jf=new Date(d.getFullYear(),d.getMonth()+(n||0),1);return toCalendarDate(jf)};function getMonthEnd(eb,n){var d=toJSDate(eb||""),hr=new Date(d.getFullYear(),d.getMonth()+(n||0)+1,1);hr.setTime(hr.getTime()-xc_du(1));return toCalendarDate(hr)};function getYearBegin(n){return xc_cf((new Date()).getFullYear()+(n||0),0,1)};function getYearEnd(n){return xc_cf((new Date()).getFullYear()+(n||0),11,31)};function xc_cu(jb,fj){var bx=xc_ce();return((jb==""||bx.test(jb))&&(fj==""||bx.test(fj)))};function xc_bu(d,n){d.setTime(d.getTime()+xc_du(n));return toCalendarDate(d)};function xc_ft(ep){return ep.match(new RegExp(aj(),"g"))};function xc_du(n){return 86400000*n};function xc_ba(ff){var ik=this.gd("el","ik");if(ik!=null){var fr=xc_ck(this.kf,this.month,1);if(ff<=0&&ik[0]!=""){var jh=new Date(this.kf,this.month+1,0);var ha=xc_ck(jh.getFullYear(),jh.getMonth(),jh.getDate());if(ha<ik[0]){this.kf=ik[0].substring(0,4)-0;this.month=ik[0].substring(4,6)-1}};if(ff>=0&&ik[1]!=""){if(fr>ik[1]){this.kf=ik[1].substring(0,4)-0;this.month=ik[1].substring(4,6)-1}}}};function xc_bj(){var bo=xc_ck(this.ch,this.cf,this.cd);var ik=this.gd("el","ik");if(ik){if(ik[0]!=""&&ik[0]>bo||ik[1]!=""&&bo>ik[1]){return true}};var em=this.gd("el",bo);if(em!=null){return em};var ej=false,io=this.gd("el","io");if(io){for(var i=0;i<io.length;i++){if(io[i]["type"]=="fc"){ej=io[i]["cn"][this.ce]==0?true:false}else if(io[i]["type"]=="im"){if(io[i]["cn"][0]<=bo&&bo<=io[i]["cn"][1]){ej=false}}else if(io[i]["type"]=="il"){if(io[i]["cn"][0]<=bo&&bo<=io[i]["cn"][1]){ej=true}}}};return ej};
