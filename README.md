# Engineering Physics Quiz System
## BAPHY105: Linear Operators & Special Matrices

An interactive quiz system with progressive hints and detailed solutions for VIT Engineering Physics course.

---

## 🎯 Features

- **Progressive Hint System**: Get up to 2 hints per question before seeing the full solution
- **Immediate Feedback**: Know if you're correct instantly
- **Detailed Solutions**: Complete step-by-step explanations for every question
- **Score Tracking**: Monitor your progress and attempts
- **Two Versions**: Web-based (HTML) and Command-line (Python)
- **Mobile Responsive**: Works on all devices

---

## 📚 Topics Covered

1. **Linear Operators**: Definition, properties, and examples
2. **Eigenvalues & Eigenvectors**: Calculation and characteristic equations
3. **Hermitian Operators**: Self-adjoint operators, real eigenvalues, orthogonality
4. **Unitary Operators**: Preservation of norms, eigenvalue properties
5. **Projection Operators**: Idempotent and Hermitian conditions
6. **Pauli Matrices**: Spin operators, commutation relations, properties

---

## 🚀 Quick Start

### Option 1: Web Version (Recommended)

#### Local Testing:
1. Download `physics_quiz.html`
2. Open it in any web browser
3. Start taking the quiz!

#### GitHub Pages Deployment:
1. Create a new GitHub repository
2. Upload `physics_quiz.html`
3. Rename it to `index.html`
4. Go to Settings → Pages
5. Select main branch as source
6. Your quiz will be live at: `https://username.github.io/repository-name/`

### Option 2: Python Command-Line Version

```bash
# Run the Python quiz
python physics_quiz.py

# Or make it executable (Linux/Mac)
chmod +x physics_quiz.py
./physics_quiz.py
```

---

## 📖 How It Works

### Question Flow:
1. **Read the question** carefully
2. **Submit your answer**
3. **If correct**: ✅ See full solution and proceed
4. **If incorrect**: 💡 Get first hint, try again
5. **Still incorrect**: 💡 Get second hint, try again
6. **Still incorrect**: 📖 See full solution and proceed

### Scoring:
- Each correct answer adds 1 point
- Hints don't reduce your score
- Track total attempts to measure efficiency

---

## 🛠️ Customization

### Adding More Questions

Edit the `quizData` array in `physics_quiz.html`:

```javascript
{
    question: "Your question here?",
    correctAnswer: "The exact correct answer",
    acceptedAnswers: ["answer1", "answer2", "similar answers"],
    hints: [
        "First hint - guiding thought",
        "Second hint - more specific guidance"
    ],
    solution: "Complete step-by-step solution...",
    topic: "Topic Name"
}
```

### Modifying Appearance

Edit the CSS in the `<style>` section:
- Change colors in `.container` and button styles
- Modify fonts in `body` styling
- Adjust card shadows and borders

### Python Version Customization

Edit the `_load_questions()` method in `physics_quiz.py`:

```python
QuizQuestion(
    question="Your question?",
    correct_answer="Correct answer",
    accepted_answers=["ans1", "ans2"],
    hints=["Hint 1", "Hint 2"],
    solution="Solution text",
    topic="Topic"
)
```

---

## 📂 File Structure

```
physics-quiz/
├── index.html              # Web version (rename from physics_quiz.html)
├── physics_quiz.py         # Python command-line version
├── README.md               # This file
└── DEPLOYMENT.md           # Detailed deployment guide
```

---

## 🌐 GitHub Pages Deployment (Detailed)

### Step 1: Create Repository
```bash
git init
git add .
git commit -m "Initial commit: Physics quiz system"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/physics-quiz.git
git push -u origin main
```

### Step 2: Enable GitHub Pages
1. Go to repository Settings
2. Navigate to "Pages" in left sidebar
3. Under "Source", select "main" branch
4. Click "Save"
5. Wait 1-2 minutes for deployment

### Step 3: Access Your Quiz
Visit: `https://YOUR_USERNAME.github.io/physics-quiz/`

---

## 💡 Usage Tips

### For Students:
- Try to answer without hints first for best learning
- Read the full solutions even when correct
- Retake the quiz to improve your score
- Use hints strategically - they guide your thinking

### For Teachers:
- Clone and modify questions for different topics
- Add more questions by editing the arrays
- Track student scores for assessment
- Use as homework or practice assignments

---

## 🔧 Technical Details

### Web Version:
- **Technology**: Pure HTML/CSS/JavaScript
- **No dependencies**: Works offline
- **Browser support**: All modern browsers
- **Mobile**: Fully responsive design

### Python Version:
- **Python 3.6+** required
- **No external libraries** needed
- **Cross-platform**: Windows, Mac, Linux
- **Terminal-based**: Clean CLI interface

---

## 📝 Question Bank

Current quiz includes **10 questions** covering:
- Operator linearity (1 question)
- Eigenvalue calculations (1 question)
- Hermitian operators (3 questions)
- Unitary operators (2 questions)
- Projection operators (1 question)
- Pauli matrices (2 questions)

---

## 🤝 Contributing

To add more questions or improve the quiz:

1. Fork the repository
2. Create a feature branch
3. Add your questions following the existing format
4. Test thoroughly
5. Submit a pull request

---

## 📄 License

Free to use for educational purposes. Attribution appreciated.

---

## 👨‍🏫 Author

Created for BAPHY105 - Engineering Physics  
VIT Vellore  
Dr. Ankush

---

## 📧 Support

For issues or questions:
- Open a GitHub issue
- Contact course instructor
- Check documentation above

---

## 🎓 Learning Resources

Complement this quiz with:
- Lecture notes (BPHY-Lecture-10, 11)
- Tutorial problems (BAPHY105-Tutorial-3)
- Textbook: Griffiths "Introduction to Quantum Mechanics"
- Online: MIT OCW Quantum Physics

---

**Happy Learning! 🚀**
