// ============================================================
// MODULE 2 — Quantum Formalism I
// Topics : Observables & Operators          (4 Q)
//          Expectation Values & Uncertainty (4 Q)
// ============================================================

TOPICS.push(
  { key: "Observables & Operators",          label: "Observables and operators" },
  { key: "Expectation Values & Uncertainty", label: "Expectation values and uncertainty" }
);

Object.assign(TOPIC_SLIDES, {
  "Observables & Operators"          : "references/BPHY-Lecture-11.pdf",
  "Expectation Values & Uncertainty" : "references/BPHY-Lecture-12.pdf"
});

QUESTIONS.push(

  // ========================
  // Observables & Operators
  // ========================
  {
    topic: "Observables & Operators",
    question: "Which statement correctly characterizes the condition that an operator must satisfy in order to represent a standard observable in quantum mechanics?",
    options: [
      "It must be Hermitian so that its eigenvalues are real and its eigenvectors can form an orthonormal basis in the finite-dimensional case.",
      "It must contain only real matrix entries in every basis.",
      "It must commute with every other observable.",
      "It must be invertible."
    ],
    correctIndex: 0,
    hints: [
      "A physical measurement outcome must be real.",
      "The required property is basis-independent."
    ],
    solution:
`Step 1: Physical requirement.
Measurement outcomes are real numbers. Hermitian operators have real eigenvalues, making them suitable for observables.

Step 2: Spectral structure.
In finite dimensions, Hermitian operators can be diagonalized by an orthonormal eigenbasis, making the Born-rule interpretation clean.

Step 3: Why other options fail.
Real matrix entries is a basis-dependent statement — a Hermitian operator can have complex entries in some bases.
Universal commutation is not required. Invertibility is not required.

Step 4: Conclude.
The defining criterion for an observable is Hermiticity.`
  },
  {
    topic: "Observables & Operators",
    question: "Suppose two Hermitian operators A and B satisfy [A,B] = 0. Which conclusion is the most precise?",
    options: [
      "They can be simultaneously diagonalized, with additional care required inside degenerate eigenspaces.",
      "They must have identical eigenvalues.",
      "They must be proportional to the identity.",
      "They necessarily describe the same physical observable."
    ],
    correctIndex: 0,
    hints: [
      "Commutation is related to compatibility.",
      "Degeneracy is the only subtle point here."
    ],
    solution:
`Step 1: Commuting Hermitian operators are compatible observables.
A common eigenbasis exists.

Step 2: Non-degenerate case.
If A has no degeneracy, each eigenvector of A is unique (up to phase). Commutation forces each to also be an eigenvector of B.

Step 3: Degenerate case.
When A has a degenerate eigenvalue, B preserves the degenerate subspace but may not yet be diagonal inside it. One must diagonalize B within that subspace separately.

Step 4: Conclude.
The most precise statement is: they admit a common eigenbasis after degeneracies are handled correctly.`
  },
  {
    topic: "Observables & Operators",
    question: "Why is it conceptually incorrect to identify the possible outcomes of measuring an observable with the diagonal entries of its matrix representation?",
    options: [
      "Because diagonal entries depend on the chosen basis, whereas physical measurement outcomes are the operator eigenvalues.",
      "Because diagonal entries are always zero for observables.",
      "Because only the trace of the operator has physical meaning.",
      "Because a measurable operator cannot be written as a matrix."
    ],
    correctIndex: 0,
    hints: [
      "Ask which quantities remain unchanged under a basis transformation.",
      "A physical prediction should not depend on notation."
    ],
    solution:
`Step 1: Diagonal entries are basis-dependent.
Changing the basis changes the matrix entries, including diagonal ones.

Step 2: Measurement outcomes must be basis-independent.
Eigenvalues are intrinsic to the operator and do not change under a change of basis.

Step 3: Simple example.
An operator diagonal in one basis is not diagonal in another. Diagonal entries in the second basis differ from the eigenvalues.

Step 4: Conclude.
Measurement outcomes are eigenvalues — not diagonal entries in an arbitrary representation.`
  },
  {
    topic: "Observables & Operators",
    question: "Let A be a Hermitian operator satisfying A² = I. What are the only possible measurement outcomes associated with A?",
    options: [
      "+1 and -1 only",
      "0 only",
      "Any real number",
      "Only purely imaginary numbers"
    ],
    correctIndex: 0,
    hints: [
      "Apply the operator equation to an eigenvector.",
      "Use A|ψ⟩ = a|ψ⟩ and then apply A again."
    ],
    solution:
`Step 1: Let A|ψ⟩ = a|ψ⟩ (eigenvalue equation).

Step 2: Apply A once more.
A²|ψ⟩ = a²|ψ⟩.

Step 3: Use the operator identity A² = I.
A²|ψ⟩ = I|ψ⟩ = |ψ⟩.

Step 4: Equate the two results.
a²|ψ⟩ = |ψ⟩ → a² = 1 → a = ±1.

Step 5: Conclude.
Since A is Hermitian, eigenvalues must be real. Combined with a²=1, the only outcomes are +1 and −1.`
  },

  // ================================
  // Expectation Values & Uncertainty
  // ================================
  {
    topic: "Expectation Values & Uncertainty",
    question: "Which statement most accurately explains why the expectation value of an observable need not coincide with any single outcome obtained in an individual measurement?",
    options: [
      "The expectation value is an ensemble average and may lie between the actual eigenvalues available in one trial.",
      "Expectation values are mathematical artifacts with no physical interpretation.",
      "Only the largest eigenvalue can be measured in a single trial.",
      "Expectation values are relevant only for mixed states."
    ],
    correctIndex: 0,
    hints: [
      "Distinguish one experiment from many identically prepared experiments.",
      "The arithmetic mean of allowed outcomes need not itself be an allowed outcome."
    ],
    solution:
`Step 1: One measurement returns one eigenvalue.
A single trial produces one of the allowed eigenvalues of the observable.

Step 2: Expectation value is a statistical average.
⟨A⟩ = weighted average of eigenvalues over many repeated measurements on identical states.

Step 3: Key example.
If outcomes are +1 and −1 with equal probability, ⟨A⟩ = 0. But 0 is never observed in any single trial.

Step 4: Conclude.
The expectation value is the center of the distribution, which need not itself be an allowed outcome.`
  },
  {
    topic: "Expectation Values & Uncertainty",
    question: "If a normalized state |ψ⟩ is an eigenstate of an observable A with eigenvalue a, which statement is correct?",
    options: [
      "⟨A⟩ = a and ΔA = 0.",
      "⟨A⟩ = 0 and ΔA = a.",
      "⟨A⟩ = a but ΔA must be nonzero.",
      "Neither the expectation value nor the uncertainty can be determined."
    ],
    correctIndex: 0,
    hints: [
      "Use A|ψ⟩ = a|ψ⟩ directly in the definitions.",
      "A sharp measurement outcome corresponds to zero spread."
    ],
    solution:
`Step 1: Compute ⟨A⟩.
⟨A⟩ = ⟨ψ|A|ψ⟩ = ⟨ψ|a|ψ⟩ = a⟨ψ|ψ⟩ = a.

Step 2: Compute ⟨A²⟩.
A²|ψ⟩ = a²|ψ⟩ → ⟨A²⟩ = a².

Step 3: Compute variance.
ΔA² = ⟨A²⟩ − ⟨A⟩² = a² − a² = 0.

Step 4: Conclude.
An eigenstate has definite A-value: ⟨A⟩ = a and ΔA = 0. Every repeated measurement gives exactly a.`
  },
  {
    topic: "Expectation Values & Uncertainty",
    question: "A state has ⟨p⟩ = 0. Which interpretation is most accurate?",
    options: [
      "The average momentum is zero, but the momentum need not be definite and the state need not describe a particle at rest.",
      "The particle certainly has momentum zero in every trial.",
      "The particle certainly has zero kinetic energy.",
      "The momentum operator is not defined for that state."
    ],
    correctIndex: 0,
    hints: [
      "The mean value does not by itself determine the spread.",
      "Opposite momentum components can cancel in the average."
    ],
    solution:
`Step 1: ⟨p⟩ = 0 means the center of the momentum distribution is zero.

Step 2: This does not fix the width (Δp).
A symmetric superposition of +p and −p states has ⟨p⟩=0 but Δp≠0.
Individual measurements return +p or −p, not 0.

Step 3: Zero kinetic energy would require ⟨p²⟩=0, i.e., Δp=0 and ⟨p⟩=0. That is a stronger condition.

Step 4: Conclude.
⟨p⟩=0 means zero average momentum only. The state need not have definite or zero momentum.`
  },
  {
    topic: "Expectation Values & Uncertainty",
    question: "Why is the condition ⟨A²⟩ = ⟨A⟩² significant?",
    options: [
      "It means the variance of A is zero, so the state has a definite value of A.",
      "It implies that A must be the identity operator.",
      "It proves that A is non-Hermitian.",
      "It implies that every observable has the same expectation value."
    ],
    correctIndex: 0,
    hints: [
      "Recall the definition of variance.",
      "Certainty corresponds to the absence of statistical spread."
    ],
    solution:
`Step 1: Recall variance definition.
ΔA² = ⟨A²⟩ − ⟨A⟩².

Step 2: Apply the given condition.
⟨A²⟩ = ⟨A⟩² → ΔA² = 0.

Step 3: Physical meaning of ΔA² = 0.
Repeated measurements on identical states produce no spread — the outcome is certain every time.

Step 4: When does this happen?
The state lies in an eigenspace of A corresponding to a single eigenvalue.

Step 5: Conclude.
⟨A²⟩ = ⟨A⟩² signals complete sharpness of the observable in that state.`
  }

); // end QUESTIONS.push — module2