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
        { question: 'Quand il triangle est-il isocèle ? ', answer: '2 côtés égaux', revealed: false },
        // Ajoutez d'autres flashcards pour les mathématiques si nécessaire
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
