import React, { useState, useEffect } from "react";
import "./App.css";

// --- 1. DONNÉES DU PORTFOLIO ---

const LISTE_COMPETENCES = [
  { titre: "HTML5", icone: "html.png", niveau: "95%", desc: 'Expertise en structure sémantique et accessibilité web.', preuve: "Utilisation de balises sémantiques pour optimiser le SEO de ce portfolio." },
  { titre: "CSS3", icone: "css.png", niveau: "90%", desc: 'Design responsive, animations complexes et Flexbox/Grid.', preuve: "Mise en place du design et des couleurs du site" },
  { titre: "JS", icone: "JS.png", niveau: "85%", desc: 'Développement de fonctionnalités interactives et manipulation du DOM.', preuve: "Gestion d'état dynamique (React Hooks)" },
  { titre: "Java", icone: "java.png", niveau: "80%", desc: "Programmation Orientée Objet et développement d'applications robustes.", preuve: "Développement des collisions pour le projet de jeu 2D." },
  { titre: "React", icone: "react.png", niveau: "85%", desc: "Création d'interfaces dynamiques et gestion d'état moderne.", preuve: "Architecture basée sur les Hooks (useState, useEffect) pour ce portfolio." },
  { titre: "PHP", icone: "php.png", niveau: "70%", desc: 'Développement côté serveur et intégration de systèmes.', preuve: "Scripts de traitement de formulaires sécurisés contre les injections SQL." },
  { titre: "SQL", icone: "sql.png", niveau: "80%", desc: 'Conception et gestion de bases de données relationnelles.', preuve: "Création de la base de données lors du projet JobBoard" },
  { titre: "Python", icone: "python.png", niveau: "75%", desc: 'Scripting, automatisation et analyse de données.', preuve: "Traitement de données et analyses de structures." },
  { titre: "Node.js", icone: "nodejs.png", niveau: "70%", desc: 'Architecture serveur performante et APIs REST.', preuve: "Création d'une API middleware pour connecter le frontend à Supabase." },
  { titre: "Photoshop", icone: "photoshop.png", niveau: "85%", desc: "Création et édition d'images pour le web.", preuve: "Optimisation de la photo de profil du site." },
  { titre: "InDesign", icone: "design.png", niveau: "80%", desc: 'Création de documents professionnels.', preuve: "Mise en page de mes rapports de stage Net6tem." },
  { titre: "Premiere Pro", icone: "premiere.png", niveau: "90%", desc: 'Montage vidéo professionnel.', preuve: "Montage des vidéos de ma chaine Youtube" },
  { titre: "Excel", icone: "excel.png", niveau: "90%", desc: "Analyse de données et automatisation de processus.", preuve: "Tableaux croisés dynamiques pour le suivi des RH chez Net6tem." },
  { titre: "Figma", icone: "figma.png", niveau: "85%", desc: 'Prototypage UI/UX collaboratif.', preuve: "Maquettage de ce portfolio avant développement." },
  { titre: "Blender", icone: "blender.png", niveau: "60%", desc: 'Modélisation 3D et rendu.', preuve: "Plusieurs modèles 3D créés pour des projets personnels." },
];

const LISTE_PROJETS = [
  { 
    titre: "SITE WEB CANDIDATURES", 
    lienVideo: "./videojob.mp4", 
    imageAperçu: "job.png", 
    description: "Plateforme complète de gestion de candidatures permettant de centraliser les documents RH.",
    critique: "Le code est parfois redondant au niveau des appels API, ce qui alourdit la maintenance du projet.",
    amelioration: "L'intégration de Redux ou de la Context API permettrait de centraliser les données et d'éviter le prop drilling."
  },
  { 
    titre: "JEU VIDEO JAVA 2D", 
    lienVideo: "./videojeu.mp4", 
    imageAperçu: "jeu.png", 
    description: "Moteur de jeu 2D développé intégralement en Java sans moteur externe.",
    critique: "La logique de collision est trop couplée au rendu graphique, rendant les modifications difficiles à tester.",
    amelioration: "L'optimisation du code pourrait être bien meilleure. Pour gagner en fluidité, je devrais retravailler les boucles de rendu et mieux gérer la mémoire, surtout quand il y a beaucoup d'éléments affichés en même temps à l'écran."
  },
  { 
    titre: "CV SITE WEB", 
    lienVideo: "./videocv.mp4", 
    imageAperçu: "cv.png", 
    description: "Conception et développement d'un curriculum vitae interactif sous forme de site web pour moderniser la présentation de mon parcours.",
    critique: "Le manque de fluidité sur le site.",
    amelioration: "Je pourrais m'améliorer dans le choix des couleurs utilisées."
  }
];

const LISTE_EXPERIENCES = [
  { 
    titre: "ARKOSE - Stagiaire Vendeur", 
    logo: "arkose.png", 
    resume: "Maîtrise de la relation client et des techniques de vente.", 
    details: "Au sein d'un environnement dynamique, j'ai développé une solide expertise en relation client, allant de l'accueil personnalisé au conseil technique. Cette expérience m'a permis de maîtriser les mécanismes de la vente directe et de la gestion de caisse." 
  },
  { 
    titre: "NET6TEM - Assistant Recrutement", 
    logo: "net6tem.png", 
    resume: "Immersion professionnelle et collaboration en entreprise.", 
    details: "Ce stage m'a permis de découvrir les codes du travail en entreprise au sein d'un environnement de bureau. J'ai appris à m'intégrer dans une équipe de recrutement technique, participant activement aux réunions de suivi et aux points de stratégie quotidiens." 
  }
];

function App() {
  const [projetSelectionne, setProjetSelectionne] = useState(null);
  const [competenceSelectionnee, setCompetenceSelectionnee] = useState(null);
  const [experienceSelectionnee, setExperienceSelectionnee] = useState(null);

  useEffect(() => {
    const baliseStyle = document.createElement("link");
    baliseStyle.href = "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;700&display=swap";
    baliseStyle.rel = "stylesheet";
    document.head.appendChild(baliseStyle);
  }, []);

  const gererNavigationFluide = (evenement, cibleId) => {
    evenement.preventDefault();
    const elementCible = document.getElementById(cibleId);
    if (elementCible) {
      const decalageHeader = 80;
      const positionElement = elementCible.getBoundingClientRect().top;
      const positionFinale = positionElement + window.scrollY - decalageHeader;
      window.scrollTo({ top: positionFinale, behavior: "smooth" });
    }
  };

  return (
    <div className="Application">
      <header className="BarreNavigation">
        <div className="IdentiteHeader">
          <h1>KAIS BAHA</h1>
          <a href="mailto:kais.baha@epitech.eu" className="EmailLienHeader">kais.baha@epitech.eu</a>
        </div>
        <nav>
          <a href="#accueil" onClick={(e) => gererNavigationFluide(e, "accueil")}>Accueil</a>
          <a href="#projets" onClick={(e) => gererNavigationFluide(e, "projets")}>Projets</a>
          <a href="#competences" onClick={(e) => gererNavigationFluide(e, "competences")}>Skills</a>
          <a href="#experiences" onClick={(e) => gererNavigationFluide(e, "experiences")}>Stages</a>
          <a href="#interets" onClick={(e) => gererNavigationFluide(e, "interets")}>Passions</a>
          <a href="#contact" onClick={(e) => gererNavigationFluide(e, "contact")}>Contact</a>
          <a href="https://github.com/kaislegoat" target="_blank" rel="noopener noreferrer" className="LienVersGithub">
            <img src="github.png" alt="Profil GitHub" className="LogoGithub" />
          </a>
        </nav>
      </header>

      <main>
        <section id="accueil" className="SectionConteneur">
          <div className="BandeauTitre">
            <h1>Bienvenue dans mon <span style={{color: "#ff8c00"}}>PORTFOLIO</span></h1>
          </div>
          <div className="ConteneurHeroVideo">
            <video className="VideoArrierePlan" autoPlay muted loop playsInline>
              <source src="ultraK.mp4" type="video/mp4" />
            </video>
            <div className="VoileSombre"></div>
            <div className="ContenuHero">
              <div className="HeroGauche">
                <img src="moi.jpg" alt="Kais Baha" className="PhotoProfil" />
              </div>
              <div className="HeroDroite">
                <h2>À propos de moi</h2>
                <p>Je m'appelle Kais Baha. Je vous souhaite la bienvenue sur mon portfolio, où j'ai choisi de présenter les projets dont je suis le plus fier, réalisés lors de mon semestre d'immersion de 6 mois à Epitech. Ce parcours intensif a été une opportunité unique de développer ma rigueur et ma créativité technique à travers des défis concrets que j'ai hâte de vous faire découvrir.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="SeparateurSection" />

        <section id="projets" className="SectionConteneur">
          <h2>Projets Récents</h2>
          <div className="GrilleProjets">
            {LISTE_PROJETS.map((p, i) => (
              <div key={i} className="CarteProjet" onClick={() => setProjetSelectionne(p)}>
                <img src={p.imageAperçu} alt={p.titre} />
                <h3>{p.titre}</h3>
                <p className="DescriptionCourte">Ingénierie logicielle & Développement multimédia</p>
                <div className="BoutonProjet">Découvrir le projet →</div>
              </div>
            ))}
          </div>
        </section>

        <hr className="SeparateurSection" />

        <section id="competences" className="SectionConteneur">
          <h2>Expertises Techniques</h2>
          <div className="GrilleApplications">
            {LISTE_COMPETENCES.map((s, i) => (
              <div key={i} className="IconeApplication" onClick={() => setCompetenceSelectionnee(s)}>
                <div className="ConteneurImageApp">
                  <img src={s.icone} alt={s.titre} />
                </div>
                <p>{s.titre}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="SeparateurSection" />

        <section id="experiences" className="SectionConteneur">
          <h2>Expériences Professionnelles</h2>
          <div className="GrilleExperiences">
            {LISTE_EXPERIENCES.map((exp, i) => (
              <div key={i} className="CarteExperience" onClick={() => setExperienceSelectionnee(exp)}>
                <img src={exp.logo} alt={exp.titre} />
                <p className="EtiquetteStage">STAGE</p>
                <h3>{exp.titre}</h3>
                <p className="DescriptionCourte">{exp.resume}</p>
                <div className="BoutonSavoirPlus">En savoir plus →</div>
              </div>
            ))}
          </div>
        </section>

        <hr className="SeparateurSection" />

        <section id="interets" className="SectionConteneur">
          <h2>Centres d'intérêt</h2>
          <div className="GrilleInterets">
            <div className="CarteInteret">
              <h3>Speedrun et Jeux Vidéo</h3>
              <p>Passionné par l'univers du jeu vidéo, je pratique assidûment le speedrun, en particulier sur le jeu Ultrakill. Cette discipline, qui consiste à terminer un niveau le plus rapidement possible, est pour moi un véritable laboratoire d'optimisation. Elle exige une analyse technique rigoureuse, une compréhension profonde du moteur de jeu et une persévérance sans faille face à la difficulté. Ce sont ces mêmes valeurs que je transpose chaque jour dans mon développement : chercher la solution la plus efficace, itérer jusqu'à la perfection et ne jamais reculer devant un bug complexe.</p>
            </div>
            <div className="CarteInteret">
              <h3>Culturisme</h3>
              <p>Pratiquant passionné de culturisme, je considère cette discipline comme une véritable école de la rigueur et de la patience. La construction d'un physique, tout comme celle d'une architecture logicielle complexe, exige une planification méticuleuse, une exécution précise et une régularité sans faille sur le long terme. Ce sport m'a appris que les grands résultats naissent de la somme de petits efforts quotidiens et d'une analyse constante de mes performances. C'est cette mentalité de bâtisseur et ce goût pour le dépassement de soi que j'applique avec la même intensité dans chacun de mes projets de développement.</p>
            </div>
          </div>
        </section>

        <hr className="SeparateurSection" />

        <section id="contact" className="SectionConteneur">
          <div className="BlocContact">
            <h2>Me contacter</h2>
            <form action="https://formsubmit.co/819cf6089df5967f31a3a9035491e54b" method="POST" className="FormulaireContact">
              <div className="GroupeChamps">
                <input type="email" name="email" placeholder="Votre Email" required />
              </div>
              <div className="GroupeChamps">
                <textarea name="message" rows="5" placeholder="Votre message..." required></textarea>
              </div>
              <button type="submit" className="BoutonEnvoiContact">Envoyer</button>
            </form>
          </div>
        </section>
      </main>

      {/* --- FENÊTRES MODALES --- */}
      {projetSelectionne && (
        <div className="OverlayModal" onClick={() => setProjetSelectionne(null)}>
          <div className="ContenuModal" onClick={e => e.stopPropagation()}>
            <span className="BoutonFermer" onClick={() => setProjetSelectionne(null)}>&times;</span>
            <h3>{projetSelectionne.titre}</h3>
            <video src={projetSelectionne.lienVideo} controls autoPlay style={{ width: "100%", borderRadius: "15px" }}></video>
            <div className="GrilleInfoModal GrilleTroisColonnes">
              <div className="CarreInfo"><h4>Description</h4><p>{projetSelectionne.description}</p></div>
              <div className="CarreInfo CouleurCritique"><h4>Auto-Critique</h4><p>{projetSelectionne.critique}</p></div>
              <div className="CarreInfo CouleurAmelioration"><h4>Amélioration</h4><p>{projetSelectionne.amelioration}</p></div>
            </div>
          </div>
        </div>
      )}

      {competenceSelectionnee && (
        <div className="OverlayModal" onClick={() => setCompetenceSelectionnee(null)}>
          <div className="ContenuModal TexteCentre" onClick={e => e.stopPropagation()}>
            <span className="BoutonFermer" onClick={() => setCompetenceSelectionnee(null)}>&times;</span>
            <img src={competenceSelectionnee.icone} alt={competenceSelectionnee.titre} width="60" style={{marginBottom: "10px"}} />
            <h3>{competenceSelectionnee.titre}</h3>
            <div className="GrilleInfoModal">
              <div className="CarreInfo"><h4>Description</h4><p>{competenceSelectionnee.desc}</p></div>
              <div className="CarreInfo"><h4>Preuve</h4><p>{competenceSelectionnee.preuve}</p></div>
            </div>
          </div>
        </div>
      )}

      {experienceSelectionnee && (
        <div className="OverlayModal" onClick={() => setExperienceSelectionnee(null)}>
          <div className="ContenuModal" onClick={e => e.stopPropagation()}>
            <span className="BoutonFermer" onClick={() => setExperienceSelectionnee(null)}>&times;</span>
            <h3>{experienceSelectionnee.titre}</h3>
            <p className="TexteDetailModal">{experienceSelectionnee.details}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;