// ============================================================
// MODULE 5 — Advanced Quantum Systems
// Topics : 3D Wells & Degeneracy  (5 Q)
//          Quantum Tunneling       (5 Q)
// ============================================================

TOPICS.push(
  { key: "3D Wells & Degeneracy", label: "3D Potential Wells and Degeneracy",    moduleKey: "M4" },
  { key: "Quantum Tunneling",     label: "Quantum Tunneling and Transmission",   moduleKey: "M4" }
);

Object.assign(TOPIC_SLIDES, {
  "3D Wells & Degeneracy" : "references/Module4.pdf",
  "Quantum Tunneling"     : "references/Module4.pdf"
});

QUESTIONS.push(

  // =====================
  // 3D Wells & Degeneracy
  // =====================
  {
    topic: "3D Wells & Degeneracy",
    question: "For a particle in a 3D infinite cubic box of side L, the allowed energies are labelled by three quantum numbers (nx, ny, nz). The energy is:",
    options: [
      "E = (π²ħ²/2mL²)(nx² + ny² + nz²),  nx,ny,nz = 1,2,3,…",
      "E = (π²ħ²/2mL²)(nx + ny + nz),      nx,ny,nz = 1,2,3,…",
      "E = (π²ħ²/2mL²) nx ny nz,           nx,ny,nz = 1,2,3,…",
      "E = (π²ħ²/6mL²)(nx² + ny² + nz²),  nx,ny,nz = 0,1,2,…"
    ],
    correctIndex: 0,
    hints: [
      "The 3D box separates into three independent 1D boxes.",
      "Total energy is the sum of the three 1D energies."
    ],
    solution:
`Step 1: Separation of variables in 3D.
The 3D TISE with V=0 inside and infinite walls separates:
ψ(x,y,z) = ψx(x) ψy(y) ψz(z),
E = Ex + Ey + Ez.

Step 2: Use the 1D result for each direction.
Each 1D infinite well of length L contributes:
Eᵢ = nᵢ²π²ħ²/(2mL²),  nᵢ = 1,2,3,…

Step 3: Add all three.
E = (π²ħ²/2mL²)(nx² + ny² + nz²).

Step 4: Note on quantum numbers.
All three quantum numbers start from 1, not 0 (n=0 gives trivial zero wavefunction).

Step 5: Conclude.
E(nx,ny,nz) = (π²ħ²/2mL²)(nx² + ny² + nz²).`
  },
  {
    topic: "3D Wells & Degeneracy",
    question: "What is the ground state energy of a particle in a 3D cubic infinite well of side L, and what is its degeneracy?",
    options: [
      "E = 3π²ħ²/(2mL²),  non-degenerate (degeneracy = 1)",
      "E = π²ħ²/(2mL²),   degeneracy = 3",
      "E = 6π²ħ²/(2mL²),  degeneracy = 1",
      "E = 3π²ħ²/(2mL²),  degeneracy = 3"
    ],
    correctIndex: 0,
    hints: [
      "Ground state: nx=ny=nz=1.",
      "Only one combination gives (1,1,1)."
    ],
    solution:
`Step 1: Ground state quantum numbers.
The lowest energy uses nx=ny=nz=1 (all quantum numbers at their minimum value of 1).

Step 2: Compute ground state energy.
E(1,1,1) = (π²ħ²/2mL²)(1² + 1² + 1²) = 3π²ħ²/(2mL²).

Step 3: Count degeneracy.
Only one combination gives (nx,ny,nz) = (1,1,1).
Degeneracy = 1 (non-degenerate).

Step 4: Contrast with first excited state.
The first excited state has combinations like (2,1,1), (1,2,1), (1,1,2) — three distinct states with the same energy, so degeneracy = 3.

Step 5: Conclude.
Ground state energy = 3π²ħ²/(2mL²), degeneracy = 1.`
  },
  {
    topic: "3D Wells & Degeneracy",
    question: "The first excited energy level of a 3D cubic infinite well corresponds to which sets of quantum numbers, and what is its degeneracy?",
    options: [
      "(2,1,1), (1,2,1), (1,1,2) — degeneracy 3",
      "(2,2,1), (2,1,2), (1,2,2) — degeneracy 3",
      "(2,1,1) only — degeneracy 1",
      "(2,2,2) — degeneracy 1"
    ],
    correctIndex: 0,
    hints: [
      "The next sum nx²+ny²+nz² after 3 is 6 = 4+1+1.",
      "Count all distinct orderings."
    ],
    solution:
`Step 1: Ground state has nx²+ny²+nz² = 3.

Step 2: Next lowest value.
Try nx²+ny²+nz² = 6 = 4+1+1 (i.e., one quantum number = 2, the others = 1).

Step 3: List all distinct states with this sum.
(nx,ny,nz) = (2,1,1), (1,2,1), (1,1,2).
These are three physically distinct states (different spatial wavefunctions).

Step 4: Check energy.
E = (π²ħ²/2mL²)(6) = 6π²ħ²/(2mL²) = 3π²ħ²/(mL²).

Step 5: Degeneracy.
Three distinct states share this energy → degeneracy = 3.

Step 6: Conclude.
First excited level: (2,1,1), (1,2,1), (1,1,2) with degeneracy 3.`
  },
  {
    topic: "3D Wells & Degeneracy",
    question: "What is the physical origin of degeneracy in a 3D cubic box?",
    options: [
      "The cubic symmetry means different spatial arrangements of the same quantum numbers give the same energy.",
      "Degeneracy arises only from spin and has nothing to do with geometry.",
      "All energy levels in 3D are degenerate without exception.",
      "Degeneracy occurs because the potential energy is nonzero."
    ],
    correctIndex: 0,
    hints: [
      "In a cube, all three directions are equivalent.",
      "Permuting quantum numbers among identical axes does not change the energy."
    ],
    solution:
`Step 1: Energy depends only on nx²+ny²+nz².
For a cubic box (equal side lengths), the energy formula treats all three directions identically.

Step 2: Symmetry argument.
Permuting quantum numbers among equivalent axes (e.g., swapping nx and ny) changes the spatial wavefunction but not the energy.
Each distinct permutation is a physically different state.

Step 3: Example.
(2,1,1), (1,2,1), (1,1,2) all give nx²+ny²+nz²=6 and hence the same energy — but they differ in which direction has the higher excitation.

Step 4: Breaking the degeneracy.
If the box becomes rectangular (Lx ≠ Ly ≠ Lz), the three directions are no longer equivalent and the degeneracy is lifted.

Step 5: Conclude.
Degeneracy in the cubic box originates from the rotational/permutation symmetry of the cube — all three spatial directions are equivalent.`
  },
  {
    topic: "3D Wells & Degeneracy",
    question: "How does changing a 3D cubic box to a rectangular box (Lx ≠ Ly ≠ Lz) affect the energy levels and degeneracy?",
    options: [
      "The energy levels split because each direction now has a different length, lifting the degeneracy of states that differed only by permuting quantum numbers.",
      "The energy levels remain unchanged because the volume is the same.",
      "All degeneracy increases because more quantum numbers are available.",
      "Only the ground state is affected; excited states remain degenerate."
    ],
    correctIndex: 0,
    hints: [
      "Energy now depends on nx²/Lx², ny²/Ly², nz²/Lz² separately.",
      "Permuting quantum numbers no longer gives the same energy if Lx≠Ly≠Lz."
    ],
    solution:
`Step 1: Energy formula for rectangular box.
E = (π²ħ²/2m)(nx²/Lx² + ny²/Ly² + nz²/Lz²).

Step 2: Cubic case (Lx=Ly=Lz=L).
E = (π²ħ²/2mL²)(nx²+ny²+nz²). Permuting nx,ny,nz gives the same E → degeneracy.

Step 3: Rectangular case (Lx≠Ly≠Lz).
Each direction contributes a different coefficient to its quantum number.
Permuting quantum numbers now gives different energies.

Step 4: Result.
Previously degenerate states (related by permutation of quantum numbers) now have different energies.
The degeneracy is lifted (broken) by the reduced symmetry.

Step 5: Conclude.
Reducing the cubic symmetry to a rectangular box lifts the permutation degeneracy, splitting the previously degenerate energy levels.`
  },

  // ================
  // Quantum Tunneling
  // ================
  {
    topic: "Quantum Tunneling",
    question: "A particle with energy E < V₀ approaches a finite rectangular potential barrier of height V₀ and width a. Classical mechanics predicts it cannot cross. What does quantum mechanics predict?",
    options: [
      "There is a nonzero transmission probability T > 0; the particle can tunnel through the barrier.",
      "The particle is completely reflected with probability 1, as in classical mechanics.",
      "The particle is absorbed by the barrier.",
      "The particle gains energy from the barrier and passes over it."
    ],
    correctIndex: 0,
    hints: [
      "The wavefunction does not vanish inside a classically forbidden region.",
      "An exponentially decaying solution (evanescent wave) exists inside the barrier."
    ],
    solution:
`Step 1: Classical prediction.
For E < V₀, classical mechanics forbids entry into the barrier region. The particle reflects with 100% probability.

Step 2: Quantum wavefunction inside the barrier.
The TISE inside the barrier (V=V₀) gives:
d²ψ/dx² = κ²ψ,  κ = √(2m(V₀−E))/ħ > 0.
Solution: ψ = A e^{−κx} + B e^{+κx} (real exponentials, not oscillatory).

Step 3: Nonzero amplitude on the far side.
Because the wavefunction is continuous and does not abruptly vanish at the barrier walls, there is nonzero amplitude beyond x=a.
This leads to a transmitted wave and a nonzero transmission probability T > 0.

Step 4: Physical interpretation.
The particle does not gain energy. After tunneling, it still has energy E on the other side.
The tunneling effect is purely quantum mechanical — it has no classical analogue.

Step 5: Conclude.
Quantum tunneling predicts T > 0 even for E < V₀.`
  },
  {
    topic: "Quantum Tunneling",
    question: "For a rectangular barrier of height V₀ and width a, in the limit of a thick, high barrier (κa >> 1), the transmission probability T approximately behaves as:",
    options: [
      "T ∝ e^{−2κa},  where κ = √(2m(V₀−E))/ħ",
      "T ∝ e^{+2κa}",
      "T is independent of barrier width a",
      "T ∝ 1/(κa)"
    ],
    correctIndex: 0,
    hints: [
      "Inside the barrier the wavefunction decays as e^{−κx}.",
      "Transmission probability is proportional to the square of the amplitude at the far side."
    ],
    solution:
`Step 1: Wavefunction inside the barrier.
ψ ∝ e^{−κx},  κ = √(2m(V₀−E))/ħ.

Step 2: Amplitude at far edge (x=a).
ψ(a) ∝ e^{−κa}.

Step 3: Transmission probability.
T ∝ |ψ(a)|² ∝ e^{−2κa}.

Step 4: Physical consequences.
• T decreases exponentially with barrier width a.
• T decreases exponentially as (V₀−E) increases (deeper under the barrier).
• Even a small increase in a dramatically reduces T.

Step 5: Conclude.
For thick/high barriers, T ∝ e^{−2κa} — exponentially suppressed tunneling.`
  },
  {
    topic: "Quantum Tunneling",
    question: "Which of the following correctly explains why a particle's energy does NOT change after tunneling through a barrier?",
    options: [
      "The barrier is a static potential; the Hamiltonian is time-independent so energy is conserved. The particle is transmitted with the same energy E it had before.",
      "The particle absorbs energy from the barrier walls during tunneling.",
      "Energy is not conserved in quantum tunneling.",
      "The tunneled particle has energy V₀ after crossing."
    ],
    correctIndex: 0,
    hints: [
      "Energy is an eigenvalue of the time-independent Hamiltonian.",
      "A stationary state has definite energy at all positions."
    ],
    solution:
`Step 1: Stationary state picture.
The tunneling problem is solved as a stationary-state scattering problem.
The full wavefunction is a solution of Hψ = Eψ everywhere.

Step 2: Same eigenvalue throughout.
Because the TISE uses a single eigenvalue E across all three regions (before, inside, after the barrier), the energy is the same everywhere.

Step 3: What changes between regions.
In the classically allowed regions (E > V), ψ oscillates.
Inside the barrier (E < V₀), ψ decays exponentially.
But the energy eigenvalue E does not change.

Step 4: Conservation of energy.
The Hamiltonian H is time-independent (static barrier). By the quantum mechanical analogue of energy conservation, a stationary state has definite, constant energy.

Step 5: Conclude.
A tunneled particle carries exactly the same energy E it had before the barrier. The barrier does not add or subtract energy.`
  },
  {
    topic: "Quantum Tunneling",
    question: "Which real-world phenomenon or technology is a direct application of quantum tunneling?",
    options: [
      "Scanning Tunneling Microscope (STM), which images surfaces by measuring the tunneling current between a sharp tip and the surface.",
      "X-ray diffraction, which uses classical wave interference of high-energy photons.",
      "Optical fibre communication, which relies on total internal reflection.",
      "MRI imaging, which uses nuclear spin precession in a magnetic field."
    ],
    correctIndex: 0,
    hints: [
      "Think about which technology exploits electrons crossing a classically forbidden gap.",
      "The device achieves atomic-scale resolution."
    ],
    solution:
`Step 1: Scanning Tunneling Microscope (STM).
In an STM, a sharp metallic tip is brought within ~1 nm of a conducting surface.
A small voltage is applied and a tunneling current flows across the vacuum gap between tip and surface.

Step 2: Why it is tunneling.
The vacuum gap is classically forbidden for electrons (E < barrier height).
The tunneling current I ∝ e^{−2κd}, where d is the gap width.

Step 3: Extreme sensitivity.
Because I depends exponentially on d, even a 0.1 nm change in gap width changes the current by an order of magnitude.
This allows atomic-scale height resolution.

Step 4: Other options.
X-ray diffraction, optical fibre, and MRI all rely on classical wave optics, total internal reflection, or magnetic resonance — none involve quantum tunneling.

Step 5: Conclude.
The STM is a direct technological application of quantum tunneling. It achieves atomic resolution precisely because of the exponential sensitivity of tunneling current to distance.`
  },
  {
    topic: "Quantum Tunneling",
    question: "How does the transmission probability T change if the barrier width a is doubled (everything else kept constant)?",
    options: [
      "T is approximately squared: T_new ≈ T_old², because the exponent in e^{−2κa} doubles.",
      "T is halved.",
      "T doubles.",
      "T is unchanged because energy is conserved."
    ],
    correctIndex: 0,
    hints: [
      "Use T ∝ e^{−2κa}.",
      "Doubling a replaces 2κa with 2κ(2a) = 4κa."
    ],
    solution:
`Step 1: Original transmission probability.
T_old ∝ e^{−2κa}.

Step 2: Double the width: a → 2a.
T_new ∝ e^{−2κ(2a)} = e^{−4κa}.

Step 3: Relate T_new to T_old.
T_new = e^{−4κa} = (e^{−2κa})² = T_old².

Step 4: Physical interpretation.
If the original transmission was, say, T_old = 0.01 (1%), doubling the barrier gives
T_new ≈ (0.01)² = 0.0001 (0.01%) — a 100× reduction.
Tunneling is extremely sensitive to barrier width.

Step 5: Conclude.
Doubling the barrier width approximately squares the transmission probability: T_new ≈ T_old².`
  }

); // end QUESTIONS.push — module5