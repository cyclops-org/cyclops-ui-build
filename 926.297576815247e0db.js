"use strict";(self.webpackChunkcyclops=self.webpackChunkcyclops||[]).push([[926],{1926:(X,x,r)=>{r.r(x),r.d(x,{IssueModule:()=>K});var d=r(6019),p=r(867),I=r(4753),e=r(3668),Z=r(4522),q=r(4499),v=r(2997),O=r(2098),f=r(7384),b=r(4171),M=r(8260);let C=(()=>{class s{constructor(t){this.http=t,this.localUrl=M.N.url,this.loading=new q.X(!1)}setLoading(t){this.lastSubscription&&this.lastSubscription.unsubscribe();let n=0;t&&(n=0),this.lastSubscription=(0,v.of)(t).pipe((0,O.g)(n)).subscribe(()=>{this.loading.next(t)})}postRequest(t,n={},i=new Z.WM,l=!1){return(0,v.of)(void 0).pipe((0,f.b)(u=>{this.setLoading(!0)}),(0,b.V)(u=>this.http.post(`${this.localUrl}/${t}`,n,{observe:"body",headers:i})),(0,f.b)(u=>{this.setLoading(!1)}))}getRequest(t,n={},i={},l=!1){return(0,v.of)(void 0).pipe((0,f.b)(u=>{this.setLoading(!0)}),(0,b.V)(u=>this.http.get(`${this.localUrl}/${t}`,{observe:"body",params:n,headers:i})),(0,f.b)(u=>{this.setLoading(!1)}))}getBusiness(){return this.getRequest("api/v1/business/?limit=9999999999")}getIssues(t){return this.getRequest("api/v1/issue/list/"+t)}getRevalidateIssues(){return this.getRequest("api/v1/issue/list")}issueUpdate(t,n){return this.postRequest("api/v1/issue/revalidate/"+t,n)}}return s.\u0275fac=function(t){return new(t||s)(e.LFG(Z.eN))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();var T=r(9287),w=r(333),a=r(6015),_=r(515),A=r(4104),g=r(9133);let U=(()=>{class s{transform(t,n,i){return""!=i?t.filter(l=>l[n]==i):t}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275pipe=e.Yjl({name:"statusFilter",type:s,pure:!1}),s})();function F(s,o){if(1&s&&(e.TgZ(0,"nb-option",18),e._uU(1),e.qZA()),2&s){const t=o.$implicit;e.Q6J("value",null==t?null:t._id.$oid),e.xp6(1),e.hij(" ",t.name," ")}}function L(s,o){if(1&s){const t=e.EpF();e.TgZ(0,"div",15),e.TgZ(1,"div",7),e._uU(2," Switch Business "),e.qZA(),e.TgZ(3,"nb-select",16),e.NdJ("selectedChange",function(i){return e.CHM(t).ngIf.default_selected=i})("selectedChange",function(i){return e.CHM(t),e.oxw().businessChange(i)}),e.YNc(4,F,2,2,"nb-option",17),e.qZA(),e.qZA()}if(2&s){const t=o.ngIf;e.xp6(3),e.Q6J("selected",t.default_selected),e.xp6(1),e.Q6J("ngForOf",t.data)}}function J(s,o){if(1&s){const t=e.EpF();e.TgZ(0,"div",19),e.TgZ(1,"nb-card"),e.TgZ(2,"nb-select",20),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw().query=i}),e.TgZ(3,"nb-option",18),e._uU(4,"Open"),e.qZA(),e.TgZ(5,"nb-option",18),e._uU(6,"Closed"),e.qZA(),e.TgZ(7,"nb-option",18),e._uU(8,"ReOpen"),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&s){const t=e.oxw();e.xp6(2),e.Q6J("selected",t.status)("ngModel",t.query),e.xp6(1),e.Q6J("value","Open"),e.xp6(2),e.Q6J("value","Closed"),e.xp6(2),e.Q6J("value","ReOpen")}}function S(s,o){1&s&&(e.TgZ(0,"nb-card",23),e.TgZ(1,"nb-card-header"),e.TgZ(2,"h1",24),e._uU(3,"No Issues Found"),e.qZA(),e.qZA(),e.qZA())}function P(s,o){if(1&s&&(e.TgZ(0,"th"),e._uU(1),e.qZA()),2&s){const t=o.$implicit;e.xp6(1),e.hij(" ",t.title," ")}}function N(s,o){if(1&s){const t=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"td",27),e.TgZ(2,"span",28),e._UZ(3,"nb-icon",29),e._uU(4),e.qZA(),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e.TgZ(14,"nb-icon",30),e.NdJ("click",function(){const l=e.CHM(t).$implicit;return e.oxw(3).open(l._id.$oid,l.businessId.$oid)}),e.qZA(),e.qZA(),e.TgZ(15,"td"),e.TgZ(16,"button",31),e.NdJ("click",function(){const l=e.CHM(t).$implicit;return e.oxw(3).revalidate(l.issueId.$oid)}),e._uU(17," Revalidate "),e.qZA(),e.qZA(),e.qZA()}if(2&s){const t=o.$implicit;e.xp6(2),e.Q6J("ngClass",t.severity),e.xp6(2),e.hij(" \xa0",t.severity,""),e.xp6(2),e.Oqu(t.issue),e.xp6(2),e.Oqu(t.status),e.xp6(2),e.Oqu(t.projectName),e.xp6(2),e.Oqu(t.doc),e.xp6(4),e.Q6J("disabled",t.disable)}}function V(s,o){if(1&s&&(e.TgZ(0,"nb-card",2),e.TgZ(1,"nb-card-header"),e.TgZ(2,"h5"),e._uU(3),e.qZA(),e.qZA(),e.TgZ(4,"nb-card-body",25),e.TgZ(5,"table"),e.TgZ(6,"thead"),e.TgZ(7,"tr"),e.YNc(8,P,2,1,"th",26),e.qZA(),e.qZA(),e.TgZ(9,"tbody"),e.YNc(10,N,18,7,"tr",26),e.ALo(11,"statusFilter"),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&s){const t=e.oxw(2);e.xp6(3),e.hij("Issues List ( ",t.businessName," )"),e.xp6(5),e.Q6J("ngForOf",t.columns),e.xp6(2),e.Q6J("ngForOf",e.Dn7(11,3,t.issues,"status",t.query))}}function $(s,o){if(1&s&&(e.TgZ(0,"div"),e.YNc(1,S,4,0,"nb-card",21),e.YNc(2,V,12,7,"nb-card",22),e.qZA()),2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",0==t.issues.length),e.xp6(1),e.Q6J("ngIf",t.issues.length>0)}}function Q(s,o){1&s&&(e.TgZ(0,"nb-card",23),e.TgZ(1,"nb-card-header"),e.TgZ(2,"h1",24),e._uU(3,"No Issues Found to Revalidate"),e.qZA(),e.qZA(),e.qZA())}function R(s,o){if(1&s&&(e.TgZ(0,"th"),e._uU(1),e.qZA()),2&s){const t=o.$implicit;e.xp6(1),e.hij(" ",t.title," ")}}function B(s,o){if(1&s){const t=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"td",33),e.TgZ(2,"span",28),e._UZ(3,"nb-icon",29),e._uU(4),e.qZA(),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e.TgZ(14,"nb-icon",30),e.NdJ("click",function(){const l=e.CHM(t).$implicit;return e.oxw(3).open(l._id.$oid,l.businessId.$oid)}),e.qZA(),e.qZA(),e.TgZ(15,"td"),e.TgZ(16,"nb-select",34),e.NdJ("selectedChange",function(i){const u=e.CHM(t).$implicit;return e.oxw(3).statusChange(u.issueId.$oid,i)}),e.TgZ(17,"nb-option",18),e._uU(18,"Open"),e.qZA(),e.TgZ(19,"nb-option",18),e._uU(20,"Closed"),e.qZA(),e.TgZ(21,"nb-option",18),e._uU(22,"ReOpen"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(23,"td"),e.TgZ(24,"input",35),e.NdJ("keyup",function(){const l=e.CHM(t).$implicit;return e.oxw(3).inputChange(l.issueId.$oid,l.comments)})("ngModelChange",function(i){return e.CHM(t).$implicit.comments=i}),e.qZA(),e.qZA(),e.qZA()}if(2&s){const t=o.$implicit;e.xp6(2),e.Q6J("ngClass",t.severity),e.xp6(2),e.hij(" \xa0",t.severity,""),e.xp6(2),e.Oqu(t.issue),e.xp6(2),e.Oqu(t.businessName),e.xp6(2),e.Oqu(t.projectName),e.xp6(2),e.Oqu(t.doc),e.xp6(4),e.Q6J("selected",t.status),e.xp6(1),e.Q6J("value","Revalidate"),e.xp6(2),e.Q6J("value","Closed"),e.xp6(2),e.Q6J("value","ReOpen"),e.xp6(3),e.Q6J("ngModel",t.comments)}}function Y(s,o){if(1&s&&(e.TgZ(0,"nb-card",2),e.TgZ(1,"nb-card-header"),e.TgZ(2,"h5"),e._uU(3,"Issues to Revalidate (All Business)"),e.qZA(),e.qZA(),e.TgZ(4,"nb-card-body",25),e.TgZ(5,"table"),e.TgZ(6,"thead"),e.TgZ(7,"tr"),e.YNc(8,R,2,1,"th",26),e.qZA(),e.qZA(),e.TgZ(9,"tbody"),e.YNc(10,B,25,11,"tr",26),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&s){const t=e.oxw(2);e.xp6(8),e.Q6J("ngForOf",t.revalidatecolumns),e.xp6(2),e.Q6J("ngForOf",t.revalidateissues)}}function H(s,o){if(1&s&&(e.TgZ(0,"div",32),e.YNc(1,Q,4,0,"nb-card",21),e.YNc(2,Y,11,2,"nb-card",22),e.qZA()),2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",0==t.revalidateissues.length),e.xp6(1),e.Q6J("ngIf",t.revalidateissues.length>0)}}let y=(()=>{class s{constructor(t,n,i,l,u){this.apiService=t,this.router=n,this.accessChecker=i,this.roleProvider=l,this.routestateservice=u,this.query="",this.issueflag=!0,this.revalidateflag=!0,this.businessList$=this.apiService.getBusiness().pipe((0,I.U)(c=>(console.debug("data",c.default_selected),c.data=c.data.sort((h,m)=>(h=h.name.toLowerCase())<(m=m.name.toLowerCase())?-1:h>m?1:0),c.default_selected=this.routestateservice.businessId?this.routestateservice.businessId:c.data[0]._id.$oid,this.businessChange(c.default_selected),c))),this.columns=[{title:"Risk"},{title:"Vulnerability"},{title:"Status"},{title:"Project"},{title:"Updated On"},{title:"Details"},{title:"Revalidate"}],this.revalidatecolumns=[{title:"Risk"},{title:"Vulnerability"},{title:"Business"},{title:"Project"},{title:"Updated On"},{title:"Details"},{title:"Status"},{title:"Comments"}],this.issues=[],this.revalidateissues=[]}ngOnInit(){this.apiService.getRevalidateIssues().subscribe(t=>{this.revalidateissues=t.data;for(let n of this.revalidateissues)n.doc=new Date(n.doc.$date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}).replace(/ /g,"-"),n.dou=new Date(n.dou.$date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}).replace(/ /g,"-"),n.hasOwnProperty("comments")||(n.comments="")})}ngAfterViewInit(){this.roleProvider.getRole().subscribe(t=>{console.log(t),!t.includes("user")||t.includes("superadmin")||t.includes("admin")?t.includes("client")&&!t.includes("superadmin")&&!t.includes("admin")&&(this.issueflag=!0,this.revalidateflag=!1):(this.issueflag=!1,this.revalidateflag=!0)})}businessChange(t){this.query="",this.status=null,this.apiService.getIssues(t).subscribe(n=>{console.log(n.data),this.businessName=n.data[0].businessName,1==n.Status&&(this.issues=n.data);for(let i of this.issues)i.doc=new Date(i.doc.$date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}).replace(/ /g,"-"),i.dou=new Date(i.dou.$date).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"}).replace(/ /g,"-"),i.hasOwnProperty("status")?(i.disable=!1,"Revalidate"==i.status&&(i.status="Open"),("Revalidate"==i.status||"Closed"==i.status)&&(i.disable=!0)):(i.status="Open",i.disable=!1)})}open(t,n){this.routestateservice.businessId=n,this.router.navigate(["app",{outlets:{application:["details",t]}}])}revalidate(t){this.apiService.issueUpdate(t,{status:"Revalidate"}).subscribe(n=>{console.log("")})}statusChange(t,n){this.apiService.issueUpdate(t,{status:n}).subscribe(i=>{console.log("")})}saveComments(t,n){this.apiService.issueUpdate(t,{comments:n}).subscribe(i=>{console.log("")})}inputChange(t,n){this.timer&&clearTimeout(this.timer),this.timer=setTimeout(()=>{this.apiService.issueUpdate(t,{comments:n}).subscribe(i=>{console.log("")})},2e3)}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(C),e.Y36(p.F0),e.Y36(T.QH),e.Y36(T.wL),e.Y36(w.U))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-issue-viewer"]],decls:21,vars:6,consts:[["fixed",""],["fxFlex","","fxLayout","row"],["fxFlex",""],["routerLink","/","nbButton","","ghost","","status","danger","size","large"],["icon","arrow-back-outline"],["fxHide.lt-sm","","fxShow","","routerLink","/",1,"h6"],["status","danger","icon","chevron-right-outline"],[1,"caption-2"],["fxLayoutGap","1rem","fxLayoutAlign","end center","fxFlex","",4,"ngIf"],["fxLayoutAlign","center center"],["fxLayoutAlign","center "],["fxFlex","0 1 1200px","fxLayout","column"],["fxLayoutGap","1rem","fxLayoutAlign","end center",4,"ngIf"],[4,"ngIf"],["fxLayoutGap","1rem",4,"ngIf"],["fxLayoutGap","1rem","fxLayoutAlign","end center","fxFlex",""],["status","success","filled","","placeholder","Select Business","size","small",3,"selected","selectedChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["fxLayoutGap","1rem","fxLayoutAlign","end center"],["status","basic","filled","","placeholder","Select Filter","size","medium",3,"selected","ngModel","ngModelChange"],["fxLayoutGap","1rem","fxFlex","",4,"ngIf"],["fxFlex","",4,"ngIf"],["fxLayoutGap","1rem","fxFlex",""],[1,"heading"],[1,"contains"],[4,"ngFor","ngForOf"],[1,"left"],[3,"ngClass"],["icon","radio-button-on"],["status","success","size","large","icon","log-in-outline",3,"click"],["nbButton","","status","basic","size","small",3,"disabled","click"],["fxLayoutGap","1rem"],[1,"left",2,"white-space","nowrap"],["fullwidth","","status","basic","filled","","size","small",3,"selected","selectedChange"],["nbInput","","placeholder","Write Comments",3,"ngModel","keyup","ngModelChange"]],template:function(t,n){1&t&&(e.TgZ(0,"nb-layout"),e.TgZ(1,"nb-layout-header",0),e.TgZ(2,"div",1),e.TgZ(3,"div",2),e.TgZ(4,"button",3),e._UZ(5,"nb-icon",4),e.qZA(),e.TgZ(6,"span",5),e._uU(7," Hawki "),e.qZA(),e._UZ(8,"nb-icon",6),e.TgZ(9,"span",5),e._uU(10," Issue List "),e.TgZ(11,"span",7),e._uU(12,"( Issues )"),e.qZA(),e.qZA(),e.qZA(),e.YNc(13,L,5,2,"div",8),e.ALo(14,"async"),e._UZ(15,"div",9),e.qZA(),e.qZA(),e.TgZ(16,"nb-layout-column",10),e.TgZ(17,"div",11),e.YNc(18,J,9,5,"div",12),e.YNc(19,$,3,2,"div",13),e.YNc(20,H,3,2,"div",14),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(13),e.Q6J("ngIf",e.lcZ(14,4,n.issueflag&&n.businessList$)),e.xp6(5),e.Q6J("ngIf",n.issues.length>0&&n.issueflag),e.xp6(1),e.Q6J("ngIf",n.issueflag),e.xp6(1),e.Q6J("ngIf",n.revalidateflag))},directives:[a.Aqw,a.dmS,_.yH,_.xw,a.DPz,p.rH,a.fMN,A.b8,d.O5,_.Wh,a.dP_,_.SQ,a.rs,d.sg,a.q51,a.Asz,g.JJ,g.On,a.ndF,a.yKW,d.mk,A.oO,g.Fj],pipes:[d.Ov,U],styles:[".container[_ngcontent-%COMP%]{display:flex;align-items:center}table[_ngcontent-%COMP%]{border-collapse:collapse;width:100%}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{text-align:center;padding:8px}th[_ngcontent-%COMP%]{background-color:#598bff;color:#fff}td[_ngcontent-%COMP%]{font-size:small}td[_ngcontent-%COMP%]{text-transform:capitalize}tr[_ngcontent-%COMP%]{margin-bottom:1rem}th[_ngcontent-%COMP%]{font-style:bold;color:#000;background:var(--select-filled-basic-background-color);border-color:var(--select-filled-basic-border-color)}.hoverOn[_ngcontent-%COMP%]{background:var(--select-outline-basic-hover-background-color);color:#000}th[_ngcontent-%COMP%]{text-align:center}.content[_ngcontent-%COMP%]{display:flex}.flex[_ngcontent-%COMP%]{flex:1}.Low[_ngcontent-%COMP%]{color:var(--button-filled-primary-background-color)}.Medium[_ngcontent-%COMP%]{color:var(--button-filled-warning-background-color)}.High[_ngcontent-%COMP%]{color:var(--button-filled-danger-background-color)}.Critical[_ngcontent-%COMP%]{color:maroon}.usericon[_ngcontent-%COMP%]{color:var(--color-primary-default)}.left[_ngcontent-%COMP%]{text-align:left}.center[_ngcontent-%COMP%]{text-align:center}.heading[_ngcontent-%COMP%]{font-weight:750;text-align:center}.contains[_ngcontent-%COMP%]{max-height:450px;overflow:auto}"]}),s})();const j=[{path:"",component:y},{path:"**",component:y}];let k=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[[p.Bz.forChild(j)],p.Bz]}),s})();var z=r(2382),D=r(6153),G=r(6819),W=r(5815),E=r(3123);let K=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({providers:[{provide:Z.TP,useClass:W.n,multi:!0},G.k,C],imports:[[k,d.ez,a.BW0,a.EoG,a.zyh,a.T2N,D.o9,g.UX,a.DfH,a.V7y,a.LW9,a.COg,a.KdK,a.BW0,a.uuI,z.Fb,a.IIj,g.u5,E.hy.forRoot({radius:100,outerStrokeWidth:16,innerStrokeWidth:8,outerStrokeColor:"#78C000",innerStrokeColor:"#C7E596",animationDuration:300}),a.EbI]]}),s})()}}]);