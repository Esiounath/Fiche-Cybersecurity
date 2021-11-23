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
			        clearInterval(slide);
				slidePrecedent();

			}
			else if(e.keyCode === 39)
			{
			       clearInterval(slide);
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
     var explication = document.createElement('li');
     ul.append(formation);
     formation.textContent = "Formation";
     explication.textContent = "Qu'est ce que la Cybersécurité ?";
     var competences = document.createElement('li');
     ul.append(competences);
     competences.textContent = "Competences";
     var salaire = document.createElement('li');
     ul.append(explication);
     ul.append(metier);
     metier.textContent = "Metier";
     ul.append(salaire);
     salaire.textContent = "Salaire";

     qualite.addEventListener('click',(e)=>{
     	for (var i = 0; i < document.getElementsByTagName('div').length; i++) {
     		document.getElementsByTagName('div')[i].remove();
     	}
     	document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2018/09/22/11/34/board-3695073_960_720.jpg')";
     	clearInterval(slide);
     	items[count].style.opacity = "0";
     	if (document.getElementsByTagName('p').length == 0 && document.getElementsByTagName('ol').length == 0 && document.getElementsByTagName('img').length == 0) {
     	var textqualite = document.createElement('p');
     	document.getElementsByTagName('header')[0].insertBefore(textqualite,document.getElementsByTagName('div')[0]);
     	textqualite.classList.add('qualite');
     	textqualite.textContent = "Qualités requises : compétences informatiques, ingéniosité, qualités rédactionnelles , intégrité sans faille,beaucoup de réactivité,respect total de la confidentialité,La rigueur et la curiosité sont obligatoires pour exercer ce métier. Il faut aimer se former et s’informer continuellement sur les nouvelles technologies.";
     	textqualite.append(document.createElement('br'));
     	qualite.style.opacity = "0.2";
     	salaire.style.opacity = "1";
     		explication.style.opacity = "1";
     	metier.style.opacity = "1";
     	formation.style.opacity = "1";
     	competences.style.opacity = "1";
     		formation.style.opacity = "1";
     		clearInterval(slide);
     		items[count].style.opacity = "0";
     	}
     	else{
	for (var i = 0; i < document.getElementsByTagName('p').length ; i++) {
		document.getElementsByTagName('p')[i].remove();
	}
	for (var n = 0; n < document.getElementsByTagName('ol').length ; n++) {
		document.getElementsByTagName('ol')[n].remove();
	}

for (var m = 0; m < document.getElementsByTagName('img').length ; m++) {
		document.getElementsByTagName('img')[m].remove();
}
}
         
     });
     explication.addEventListener('click',(e)=>{
     	for (var i = 0; i < document.getElementsByTagName('div').length; i++) {
     		document.getElementsByTagName('div')[i].remove();
     	}
     	document.body.style.backgroundImage = "url('https://media2.giphy.com/media/077i6AULCXc0FKTj9s/giphy.gif?cid=ecf05e4748b7q6o3i67a8c85gf10mkn13oxr9s7ahbwhg3tj&rid=giphy.gif&ct=g')";
     	document.querySelector('li').style.Color = "red";
     	clearInterval(slide);
     	items[count].style.opacity = "0";
     	if (document.getElementsByTagName('p').length == 0 && document.getElementsByTagName('ol').length == 0 && document.getElementsByTagName('img').length == 0) {
     	var textexplication = document.createElement('p');
     	document.getElementsByTagName('header')[0].insertBefore(textexplication,document.getElementsByTagName('div')[0]);
     	textexplication.classList.add('explication');
     	textexplication.style.fontSize = "1.8em";
     	textexplication.textContent = "Expert Cybersécurité est un vrai chef de projet qui opère sur différents systèmes et défense montré ci-dessous ! Il est en charge de superviser et administrer en toute confidentialité les solutions du Security Operating Center (SOC). Il doit identifier les sources de potentielles attaques, leurs mécanismes et bloquer leur accès aux solutions existantes. Sa mission est également d’aider et d’orienter les équipes techniques pour sécuriser le réseau et les systèmes informatiques. Par ailleurs, il doit assurer une veille sur les menaces actuelles.La cybersécurité protège les données et l’intégrité des ressources informatiques connectées ou installées sur un réseau d’entreprise. Elle a pour mission de défendre ces ressources contre tous les pirates, et ce tout au long du cycle d’attaque.La cybersécurité consiste à protéger les ordinateurs, les serveurs, les appareils mobiles, les systèmes électroniques, les réseaux et les données contre les attaques malveillantes. On l’appelle également sécurité informatique ou sécurité des systèmes d'information. L'exemple ci-dessous montre à qu'elle type de défense l'expert en cybersécurité est confronté,dans cet exemple le pirate injecte un script fréquement utilisé par les pirates informatiques qui sans aucun identifiant permet de ce connecter un compte quelconque présent dans la base de données";
     	textexplication.append(document.createElement('br'));
     	var faille = document.createElement('img');
     	faille.setAttribute("src","Suppression_base_de_donnee.png");
     	document.getElementsByTagName('header')[0].append(faille);
     	faille.style.position = "relative";
     	faille.style.bottom = "20%";
     	faille.style.left = "5%";
     	faille.style.height = "60%";
     	faille.style.width = "60%";
     	explication.style.opacity = "0.2";
     	salaire.style.opacity = "1";
     	metier.style.opacity = "1";
     	formation.style.opacity = "1";
     	competences.style.opacity = "1";
     		clearInterval(slide);
     		items[count].style.opacity = "0";
     		console.log(document.getElementsByTagName('img'));
     	}
     	else{
	for (var i = 0; i < document.getElementsByTagName('p').length ; i++) {
		document.getElementsByTagName('p')[i].remove();
	}
	for (var n = 0; n < document.getElementsByTagName('ol').length ; n++) {
		document.getElementsByTagName('ol')[n].remove();
	}
for (var m = 0; m < document.getElementsByTagName('img').length ; m++) {
		document.getElementsByTagName('img')[m].remove();

}
}
         
     });

      formation.addEventListener('click',(e) =>{
      	document.body.style.backgroundImage = "url('https://www.leschartreux.com/les-filieres-post-bac/les-formations-diplomantes/bts-sio-services-informatiques-aux-organisations/image_albumphotos')";
      	for (var i = 0; i < document.getElementsByTagName('div').length; i++) {
     		document.getElementsByTagName('div')[i].remove();
     	}
      	if (document.getElementsByTagName('p').length == 0 && document.getElementsByTagName('ol').length == 0 && document.getElementsByTagName('img').length == 0) {
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
     	explication.style.opacity = "1";
     	clearInterval(slide);
     		items[count].style.opacity = "0";
}
else{
	for (var i = 0; i < document.getElementsByTagName('p').length ; i++) {
		document.getElementsByTagName('p')[i].remove();
	}
	for (var n = 0; n < document.getElementsByTagName('ol').length ; n++) {
		document.getElementsByTagName('ol')[n].remove();
	}
	for (var m = 0; m < document.getElementsByTagName('img').length ; m++) {
		document.getElementsByTagName('img')[m].remove();
	}



}
       });
      competences.addEventListener('click',(e)=>{
      	document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2018/05/04/06/37/strategy-3373337_960_720.jpg')";
      	for (var i = 0; i < document.getElementsByTagName('div').length; i++) {
     		document.getElementsByTagName('div')[i].remove();
     	}
     	clearInterval(slide);
     	items[count].style.opacity = "0";
     	if (document.getElementsByTagName('p').length == 0 && document.getElementsByTagName('ol').length == 0 && document.getElementsByTagName('img').length == 0) {
     	var textcompetences = document.createElement('p');
     	document.getElementsByTagName('header')[0].insertBefore(textcompetences,document.getElementsByTagName('div')[0]);
     	textcompetences.textContent = "L’ingénieur cybersécurité possède de nombreuses compétences, c’est un véritable surdoué de l’informatique. En plus de ses compétences en développement informatique (JavaScript(Cookie), C/C++(Faille Logiciel),Python(Virus),PHP(Faille Web),SQL(Faille gestion données)), il connait sur le bout des doigts les différents systèmes d’exploitation (Windows, Linux, Mac OS).Architecture Réseaux,Protocole Réseaux,Conception Logiciel,Conception Web.";
          textcompetences.append(document.createElement('br'));
          textcompetences.style.textShadow = "0 1px black, -1px 0 black, -1px 2px black, -2px 1px black, -2px 3px #808d93, -3px 2px #cdd2d5, -3px 4px #808d93, -4px 3px #cdd2d5, -4px 5px #808d93, -5px 4px #cdd2d5, -5px 6px #808d93, -6px 5px #cdd2d5, -6px 7px #808d93, -7px 6px #cdd2d5, -7px 8px #808d93, -8px 7px #cdd2d5";
     qualite.style.opacity = "1";
     	salaire.style.opacity = "1";
     	metier.style.opacity = "1";
     	formation.style.opacity = "1";
     	competences.style.opacity = "0.2";
     		explication.style.opacity = "1";
     		formation.style.opacity = "1";
     		clearInterval(slide);
     		items[count].style.opacity = "0";
     	}
     	else{
	for (var i = 0; i < document.getElementsByTagName('p').length ; i++) {
		document.getElementsByTagName('p')[i].remove();
	}
	for (var n = 0; n < document.getElementsByTagName('ol').length ; n++) {
		document.getElementsByTagName('ol')[n].remove();
	}
	for (var m = 0; m < document.getElementsByTagName('img').length ; m++) {
		document.getElementsByTagName('img')[m].remove();
	}


}
         
     });
        metier.addEventListener('click',(e)=>{
        	document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')";
      	for (var i = 0; i < document.getElementsByTagName('div').length; i++) {
     		document.getElementsByTagName('div')[i].remove();
     	}
     	clearInterval(slide);
     	items[count].style.opacity = "0";
     	if (document.getElementsByTagName('p').length == 0 && document.getElementsByTagName('ol').length == 0 && document.getElementsByTagName('img').length == 0) {
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
     		explication.style.opacity = "1";
     	competences.style.opacity = "1";
     		formation.style.opacity = "1";
 
 salaire.style.opacity = "1";    		competences.style.opacity = "1";
     		clearInterval(slide);
     		items[count].style.opacity = "0";
     	}
     	else{
	for (var i = 0; i < document.getElementsByTagName('p').length ; i++) {
		document.getElementsByTagName('p')[i].remove();
	}
	for (var n = 0; n < document.getElementsByTagName('ol').length ; n++) {
		document.getElementsByTagName('ol')[n].remove();
	}
	for (var m = 0; m < document.getElementsByTagName('img').length ; m++) {
		document.getElementsByTagName('img')[m].remove();
	}


}
         
     });
         salaire.addEventListener('click',(e)=>{
         	document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1561414927-6d86591d0c4f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80')";
         	for (var i = 0; i < document.getElementsByTagName('div').length; i++) {
     		document.getElementsByTagName('div')[i].remove();
     	}
     	clearInterval(slide);
     	items[count].style.opacity = "0";
     	if (document.getElementsByTagName('p').length == 0 && document.getElementsByTagName('ol').length == 0 && document.getElementsByTagName('img').length == 0) {
     	var textsalaire = document.createElement('p');
     	document.getElementsByTagName('header')[0].insertBefore(textsalaire,document.getElementsByTagName('div')[0]);
     	textsalaire.append(document.createElement('br'));
     	textsalaire.textContent = "Le salaire médian pour les emplois expert cybersécurité en France est 52 500 € par an ou 26.92 € par heure. Les postes de niveau débutant commencent avec un salaire environnant 45 000 € par an, tandis que les travailleurs les plus expérimentés gagnent jusqu'à 67 625 € par an.";
     	qualite.style.opacity = "1";
     	salaire.style.opacity = "0.2";
     	metier.style.opacity = "1";
     		explication.style.opacity = "1";
     	formation.style.opacity = "1";
     	competences.style.opacity = "1";
     		clearInterval(slide);
     		items[count].style.opacity = "0";
     	}
     	else{
	for (var i = 0; i < document.getElementsByTagName('p').length ; i++) {
		document.getElementsByTagName('p')[i].remove();
	}
	for (var n = 0; n < document.getElementsByTagName('ol').length ; n++) {
		document.getElementsByTagName('ol')[n].remove();
	}
	for (var m = 0; m < document.getElementsByTagName('img').length ; m++) {
		document.getElementsByTagName('img')[m].remove();
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
