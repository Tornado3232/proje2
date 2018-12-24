function validateForm(){
									//SON ANA BIRAKILDIĞI İÇİN TAMAMLANAMADI!!!!
	var usernameValue = document.querySelector("#username").value;  var usernameBool=false;
	var nameValue = document.querySelector("#name").value;			var nameBool=false;
	var mailValue = document.querySelector("#mail").value;			var mailBool=false;
	var ageValue = document.querySelector("#age").value;			var ageBool=false;
	var phoneValue = document.querySelector("#phone").value;		var phoneBool=false;
	var infoValue = document.querySelector("#information").value;	var infoBool=false;
	var mottoValue = document.querySelector("#motto").value;		var mottoBool=false;
	var textValue = document.querySelector("#text").value;			var textBool=false;
	while(usernameBool && nameBool && mailBool && ageBool && phoneBool && infoBool && mottoBool && textBool){
	if(usernameValue==""){								//KULLANICI ADI İLE İLGİLİ KONTROL KISMI
		alert("Kullanıcı adı kısmı doldurulmalıdır!");
		
	}
	else{
		usernameBool=true;
	}	
	if(nameValue==""){									//İSİM-SOYİSİM İLE İLGİLİ KONTROL KISMI
		alert("İsim ve Soyisim kısmı doldurulmalıdır!");
		
	} 
	
	for(var x=0; nameValue.length ; x++){				//İSİM-SOYİSİM İLE İLGİLİ KONTROL KISMI
		var code=nameValue[x].charCodeAt();
		  
			if(!((code>64 && code<91)||(code>96 && code<123))){
				alert("İsim ve Soyisim sadece alfabetik sembollerden oluşmalıdır!");
				
		}
		else{
			nameBool=true;
		}
		
	}
	
	if(mailValue==""){									//MAİL İLE İLGİLİ KONTROL KISMI
		alert("Mail kısmı doldurulmalıdır!");
		
	}
	else{
		mailBool=true;
	}
	
	if(ageValue==""){									//YAŞ İLE İLGİLİ KONTROL KISMI
		alert("Yaş kısmı doldurulmalıdır!");
		
	}
	
	for(var y=0; ageValue.length ; y++){				//YAŞ İLE İLGİLİ KONTROL KISMI
		var code2=ageValue[y].charCodeAt();
		
			if(code2<48 || code2>57){
				alert("Yaş değeri sadece nümerik sembollerden oluşmalıdır!");
				
			}
			else{
				ageBool=true;
			}
		
	}
	if(phoneValue==""){									//TELEFON NUMARASI İLE İLGİLİ KONTROL KISMI
		alert("Telefon Numarası kısmı doldurulmalıdır!");
		
	}
	
	if(phoneValue.length!=12){							//TELEFON NUMARASI İLE İLGİLİ KONTROL KISMI
		alert("Telefon Numarası kısmı 12 karakter uzunluğunda olmalıdır!");
	}
	else{
		phoneBool=true;
	}
	
	if(infoValue==""){									//BİLGİLENDİRME İLE İLGİLİ KONTROL KISMI
		alert("Bilgilendirme kısmı doldurulmalıdır!");
		
	}
	
	if(infoValue.length>31){							//BİLGİLENDİRME İLE İLGİLİ KONTROL KISMI
		alert("Bilgilendirme kısmı maksimum 30 karakterden oluşmalıdır!");
	}
	else{
		infoBool=true;
	}
	
	if(mottoValue==""){									//MOTTO İLE İLGİLİ KONTROL KISMI
		alert("Motto kısmı doldurulmalıdır!");
		
	}
	//2 BOŞLUK İÇERİP İÇERMEDİĞİ KONTROL EDİLECEK!
	
	if(textValue==""){									//METİN İLE İLGİLİ KONTROL KISMI
		alert("Metin kısmı doldurulmalıdır!");
		
	}//En az 1 büyük harf, en az 1 küçük harf, en az bir rakam ve en az 1 noktalama işareti içeren ve en az 8 uzunluğunda OLUP OLMADIĞI KONTROL EDİLECEK!!
	}	 
	return false;	 
 }
	
	
	
