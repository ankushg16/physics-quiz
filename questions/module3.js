// ============================================================
// MODULE 3 — Quantum Formalism II
// Topics : Measurement in Quantum Mechanics (4 Q)
//          Sequential Stern-Gerlach          (4 Q)
// ============================================================

TOPICS.push(
  { key: "Measurement in Quantum Mechanics", label: "Measurement in quantum mechanics" },
  { key: "Sequential Stern-Gerlach",         label: "Sequential Stern-Gerlach experiment" }
);

Object.assign(TOPIC_SLIDES, {
  "Measurement in Quantum Mechanics" : "references/BPHY-Lecture-12.pdf",
  "Sequential Stern-Gerlach"         : "references/BPHY-Lecture-14.pdf"
});

QUESTIONS.push(

  // ================================
  // Measurement in Quantum Mechanics
  // ================================
  {
    topic: "Measurement in Quantum Mechanics",
    question: "Why does an immediate repetition of an ideal projective measurement of the same observable return the same result with certainty?",
    options: [
      "Because the first measurement projects the state into the eigenspace associated with the observed eigenvalue.",
      "Because the apparatus mechanically remembers the previous answer.",
      "Because all observables begin to commute after a measurement.",
      "Because the system becomes classical after one observation."
    ],
    correctIndex: 0,
    hints: [
      "The key idea is state update after measurement.",
      "After the first measurement the state is no longer arbitrary."
    ],
    solution:
`Step 1: Before measurement.
The state may be a superposition of several eigenstates of the observable.

Step 2: First ideal projective measurement.
One outcome is obtained and the state is projected into the corresponding eigenspace.

Step 3: Second measurement immediately after.
The system is already in an eigenspace of the observable. The second measurement finds the same eigenvalue with certainty.

Step 4: Degenerate case.
Even with degeneracy, the state lies in the correct eigenspace, so the same eigenvalue is obtained again.

Step 5: Conclude.
Repeatability comes from the projection postulate — the state update after measurement — not from classical memory or a change in the physics.`
  },
  {
    topic: "Measurement in Quantum Mechanics",
    question: "A system is in a superposition of two energy eigenstates. What does an ideal energy measurement yield in a single trial?",
    options: [
      "One of the allowed energy eigenvalues, obtained probabilistically according to the Born rule, followed by projection onto the corresponding eigenspace.",
      "The arithmetic mean of the two energies in every trial.",
      "A continuously varying energy between the two eigenvalues.",
      "No change in the state because energy measurements are non-invasive."
    ],
    correctIndex: 0,
    hints: [
      "Single-trial outcomes are eigenvalues, not averages.",
      "The expansion coefficients determine probabilities, not the outcome itself."
    ],
    solution:
`Step 1: Superposition state.
|ψ⟩ = c₁|E₁⟩ + c₂|E₂⟩, where |c₁|² + |c₂|² = 1.

Step 2: Born rule for single trial.
Each run yields either E₁ (with probability |c₁|²) or E₂ (with probability |c₂|²).
The arithmetic mean ⟨E⟩ is only recovered after many trials.

Step 3: State update.
After obtaining Eᵢ, the state collapses into the eigenspace of Eᵢ.

Step 4: Why the mean is never a single outcome.
E₁ and E₂ are the only eigenvalues. A value strictly between them is not an eigenvalue and cannot be observed.

Step 5: Conclude.
A single trial returns one eigenvalue probabilistically, followed by projection. The mean appears only in statistical averages.`
  },
  {
    topic: "Measurement in Quantum Mechanics",
    question: "What is the most accurate statement about the effect of measuring an observable that has a degenerate eigenvalue?",
    options: [
      "The post-measurement state lies in the eigenspace associated with the measured eigenvalue, but it need not be a uniquely specified eigenvector.",
      "Degeneracy prevents the observable from being measurable.",
      "The state always collapses to a unique basis vector fixed independently of the apparatus.",
      "No state update occurs when the eigenvalue is degenerate."
    ],
    correctIndex: 0,
    hints: [
      "Degeneracy refers to a multi-dimensional eigenspace.",
      "The measured value may not fully determine the post-measurement state."
    ],
    solution:
`Step 1: What degeneracy means.
A degenerate eigenvalue corresponds to a subspace of dimension greater than one.

Step 2: Projection rule under degeneracy.
The post-measurement state is the projection of the pre-measurement state onto that subspace, normalized. It is not a unique eigenvector.

Step 3: Implication.
The eigenvalue alone does not single out one direction in the subspace. Additional commuting observables are needed to fully resolve the state.

Step 4: What does NOT happen.
The measurement is still valid. A state update does occur. Mathematics alone does not choose a unique basis vector inside the degenerate subspace.

Step 5: Conclude.
With degeneracy, the state collapses into the eigenspace, not necessarily to a uniquely determined eigenvector.`
  },
  {
    topic: "Measurement in Quantum Mechanics",
    question: "Why is the measurement postulate needed in addition to Schrödinger evolution?",
    options: [
      "Because unitary time evolution alone does not specify how single experimental runs produce eigenvalues with Born-rule probabilities.",
      "Because the Schrödinger equation is invalid whenever a detector is present.",
      "Because measurements are classical processes unrelated to quantum states.",
      "Because expectation values cannot be defined dynamically."
    ],
    correctIndex: 0,
    hints: [
      "Separate continuous state evolution from outcome assignment.",
      "The issue is how theory connects to single laboratory events."
    ],
    solution:
`Step 1: What Schrödinger evolution provides.
The Schrödinger equation gives the continuous, deterministic, unitary time evolution of the state vector.

Step 2: What it does not provide.
It does not assign a specific eigenvalue to an individual measurement event. It does not explain how one definite outcome is selected from a superposition.

Step 3: What the measurement postulate adds.
(a) The possible outcomes are the eigenvalues of the observable.
(b) Probabilities are given by the Born rule.
(c) The state is updated (projected) after an outcome is recorded.

Step 4: The Schrödinger equation is not wrong.
It correctly describes closed-system evolution between measurements. The postulate covers the additional operational link to observed events.

Step 5: Conclude.
Both are needed: Schrödinger evolution for dynamics, the measurement postulate for connecting the formalism to experimental outcomes.`
  },

  // ==========================
  // Sequential Stern-Gerlach
  // ==========================
  {
    topic: "Sequential Stern-Gerlach",
    question: "A beam selected from the z+ output of one Stern-Gerlach apparatus is sent directly into a second Stern-Gerlach apparatus also oriented along z. What is observed ideally?",
    options: [
      "Only the z+ output appears, because the first device has already prepared the beam in an eigenstate of Sz.",
      "The beam splits equally into z+ and z−.",
      "The second apparatus produces no output because the state has already been measured.",
      "The beam changes into an x-basis superposition observable at the detector."
    ],
    correctIndex: 0,
    hints: [
      "The first selected beam is already a prepared Sz eigenstate.",
      "This is an immediate repetition of the same observable."
    ],
    solution:
`Step 1: State after the first device.
Selecting the z+ beam prepares the state |z+⟩, which is an eigenstate of Sz with eigenvalue +ħ/2.

Step 2: Second device along z.
The second device measures Sz again. Since |z+⟩ is already an eigenstate, the Born-rule probability for z+ is |⟨z+|z+⟩|² = 1.

Step 3: Probability for z−.
|⟨z−|z+⟩|² = 0. The z− port produces no beam.

Step 4: Conclude.
Only the z+ output appears. This demonstrates that an ideal measurement prepares a definite eigenstate, and immediate repetition of the same measurement is certain.`
  },
  {
    topic: "Sequential Stern-Gerlach",
    question: "A z+ selected beam is now sent into a Stern-Gerlach apparatus oriented along x. What is observed?",
    options: [
      "The beam splits equally into x+ and x−, because |z+⟩ is an equal superposition of |x+⟩ and |x−⟩.",
      "Only x+ appears, because the beam was already spin-up.",
      "Only x− appears, because opposite axes give opposite results.",
      "No splitting occurs because Sx and Sz commute."
    ],
    correctIndex: 0,
    hints: [
      "Express |z+⟩ in the x-basis.",
      "Sx and Sz do not commute — they are incompatible observables."
    ],
    solution:
`Step 1: Express |z+⟩ in the Sx eigenbasis.
|z+⟩ = (1/√2)|x+⟩ + (1/√2)|x−⟩.

Step 2: Apply the Born rule.
P(x+) = |⟨x+|z+⟩|² = 1/2.
P(x−) = |⟨x−|z+⟩|² = 1/2.

Step 3: Physical interpretation.
The z+ state has completely indefinite x-spin. Measuring Sx yields either outcome with equal probability.

Step 4: Note on commutation.
[Sx, Sz] ≠ 0. Sx and Sz are incompatible — definite Sz does not imply definite Sx.

Step 5: Conclude.
The beam splits equally into x+ and x−.`
  },
  {
    topic: "Sequential Stern-Gerlach",
    question: "Consider three sequential devices: (1) select z+, (2) pass through an x-device (both x+ and x− allowed through, recombined), (3) measure z again. What is observed at device 3?",
    options: [
      "Only z+ appears, because recombining without observation restores the original state.",
      "Equal z+ and z− appear, because the x-device has permanently disturbed the spin.",
      "Only z− appears, because two measurements reverse the spin.",
      "No beam exits, because two intermediate measurements destroy the state."
    ],
    correctIndex: 0,
    hints: [
      "If no which-path information is recorded at device 2, the state is not collapsed there.",
      "Recombining both x-paths coherently is equivalent to not measuring x."
    ],
    solution:
`Step 1: After device 1.
State is |z+⟩.

Step 2: Device 2 — x-device with both paths recombined (no detection).
When both x+ and x− paths are allowed through and coherently recombined without recording which path, no actual x-measurement occurs. The state remains |z+⟩.

Step 3: Device 3 — measure z.
State entering device 3 is still |z+⟩ → only z+ exits with probability 1.

Step 4: Contrast with blocked path.
If one of the x-paths is blocked (acting as a true measurement), the state collapses and z+ and z− appear at device 3.

Step 5: Conclude.
Coherent recombination without observation restores the original state — only z+ appears.`
  },
  {
    topic: "Sequential Stern-Gerlach",
    question: "In a three-device sequence — select z+, then measure x (record outcome, block one port), then measure z — both z+ and z− appear at the final device. What fundamental principle does this demonstrate?",
    options: [
      "Measuring a non-commuting observable (Sx) between two Sz measurements disturbs the Sz eigenstate, because [Sx, Sz] ≠ 0.",
      "The spin vector rotates spontaneously between devices due to free evolution.",
      "The z-measurement at the end is less accurate than the first.",
      "Repeated measurements always randomize the spin regardless of axis."
    ],
    correctIndex: 0,
    hints: [
      "The intermediate x-measurement is the key difference from the two-device case.",
      "Focus on the commutation relation between Sx and Sz."
    ],
    solution:
`Step 1: State after device 1.
|z+⟩ — definite Sz eigenstate.

Step 2: Intermediate x-measurement (one port blocked = outcome recorded).
The x-measurement collapses |z+⟩ into either |x+⟩ or |x−⟩.
Both can be written as equal superpositions of |z+⟩ and |z−⟩.

Step 3: Final z-measurement.
Starting from |x+⟩ = (1/√2)(|z+⟩ + |z−⟩), the z-measurement yields z+ or z− each with probability 1/2.
Same for |x−⟩.

Step 4: The role of [Sx, Sz] ≠ 0.
Because Sx and Sz do not commute, they are incompatible. A definite Sx value implies completely indefinite Sz.
The intermediate Sx measurement destroys the original Sz information.

Step 5: Conclude.
The experiment directly demonstrates that measuring a non-commuting observable between two identical measurements disturbs the system — a concrete manifestation of quantum incompatibility.`
  }

); // end QUESTIONS.push — module3