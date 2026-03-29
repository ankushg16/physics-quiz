// ============================================================
// MODULE 1 — Mathematical Foundations
// Topics : Operators & Special Operators  (10 Q)
//          Matrix Algebra                 (10 Q)
//          Eigenvalues & Eigenvectors     (10 Q)
//          Pauli Matrices                 (10 Q)
//          Commutation Relations          (10 Q)
// ============================================================

TOPICS.push(
  { key: "Operators & Special Operators", label: "Linear + Hermitian/Unitary/Projection" },
  { key: "Matrix Algebra",                label: "Matrix algebra" },
  { key: "Eigenvalues & Eigenvectors",    label: "Eigenvalues and eigenvectors" },
  { key: "Pauli Matrices",               label: "Pauli matrices" },
  { key: "Commutation Relations",        label: "Commutation relations" }
);

Object.assign(TOPIC_SLIDES, {
  "Operators & Special Operators" : "references/BPHY-Lecture-10.pdf",
  "Matrix Algebra"                : "references/BPHY-Lecture-10.pdf",
  "Eigenvalues & Eigenvectors"    : "references/BPHY-Lecture-10.pdf",
  "Pauli Matrices"                : "references/BPHY-Lecture-11.pdf",
  "Commutation Relations"         : "references/BPHY-Lecture-11.pdf"
});

QUESTIONS.push(

  // ==============================
  // Operators & Special Operators
  // ==============================
  {
    topic: "Operators & Special Operators",
    question: "Which mapping is NOT linear (operator on functions f)?",
    options: ["L(f)=f^2", "L(f)=d f/dx", "L(f)=3f", "L(f)=x f(x)"],
    correctIndex: 0,
    hints: ["Test L(f+g) ?= L(f)+L(g).", "Squaring usually breaks additivity."],
    solution:
`Step 1: Recall the linearity (additivity) test.
A linear operator L must satisfy L(f+g) = L(f) + L(g) for all functions f,g.

Step 2: Test L(f)=f^2 using additivity.
L(f+g) = (f+g)^2 = f^2 + 2fg + g^2.

Step 3: Compare with L(f)+L(g).
L(f)+L(g) = f^2 + g^2.

Step 4: Conclude.
Since (f+g)^2 ≠ f^2 + g^2 in general (the cross term 2fg is extra), L(f)=f^2 is NOT linear.
Therefore the correct option is L(f)=f^2.`
  },
  {
    topic: "Operators & Special Operators",
    question: "Which statement is always true for any operator A?",
    options: ["A†A is Hermitian", "A is Hermitian", "A commutes with every operator", "A is invertible"],
    correctIndex: 0,
    hints: ["Take the dagger: (A†A)† = A†(A†)†.", "That becomes A†A."],
    solution:
`Step 1: Use the definition of Hermitian.
An operator H is Hermitian if H† = H.

Step 2: Compute the adjoint of A†A.
(A†A)† = A†† A† — be careful: (XY)† = Y† X†.
Let X = A†, Y = A, then (XY)† = Y† X† = A† (A†)† = A† A.

Step 3: Conclude.
(A†A)† = A†A, hence A†A is Hermitian for any A.

Step 4: Why other options fail.
A itself need not be Hermitian; A need not commute with all operators; A need not be invertible.`
  },
  {
    topic: "Operators & Special Operators",
    question: "Hermitian condition (matrix/operator H) is:",
    options: ["H = H†", "H†H = I", "H^2 = H", "det(H)=1"],
    correctIndex: 0,
    hints: ["Hermitian means equal to its conjugate transpose.", "Unitary and projector are different conditions."],
    solution:
`Step 1: Write the definition.
Hermitian (self-adjoint) means H equals its adjoint: H = H†.

Step 2: Interpret the distractors.
H†H = I is the unitary condition.
H^2 = H is the idempotent (projector-like) condition.
det(H)=1 is unrelated to being Hermitian.

Step 3: Conclude.
Therefore, the Hermitian condition is H = H†.`
  },
  {
    topic: "Operators & Special Operators",
    question: "Unitary condition (matrix/operator U) is:",
    options: ["U†U = I", "U = U†", "U^2 = U", "tr(U)=0"],
    correctIndex: 0,
    hints: ["Unitary means inverse equals dagger.", "So U†U must be identity."],
    solution:
`Step 1: Start from the definition.
U is unitary if it preserves inner products, equivalently U⁻¹ = U†.

Step 2: Convert to an algebraic condition.
If U⁻¹ = U†, then U†U = I.

Step 3: Check distractors.
U = U† is Hermitian. U^2 = U is idempotent. tr(U)=0 is not a defining property.

Step 4: Conclude.
Therefore the unitary condition is U†U = I.`
  },
  {
    topic: "Operators & Special Operators",
    question: "A projection operator P (in QM sense) must satisfy:",
    options: ["P^2 = P and P = P†", "P^2 = I and P = P†", "P†P = I", "P = 0 only"],
    correctIndex: 0,
    hints: ["Project twice = project once.", "Projectors are Hermitian in QM."],
    solution:
`Step 1: Use the meaning of projection.
Projecting twice gives the same result as projecting once: P^2 = P.

Step 2: QM projection operators are also Hermitian.
P† = P.

Step 3: Compare with other options.
P^2 = I describes an involution. P†P = I describes unitarity.

Step 4: Conclude.
A projection operator must satisfy P^2 = P and P = P†.`
  },
  {
    topic: "Operators & Special Operators",
    question: "Let P = |u⟩⟨u|. When is P a projection operator?",
    options: ["When ⟨u|u⟩ = 1", "When ⟨u|u⟩ = 0", "Always, for any |u⟩", "Only if |u⟩ is an eigenvector of every operator"],
    correctIndex: 0,
    hints: ["Check P^2 = |u⟩⟨u|u⟩⟨u|.", "You need ⟨u|u⟩ = 1 for idempotence."],
    solution:
`Step 1: Compute P^2.
P^2 = (|u⟩⟨u|)(|u⟩⟨u|) = |u⟩(⟨u|u⟩)⟨u| = (⟨u|u⟩) P.

Step 2: Impose P^2 = P.
We need ⟨u|u⟩ = 1 (assuming P is not the zero operator).

Step 3: Conclude.
The correct condition for a nontrivial projector is ⟨u|u⟩ = 1.`
  },
  {
    topic: "Operators & Special Operators",
    question: "If P and Q are projection operators and PQ = QP, then which is also a projection operator?",
    options: ["PQ", "P + Q (always)", "P − Q (always)", "P + Q − I (always)"],
    correctIndex: 0,
    hints: ["Check (PQ)^2 when P^2=P and Q^2=Q.", "Commuting matters."],
    solution:
`Step 1: Use P^2=P, Q^2=Q, PQ=QP.

Step 2: Check idempotence of PQ.
(PQ)^2 = PQPQ = P(QP)Q = P(PQ)Q = P²Q² = PQ. ✓

Step 3: Check Hermitian property.
(PQ)† = Q†P† = QP = PQ (since they commute). ✓

Step 4: Conclude.
PQ is also a projection operator when P and Q commute.`
  },
  {
    topic: "Operators & Special Operators",
    question: "If A and B are Hermitian, then the commutator [A,B] is:",
    options: ["Anti-Hermitian (skew-Hermitian)", "Hermitian", "Unitary", "A projection"],
    correctIndex: 0,
    hints: ["Compute (AB−BA)†.", "You get a minus sign."],
    solution:
`Step 1: Start with [A,B] = AB − BA.

Step 2: Take the adjoint.
([A,B])† = (AB)† − (BA)†.

Step 3: Use (XY)† = Y†X† and A†=A, B†=B.
(AB)† = BA, (BA)† = AB.

Step 4: Substitute.
([A,B])† = BA − AB = −[A,B].

Step 5: Conclude.
K† = −K means anti-Hermitian. So [A,B] is anti-Hermitian.`
  },
  {
    topic: "Operators & Special Operators",
    question: "If U is unitary and U|χ⟩=λ|χ⟩, then:",
    options: ["|λ| = 1", "λ must be real", "λ must be 0", "λ must be ±2"],
    correctIndex: 0,
    hints: ["Unitary preserves norm: ||U|χ⟩|| = |||χ⟩||.", "So |λ| must be 1."],
    solution:
`Step 1: Unitary operators preserve norm.
||U|χ⟩||² = ⟨χ|U†U|χ⟩ = ⟨χ|χ⟩.

Step 2: Use the eigenvalue equation.
||U|χ⟩||² = |λ|² ⟨χ|χ⟩.

Step 3: Equate.
|λ|² ⟨χ|χ⟩ = ⟨χ|χ⟩ → |λ|² = 1 → |λ| = 1.

Step 4: Conclude.
Unitary eigenvalues lie on the unit circle (not necessarily real).`
  },
  {
    topic: "Operators & Special Operators",
    question: "If [A,B]=0, then which is true?",
    options: ["[f(A),B]=0 for any polynomial f", "[A,B]=I", "A and B must be equal", "A must be unitary"],
    correctIndex: 0,
    hints: ["If AB=BA, then A^n B = B A^n.", "So any polynomial in A also commutes with B."],
    solution:
`Step 1: [A,B]=0 means AB = BA.

Step 2: Show powers of A commute with B by induction.
A²B = A(AB) = A(BA) = (AB)A = BA². By induction, AⁿB = BAⁿ.

Step 3: For polynomial f(A) = Σ cₖ Aᵏ:
f(A)B = Σ cₖ AᵏB = Σ cₖ BAᵏ = Bf(A).

Step 4: Conclude.
[f(A),B] = 0 for any polynomial f.`
  },

  // ==============
  // Matrix Algebra
  // ==============
  {
    topic: "Matrix Algebra",
    question: "For a 2×2 matrix A = [[a,b],[c,d]], det(A) equals:",
    options: ["ad − bc", "ab − cd", "a + d", "b + c"],
    correctIndex: 0,
    hints: ["Use the standard 2×2 determinant formula.", "Diagonal product minus off-diagonal product."],
    solution:
`Step 1: Recall the determinant of a 2×2 matrix.
For A = [[a,b],[c,d]], det(A) = ad − bc.

Step 2: Quick reasoning.
Determinant measures signed area scaling; the formula comes from expansion along a row.

Step 3: Conclude.
Therefore det(A) = ad − bc.`
  },
  {
    topic: "Matrix Algebra",
    question: "Which identity is always true (same-size matrices A,B)?",
    options: ["tr(AB)=tr(BA)", "det(A+B)=det(A)+det(B)", "(A+B)^2 = A^2 + B^2", "AB=BA always"],
    correctIndex: 0,
    hints: ["Trace has cyclic property for products.", "Commutativity of matrices is not guaranteed."],
    solution:
`Step 1: Cyclic property of trace.
tr(AB) = tr(BA) for compatible matrices.

Step 2: Why others fail.
det(A+B) ≠ det(A)+det(B) in general.
(A+B)² = A²+AB+BA+B²; equals A²+B² only if AB+BA=0.
AB=BA is not true for general matrices.

Step 3: Conclude.
The always-true identity is tr(AB)=tr(BA).`
  },
  {
    topic: "Matrix Algebra",
    question: "Transpose of a product satisfies:",
    options: ["(AB)^T = B^T A^T", "(AB)^T = A^T B^T", "(AB)^T = AB", "(AB)^T = A + B"],
    correctIndex: 0,
    hints: ["Order reverses under transpose.", "Try a 2×2 example to verify."],
    solution:
`Step 1: Recall the rule.
Transpose reverses the order: (AB)^T = B^T A^T.

Step 2: Why the order reverses.
(AB)_{ij} = Σ_k A_{ik}B_{kj}; transposing swaps i,j effectively swapping factors.

Step 3: Conclude.
(AB)^T = B^T A^T.`
  },
  {
    topic: "Matrix Algebra",
    question: "Conjugate-transpose (dagger) of a product satisfies:",
    options: ["(AB)† = B† A†", "(AB)† = A† B†", "(AB)† = AB", "(AB)† = A + B"],
    correctIndex: 0,
    hints: ["Dagger reverses order like transpose.", "Also complex-conjugates entries."],
    solution:
`Step 1: Dagger = conjugate transpose.
It both transposes (reverses order) and complex-conjugates entries.

Step 2: Apply the product rule.
(AB)† = B† A†.

Step 3: Conclude.
Therefore (AB)† = B† A†.`
  },
  {
    topic: "Matrix Algebra",
    question: "Find x such that det([[x,1],[2,3]]) = 0.",
    options: ["x = 2/3", "x = 3/2", "x = -2/3", "x = 0"],
    correctIndex: 0,
    hints: ["det = 3x − 2.", "Set 3x − 2 = 0."],
    solution:
`Step 1: Compute the determinant.
det([[x,1],[2,3]]) = 3x − 2.

Step 2: Set to zero.
3x − 2 = 0.

Step 3: Solve.
x = 2/3.`
  },
  {
    topic: "Matrix Algebra",
    question: "If Q is an orthogonal matrix (real), then:",
    options: ["Q^{-1} = Q^T", "Q^{-1} = Q", "Q^T Q = 0", "det(Q)=0 always"],
    correctIndex: 0,
    hints: ["Orthogonal means Q^T Q = I.", "So multiply both sides appropriately."],
    solution:
`Step 1: Definition of orthogonal: Q^T Q = I.

Step 2: Compare with inverse definition.
Q⁻¹ satisfies Q⁻¹Q = I. Since Q^T Q = I, Q^T acts as the inverse.

Step 3: Identify.
Q⁻¹ = Q^T.

Step 4: Note: orthogonal matrices have det(Q)=±1, not 0.`
  },
  {
    topic: "Matrix Algebra",
    question: "If A is invertible, which statement is true?",
    options: ["det(A) ≠ 0", "tr(A) ≠ 0", "A must be diagonal", "A must be symmetric"],
    correctIndex: 0,
    hints: ["Invertibility is tied to determinant for square matrices.", "Trace can be zero even if invertible."],
    solution:
`Step 1: Key theorem: A is invertible ⟺ det(A) ≠ 0.

Step 2: Intuition.
det(A)=0 means A squashes volume to zero, so no inverse exists.

Step 3: Check distractors.
tr(A) can be 0 for invertible matrices (e.g., [[1,0],[0,−1]]).

Step 4: Conclude. det(A) ≠ 0.`
  },
  {
    topic: "Matrix Algebra",
    question: "Which is always true for identity matrix I?",
    options: ["AI = IA = A", "AI = I", "IA = 0", "AI = A^2"],
    correctIndex: 0,
    hints: ["Identity behaves like multiplying by 1.", "It should not change A."],
    solution:
`Step 1: I is the multiplicative identity.
Multiplying by I leaves a matrix unchanged.

Step 2: Apply on both sides.
AI = A and IA = A.

Step 3: Conclude. AI = IA = A is always true.`
  },
  {
    topic: "Matrix Algebra",
    question: "If U is unitary, which statement is always true?",
    options: ["U^{-1} = U†", "U = U†", "U^2 = U", "det(U)=0"],
    correctIndex: 0,
    hints: ["Definition: U†U=I.", "Compare with inverse definition."],
    solution:
`Step 1: Unitary definition: U†U = I.

Step 2: Inverse definition: U⁻¹U = I.

Step 3: Since U†U = I, U† is the inverse: U⁻¹ = U†.

Step 4: Conclude. U⁻¹ = U† is always true for a unitary matrix.`
  },
  {
    topic: "Matrix Algebra",
    question: "Trace under similarity transform: for invertible S, tr(S^{-1}AS) equals:",
    options: ["tr(A)", "det(A)", "rank(A)", "0 always"],
    correctIndex: 0,
    hints: ["Trace is invariant under similarity transforms.", "Use cyclicity of trace."],
    solution:
`Step 1: Use cyclicity of trace: tr(XYZ) = tr(ZXY).

Step 2: Apply to tr(S⁻¹AS).
tr(S⁻¹AS) = tr(ASS⁻¹) = tr(AI) = tr(A).

Step 3: Conclude. tr(S⁻¹AS) = tr(A).`
  },

  // ==========================
  // Eigenvalues & Eigenvectors
  // ==========================
  {
    topic: "Eigenvalues & Eigenvectors",
    question: "Eigenvalues λ of A are found from:",
    options: ["det(A − λI)=0", "tr(A − λI)=0", "A − λI = 0 (always)", "det(A)=0 (always)"],
    correctIndex: 0,
    hints: ["Characteristic polynomial comes from determinant.", "Nontrivial solutions require determinant zero."],
    solution:
`Step 1: Start from Av = λv for nonzero v.

Step 2: Rearrange: (A − λI)v = 0.

Step 3: Nontrivial solutions condition.
det(A − λI) = 0 (characteristic equation).

Step 4: Conclude. Eigenvalues satisfy det(A − λI)=0.`
  },
  {
    topic: "Eigenvalues & Eigenvectors",
    question: "For A = [[2,1],[1,2]], eigenvalues are:",
    options: ["1 and 3", "0 and 4", "2 and 2", "-1 and 5"],
    correctIndex: 0,
    hints: ["det([[2−λ,1],[1,2−λ]])=(2−λ)^2−1.", "Set to 0."],
    solution:
`Step 1: det(A−λI) = (2−λ)² − 1 = 0.

Step 2: (2−λ)² = 1 → 2−λ = ±1.

Step 3: λ = 1 or λ = 3.

Step 4: Eigenvalues are 1 and 3.`
  },
  {
    topic: "Eigenvalues & Eigenvectors",
    question: "For A = [[2,1],[1,2]], an eigenvector for λ=3 is proportional to:",
    options: ["(1,1)", "(1,−1)", "(2,0)", "(0,2)"],
    correctIndex: 0,
    hints: ["Solve (A−3I)v=0.", "You get v1=v2."],
    solution:
`Step 1: A − 3I = [[−1,1],[1,−1]].

Step 2: Equation: −v1 + v2 = 0 → v2 = v1.

Step 3: Take v1=1 → v = (1,1).

Step 4: Eigenvector for λ=3 is proportional to (1,1).`
  },
  {
    topic: "Eigenvalues & Eigenvectors",
    question: "For diagonal matrix diag(2,5,−1), the eigenvalues are:",
    options: ["2, 5, −1", "Only 2", "Only 5", "2+5−1 = 6"],
    correctIndex: 0,
    hints: ["Diagonal matrices scale basis vectors.", "Each diagonal entry is an eigenvalue."],
    solution:
`Step 1: A = diag(2,5,−1) scales basis vectors: Ae1=2e1, Ae2=5e2, Ae3=−e3.

Step 2: Each basis vector is an eigenvector.

Step 3: Eigenvalues are the diagonal entries: 2, 5, −1.`
  },
  {
    topic: "Eigenvalues & Eigenvectors",
    question: "If Av=λv, then A² v equals:",
    options: ["λ² v", "2λ v", "λ v", "v/λ"],
    correctIndex: 0,
    hints: ["Apply A again to Av.", "A(Av)=A(λv)=λ(Av)=λ(λv)."],
    solution:
`Step 1: A²v = A(Av) = A(λv).

Step 2: A(λv) = λAv = λ(λv) = λ²v.

Step 3: A²v = λ²v.`
  },
  {
    topic: "Eigenvalues & Eigenvectors",
    question: "If A is invertible and Av=λv (λ≠0), then A^{-1}v equals:",
    options: ["(1/λ) v", "λ v", "0", "Undefined"],
    correctIndex: 0,
    hints: ["Multiply Av=λv by A^{-1} on the left.", "You get v = λ A^{-1} v."],
    solution:
`Step 1: From Av = λv, multiply left by A⁻¹.
A⁻¹Av = A⁻¹(λv) → v = λ A⁻¹v.

Step 2: Solve: A⁻¹v = (1/λ)v.

Step 3: v is an eigenvector of A⁻¹ with eigenvalue 1/λ.`
  },
  {
    topic: "Eigenvalues & Eigenvectors",
    question: "For any square matrix A, the sum of eigenvalues (with multiplicity) equals:",
    options: ["tr(A)", "det(A)", "rank(A)", "0 always"],
    correctIndex: 0,
    hints: ["Check for diagonal matrices first.", "Trace matches sum of diagonal entries."],
    solution:
`Step 1: From the characteristic polynomial, the sum of eigenvalues = tr(A).

Step 2: Sanity check: for diagonal A, eigenvalues are diagonal entries, and tr(A) is their sum.

Step 3: Conclude. Sum of eigenvalues = tr(A).`
  },
  {
    topic: "Eigenvalues & Eigenvectors",
    question: "For any square matrix A, the product of eigenvalues (with multiplicity) equals:",
    options: ["det(A)", "tr(A)", "rank(A)", "1 always"],
    correctIndex: 0,
    hints: ["Check for diagonal matrices first.", "Determinant multiplies diagonal entries."],
    solution:
`Step 1: From the characteristic polynomial, product of eigenvalues = det(A).

Step 2: For diagonal A, det(A) = product of diagonal entries = product of eigenvalues.

Step 3: Conclude. Product of eigenvalues = det(A).`
  },
  {
    topic: "Eigenvalues & Eigenvectors",
    question: "For Hermitian operator H, eigenvectors corresponding to distinct eigenvalues are:",
    options: ["Orthogonal", "Always equal", "Always non-orthogonal", "Always complex"],
    correctIndex: 0,
    hints: ["This is a key theorem for Hermitian operators.", "It underpins orthonormal eigenbases."],
    solution:
`Step 1: Hv1=λ1v1, Hv2=λ2v2, λ1≠λ2.

Step 2: ⟨v1|Hv2⟩ = λ2⟨v1|v2⟩.

Step 3: Using H†=H: ⟨v1|Hv2⟩ = ⟨Hv1|v2⟩ = λ1⟨v1|v2⟩.

Step 4: (λ1−λ2)⟨v1|v2⟩ = 0. Since λ1≠λ2, ⟨v1|v2⟩ = 0.

Step 5: Eigenvectors for distinct eigenvalues are orthogonal.`
  },
  {
    topic: "Eigenvalues & Eigenvectors",
    question: "If [A,B]=0 and A is Hermitian with non-degenerate eigenvalues, then:",
    options: ["A and B can share eigenvectors (simultaneous eigenbasis)", "A and B must be equal", "B must be a projection", "A cannot be diagonalized"],
    correctIndex: 0,
    hints: ["Commuting + non-degenerate implies shared eigenvectors.", "This is the standard compatibility statement."],
    solution:
`Step 1: [A,B]=0 → AB=BA.

Step 2: Let Av=λv. Then A(Bv)=(AB)v=(BA)v=B(λv)=λ(Bv).
So Bv is an eigenvector of A with eigenvalue λ.

Step 3: Non-degeneracy means the λ-eigenspace is 1D, so Bv = μv.

Step 4: v is a simultaneous eigenvector of A and B.
They share a common eigenbasis.`
  },

  // ===============
  // Pauli Matrices
  // ===============
  {
    topic: "Pauli Matrices",
    question: "Which matrix is σx?",
    options: ["[[0,1],[1,0]]", "[[1,0],[0,−1]]", "[[0,−i],[i,0]]", "[[1,0],[0,1]]"],
    correctIndex: 0,
    hints: ["σx swaps basis states.", "It has ones off-diagonal."],
    solution:
`Step 1: Standard Pauli matrices:
σx = [[0,1],[1,0]], σy = [[0,−i],[i,0]], σz = [[1,0],[0,−1]].

Step 2: The matrix with 1's off-diagonal and 0's on diagonal is [[0,1],[1,0]].

Step 3: σx = [[0,1],[1,0]].`
  },
  {
    topic: "Pauli Matrices",
    question: "Which matrix is σy?",
    options: ["[[0,−i],[i,0]]", "[[0,1],[1,0]]", "[[1,0],[0,−1]]", "[[1,0],[0,1]]"],
    correctIndex: 0,
    hints: ["σy has imaginary off-diagonals.", "It is Hermitian."],
    solution:
`Step 1: σy has purely imaginary off-diagonal entries: σy = [[0,−i],[i,0]].

Step 2: Check Hermiticity: conjugate transpose of [[0,−i],[i,0]] gives itself. ✓

Step 3: σy = [[0,−i],[i,0]].`
  },
  {
    topic: "Pauli Matrices",
    question: "Which matrix is σz?",
    options: ["[[1,0],[0,−1]]", "[[0,1],[1,0]]", "[[0,−i],[i,0]]", "[[1,0],[0,1]]"],
    correctIndex: 0,
    hints: ["σz is diagonal.", "Entries are +1 and −1."],
    solution:
`Step 1: σz is diagonal with entries +1 and −1: σz = [[1,0],[0,−1]].

Step 2: Matches [[1,0],[0,−1]] exactly.

Step 3: σz = [[1,0],[0,−1]].`
  },
  {
    topic: "Pauli Matrices",
    question: "Eigenvalues of σz are:",
    options: ["+1 and −1", "0 and 1", "i and −i", "2 and −2"],
    correctIndex: 0,
    hints: ["σz is diagonal.", "Diagonal entries are eigenvalues."],
    solution:
`Step 1: σz = [[1,0],[0,−1]] is diagonal.

Step 2: Eigenvalues of a diagonal matrix are the diagonal entries.

Step 3: Eigenvalues are +1 and −1.`
  },
  {
    topic: "Pauli Matrices",
    question: "Which product identity is correct?",
    options: ["σxσy = iσz", "σxσy = −iσz", "σxσy = σz", "σxσy = iI"],
    correctIndex: 0,
    hints: ["Standard Pauli multiplication.", "Order matters: σyσx = −iσz."],
    solution:
`Step 1: Use σᵢσⱼ = δᵢⱼI + i εᵢⱼₖσₖ.

Step 2: For i=x, j=y: δxy=0, εxyz=+1.

Step 3: σxσy = iσz.

Step 4: Note: σyσx = −iσz (non-commutative).`
  },
  {
    topic: "Pauli Matrices",
    question: "The commutator [σx,σy] equals:",
    options: ["2iσz", "iσz", "2σz", "0"],
    correctIndex: 0,
    hints: ["Use [σi,σj]=2i εijk σk.", "So x,y gives z."],
    solution:
`Step 1: [σᵢ,σⱼ] = 2i εᵢⱼₖ σₖ.

Step 2: [σx,σy]: εxyz = +1 → [σx,σy] = 2iσz.

Step 3: [σx,σy] = 2iσz.`
  },
  {
    topic: "Pauli Matrices",
    question: "For i≠j, the anti-commutator {σi,σj} equals:",
    options: ["0", "2I", "2σk", "I"],
    correctIndex: 0,
    hints: ["Distinct Pauli matrices anticommute.", "σxσy = −σyσx."],
    solution:
`Step 1: Anti-commutator identity: {σᵢ,σⱼ} = 2δᵢⱼI.

Step 2: For i≠j: δᵢⱼ = 0.

Step 3: {σᵢ,σⱼ} = 0 for i≠j.`
  },
  {
    topic: "Pauli Matrices",
    question: "Which identity is always true?",
    options: ["σi^2 = I", "σi^2 = 0", "σi^2 = σi", "σi^2 = −I"],
    correctIndex: 0,
    hints: ["Check σxσx.", "It becomes identity."],
    solution:
`Step 1: From σᵢσⱼ = δᵢⱼI + iεᵢⱼₖσₖ, set i=j.

Step 2: δᵢᵢ=1 and εᵢᵢₖ=0, so σᵢ² = I.

Step 3: σᵢ² = I for all i = x,y,z.`
  },
  {
    topic: "Pauli Matrices",
    question: "Trace of σx, σy, σz is:",
    options: ["0", "1", "2", "−1"],
    correctIndex: 0,
    hints: ["Trace is sum of diagonal entries.", "σx and σy have 0 diagonals; σz has 1+(−1)."],
    solution:
`Step 1: tr(σx): diagonal is (0,0) → tr=0.
tr(σy): diagonal is (0,0) → tr=0.
tr(σz): diagonal is (1,−1) → tr=0.

Step 2: All three have trace = 0.`
  },
  {
    topic: "Pauli Matrices",
    question: "Determinant of any Pauli matrix is:",
    options: ["−1", "+1", "0", "Depends on i"],
    correctIndex: 0,
    hints: ["Compute det(σz)=det([[1,0],[0,−1]])=−1.", "Same for others."],
    solution:
`Step 1: det(σz) = (1)(−1) − 0 = −1.
Step 2: det(σx) = 0·0 − 1·1 = −1.
Step 3: det(σy) = 0·0 − (−i)(i) = −i² = −1.

Step 4: All Pauli matrices have determinant −1.`
  },

  // ======================
  // Commutation Relations
  // ======================
  {
    topic: "Commutation Relations",
    question: "The commutator [A,B] is defined as:",
    options: ["AB − BA", "AB + BA", "A + B", "A − B"],
    correctIndex: 0,
    hints: ["Commutator measures non-commutativity.", "If AB=BA, commutator is zero."],
    solution:
`Step 1: Definition: [A,B] = AB − BA.

Step 2: If AB=BA then [A,B]=0 (they commute).

Step 3: Correct answer: AB − BA.`
  },
  {
    topic: "Commutation Relations",
    question: "Which commutator is always zero for any operator A?",
    options: ["[A, I]", "[A, A†]", "[A, B] for any B", "[A, A†A]"],
    correctIndex: 0,
    hints: ["Identity commutes with everything.", "AI=IA."],
    solution:
`Step 1: AI = IA = A for any A.

Step 2: [A,I] = AI − IA = A − A = 0.

Step 3: [A,I] = 0 is always true.`
  },
  {
    topic: "Commutation Relations",
    question: "If [A,B]=0, then:",
    options: ["AB = BA", "AB = 0", "A = B", "A must be Hermitian"],
    correctIndex: 0,
    hints: ["Just rewrite the definition.", "[A,B]=AB−BA."],
    solution:
`Step 1: [A,B] = AB − BA.

Step 2: [A,B]=0 → AB − BA = 0 → AB = BA.

Step 3: If [A,B]=0, then AB = BA.`
  },
  {
    topic: "Commutation Relations",
    question: "Product rule for commutators is:",
    options: ["[A,BC] = [A,B]C + B[A,C]", "[A,BC] = [A,B] + [A,C]", "[A,BC] = [A,B][A,C]", "[A,BC] = 0 always"],
    correctIndex: 0,
    hints: ["Expand A(BC) − (BC)A.", "Then regroup terms."],
    solution:
`Step 1: [A,BC] = ABC − BCA.

Step 2: Add and subtract BAC:
= (ABC − BAC) + (BAC − BCA).

Step 3: Factor:
(AB−BA)C = [A,B]C  and  B(AC−CA) = B[A,C].

Step 4: [A,BC] = [A,B]C + B[A,C].`
  },
  {
    topic: "Commutation Relations",
    question: "Jacobi identity is:",
    options: ["[A,[B,C]] + [B,[C,A]] + [C,[A,B]] = 0", "[A,B] + [B,C] + [C,A] = 0", "[A,B] = [B,A]", "[A,[A,B]] = 0 always"],
    correctIndex: 0,
    hints: ["This is the standard triple-commutator identity.", "It sums to zero."],
    solution:
`Step 1: The Jacobi identity for commutators:
[A,[B,C]] + [B,[C,A]] + [C,[A,B]] = 0.

Step 2: It ensures consistent algebraic (Lie algebra) structure.

Step 3: Correct answer: [A,[B,C]] + [B,[C,A]] + [C,[A,B]] = 0.`
  },
  {
    topic: "Commutation Relations",
    question: "Canonical commutator (1D) is:",
    options: ["[x,p] = iħ", "[x,p] = 0", "[x,p] = ħ", "[x,p] = −ħ"],
    correctIndex: 0,
    hints: ["This is a postulate of QM.", "Position and momentum do not commute."],
    solution:
`Step 1: Fundamental QM postulate: [x,p] = iħ.

Step 2: This nonzero commutator underlies the Heisenberg uncertainty principle.

Step 3: [x,p] = iħ.`
  },
  {
    topic: "Commutation Relations",
    question: "Given [X,P] = iħ, what is [X, P²]?",
    options: ["2iħ P", "iħ P²", "0", "−2iħ P"],
    correctIndex: 0,
    hints: ["Use [A,BC]=[A,B]C + B[A,C].", "So [X,P²]=[X,P]P + P[X,P]."],
    solution:
`Step 1: [X,P²] = [X,PP] = [X,P]P + P[X,P].

Step 2: Substitute [X,P]=iħ:
[X,P²] = (iħ)P + P(iħ) = iħP + iħP = 2iħP.

Step 3: [X,P²] = 2iħP.`
  },
  {
    topic: "Commutation Relations",
    question: "If A and B are Hermitian and AB is also Hermitian, then:",
    options: ["[A,B]=0", "A=B", "A must be unitary", "B must be a projector"],
    correctIndex: 0,
    hints: ["(AB)† = B†A† = BA.", "If AB is Hermitian, AB=(AB)†."],
    solution:
`Step 1: AB Hermitian → (AB)† = AB.

Step 2: (AB)† = B†A† = BA (since A,B Hermitian).

Step 3: So AB = BA → [A,B] = AB − BA = 0.`
  },
  {
    topic: "Commutation Relations",
    question: "If two observables commute and A is non-degenerate, then they can be:",
    options: ["Simultaneously diagonalized (common eigenbasis)", "Measured only one at a time", "Equal to identity", "Only anti-Hermitian"],
    correctIndex: 0,
    hints: ["Commuting + non-degenerate implies shared eigenvectors.", "This is compatibility in QM."],
    solution:
`Step 1: Commuting observables are compatible.

Step 2: [A,B]=0 means B maps each eigenspace of A into itself.

Step 3: Non-degeneracy: each eigenspace is 1D → eigenvectors of A are also eigenvectors of B.

Step 4: A common eigenbasis (simultaneous diagonalization) exists.`
  },
  {
    topic: "Commutation Relations",
    question: "If A and B commute, then which is true?",
    options: ["[A, B^n] = 0 for all integers n ≥ 1", "[A,B] = I", "[A,B] = 2AB", "A must be a projection"],
    correctIndex: 0,
    hints: ["If AB=BA then AB^n=B^nA.", "Induction works."],
    solution:
`Step 1: AB = BA (given).

Step 2: Induction: assume AB^n = B^n A.
Then AB^{n+1} = A(B^n B) = (AB^n)B = B^n(AB) = B^n(BA) = B^{n+1}A.

Step 3: So [A,B^n]=0 for all n≥1.`
  }

); // end QUESTIONS.push — module1