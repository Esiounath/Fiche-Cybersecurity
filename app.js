const items = document.querySelectorAll('img');
		const nbSlide = items.length ;
		var count = 0 ;
		function slideSuivant(){
			items[count].classList.remove('active');
			if (count < nbSlide -1) {
				count++;
			}
			else{
				count = 0 ;
			}
			items[count].classList.add('active');
		}
		function slidePrecedent(){
			items[count].classList.remove('active');
			if (count > 0) {
				count--;
			}
			else{
				count = nbSlide -1 ;
			}
			items[count].classList.add('active');
		}
		var slide = setInterval((e)=>{
			items[count].classList.remove('active');
			if (count < nbSlide -1) {
				count++;
         items[count].style.transition = '5s';
         document.body.style.transition = '5s';
         items[count].style.backgroundColor = 'rgba(255.255.255.1)';
			}
			else if (count > nbSlide -items.length){
				count = 0 ;
	
         items[count].style.transition = '5s';
         document.body.style.transition = '5s';
         items[count].style.backgroundColor = 'rgba(255.255.255.1)';
			}
			else if (count > 0) {
				count--;
	
         items[count].style.transition = '5s';
         document.body.style.transition = '5s';
         items[count].style.backgroundColor = 'rgba(255.255.255.1)';
			}
			else{
				count = nbSlide -1 ;
	
         items[count].style.transition = '5s';
         document.body.style.transition = '5s';
	items[count].style.backgroundColor = 'rgba(255.255.255.1)';
				
			}
			items[count].classList.add('active');
		},4000);
		function keyPress(e){
			if (e.keyCode === 37) {
				slidePrecedent();

			}
			else if(e.keyCode === 39)
			{
				slideSuivant();

			}
			else if(e.keyCode === 32)
			{
				clearInterval(slide);
			}
		}
        document.addEventListener('keydown',keyPress);

    var h1 = document.getElementsByTagName('h1')[0];
		h1.addEventListener('click',(e)=>{
     var ul = document.createElement('ul');
     
     document.getElementsByTagName('header')[0].insertBefore(ul,document.getElementsByTagName('div')[0]);
     ul.classList.add('menu-bar');
     var qualite = document.createElement('li');
     h1.addEventListener('dblclick',(e)=>{
              if (ul.length != 0) {
			ul.remove();
		}
			
		});
     ul.append(qualite);
     qualite.textContent = "Qualité";
     var formation = document.createElement('li');
     var metier = document.createElement('li');
     
     ul.append(formation);
     formation.textContent = "Formation";
     var competences = document.createElement('li');
     ul.append(competences);
     competences.textContent = "Competences";
     var salaire = document.createElement('li');
     ul.append(metier);
     metier.textContent = "Metier";
     ul.append(salaire);
     salaire.textContent = "Salaire";

     qualite.addEventListener('click',(e)=>{
     	for (var i = 0; i < document.getElementsByTagName('div').length; i++) {
     		document.getElementsByTagName('div')[i].remove();
     	}
     	document.body.style.backgroundImage = "url('../Photos/quality.jpg')";
     	clearInterval(slide);
     	items[count].style.opacity = "0";
     	if (document.getElementsByTagName('p').length == 0 && document.getElementsByTagName('ol').length == 0 ) {
     	var textqualite = document.createElement('p');
     	document.getElementsByTagName('header')[0].insertBefore(textqualite,document.getElementsByTagName('div')[0]);
     	textqualite.classList.add('qualite');
     	textqualite.textContent = "Qualités requises : compétences informatiques, ingéniosité, qualités rédactionnelles , intégrité sans faille,beaucoup de réactivité,respect total de la confidentialité,La rigueur et la curiosité sont obligatoires pour exercer ce métier. Il faut aimer se former et s’informer continuellement sur les nouvelles technologies.";
     	textqualite.append(document.createElement('br'));
     	qualite.style.opacity = "0.2";
     	salaire.style.opacity = "1";
     	metier.style.opacity = "1";
     	formation.style.opacity = "1";
     	competences.style.opacity = "1";
     		formation.style.opacity = "1";
     		clearInterval(slide);
     		items[count].style.opacity = "0";
     	}
     	else{
	for (var i = 0; document.getElementsByTagName('p').length ; i++) {
		document.getElementsByTagName('p')[i].remove();
	}
	for (var n = 0; document.getElementsByTagName('ol').length ; n++) {
		document.getElementsByTagName('ol')[n].remove();
	}
}
         
     });

      formation.addEventListener('click',(e) =>{
      	document.body.style.backgroundImage = "url('../Photos/fond_formation.jpg')";
      	for (var i = 0; i < document.getElementsByTagName('div').length; i++) {
     		document.getElementsByTagName('div')[i].remove();
     	}
      	if (document.getElementsByTagName('p').length == 0 && document.getElementsByTagName('ol').length == 0) {
      	var ol = document.createElement('ol');
      	ol.style.fontSize = "1.5em";
      	ol.setAttribute("start","1");
      	document.getElementsByTagName('header')[0].append(ol);
     	var bts = document.createElement('li');
     	bts.append(document.createElement('br'));
     	bts.append(document.createElement('br'));
     	bts .textContent = "BTS SIO (Services informatiques aux organisations Option SISR: solutions d’infrastructures, systèmes et réseaux Option SLAM: solutions logicielles et applications métiers) BTS SN (System numérique) Option IR : informatique et réseaux BTS Saint-Cyr Cyberdéfense";
     	document.getElementsByTagName('ol')[0].append(bts);
     	var Licence = document.createElement('li');
     	Licence.textContent = "Licence spécialité Informatique";
     	document.getElementsByTagName('ol')[0].append(Licence);
     	var BUT = document.createElement('li');
     	BUT.textContent = "BUT Métiers du multimédia et de l’internet (MMI)BUT Réseaux et télécommunications (R&T) Le BUT Génie électrique et informatique industrielle";
     	document.getElementsByTagName('ol')[0].append(BUT);
     	var DUT = document.createElement('li');
     	DUT.textContent = "DUT Informatique";
     	document.getElementsByTagName('ol')[0].append(DUT);
     	var master = document.createElement('li');
     	master.append(document.createElement('br'));
     	master.textContent = "Master Informatique spécialisation systèmes et réseaux Master Chef de projet réseaux et sécurité Master Expert en ingénierie sécurité informatique Mastère Expert Cloud sécurité et réseaux Mastère Expert Cyber Sécurité";
     	document.getElementsByTagName('ol')[0].append(master);
     	document.body.classList.add('formation');
     	qualite.style.opacity = "1";
     	salaire.style.opacity = "1";
     	metier.style.opacity = "1";
     	formation.style.opacity = "0.2";
     	competences.style.opacity = "1";
     	clearInterval(slide);
     		items[count].style.opacity = "0";
}
else{
	for (var i = 0; document.getElementsByTagName('p').length ; i++) {
		document.getElementsByTagName('p')[i].remove();
	}
	for (var n = 0; document.getElementsByTagName('ol').length ; n++) {
		document.getElementsByTagName('ol')[n].remove();
	}

}
       });
      competences.addEventListener('click',(e)=>{
      	document.body.style.backgroundImage = "url('../Photos/skills.jpg')";
      	for (var i = 0; i < document.getElementsByTagName('div').length; i++) {
     		document.getElementsByTagName('div')[i].remove();
     	}
     	clearInterval(slide);
     	items[count].style.opacity = "0";
     	if (document.getElementsByTagName('p').length == 0 && document.getElementsByTagName('ol').length == 0) {
     	var textcompetences = document.createElement('p');
     	document.getElementsByTagName('header')[0].insertBefore(textcompetences,document.getElementsByTagName('div')[0]);
     	textcompetences.textContent = "L’ingénieur cybersécurité possède de nombreuses compétences, c’est un véritable surdoué de l’informatique. En plus de ses compétences en développement informatique (JavaScript(Cookie), C/C++(Faille Logiciel),Python(Virus),PHP(Faille Web),SQL(Faille gestion données)), il connait sur le bout des doigts les différents systèmes d’exploitation (Windows, Linux, Mac OS).Architecture Réseaux,Protocole Réseaux,Conception Logiciel,Conception Web.";
          textcompetences.append(document.createElement('br'));
     qualite.style.opacity = "1";
     	salaire.style.opacity = "1";
     	metier.style.opacity = "1";
     	formation.style.opacity = "1";
     	competences.style.opacity = "0.2";
     		formation.style.opacity = "1";
     		clearInterval(slide);
     		items[count].style.opacity = "0";
     	}
     	else{
	for (var i = 0; document.getElementsByTagName('p').length ; i++) {
		document.getElementsByTagName('p')[i].remove();
	}
	for (var n = 0; document.getElementsByTagName('ol').length ; n++) {
		document.getElementsByTagName('ol')[n].remove();
	}
}
         
     });
        metier.addEventListener('click',(e)=>{
        	document.body.style.backgroundImage = "url('../Photos/job.jpg')";
      	for (var i = 0; i < document.getElementsByTagName('div').length; i++) {
     		document.getElementsByTagName('div')[i].remove();
     	}
     	clearInterval(slide);
     	items[count].style.opacity = "0";
     	if (document.getElementsByTagName('p').length == 0 && document.getElementsByTagName('ol').length == 0) {
     	var pilotagesec = document.createElement('div');
     	document.getElementsByTagName('header')[0].append(pilotagesec);
     	pilotagesec.classList.add('pilotagesec');
     	var titrepilotagesec = document.createElement('ol');
     	titrepilotagesec.setAttribute("start",1);
     	pilotagesec.append(titrepilotagesec);
     	titrepilotagesec.textContent = "Gestion et pilotage de projet sécurité";
     	titrepilotagesec.append(document.createElement('br'));
          var rssi =  document.createElement('li');
          rssi.textContent="Responsbale de la sécurité des systèmes d'information";
          titrepilotagesec.append(rssi);
           var coordinaeur =  document.createElement('li');
          coordinaeur.textContent="Coordinaeur Sécurité";
          titrepilotagesec.append(coordinaeur);
           var directeur =  document.createElement('li');
          directeur.textContent="Directeur Cybersécurité";
          titrepilotagesec.append(directeur);
     	var conception = document.createElement('div');
     	document.getElementsByTagName('header')[0].append(conception);
     	conception.classList.add('conception');
     	var titreconception = document.createElement('ol');
     	conception.setAttribute("start",1);
     	conception.append(titreconception);
     	titreconception.textContent = "Conception et maintien d'un SI sécurisé";
     	titreconception.append(document.createElement('br'));
          var devsecurite =  document.createElement('li');
          devsecurite.textContent="Dévéloppeur sécurité";
          titreconception.append(devsecurite);
           var cryptologue =  document.createElement('li');
          cryptologue.textContent="Cryptologue";
          titreconception.append(cryptologue);
           var pentester =  document.createElement('li');
          pentester.textContent="Auditeur sécurité(Pentester)";
          titreconception.append(pentester);
           var specialiste =  document.createElement('li');
          specialiste.textContent="Spécialiste cybersécurité";
          titreconception.append(specialiste);
     	var conseil = document.createElement('div');
     	document.getElementsByTagName('header')[0].append(conseil);
          conseil.classList.add('conseil');
          var titreconseil = document.createElement('ol');
     	titreconseil.setAttribute("start",1);
     	conseil.append(titreconseil);
          titreconseil.textContent = "Conseil,Service et recherche";
          var consultant =  document.createElement('li');
          consultant.textContent="Consultant cybersécurité";
          titreconseil.append(consultant);
          var formateur =  document.createElement('li');
          formateur.textContent="Formateur cybersécurité";
          titreconseil.append(formateur);
          var chercheur =  document.createElement('li');
          chercheur.textContent="Chercheur cybersécurité";
          titreconseil.append(chercheur);
     qualite.style.opacity = "1";
     	salaire.style.opacity = "1";
     	metier.style.opacity = "0.2";
     	formation.style.opacity = "1";
     	competences.style.opacity = "1";
     		formation.style.opacity = "1";
 
 salaire.style.opacity = "1";    		competences.style.opacity = "1";
     		clearInterval(slide);
     		items[count].style.opacity = "0";
     	}
     	else{
	for (var i = 0; document.getElementsByTagName('p').length ; i++) {
		document.getElementsByTagName('p')[i].remove();
	}
	for (var n = 0; document.getElementsByTagName('ol').length ; n++) {
		document.getElementsByTagName('ol')[n].remove();
	}
}
         
     });
         salaire.addEventListener('click',(e)=>{
         	document.body.style.backgroundImage = "url('../Photos/salary.jpg')";
         	for (var i = 0; i < document.getElementsByTagName('div').length; i++) {
     		document.getElementsByTagName('div')[i].remove();
     	}
     	clearInterval(slide);
     	items[count].style.opacity = "0";
     	if (document.getElementsByTagName('p').length == 0 && document.getElementsByTagName('ol').length == 0) {
     	var textsalaire = document.createElement('p');
     	document.getElementsByTagName('header')[0].insertBefore(textsalaire,document.getElementsByTagName('div')[0]);
     	textsalaire.append(document.createElement('br'));
     	textsalaire.textContent = "Le salaire médian pour les emplois expert cybersécurité en France est 52 500 € par an ou 26.92 € par heure. Les postes de niveau débutant commencent avec un salaire environnant 45 000 € par an, tandis que les travailleurs les plus expérimentés gagnent jusqu'à 67 625 € par an.";
     	qualite.style.opacity = "1";
     	salaire.style.opacity = "0.2";
     	metier.style.opacity = "1";
     	formation.style.opacity = "1";
     	competences.style.opacity = "1";
     		clearInterval(slide);
     		items[count].style.opacity = "0";
     	}
     	else{
	for (var i = 0; document.getElementsByTagName('p').length ; i++) {
		document.getElementsByTagName('p')[i].remove();
	}
	for (var n = 0; document.getElementsByTagName('ol').length ; n++) {
		document.getElementsByTagName('ol')[n].remove();
	}
}
         
     });
      ul.addEventListener('dlbclick',(e)=>{
      	for (var i = 0; i < document.getElementsByTagName('p').length; i++) {
      		console.log(document.getElementsByTagName('p')[i]);
      		document.getElementsByTagName('p')[i].textContent = "none";
      		document.body.getElementsByTagName('p')[i].style.opacity = "0";
      		document.body.getElementsByTagName('p')[i].remove(document.getElementsByTagName('p')[i]);
      			for (var n = 0; n < document.getElementsByTagName('ol').length; n++) {
      		document.getElementsByTagName('ol')[n].remove();
      			for (var j = 0; j < document.getElementsByTagName('div').length; j++) {
      		document.getElementsByTagName('div')[j].remove();
      	}
      	}
      	}
      		  
  
     });




		});