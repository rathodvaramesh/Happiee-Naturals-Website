(self.webpackChunkpractice=self.webpackChunkpractice||[]).push([[519],{3519:(n,e,t)=>{"use strict";t.r(e),t.d(e,{SignupModule:()=>d});var r=t(1116),o=t(9283),a=t(9783),i=t(9996),p=t(2693);let s=(()=>{class n{constructor(n){this.http=n}userRegistration(n){return this.http.post("/api/signup",n).pipe((0,i.U)(n=>n))}}return n.\u0275fac=function(e){return new(e||n)(a.LFG(p.eN))},n.\u0275prov=a.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var g=t(1041);const c=[{path:"",component:(()=>{class n{constructor(n,e){this.userSignup=n,this.router=e,this.signupData={email:"rathodramesh213@gmail.com",pwd:"Ramesh@123",repeatPwd:"Ramesh@123"}}signup(){this.userSignup.userRegistration(this.signupData).subscribe(n=>{this.router.navigate(n.email?["/dashboard"]:["/home"])})}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)(a.Y36(s),a.Y36(o.F0))},n.\u0275cmp=a.Xpm({type:n,selectors:[["app-signup"]],decls:33,vars:3,consts:[["action","/action_page.php"],[1,"container"],["for","email"],["type","text","placeholder","Enter Email","name","signupData.email","required","",3,"ngModel","ngModelChange"],["for","psw"],["type","password","placeholder","Enter Password","name","signupData.pwd","required","",3,"ngModel","ngModelChange"],["for","psw-repeat"],["type","password","placeholder","Repeat Password","name","signupData.repeatPwd","required","",3,"ngModel","ngModelChange"],["href","/home"],["type","submit",1,"registerbtn",3,"click"],[1,"container","signin"],["routerLink","/login"]],template:function(n,e){1&n&&(a.TgZ(0,"form",0),a.TgZ(1,"div",1),a.TgZ(2,"h1"),a._uU(3,"Register"),a.qZA(),a.TgZ(4,"p"),a._uU(5,"Please fill in this form to create an account."),a.qZA(),a._UZ(6,"hr"),a.TgZ(7,"label",2),a.TgZ(8,"b"),a._uU(9,"Email"),a.qZA(),a.qZA(),a.TgZ(10,"input",3),a.NdJ("ngModelChange",function(n){return e.signupData.email=n}),a.qZA(),a.TgZ(11,"label",4),a.TgZ(12,"b"),a._uU(13,"Password"),a.qZA(),a.qZA(),a.TgZ(14,"input",5),a.NdJ("ngModelChange",function(n){return e.signupData.pwd=n}),a.qZA(),a.TgZ(15,"label",6),a.TgZ(16,"b"),a._uU(17,"Repeat Password"),a.qZA(),a.qZA(),a.TgZ(18,"input",7),a.NdJ("ngModelChange",function(n){return e.signupData.repeatPwd=n}),a.qZA(),a._UZ(19,"hr"),a.TgZ(20,"p"),a._uU(21,"By creating an account you agree to our "),a.TgZ(22,"a",8),a._uU(23,"Terms & Privacy"),a.qZA(),a._uU(24,"."),a.qZA(),a.TgZ(25,"button",9),a.NdJ("click",function(){return e.signup()}),a._uU(26,"Register"),a.qZA(),a.qZA(),a.TgZ(27,"div",10),a.TgZ(28,"p"),a._uU(29,"Already have an account? "),a.TgZ(30,"a",11),a._uU(31,"Sign in"),a.qZA(),a._uU(32,"."),a.qZA(),a.qZA(),a.qZA()),2&n&&(a.xp6(10),a.Q6J("ngModel",e.signupData.email),a.xp6(4),a.Q6J("ngModel",e.signupData.pwd),a.xp6(4),a.Q6J("ngModel",e.signupData.repeatPwd))},directives:[g._Y,g.JL,g.F,g.Fj,g.Q7,g.JJ,g.On,o.yS],styles:["body[_ngcontent-%COMP%]{font-family:Arial,Helvetica,sans-serif;background-color:#000}*[_ngcontent-%COMP%]{box-sizing:border-box}.container[_ngcontent-%COMP%]{padding:16px;background-color:#fff}input[type=password][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]{width:100%;padding:15px;margin:5px 0 22px;display:inline-block;border:none;background:#f1f1f1}input[type=password][_ngcontent-%COMP%]:focus, input[type=text][_ngcontent-%COMP%]:focus{background-color:#ddd;outline:none}hr[_ngcontent-%COMP%]{border:1px solid #f1f1f1;margin-bottom:25px}.registerbtn[_ngcontent-%COMP%]{background-color:#04aa6d;color:#fff;padding:16px 20px;margin:8px 0;border:none;cursor:pointer;width:100%;opacity:.9}.registerbtn[_ngcontent-%COMP%]:hover{opacity:1}a[_ngcontent-%COMP%]{color:#1e90ff}.signin[_ngcontent-%COMP%]{background-color:#f1f1f1;text-align:center}"]}),n})()}];let u=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[o.Bz.forChild(c)],o.Bz]}),n})(),d=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[[r.ez,u,g.u5]]}),n})()}}]);