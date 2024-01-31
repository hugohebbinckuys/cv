document.addEventListener("DOMContentLoaded", function () {
    let elements_navbar = document.querySelectorAll(".element_navbar"); 
    let element_navbar_gauche = document.querySelectorAll(".navbar_gauche");
    elements_navbar.forEach(function(element){
        element.addEventListener("mouseover", function() {
            this.style.cursor = "pointer"; 
            this.style.transition = "transform 0.5s"
            this.style.transform = "scale(1.1)"; 
            this.style.transitionDuration = "0.5s";
            // this.style.backgroundColor = "blue";
        })
        element.addEventListener("mouseout", function (){
            this.style.transform = "scale(1)"; 
        })
    })
    element_navbar_gauche.forEach(function(element) {
        element.addEventListener("mouseover", function() {
            this.style.cursor = "pointer"; 
            this.style.transform = "scale(1.1)"; 
            this.style.transitionDuration = "0.5s";
            // this.style.backgroundColor = "blue";
        })
        element.addEventListener("mouseout", function (){
            this.style.transform = "scale(1)"; 
        });
    });

    
    let langages_selectionnes = {
        php : "Le php a été très intéréssant de découvrir pour moi. J'ai beaucoup aimé développer le back-end, apprendre d'abord le fonctionnement, puis le mettre en place sur un projet. <br><br> En effet, Nous avons réalisé un projet libre sur le thème de notre choix que je vous invite à aller voir dans la section - mes projets - ou directement sur mon github ! Nous avions des contraintes à mettre en place. Il fallait plusieurs types d'utilisateur, avec des droits différents. J'ai permis aux administrateurs de gérer le site et les informations exposées aux utilisateurs. <br><br> Nous avons appris au 4ème semestre à utiliser le framework Symphony.", 

        c : "J’ai eu beaucoup de cours de C, notamment lors des 2e et 3e semestres sur les structures de données. <br><br> Nous avons pu travailler sur la constructions de ces structures, comme les arbres-binaires, les arbres-binaires Ordonnés, les AVL, les arbres n-air ou encore les b-arbres. Nous avons eu également à travailler sur un gros projet que je vous invite à voir dans la section - mes projets - ou directement sur mon github ! <br><br> Enfin, lors du 4e semestre, nous avons eu un cours d’algorithmie avancé en C.", 

        html_css : "Html et Css ont été forcément les bases de nos cours de web. Nous les avons découvert en profondeur au 1e semestre. <br><br> Nous avons eu un cours assez complet sur la matière bien que celle-ci est extrêmement vaste. Notamment sur les bonnes pratiques à avoir, les bons reflexes pour créer quelque chose d'agréable et fonctionnel. <br><br> Ici aussi, nous avons eu un projet à réaliser. Le but était de faire son CV en ligne. Un peu comme maintenant mais avec beaucoup moins d'expérience. Vous pouvez également aller le voir dans la section - mes projets - ou directement sur mon github. ", 

        sql : "L'utilisation et la maitrise des bases de données fut un des gros points des trois premiers semestres de la formation. <br><br> J'avais deja eu une première approche du sql en licence Management et numérique, mais nous sommes forcément allé bien plus loin en Sciences du Numérique. En effet  nous sommes repartis des bases sur la méthode Meurise. <br><br> Puis nous avons vu des choses plus complexes pour gérer au mieux la bases de données. Enfin, nous avons appris lors du 3e semestre des notions importantes et très intéréssantes comme les fonctions méthodes et Trigger en sql, les views ou encore l'encryptage des mots de passe.", 

        python : "Python a été le “premier” langage logique que nous avons beaucoup travaillé, lors du 1e semestre. <br><br>Ce fut l’occasion de découvrir ou approfondir les bases du langage et de l’algorithmie. Nous avons également vu les algorithmes de tris, les algorithmes récursifs. <br><br> Aussi, nous avons eu un cours de Cryptologie et de Steganographie avec Python. <br><br> J'ai également réalisé le projet que j'avais en charge lors de mon stage de 1ere année en Data, avec Python.", 

        js : "Après avoir vu les bases du web avec Html et Css, le deuxièeme semestre de web était destiné à l'apprentissage de Javascript. Nous avons fait beaucoup d'algorithmie en Js mai avons quand même vu les choses indispensables et importantes du langage pour nous permettre d'être à l'aise. <br><br> L'examen consistait à réaliser une 'appli' web météo. Via une API nous devions afficher la météo de la ville rentrée par l'utilisateur et de bein régir. ", 

        symphony : "La bonne maitrise de Php m'a permis de bien apréhender le Framework Symphony qui n'est pas tout à fait intuitif dès le départ. La maitrise de cet outils pour être plus performant est un réel atout. Nous avons un projet à réaliser en fin d'année qui peut suivre le projet du semestre précédent pour approfondir et développer plus de fonctionnalités. ",
         
        linux : "Nous avons la chance d'avoir un DualBoot sur notre ordinateur 'pro' avec Windows, et Linux via Ubuntu. Ce qui nous a permis d'avoir de << Système d'exploitation >> pour étudier notamment le bash en ligne de commandes. <br><br> Nous avons eu également un cours de << gestion de projet >> qui nous a permis d'expérimenter Git et Github en ligne de commandes également. C'est une très bonne chose d'avoir eu des cours sur linux et Github pour notre apprentissage.  "
    }

    let langage = this.querySelectorAll(".langage");
    let texte_a_changer = this.querySelector(".contenu_explication"); 
    let subtitle_a_changer = this.querySelector(".subtitle_right"); 
    const text_initial = texte_a_changer.innerHTML; 
    const subtitle_initial = subtitle_a_changer.innerHTML; 
    langage.forEach(function(elt){
        elt.addEventListener("mouseover", function(){
            this.style.transform = "scale(1.1)"; 
            this.style.transitionDuration = "0.5s";
            this.style.zIndex = "0"; 
            let id = this.getAttribute("id"); 
            let texteLangageCourant = langages_selectionnes[id];  
            texte_a_changer.innerHTML = texteLangageCourant;
            subtitle_a_changer.textContent = id.toString();
            subtitle_a_changer.style.fontSize = "small"; 
            subtitle_a_changer.style.fontWeight = "lighter";
        });
        elt.addEventListener("mouseout", function() {
            texte_a_changer.innerHTML = text_initial;
            subtitle_a_changer.innerHTML = subtitle_initial; 
            this.style.zIndex = "0"; 
            this.style.transform = "scale(1)"; 
        })
    })

let projet_selectionnes = {
    projet_web1 : "Mon premier projet web était mon CV en Html et Css. Je n'ai utilisé ni Javascript ni Bootstrap ni aucun autre langage/outils. <br><br> Il est plutôt rudimentaire et simple. J'ai voulu mettre en place le maximum d'animations et de fonctionnalités bien que limité par le langage et mes compétences à l'époque. J'ai donc mis plusieurs lien cliquables et des animations basiques en Css pour rendre le site le plus agréable possible. <br><br> Si vous voulez aller voir mon premier CV, vous pouvez directement cliquer sur l'image pour être redirigé vers mon Github ! ", 
    projet_web2 : "Ce deuxième 'vrai' projet Web est bien plus développé, bien que pas entièrement terminé. En effet, il était dans le cadre du cours de Php et nous a permis de mettre en place tout un tas de fonctionnalités pour les utilisateurs. <br><br> J'ai décidé de faire le site de mon club de foot. Ce dernier permet de mettre en lumière les bénévoles, joueurs et entraineurs du club qui ne sont que très brièvement apparents et sans détails sur les réseaux etc. J'ai voulu, comme les grands clubs mettre en lumière les équipes de jeunes (et moins jeunes) et les adhérents de l'association, ainsi que les actualités du club, les résultats ... ", 
    projet_c : "J'ai réalisé en binôme un projet en C, sans bibliothèques externes (sauf les 2 bibliothèques élémentaires), qui consistait à proposer à l'utilisateur la conception d'une map en ligne de commande pour un Donjon Crawler. Nous avons donc proposé tout un tas de fonctionnalités comme la création du donjon et ses dimensions, la création de salles dans le donjon, l'insertion de monstres, de portes , de couloirs... <br><br> Je vous invite à aller voir, d'abord les consignes du projet qui vous permettront d'y voir plus clair, et surtout notre projet final en cliquant, comme pour les deux projets précédents sur la photo. "
}

    let projet = document.querySelectorAll(".projet"); 
    let text_projet_a_changer = document.querySelector(".contenu_projet"); 
    let subtitle_projet_a_changer = document.querySelector(".subtitle_projet"); 
    const text_projet_initial = text_projet_a_changer.innerHTML; 
    const subtitle_projet_initial = subtitle_projet_a_changer.innerHTML; 
    projet.forEach(function(pj){
        pj.addEventListener("mouseover", function() {
            let id_projet = this.getAttribute("id");
            if (id_projet == "projet_c"){
                this.style.transform = "scale(1.05)";
            }
            else {
                this.style.transform = "scale(1.1)";
            }
            this.style.transitionDuration = "0.5s"; 
            let idProjet = this.getAttribute("id");
            text_projet_a_changer.innerHTML = projet_selectionnes[idProjet]; 
            subtitle_projet_a_changer.innerHTML = idProjet.toString(); 
            subtitle_projet_a_changer.style.fontSize = "small";
            subtitle_projet_a_changer.style.fontWeight = "lighter";
        })
        pj.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
            text_projet_a_changer.innerHTML = text_projet_initial;  
            subtitle_projet_a_changer.innerHTML = subtitle_projet_initial ; 
        })
    })

    let elts_navbar_scroll = document.querySelectorAll(".element_navbar");

    elts_navbar_scroll.forEach(function (elt_navbar_scroll) {
        elt_navbar_scroll.addEventListener("click", function () {
            // console.log(elt_navbar_scroll.id);
            switch (elt_navbar_scroll.id) {
                case "navbar_accueil":
                    destination_accueil = document.getElementById("destination_navbar");
                    // console.log(destination_accueil);   
                    destination_accueil.scrollIntoView({ behavior: 'smooth' });
                    break;
                case "navbar_competences":
                    destination_competences = document.getElementById("destination_competences");
                    destination_competences.scrollIntoView({ behavior: 'smooth' });
                    break;
                case "navbar_projets":
                    destination_projet = document.getElementById("destination_projets");
                    destination_projet.scrollIntoView({ behavior: 'smooth' });
                    break;
                case "navbar_infos":
                    destination_infos = document.getElementById("destination_infos");
                    destination_infos.scrollIntoView({ behavior: 'smooth' });
                    break;
                default : 
                break
                
            }
        });
    });

// changements navbar au scroll 
    let navbar_gauche = document.querySelector(".navbar_gauche"); 
    let navbar = document.querySelector(".navbar");
    let img_fond = document.getElementById("fond"); 

    let position_seuil = 100;
    let stop = 0; 

    // mise en place des evenements quand scroll vers le bas :
    window.addEventListener("scroll", function() {
        if (window.scrollY > position_seuil){
            // console.log("on retrecit");
            navbar.classList.add("navbar_reduite"); // navbar reduite 
            navbar_gauche.classList.add("navbar_gauche_reduite"); // img navbar reduite 
            
            
            stop = 1;
        }
        else {
            stop = 0; 
            if (stop === 0){
                // console.log("on reagrandi");
                navbar.classList.remove("navbar_reduite");
                navbar_gauche.classList.remove("navbar_gauche_reduite");
            }
        }
    })    

    let text_navbar = document.querySelectorAll(".element_navbar");
    text_navbar.forEach(function(elt_navbar_scroll){
        window.addEventListener("scroll", function() {
            if (window.scrollY > position_seuil){
                // console.log("on retrecit le texte");
                elt_navbar_scroll.style.fontSize = "small";
                elt_navbar_scroll.style.fontWeight = "500";
            }
            else {
                elt_navbar_scroll.style.fontSize = "medium";
                elt_navbar_scroll.style.fontWeight = "1000";
            }
        })
    })


    // go to accueil quand click sur logo 

    let logo_navbar = document.querySelector(".navbar_gauche"); 
    let destination_navbar = document.getElementById("destination_navbar")
    logo_navbar.addEventListener("click", function() {
        destination_navbar.scrollIntoView({behavior:"smooth"})
    });

    let nom_prenom_container = this.getElementById("hugohebbinckuys");
    // console.log(nom_prenom_container);
    let nom_prenom = "HUGO HEBBINCKUYS";
    let index = 0 ; 

    function animtext () {
        nom_prenom_container.innerHTML = nom_prenom.slice(0, index)
        index++;
        if (index <= nom_prenom.length){
            setTimeout(animtext, 80); // execute la function animText apres 150 ms; 
        }
        if (index == nom_prenom.length){

        }
    }

    animtext();



    let elements_contact = this.querySelectorAll(".reseau"); 
    // console.log(elements_contact);
    elements_contact.forEach(function(elt_cont) {
        elt_cont.addEventListener("mouseover", function() {
            this.style.transform = "scale(1.2)"; 
            this.style.transition = "transform 300ms"; 
            this.style.cursor = "pointer";
        })
        elt_cont.addEventListener("mouseout", function() {
            this.style.transform = "scale(1.1)"; 
        })
        elt_cont.addEventListener("click", function() {
            // console.log(this.id);
            switch (this.id){
                case "cv_static" : 
                    window.open("autres/cv_HugoHebbinckuys.pdf", "_blank");
                    break;
                case "mail" : 
                    window.open("mailto:hugohebbinckuys@lacatholille.fr", "_blank");
                    break; 
                case "tel" : 
                    window.open("tel:0782396498", "_blank");
                    break; 
                case "linkedin" : 
                    window.open("https://www.linkedin.com/in/hugo-hebbinckuys-sdn/", "_blank");
                    break; 
                case "github" : 
                    window.open("https://github.com/hugohebbinckuys", "_blank");
                    break; 


            }
        })
    });

    // eviter changements de taille 

    let section_competences = document.querySelector(".competences");
    // console.log(section_competences.id); 
    let taille_init = section_competences.clientHeight; 
    section_competences.addEventListener("mouseover", function() {
        section_competences.style.height = taille_init+"px"; 
        // console.log(section_competences.style.height); 
    })  

    //mise en place evenements sur projets : 

    let projets = document.querySelectorAll(".projet"); 
    // console.log(projets); 


    projets.forEach(function(proj){
        proj.addEventListener("mouseover", function() {
            this.style.cursor = "pointer"; 
        })
        proj.addEventListener("click", function() {
            if (proj.getAttribute("id") == "projet_web1"){
                window.open("https://github.com/hugohebbinckuys/cvHugo1ereAnnee", "_blank"); 
            }
            if (proj.getAttribute("id") == "projet_web2"){
                window.open("https://github.com/hugohebbinckuys/siteClubFctv", "_blank"); 
            }
            if (proj.getAttribute("id") == "projet_c"){
                window.open("https://github.com/hugohebbinckuys/DonjonCrawler_C", "_blank"); 
            }
        })
    })







    // animation titres 
    // let titres = this.querySelectorAll(".title_explication"); 
    // let nb_titres = titres.length;
    // console.log(nb_titres); 

    // function animTitre() {
    //     for (let i = 0; i<nb_titres; i++){

    //     }    
    // }
    // let liste_titres = ["titre_competences", "titre_projets", "titre_infos"]; 
    // let liste_titres_a_assigner = ["Les langages que j'ai étudié", "Les projets que j'ai réalisé", "Quelques infos' sur moi"]; 

    // // let liste_titres = document.querySelectorAll(".titre_explication"); 
    // console.log(liste_titres); 
    // let index_titres = 0; 

    // window.addEventListener("scroll", function(){
    //     for (let i = 0; i<3; i++) {
    //         let titre = this.document.getElementById(liste_titres[index_titres]); 
    //         if (this.scrollY <= titre.getBoundingClientRect().top){
    //             // console.log(titre); 
    //             titre.textContent = "Yo ";
    //         }
    //     }
    // })
    

    // let nom_prenom_container = this.getElementById("hugohebbinckuys");
    // // console.log(nom_prenom_container);
    // let nom_prenom = "HUGO HEBBINCKUYS";
    // let index = 0 ; 

    // function animtext () {
    //     nom_prenom_container.textContent = nom_prenom.slice(0, index)
    //     index++;
    //     if (index <= nom_prenom.length){
    //         setTimeout(animtext, 80); // execute la function animText apres 150 ms; 
    //     }
    //     if (index == nom_prenom.length){

    //     }
    // }


});




// reste a faire : 

// - Evidemment le responsive
// - petite animation des logos de contact tout en bas 
// - les textes et la stilisation un peu mieux de la derniere section ("quelques infos sur moi") 
// - la photo 
// - eventuellement du js sur chaque titre 
