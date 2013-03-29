function Gmailx (){
	p = Gmailx.prototype;

// Selectors for GMail DOM Elements

	p.SELECTORS = {
		header 				:	"#\\:ro",
		sidebar				: 	"#\\:aw .LrBjie .TK :first",
		email_body			: 	".ii.gt.adP.adO",
		email_title			: 	".ha .hP",
		email_sender		: 	".iw .gD",
		inbox_rows 			: 	".xY .xS .xT .y6",
		container			: 	"div.AO .Tm.aeJ .aeF .nH .BltHke.nH.oy8Mbf .ae4.IU.UJ",
		navbar_gmail		: 	"div#gbu.gbes .gbvg ol.gbtc"
	
	};

	p.CLASS = {
		navbar_li 			: "gbt"
	};
	
	//Construct Selector
	p.header 		= $(this.SELECTORS.header);
	p.sidebar 		= $(this.SELECTORS.sidebar);
	p.emailBody 	= $(this.SELECTORS.email_body);
	p.email_title	= $(this.SELECTORS.email_title);
	p.navbar 		= $(this.SELECTORS.navbar_gmail);

	p.getSenderEmailAddress = function(){
		var e = $(this.SELECTORS.email_sender).attr("email");
		return e;
	};


/// Get E-Mail Details 

	p.getEmailTitle = function(){
		var e = $(this.SELECTORS.email_title).html();
		return e;
	};

	p.getEmailBody = function(){
		var e = $(this.SELECTORS.email_body).html();
		return e;
	};

	
	p.addGmailNav = function(innerhtml){
		var data = '<li class="'+this.CLASS.navbar_li+'">'+ innerhtml +'</li>';
		$(this.SELECTORS.navbar_gmail).prepend(data);
	}




}