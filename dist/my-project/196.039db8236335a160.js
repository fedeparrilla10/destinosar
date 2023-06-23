"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[196],{99:(f,p,c)=>{c.d(p,{E:()=>P});var r=c(4004),d=c(1902),g=c(3144);let P=(()=>{class e{constructor(l){this.http=l,this.BASE_URL="https://64807d55f061e6ec4d495f1f.mockapi.io/"}getPlaces(){return this.http.get(`${this.BASE_URL}/places`).pipe((0,r.U)(l=>l.map(s=>(delete s.createdAt,delete s.language,delete s.latitude,delete s.longitude,delete s.population,s))))}getPlace(l){return this.http.get(`${this.BASE_URL}/places/${l}`)}postPlace(l){return this.http.post(`${this.BASE_URL}/places`,l)}putPlace(l,s){return this.http.put(`${this.BASE_URL}/places/${l}`,s)}deletePlace(l){return this.http.delete(`${this.BASE_URL}/places/${l}`)}}return e.\u0275fac=function(l){return new(l||e)(d.LFG(g.eN))},e.\u0275prov=d.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},4196:(f,p,c)=>{c.r(p),c.d(p,{PlaceDetailsModule:()=>U});var r=c(4755),d=c(4430),g=c(3900),P=c(8505),e=c(1902),_=c(99),l=c(4004),s=c(3144);let m=(()=>{class t{constructor(n){this.http=n,this.BASE_URL="http://api.weatherapi.com/v1/forecast.json?key=3c8a83db797c409db85123728231806&"}getWeatherData(n){return this.http.get(`${this.BASE_URL}q=${n}&days=5&aqi=no&alerts=no`).pipe((0,l.U)(a=>[{location:a.location,forecast:{forecastday:a.forecast.forecastday.map(o=>({date:o.date,day:{maxtemp_c:o.day.maxtemp_c,mintemp_c:o.day.mintemp_c,condition:o.day.condition}}))}}]))}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(s.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function C(t,i){if(1&t&&(e.TgZ(0,"div",13)(1,"h4",14),e._uU(2),e.qZA(),e.TgZ(3,"p"),e._uU(4),e.qZA()()),2&t){const n=i.$implicit;e.xp6(2),e.Oqu(n.name),e.xp6(2),e.Oqu(n.description)}}function O(t,i){if(1&t&&(e.TgZ(0,"div",11),e.YNc(1,C,5,2,"div",12),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",n.allActivities)}}function M(t,i){1&t&&(e.TgZ(0,"div",15)(1,"h4"),e._uU(2,"No hay pron\xf3stico disponible para este destino."),e.qZA()())}function x(t,i){if(1&t&&(e.TgZ(0,"div",20)(1,"p",21),e._uU(2),e.ALo(3,"date"),e.qZA(),e.TgZ(4,"div",22)(5,"p",23),e._uU(6),e.qZA(),e.TgZ(7,"p",23),e._uU(8),e.qZA()(),e._UZ(9,"img",24),e.qZA()),2&t){const n=i.$implicit;e.xp6(2),e.Oqu(e.xi3(3,4,n.date,"dd/MM")),e.xp6(4),e.hij("",n.day.mintemp_c,"\xbaC"),e.xp6(2),e.hij("",n.day.maxtemp_c,"\xbaC"),e.xp6(1),e.Q6J("src",n.day.condition.icon,e.LSH)}}function v(t,i){if(1&t&&(e.TgZ(0,"div",18),e.YNc(1,x,10,7,"div",19),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",n.detailedWeather.forecast.forecastday)}}function w(t,i){if(1&t&&(e.TgZ(0,"div",16)(1,"h3"),e._uU(2,"Pron\xf3stico de los pr\xf3ximos d\xedas"),e.qZA(),e.YNc(3,v,2,1,"div",17),e.qZA()),2&t){const n=e.oxw();e.xp6(3),e.Q6J("ngIf",n.detailedWeather)}}function y(t,i){if(1&t&&e._UZ(0,"img",27),2&t){const n=i.$implicit,a=e.oxw(2);e.Q6J("src",n.url,e.LSH)("alt",null==a.detailedPlace?null:a.detailedPlace.name)}}function A(t,i){if(1&t&&(e.TgZ(0,"div",25),e.YNc(1,y,1,2,"img",26),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",n.allImages)}}const Z=[{path:"",pathMatch:"full",component:(()=>{class t{constructor(n,a,h){this.route=n,this.placesService=a,this.weatherService=h,this.allWeather=[],this.route.params.pipe((0,g.w)(o=>this.placesService.getPlace(o.id)),(0,P.b)(o=>{this.detailedPlace=o,this.allImages=[...this.detailedPlace.images],this.allActivities=[...this.detailedPlace.activities]}),(0,g.w)(o=>this.weatherService.getWeatherData(o.name))).subscribe(o=>{this.detailedWeather=o[0]})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(d.gz),e.Y36(_.E),e.Y36(m))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-place-details"]],decls:16,vars:8,consts:[[1,"place-details-container"],[1,"place-details"],[1,"place-details-text"],[1,"place-details-titles"],[1,"place-title"],[1,"place-province"],[1,"place-region"],["class","place-details-activities-container",4,"ngIf"],["class","weather-not-found",4,"ngIf"],["class","weather-data",4,"ngIf"],["class","place-details-gallery",4,"ngIf"],[1,"place-details-activities-container"],["class","place-details-activities-box",4,"ngFor","ngForOf"],[1,"place-details-activities-box"],[1,"activity-title"],[1,"weather-not-found"],[1,"weather-data"],["class","weather-container",4,"ngIf"],[1,"weather-container"],["class","weather-box",4,"ngFor","ngForOf"],[1,"weather-box"],[1,"forecast-date"],[1,"weather-temperature"],[1,"forecast-temperature"],[1,"forecast-icon",3,"src"],[1,"place-details-gallery"],[3,"src","alt",4,"ngFor","ngForOf"],[3,"src","alt"]],template:function(n,a){1&n&&(e.TgZ(0,"section",0)(1,"article",1)(2,"div",2)(3,"div",3)(4,"h2",4),e._uU(5),e.qZA(),e.TgZ(6,"h4",5),e._uU(7),e.qZA(),e.TgZ(8,"h5",6),e._uU(9),e.qZA()(),e.TgZ(10,"p"),e._uU(11),e.qZA(),e.YNc(12,O,2,1,"div",7),e.YNc(13,M,3,0,"div",8),e.YNc(14,w,4,1,"div",9),e.qZA(),e.YNc(15,A,2,1,"div",10),e.qZA()()),2&n&&(e.xp6(5),e.Oqu(null==a.detailedPlace?null:a.detailedPlace.name),e.xp6(2),e.Oqu(null==a.detailedPlace?null:a.detailedPlace.province),e.xp6(2),e.Oqu(null==a.detailedPlace?null:a.detailedPlace.region),e.xp6(2),e.Oqu(null==a.detailedPlace?null:a.detailedPlace.long_description),e.xp6(1),e.Q6J("ngIf",a.allActivities&&a.allActivities.length>0),e.xp6(1),e.Q6J("ngIf",!a.detailedWeather),e.xp6(1),e.Q6J("ngIf",a.detailedWeather),e.xp6(1),e.Q6J("ngIf",a.allImages&&a.allImages.length>0))},dependencies:[r.sg,r.O5,r.uU],styles:[".place-details-container[_ngcontent-%COMP%]{margin:20px}.place-details-container[_ngcontent-%COMP%]   .place-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}.place-details-container[_ngcontent-%COMP%]   .place-details[_ngcontent-%COMP%]   .place-details-text[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.place-details-container[_ngcontent-%COMP%]   .place-details[_ngcontent-%COMP%]   .place-details-text[_ngcontent-%COMP%]   .weather-not-found[_ngcontent-%COMP%]{text-align:center}.place-details-container[_ngcontent-%COMP%]   .place-details[_ngcontent-%COMP%]   .place-details-activities-container[_ngcontent-%COMP%]{margin-top:20px;font-size:15px;display:flex;gap:20px;align-items:center;justify-content:center}.place-details-container[_ngcontent-%COMP%]   .place-details[_ngcontent-%COMP%]   .place-details-activities-container[_ngcontent-%COMP%]   .place-details-activities-box[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;border:1px solid #e3faff;border-radius:10px;padding:10px;text-align:center}.place-details-container[_ngcontent-%COMP%]   .place-details[_ngcontent-%COMP%]   .weather-data[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:10px;margin-top:20px}.place-details-container[_ngcontent-%COMP%]   .place-details[_ngcontent-%COMP%]   .weather-data[_ngcontent-%COMP%]   .weather-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-around;align-items:center;gap:50px}.place-details-container[_ngcontent-%COMP%]   .place-details[_ngcontent-%COMP%]   .weather-data[_ngcontent-%COMP%]   .weather-container[_ngcontent-%COMP%]   .weather-box[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.place-details-container[_ngcontent-%COMP%]   .place-details[_ngcontent-%COMP%]   .weather-data[_ngcontent-%COMP%]   .weather-container[_ngcontent-%COMP%]   .weather-box[_ngcontent-%COMP%]   .forecast-date[_ngcontent-%COMP%]{font-size:16px;font-weight:700}.place-details-container[_ngcontent-%COMP%]   .place-details[_ngcontent-%COMP%]   .weather-data[_ngcontent-%COMP%]   .weather-container[_ngcontent-%COMP%]   .weather-box[_ngcontent-%COMP%]   .weather-temperature[_ngcontent-%COMP%]{display:flex;gap:15px;margin-top:3px}.place-details-container[_ngcontent-%COMP%]   .place-details[_ngcontent-%COMP%]   .weather-data[_ngcontent-%COMP%]   .weather-container[_ngcontent-%COMP%]   .weather-box[_ngcontent-%COMP%]   .weather-temperature[_ngcontent-%COMP%]   .forecast-temperature[_ngcontent-%COMP%]{font-size:14px}.place-details-container[_ngcontent-%COMP%]   .place-details[_ngcontent-%COMP%]   .weather-data[_ngcontent-%COMP%]   .weather-container[_ngcontent-%COMP%]   .forecast-icon[_ngcontent-%COMP%]{height:70px;width:70px}.place-details-container[_ngcontent-%COMP%]   .place-details[_ngcontent-%COMP%]   .place-details-gallery[_ngcontent-%COMP%]{margin-top:25px;display:flex;flex-direction:column;flex-wrap:wrap;align-items:center;justify-content:center;gap:20px}.place-details-container[_ngcontent-%COMP%]   .place-details[_ngcontent-%COMP%]   .place-details-gallery[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover;border-radius:30px}@media (min-width: 1080px){.place-details-container[_ngcontent-%COMP%]   .place-details[_ngcontent-%COMP%]{flex-direction:row;gap:50px;margin:30px}.place-details-container[_ngcontent-%COMP%]   .place-details[_ngcontent-%COMP%]   .place-details-text[_ngcontent-%COMP%]{font-size:17px;gap:10px;width:100%}.place-details-container[_ngcontent-%COMP%]   .place-details[_ngcontent-%COMP%]   .place-details-text[_ngcontent-%COMP%]   .place-details-titles[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.place-details-container[_ngcontent-%COMP%]   .place-details[_ngcontent-%COMP%]   .place-details-text[_ngcontent-%COMP%]   .place-title[_ngcontent-%COMP%]{font-size:52px;letter-spacing:3px}.place-details-container[_ngcontent-%COMP%]   .place-details[_ngcontent-%COMP%]   .place-details-text[_ngcontent-%COMP%]   .weather-data[_ngcontent-%COMP%]   .weather-container[_ngcontent-%COMP%]{flex-direction:row;justify-content:space-around;gap:50px}.place-details-container[_ngcontent-%COMP%]   .place-details[_ngcontent-%COMP%]   .place-details-gallery[_ngcontent-%COMP%]{margin-top:0;flex-direction:row}}"]}),t})()}];let D=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[d.Bz.forChild(Z),d.Bz]}),t})(),U=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.ez,D]}),t})()}}]);