import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';




// Définissez l'interface Flashcard en dehors de la classe AppComponent
interface Flashcard {
  question: string;
  answer: string;
  revealed: boolean; // Ajout de la propriété revealed pour chaque flashcard
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule, // Déjà présent
    MatButtonModule,
    MatCardModule,
    // autres modules que vous souhaitez utiliser
  ]
})
export class AppComponent implements OnInit {
  loading: boolean = true; // Commence avec le chargement activé
  subjects: string[] = ['Mathématiques', 'Physique', 'Chimie', 'Biologie', 'Histoire', 'Littérature'];
  selectedSubject: string | null = null; // Ajoutez cette ligne pour garder la trace de la matière sélectionnée
  flashcards: Flashcard[] = []; // Ajoutez cette ligne pour stocker les flashcards
  //flashcardsBySubject: { [subject: string]: Flashcard[] } = {}; // Ajoutez cette ligne

  constructor() {
    // Initialisation des flashcards par défaut pour chaque matière
    this.flashcardsBySubject = {
      'Mathématiques': [
        { question: 'Quel est le théorème de Pythagore ?', answer: 'a²+b² = c²', revealed: false },
        { question: 'Quand un triangle est-il isocèle ?', answer: 'Lorsque deux côtés sont égaux', revealed: false },
        { question: 'Quelle est la valeur de Pi ?', answer: 'Environ 3.14159', revealed: false },
        { question: 'Comment calcule-t-on l’aire d’un cercle ?', answer: 'Pi multiplié par le rayon au carré', revealed: false },
        { question: 'Qu’est-ce qu’une fonction linéaire ?', answer: 'Une fonction qui graphiquement représente une ligne droite', revealed: false },
        { question: 'Comment résoudre une équation du premier degré ?', answer: 'Isoler la variable sur un côté de l’équation', revealed: false },
        { question: 'Quelle est la formule du binôme de Newton ?', answer: '(a+b)² = a² + 2ab + b²', revealed: false },
        { question: 'Quelle est la formule de l’aire d’un rectangle ?', answer: 'Longueur multipliée par largeur', revealed: false },
        { question: 'Qu’est-ce qu’un nombre premier ?', answer: 'Un nombre qui n’a que deux diviseurs distincts : 1 et lui-même.', revealed: false },
        { question: 'Qu’est-ce que l’algèbre ?', answer: 'Branche des mathématiques qui utilise des lettres et des symboles pour représenter des nombres et des quantités dans les formules et les équations', revealed: false },
      ],
      'Physique': [
        { question: 'Quelle est l’unité de mesure de la force ?', answer: 'Le Newton', revealed: false },
        { question: 'Qu’est-ce que la relativité restreinte ?', answer: 'Théorie élaborée par Einstein qui traite de la relation entre l’espace et le temps', revealed: false },
        { question: 'Qu’est-ce que la physique quantique ?', answer: 'Branche de la physique qui étudie les phénomènes à l’échelle des particules subatomiques', revealed: false },
        { question: 'Qu’est-ce qu’un photon ?', answer: 'Particule élémentaire porteuse de lumière', revealed: false },
        { question: 'Qu’est-ce que la loi de la gravitation universelle ?', answer: 'Deux corps s’attirent avec une force directement proportionnelle au produit de leur masse et inversement proportionnelle au carré de la distance qui les sépare', revealed: false },
        { question: 'Qu’est-ce que l’énergie cinétique ?', answer: 'Énergie qu’un objet possède en raison de son mouvement', revealed: false },
        { question: 'Comment calcule-t-on la pression ?', answer: 'Force divisée par l’aire sur laquelle elle agit', revealed: false },
        { question: 'Qu’est-ce que le principe de superposition ?', answer: 'Le principe selon lequel l’état total d’un système est la somme des états individuels', revealed: false },
        { question: 'Qu’est-ce que la thermodynamique ?', answer: 'Branche de la physique qui étudie les transferts d’énergie sous forme de chaleur et de travail', revealed: false },
        { question: 'Qu’est-ce qu’un conducteur électrique ?', answer: 'Matériau qui permet le passage facile des électrons', revealed: false },
      ],
      'Chimie': [
        { question: 'Qu’est-ce qu’un atome ?', answer: 'Plus petite partie d’un élément chimique', revealed: false },
        { question: 'Qu’est-ce que la table périodique ?', answer: 'Tableau organisant tous les éléments chimiques connus', revealed: false },
        { question: 'Qu’est-ce qu’une réaction exothermique ?', answer: 'Réaction chimique qui libère de la chaleur', revealed: false },
        { question: 'Quelle est la différence entre un composé et un élément ?', answer: 'Un composé est formé de deux éléments ou plus, tandis qu’un élément est une substance pure', revealed: false },
        { question: 'Qu’est-ce que le pH ?', answer: 'Mesure de l’acidité ou de l’alcalinité d’une solution', revealed: false },
        { question: 'Comment les liaisons chimiques se forment-elles ?', answer: 'Par le partage ou l’échange d’électrons', revealed: false },
        { question: 'Qu’est-ce qu’un catalyseur ?', answer: 'Substance qui accélère une réaction chimique', revealed: false },
        { question: 'Qu’est-ce que la chromatographie ?', answer: 'Technique pour séparer les composants d’un mélange', revealed: false },
        { question: 'Qu’est-ce qu’un isotope ?', answer: 'Atomes d’un même élément avec un nombre différent de neutrons', revealed: false },
        { question: 'Qu’est-ce que la stœchiométrie ?', answer: 'Calcul des proportions relatives des réactifs et produits dans les réactions chimiques', revealed: false },
      ],
      'Biologie': [
        { question: 'Qu’est-ce que la photosynthèse ?', answer: 'Processus par lequel les plantes fabriquent de la nourriture à partir de la lumière solaire', revealed: false },
        { question: 'Qu’est-ce qu’une cellule ?', answer: 'Unité de base du vivant', revealed: false },
        { question: 'Qu’est-ce que l’ADN ?', answer: 'Acide désoxyribonucléique, porteur de l’information génétique', revealed: false },
        { question: 'Qu’est-ce que l’évolution ?', answer: 'Changement des caractéristiques héréditaires d’une population au fil des générations', revealed: false },
        { question: 'Qu’est-ce que l’osmose ?', answer: 'Déplacement de l’eau à travers une membrane semi-perméable', revealed: false },
        { question: 'Qu’est-ce qu’un écosystème ?', answer: 'Communauté d’organismes vivants interagissant avec leur environnement', revealed: false },
        { question: 'Quelles sont les bases de l’ADN ?', answer: 'Adénine, Thymine, Cytosine, Guanine', revealed: false },
        { question: 'Qu’est-ce qu’une protéine ?', answer: 'Macromolécule composée d’acides aminés', revealed: false },
        { question: 'Qu’est-ce que la mitose ?', answer: 'Processus de division cellulaire dans les cellules somatiques', revealed: false },
        { question: 'Qu’est-ce que la sélection naturelle ?', answer: 'Processus par lequel certains traits deviennent plus communs dans une population', revealed: false },
      ],
      'Histoire': [
        { question: 'Qui était le premier empereur de Rome ?', answer: 'Auguste', revealed: false },
        { question: 'Qu’est-ce que la Renaissance ?', answer: 'Période de renouveau culturel et scientifique en Europe', revealed: false },
        { question: 'Quelle était la cause de la Première Guerre mondiale ?', answer: 'Assassinat de l’archiduc François-Ferdinand', revealed: false },
        { question: 'Qu’est-ce que l’âge des découvertes ?', answer: 'Période d’exploration européenne à travers le monde', revealed: false },
        { question: 'Qui a écrit la Déclaration d’indépendance des États-Unis ?', answer: 'Thomas Jefferson', revealed: false },
        { question: 'Qu’est-ce que la Révolution industrielle ?', answer: 'Transition vers de nouveaux processus de fabrication au 18ème et 19ème siècle', revealed: false },
        { question: 'Qu’est-ce que le mur de Berlin ?', answer: 'Barrière qui divisait Berlin de 1961 à 1989', revealed: false },
        { question: 'Qui était Cléopâtre ?', answer: 'Dernière reine active de la dynastie ptolémaïque en Égypte', revealed: false },
        { question: 'Qu’est-ce que le féodalisme ?', answer: 'Système politique et social en Europe au Moyen Âge', revealed: false },
        { question: 'Quelle est la période couverte par le Moyen Âge ?', answer: 'Du 5ème au 15ème siècle', revealed: false },
      ],
      'Littérature': [
        { question: 'Qui a écrit "L’Iliade" et "L’Odyssée" ?', answer: 'Homère', revealed: false },
        { question: 'Qu’est-ce que le réalisme dans la littérature ?', answer: 'Mouvement littéraire se concentrant sur la représentation fidèle de la réalité quotidienne', revealed: false },
        { question: 'Qui a écrit "À la recherche du temps perdu" ?', answer: 'Marcel Proust', revealed: false },
        { question: 'Qu’est-ce qu’une métaphore ?', answer: 'Figure de style impliquant une comparaison implicite', revealed: false },
        { question: 'Quelle est la thématique principale de "1984" de George Orwell ?', answer: 'La surveillance totalitaire et la perte de liberté individuelle', revealed: false },
        { question: 'Qui a écrit "Les Misérables" ?', answer: 'Victor Hugo', revealed: false },
        { question: 'Qu’est-ce que le romantisme ?', answer: 'Mouvement artistique mettant l’accent sur les émotions personnelles', revealed: false },
        { question: 'Qui a écrit "Le vieil homme et la mer" ?', answer: 'Ernest Hemingway', revealed: false },
        { question: 'Qu’est-ce qu’une allégorie ?', answer: 'Représentation concrète d’une idée ou d’une abstraction', revealed: false },
        { question: 'Qui a écrit "Crime et Châtiment" ?', answer: 'Fiodor Dostoïevski', revealed: false },
      ]


    };

  // Initialisez la liste des sujets
  this.subjects = Object.keys(this.flashcardsBySubject);
}
ngOnInit(): void {
  // Utilisez setTimeout pour simuler un processus de chargement
  setTimeout(() => {
    this.loading = false; // Cela devrait déclencher l'affichage de vos matières après 2 secondes
  }, 2000);
}

  // Utilisez un objet pour stocker les flashcards par matière
  flashcardsBySubject: { [subject: string]: Flashcard[] } = {};

  selectSubject(subject: string): void {
    this.selectedSubject = subject;

    // Vérifiez si des flashcards existent déjà pour cette matière
    if (!this.flashcardsBySubject[subject]) {
      // Si elles n'existent pas, initialisez le tableau de flashcards pour cette matière
      this.flashcardsBySubject[subject] = [];
    }

    // Chargez les flashcards pour la matière sélectionnée
    this.flashcards = this.flashcardsBySubject[subject];
  }

  // Méthode pour révéler la réponse d'une flashcard
  revealAnswer(card: Flashcard): void {
    card.revealed = !card.revealed; // Cela va basculer l'état de la propriété 'revealed'
  }
  /*addFlashcards(): void {
    if (this.selectedSubject) {
      // Ajoutez ici la logique pour ajouter des flashcards à la matière sélectionnée
      // Par exemple, vous pouvez afficher une boîte de dialogue/modale pour ajouter les flashcards.
      // Vous pouvez également naviguer vers une autre page pour gérer l'ajout de flashcards.
      // Assurez-vous de personnaliser cette fonction en fonction de vos besoins.
      console.log("Ajoutez des flashcards pour la matière : " + this.selectedSubject);
    }
  }*/
  addFlashcards(): void {
    if (this.selectedSubject) {
      // Vérifiez si des flashcards existent déjà pour cette matière
      if (!this.flashcardsBySubject[this.selectedSubject]) {
        // Si elles n'existent pas, initialisez le tableau de flashcards pour cette matière
        this.flashcardsBySubject[this.selectedSubject] = [];
      }

      // Ajoutez une nouvelle flashcard à la matière sélectionnée
      const newFlashcard: Flashcard = {
        question: 'Nouvelle question',
        answer: 'Nouvelle réponse',
        revealed: false
      };

      this.flashcardsBySubject[this.selectedSubject].push(newFlashcard);

      // Mettez à jour les flashcards affichées pour la matière sélectionnée
      this.flashcards = this.flashcardsBySubject[this.selectedSubject];
    }
  }


  // Vous pouvez ajouter d'autres méthodes et propriétés nécessaires ici
}
