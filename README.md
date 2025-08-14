# Color Clash

> A brutally addictive browser game that pits you against your own brain. Built with pure Vanilla JavaScript.

Welcome to Color Clash, a minimalist game that is deceptively simple to play but surprisingly difficult to master. It's a fast-paced test of your mental focus, designed to be the ultimate "just one more try" experience.

*(Feel free to replace this with your own screenshot or a GIF of the gameplay\!)*

### 🎮 **[Play the Live Demo Here\!](https://kewlaashish.github.io/Color-Clash/)** *

-----

## 🧠 The Concept: A Deep Dive into the Stroop Effect

Color Clash is not just a game; it's a playable demonstration of a classic psychological phenomenon known as the **Stroop Effect**.

#### What is the Stroop Effect?

First described by John Ridley Stroop in the 1930s, the Stroop Effect is a powerful demonstration of interference in the brain's processing. It shows that it is significantly harder and takes longer to name the font color of a word than it does to simply read the word itself, especially when the word is a conflicting color name.

For example, if you see the word:

# \<p style="color: blue;"\>RED\</p\>

Your brain experiences a cognitive clash.

1.  **Automatic Processing:** Reading is a deeply ingrained and automatic process for literate adults. Your brain instantly reads the word "RED" without any conscious effort. This is the fast, intuitive path.
2.  **Controlled Processing:** Identifying a color, on the other hand, is a controlled process. It requires more conscious attention and effort. This is the slower, more deliberate path.

The interference occurs because the automatic impulse to read the word interferes with the controlled task of naming the color. You must actively suppress the information from the word to correctly complete the task.

#### How Color Clash "Weaponizes" This Effect

This game is designed to maximize this cognitive dissonance for an addictive challenge.

  * **The Core Conflict:** Every round presents you with this exact conflict. Your brain's automatic response screams the word it reads, but the game's rules force you to override that powerful impulse and consciously identify the font color.
  * **The Time Pressure:** The shrinking timer doesn't give you the luxury of slowly deliberating. It forces you to rely on quick processing, making the interference from the Stroop Effect even more potent and mistakes more likely.
  * **The "Just One More Try" Loop:** Failures in Color Clash don't feel like a lack of skill, but rather a momentary "glitch" in your brain. This creates a powerful desire to immediately play again to prove to yourself that you can overcome this simple, self-imposed obstacle.

-----

## 🕹️ How to Play

The rules are incredibly simple:

1.  A word will appear on the screen (e.g., "Yellow").
2.  The word will be displayed in a specific font color (e.g., Purple).
3.  Your task is to ignore what the word says and click the button that matches the **font color**.
4.  Be fast\! The timer bar at the top shrinks quickly, and it gets faster with every correct answer.
5.  One wrong move or running out of time, and the game is over.

## Features

  * **Minimalist Design:** A clean, focused interface that keeps you in the zone.
  * **Dynamic Difficulty:** The timer speeds up as your score increases, constantly ramping up the challenge.
  * **Addictive Core Loop:** Based on a powerful psychological principle, it’s a game you'll want to play again and again.
  * **Pure Front-End:** No backend, no libraries. Runs entirely in your browser with zero dependencies.
  * **Score Tracking:** Challenge yourself and chase your personal best\!

## Tech Stack

This project is a testament to the power of "vanilla" web technologies.

  * **HTML5:** For the basic structure and content.
  * **CSS3:** For all styling, layout, and animations.
  * **Vanilla JavaScript (ES6):** For all game logic, DOM manipulation, and event handling.

## How to Run Locally

This project has no external dependencies, so running it locally is extremely simple.

1.  **Clone the repository:**
    ```bash
    https://github.com/KewlAashish/Color-Clash.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd Color-Clash
    ```
3.  **Open the `index.html` file** in your favorite web browser.

That's it\! The game will be up and running.
