import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  imports: [CommonModule] // Ajoutez CommonModule ici
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
        { question: 'Quel est le théorème de Pythagore ?', answer: 'a² + b² = c²', revealed: false },
        { question: 'Quelle est la valeur de π (pi) ?', answer: '3.14159265359', revealed: false },
        { question: "Quelle est la formule de l'aire d'un rectangle ?", answer: 'Longueur × Largeur', revealed: false },
        { question: 'Quelle est la dérivée de x² par rapport à x ?', answer: '2x', revealed: false },
        { question: "Quelle est la formule de la somme des angles intérieurs d'un polygone ?", answer: '(n - 2) × 180 degrés', revealed: false },
        { question: 'Quelle est la racine carrée de 16 ?', answer: '4', revealed: false },
        { question: "Quelle est la formule de la circonférence d'un cercle ?", answer: '2πr', revealed: false },
        { question: 'Quelle est la règle des signes pour la multiplication ?', answer: 'Positif × Positif = Positif, Négatif × Négatif = Positif, Positif × Négatif = Négatif', revealed: false },
        { question: "Quelle est la formule de la surface d'un triangle ?", answer: '(Base × Hauteur) / 2', revealed: false },
        { question: 'Quelle est la formule de la moyenne arithmétique ?', answer: '(Somme des valeurs) / (Nombre de valeurs)', revealed: false },
      ],
        'Physique': [
        { question: 'Question A', answer: 'Réponse A', revealed: false },
        { question: 'Question B', answer: 'Réponse B', revealed: false }
      ],
      'Chimie': [
      { question: 'Question A', answer: 'Réponse A', revealed: false },
      { question: 'Question B', answer: 'Réponse B', revealed: false }],
        'Biologie': [
      { question: 'Question A', answer: 'Réponse A', revealed: false },
      { question: 'Question B', answer: 'Réponse B', revealed: false }],
      'Histoire': [
      { question: 'Question A', answer: 'Réponse A', revealed: false },
      { question: 'Question B', answer: 'Réponse B', revealed: false }],
      'Littérature': [
      { question: 'Question A', answer: 'Réponse A', revealed: false },
      { question: 'Question B', answer: 'Réponse B', revealed: false }],

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
  // Méthode pour basculer la visibilité de la réponse d'une flashcard
  revealAnswer(card: Flashcard): void {
    // Si la carte est déjà révélée, cachez la question et la réponse
    if (card.revealed) {
      card.revealed = false;
    } else {
      // Si la carte n'est pas révélée, cachez toutes les réponses ouvertes
      // et révélez la carte cliquée
      this.flashcards.forEach(fc => fc.revealed = false);
      card.revealed = true;
    }
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

  editFlashcard(index: number): void {
    // Obtenez la flashcard à éditer
    const flashcardToEdit = this.flashcards[index];
    // Logique pour modifier la flashcard
    // ...
  }
  /*editFlashcard(index: number): void {
    // Logique pour modifier la flashcard à l'index spécifié
    // Vous pourriez utiliser un formulaire ou une boîte de dialogue pour modifier la flashcard
  }*/

  deleteFlashcard(index: number): void {
    // Confirmez la suppression et retirez la flashcard du tableau
    if (confirm('Êtes-vous sûr de vouloir supprimer cette flashcard ?')) {
      this.flashcards.splice(index, 1);
    }
  }/*deleteFlashcard(index: number): void {
    // Logique pour supprimer la flashcard à l'index spécifié
    if (confirm('Êtes-vous sûr de vouloir supprimer cette flashcard ?')) {
      this.flashcards.splice(index, 1);
    }
  }*/



  // Vous pouvez ajouter d'autres méthodes et propriétés nécessaires ici
}
