#!/usr/bin/env python3
"""
Engineering Physics Quiz - BAPHY105
Linear Operators & Special Matrices
Command-line interactive quiz with progressive hints
"""

import os
import sys
from typing import List, Dict

class QuizQuestion:
    def __init__(self, question: str, correct_answer: str, accepted_answers: List[str], 
                 hints: List[str], solution: str, topic: str):
        self.question = question
        self.correct_answer = correct_answer
        self.accepted_answers = accepted_answers
        self.hints = hints
        self.solution = solution
        self.topic = topic

class Quiz:
    def __init__(self):
        self.questions = self._load_questions()
        self.current_question_index = 0
        self.score = 0
        self.attempts = 0
        self.hint_index = 0

    def _load_questions(self) -> List[QuizQuestion]:
        """Load all quiz questions"""
        return [
            QuizQuestion(
                question="What is the condition for an operator Â to be linear?",
                correct_answer="Â(α|ψ⟩ + β|φ⟩) = αÂ|ψ⟩ + βÂ|φ⟩",
                accepted_answers=["linear", "linearity preserved", "preserves linearity"],
                hints=[
                    "Think about how the operator acts on a linear combination of vectors.",
                    "The operator must satisfy: Â(α|ψ⟩ + β|φ⟩) = αÂ|ψ⟩ + βÂ|φ⟩"
                ],
                solution="A linear operator preserves linearity: Â(α|ψ⟩ + β|φ⟩) = αÂ|ψ⟩ + βÂ|φ⟩\n"
                         "Example: d/dx is linear, but √ is not.",
                topic="Linear Operators"
            ),
            QuizQuestion(
                question="For matrix A = [[2,1],[1,2]], what are its eigenvalues?",
                correct_answer="λ = 1, 3",
                accepted_answers=["1 and 3", "3 and 1", "1, 3", "3, 1"],
                hints=[
                    "Use characteristic equation: det(A - λI) = 0",
                    "This gives λ² - 4λ + 3 = 0, which factors to (λ-1)(λ-3) = 0"
                ],
                solution="Eigenvalues: λ = 1 and λ = 3\n"
                         "Eigenvectors: |ψ₁⟩ ∝ [1,1] for λ=3, |ψ₂⟩ ∝ [1,-1] for λ=1",
                topic="Eigenvalues"
            ),
            QuizQuestion(
                question="What is the defining property of a Hermitian operator Ĥ?",
                correct_answer="Ĥ = Ĥ†",
                accepted_answers=["hermitian", "self-adjoint", "equal to its adjoint"],
                hints=[
                    "A Hermitian operator is self-adjoint.",
                    "It must equal its own adjoint: Ĥ = Ĥ†"
                ],
                solution="Hermitian: Ĥ = Ĥ† (self-adjoint)\n"
                         "Properties: Real eigenvalues, orthogonal eigenvectors",
                topic="Hermitian Operators"
            ),
            QuizQuestion(
                question="What is the commutator [σₓ, σᵧ] for Pauli matrices?",
                correct_answer="2iσᵤ",
                accepted_answers=["2i σz", "2iσz", "2i σᵤ"],
                hints=[
                    "Calculate σₓσᵧ - σᵧσₓ using matrix multiplication",
                    "Result involves the third Pauli matrix σᵤ with factor 2i"
                ],
                solution="[σₓ,σᵧ] = 2iσᵤ\nGeneral: [σᵢ,σⱼ] = 2iεᵢⱼₖσₖ",
                topic="Pauli Matrices"
            ),
            QuizQuestion(
                question="What is |λ| for eigenvalues of a unitary operator?",
                correct_answer="|λ| = 1",
                accepted_answers=["1", "unity", "one"],
                hints=[
                    "Use Û†Û = I and the eigenvalue equation",
                    "From ⟨χ|Û†Û|χ⟩ = |λ|²⟨χ|χ⟩ = ⟨χ|χ⟩"
                ],
                solution="|λ| = 1 for all eigenvalues of unitary operators\n"
                         "Unitary operators preserve vector norms",
                topic="Unitary Operators"
            )
        ]

    def clear_screen(self):
        """Clear terminal screen"""
        os.system('cls' if os.name == 'nt' else 'clear')

    def print_header(self):
        """Print quiz header"""
        print("=" * 70)
        print("🎓 ENGINEERING PHYSICS QUIZ - BAPHY105")
        print("Linear Operators & Special Matrices")
        print("=" * 70)
        print(f"Question {self.current_question_index + 1}/{len(self.questions)} | "
              f"Score: {self.score} | Attempts: {self.attempts}")
        print("=" * 70)

    def ask_question(self):
        """Ask current question and handle responses"""
        if self.current_question_index >= len(self.questions):
            self.show_results()
            return False

        question = self.questions[self.current_question_index]
        self.hint_index = 0

        while True:
            self.clear_screen()
            self.print_header()

            print(f"\n📚 Topic: {question.topic}\n")
            print(f"Q: {question.question}\n")

            user_answer = input("Your answer (or 'skip' to skip, 'quit' to exit): ").strip()

            if user_answer.lower() == 'quit':
                print("\n👋 Thanks for playing!")
                return False

            if user_answer.lower() == 'skip':
                print(f"\n⏭️  Skipped! The answer was: {question.correct_answer}")
                print(f"\n📖 Solution:\n{question.solution}")
                input("\nPress Enter to continue...")
                break

            if not user_answer:
                print("\n⚠️  Please enter an answer!")
                input("Press Enter to try again...")
                continue

            self.attempts += 1

            # Check answer
            is_correct = any(ans.lower() in user_answer.lower() 
                           for ans in question.accepted_answers)

            if is_correct:
                self.score += 1
                print("\n✅ Correct! Well done!")
                print(f"\n📖 Full Solution:\n{question.solution}")
                input("\nPress Enter to continue...")
                break
            else:
                # Show hint
                if self.hint_index < len(question.hints):
                    print(f"\n❌ Incorrect.")
                    print(f"\n💡 Hint {self.hint_index + 1}: {question.hints[self.hint_index]}")
                    self.hint_index += 1
                    input("\nPress Enter to try again...")
                else:
                    print(f"\n❌ Incorrect. The answer was: {question.correct_answer}")
                    print(f"\n📖 Solution:\n{question.solution}")
                    input("\nPress Enter to continue...")
                    break

        self.current_question_index += 1
        return True

    def show_results(self):
        """Show final quiz results"""
        self.clear_screen()
        print("=" * 70)
        print("🎉 QUIZ COMPLETED!")
        print("=" * 70)
        print(f"\nFinal Score: {self.score}/{len(self.questions)}")
        print(f"Total Attempts: {self.attempts}")
        percentage = (self.score / len(self.questions)) * 100
        print(f"Percentage: {percentage:.1f}%")

        if percentage >= 80:
            print("\n🌟 Excellent work! You have a strong understanding!")
        elif percentage >= 60:
            print("\n👍 Good job! Keep practicing!")
        else:
            print("\n📚 Keep studying! Review the topics and try again!")

        print("\n" + "=" * 70)

    def run(self):
        """Run the quiz"""
        self.clear_screen()
        print("=" * 70)
        print("🎓 Welcome to Engineering Physics Quiz!")
        print("=" * 70)
        print("\nTopics covered:")
        print("• Linear Operators")
        print("• Eigenvalues & Eigenvectors")
        print("• Hermitian Operators")
        print("• Unitary Operators")
        print("• Projection Operators")
        print("• Pauli Matrices")
        print("\nHow it works:")
        print("• Answer each question")
        print("• Get progressive hints if incorrect")
        print("• See full solution after answering or using all hints")
        print("\n" + "=" * 70)
        input("\nPress Enter to start...")

        while self.ask_question():
            pass

        self.show_results()

if __name__ == "__main__":
    quiz = Quiz()
    quiz.run()
