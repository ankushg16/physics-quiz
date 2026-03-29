// ============================================================
// MODULE 4 — Wave Mechanics
// Topics : Schrödinger Equations            (5 Q)
//          Particle in a 1D Potential Well  (5 Q)
// ============================================================

TOPICS.push(
  { key: "Schrödinger Equations",           label: "TDSE and TISE" },
  { key: "Particle in a 1D Potential Well", label: "Particle in a one-dimensional potential well" }
);

Object.assign(TOPIC_SLIDES, {
  "Schrödinger Equations"           : "references/BPHY-Lecture-13.pdf",
  "Particle in a 1D Potential Well" : "references/BPHY-Lecture-15.pdf"
});

QUESTIONS.push(

  // =======================
  // Schrödinger Equations
  // =======================
  {
    topic: "Schrödinger Equations",
    question: "The time-dependent Schrödinger equation (TDSE) is:",
    options: [
      "iħ ∂|ψ⟩/∂t = H|ψ⟩",
      "−ħ² ∂²ψ/∂x² = Eψ",
      "H|ψ⟩ = 0",
      "∂²|ψ⟩/∂t² = −H²|ψ⟩/ħ²"
    ],
    correctIndex: 0,
    hints: [
      "The TDSE involves a first-order time derivative.",
      "The right-hand side is the Hamiltonian acting on the state."
    ],
    solution:
`Step 1: Statement of the TDSE.
The time-dependent Schrödinger equation governs how a quantum state evolves in time:
iħ ∂|ψ⟩/∂t = H|ψ⟩.

Step 2: Key features.
• First order in time (unlike the classical wave equation which is second order).
• The Hamiltonian H is the generator of time evolution.
• iħ ensures the evolution is unitary.

Step 3: Check the distractors.
−ħ²∂²ψ/∂x² = Eψ is the TISE (time-independent form) for a free particle.
H|ψ⟩ = 0 would mean zero energy only.
A second-order time derivative appears in the Klein-Gordon equation, not the Schrödinger equation.

Step 4: Conclude.
The TDSE is iħ ∂|ψ⟩/∂t = H|ψ⟩.`
  },
  {
    topic: "Schrödinger Equations",
    question: "The time-independent Schrödinger equation (TISE) is obtained when:",
    options: [
      "The Hamiltonian has no explicit time dependence and separation of variables is applied, giving H|ψ⟩ = E|ψ⟩.",
      "The potential energy is set to zero everywhere.",
      "The wavefunction is required to be real-valued.",
      "The particle mass is taken to infinity."
    ],
    correctIndex: 0,
    hints: [
      "Try separating ψ(x,t) = φ(x) T(t) in the TDSE.",
      "The time part gives an exponential; the spatial part gives an eigenvalue equation."
    ],
    solution:
`Step 1: Separation of variables.
Write ψ(x,t) = φ(x)T(t) and substitute into iħ ∂ψ/∂t = Hψ.

Step 2: Separate.
The left side gives iħ φ(x) dT/dt.
The right side gives T(t) H φ(x).
Dividing both sides by φ(x)T(t):
iħ (1/T) dT/dt = (1/φ) H φ = E  (separation constant).

Step 3: Spatial equation.
Hφ = Eφ — this is the TISE.
It is an eigenvalue equation for the Hamiltonian with eigenvalue E.

Step 4: Time equation.
dT/dt = −iE/ħ T → T(t) = e^{−iEt/ħ}.

Step 5: Conclude.
The TISE H|ψ⟩ = E|ψ⟩ arises from separation of variables when H is time-independent.`
  },
  {
    topic: "Schrödinger Equations",
    question: "For a free particle (V=0) in 1D, the TISE becomes:",
    options: [
      "−(ħ²/2m) d²ψ/dx² = Eψ",
      "(ħ²/2m) d²ψ/dx² = Eψ",
      "−(ħ/2m) dψ/dx = Eψ",
      "mω²x²ψ/2 = Eψ"
    ],
    correctIndex: 0,
    hints: [
      "The Hamiltonian for a free particle is H = p²/2m.",
      "In position representation, p = −iħ d/dx."
    ],
    solution:
`Step 1: Write the Hamiltonian for V=0.
H = p²/2m.

Step 2: Use position-space representation.
p → −iħ d/dx, so p² → −ħ² d²/dx².
Therefore H = −(ħ²/2m) d²/dx².

Step 3: Write the TISE.
Hψ = Eψ → −(ħ²/2m) d²ψ/dx² = Eψ.

Step 4: Check distractors.
Positive sign on the second derivative would give exponentially growing/decaying solutions for all E.
First-order derivative and harmonic potential terms are wrong.

Step 5: Conclude.
The free-particle TISE is −(ħ²/2m) d²ψ/dx² = Eψ.`
  },
  {
    topic: "Schrödinger Equations",
    question: "A stationary state has wavefunction ψ(x,t) = φ(x) e^{−iEt/ħ}. Which property is always true for a stationary state?",
    options: [
      "The probability density |ψ(x,t)|² is time-independent.",
      "The wavefunction itself is time-independent.",
      "The energy must be zero.",
      "The state must be a superposition of many energy eigenstates."
    ],
    correctIndex: 0,
    hints: [
      "Compute |ψ(x,t)|² = |φ(x)|² |e^{−iEt/ħ}|².",
      "The modulus of a pure phase factor is 1."
    ],
    solution:
`Step 1: Compute the probability density.
|ψ(x,t)|² = |φ(x) e^{−iEt/ħ}|² = |φ(x)|² |e^{−iEt/ħ}|².

Step 2: Evaluate the phase factor modulus.
|e^{−iEt/ħ}|² = e^{+iEt/ħ} e^{−iEt/ħ} = 1.

Step 3: Result.
|ψ(x,t)|² = |φ(x)|², which has no time dependence.

Step 4: What is NOT time-independent.
The wavefunction ψ(x,t) itself oscillates due to the e^{−iEt/ħ} phase factor. Only the probability density is stationary.

Step 5: Conclude.
In a stationary state, all measurable probabilities (including |ψ|²) are time-independent, even though ψ itself carries a time-oscillating phase.`
  },
  {
    topic: "Schrödinger Equations",
    question: "What is the physical significance of the normalization condition ∫|ψ(x,t)|² dx = 1?",
    options: [
      "It ensures the total probability of finding the particle somewhere in space is exactly 1 at all times.",
      "It fixes the energy of the particle to a specific value.",
      "It requires the wavefunction to be real-valued.",
      "It means the wavefunction is an eigenstate of the momentum operator."
    ],
    correctIndex: 0,
    hints: [
      "The Born rule interprets |ψ(x,t)|² as a probability density.",
      "The particle must be found somewhere — total probability must equal 1."
    ],
    solution:
`Step 1: Born rule interpretation.
|ψ(x,t)|² dx = probability of finding the particle between x and x+dx.

Step 2: Total probability.
Integrating over all space: ∫|ψ(x,t)|² dx = total probability of finding the particle anywhere.

Step 3: Physical requirement.
The particle exists somewhere with certainty, so the total probability must equal 1.

Step 4: Time independence of normalization.
For a Hamiltonian that is Hermitian, unitary time evolution preserves the norm.
So if ψ is normalized at t=0, it remains normalized at all times.

Step 5: Conclude.
Normalization ensures probabilistic consistency: the particle is certain to be found somewhere.`
  },

  // ================================
  // Particle in a 1D Potential Well
  // ================================
  {
    topic: "Particle in a 1D Potential Well",
    question: "For a particle in an infinite square well of width L (0 ≤ x ≤ L), the allowed energy levels are:",
    options: [
      "Eₙ = n²π²ħ²/(2mL²),  n = 1, 2, 3, …",
      "Eₙ = nπħ²/(2mL²),    n = 0, 1, 2, …",
      "Eₙ = n²ħω/2,          n = 1, 2, 3, …",
      "Eₙ = nħ²/(mL²),       n = 1, 2, 3, …"
    ],
    correctIndex: 0,
    hints: [
      "Apply boundary conditions ψ(0)=0 and ψ(L)=0.",
      "The allowed wave vectors satisfy kL = nπ."
    ],
    solution:
`Step 1: Write the TISE inside the well (V=0).
−(ħ²/2m) d²ψ/dx² = Eψ → d²ψ/dx² = −k²ψ,  where k² = 2mE/ħ².

Step 2: General solution.
ψ(x) = A sin(kx) + B cos(kx).

Step 3: Apply boundary condition at x=0.
ψ(0) = 0 → B = 0, so ψ(x) = A sin(kx).

Step 4: Apply boundary condition at x=L.
ψ(L) = A sin(kL) = 0 → kL = nπ,  n = 1, 2, 3, …
(n=0 gives the trivial zero solution.)

Step 5: Find energies.
k = nπ/L → E = ħ²k²/2m = n²π²ħ²/(2mL²).

Step 6: Conclude.
Eₙ = n²π²ħ²/(2mL²),  n = 1, 2, 3, …`
  },
  {
    topic: "Particle in a 1D Potential Well",
    question: "For the infinite square well (width L), the normalized wavefunctions inside the well are:",
    options: [
      "ψₙ(x) = √(2/L) sin(nπx/L)",
      "ψₙ(x) = √(1/L) cos(nπx/L)",
      "ψₙ(x) = √(2/L) e^{inπx/L}",
      "ψₙ(x) = (1/L) sin(nπx/L)"
    ],
    correctIndex: 0,
    hints: [
      "Boundary conditions force sine functions.",
      "Normalization requires ∫₀ᴸ |ψₙ|² dx = 1."
    ],
    solution:
`Step 1: From boundary conditions, ψₙ(x) = A sin(nπx/L).

Step 2: Normalize.
∫₀ᴸ A² sin²(nπx/L) dx = 1.
Using ∫₀ᴸ sin²(nπx/L) dx = L/2:
A² (L/2) = 1 → A = √(2/L).

Step 3: Normalized wavefunction.
ψₙ(x) = √(2/L) sin(nπx/L),  0 ≤ x ≤ L.

Step 4: Outside the well.
ψₙ(x) = 0 for x < 0 and x > L (infinite potential).

Step 5: Conclude.
ψₙ(x) = √(2/L) sin(nπx/L).`
  },
  {
    topic: "Particle in a 1D Potential Well",
    question: "The ground state (n=1) energy of a particle in an infinite square well of width L is E₁. What is the energy of the n=3 state?",
    options: [
      "9E₁",
      "3E₁",
      "√3 E₁",
      "6E₁"
    ],
    correctIndex: 0,
    hints: [
      "Energy scales as n².",
      "E₃/E₁ = 3²/1² = 9."
    ],
    solution:
`Step 1: Energy formula.
Eₙ = n²π²ħ²/(2mL²) = n² E₁,  where E₁ = π²ħ²/(2mL²).

Step 2: Compute E₃.
E₃ = 3² E₁ = 9E₁.

Step 3: Check other options.
3E₁ would correspond to n=√3, which is not an integer.
√3 E₁ and 6E₁ do not correspond to any integer n.

Step 4: Conclude.
The n=3 energy level is E₃ = 9E₁.`
  },
  {
    topic: "Particle in a 1D Potential Well",
    question: "Why is the ground state energy (n=1) of the infinite square well always greater than zero?",
    options: [
      "Because the uncertainty principle requires a nonzero momentum uncertainty when the particle is confined to a finite region, giving nonzero kinetic energy.",
      "Because the walls exert a positive potential on the particle.",
      "Because the zero-point energy is added by convention.",
      "Because n=0 is forbidden only by the normalization condition."
    ],
    correctIndex: 0,
    hints: [
      "A particle confined to width L has Δx ≈ L.",
      "The uncertainty principle Δx Δp ≥ ħ/2 then sets a lower bound on Δp."
    ],
    solution:
`Step 1: Confinement and position uncertainty.
A particle confined to 0 ≤ x ≤ L has position uncertainty Δx ~ L.

Step 2: Apply the uncertainty principle.
Δx Δp ≥ ħ/2 → Δp ≥ ħ/(2L).

Step 3: Minimum kinetic energy.
T_min ~ (Δp)²/(2m) ~ ħ²/(8mL²) > 0.

Step 4: Connection to exact result.
The exact ground state energy E₁ = π²ħ²/(2mL²) is of the same order and is indeed nonzero.

Step 5: Why n=0 is excluded.
n=0 gives ψ₀ = 0 everywhere — a trivially zero (non-normalizable) wavefunction. The uncertainty principle forbids exact zero kinetic energy for a confined particle.

Step 6: Conclude.
The nonzero ground state energy is a direct consequence of quantum confinement and the uncertainty principle.`
  },
  {
    topic: "Particle in a 1D Potential Well",
    question: "How many nodes (interior zeros) does the nth stationary state wavefunction of the infinite square well have?",
    options: [
      "n − 1 nodes",
      "n nodes",
      "n + 1 nodes",
      "0 nodes for all states"
    ],
    correctIndex: 0,
    hints: [
      "ψₙ(x) = √(2/L) sin(nπx/L).",
      "Count where sin(nπx/L)=0 strictly inside (0, L)."
    ],
    solution:
`Step 1: Write the wavefunction.
ψₙ(x) = √(2/L) sin(nπx/L),  0 < x < L.

Step 2: Find interior zeros.
sin(nπx/L) = 0 when nπx/L = mπ → x = mL/n,  m = 0, 1, 2, …, n.

Step 3: Exclude endpoints.
x=0 (m=0) and x=L (m=n) are the boundary points, not interior nodes.

Step 4: Count interior nodes.
The interior zeros occur at m = 1, 2, …, n−1, giving exactly n−1 nodes.

Step 5: Quick check.
n=1 (ground state): 0 nodes — ψ₁ = sin(πx/L) has no zero inside (0,L). ✓
n=2: 1 node at x=L/2. ✓
n=3: 2 nodes at x=L/3 and x=2L/3. ✓

Step 6: Conclude.
The nth stationary state has n−1 interior nodes.`
  }

); // end QUESTIONS.push — module4