* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background: #0f0f0f;
  color: white;
}

/* HERO */
.hero {
  height: 100vh;
  background: url('images/hero.jpg') center/cover no-repeat;
  position: relative;
}

.overlay {
  background: rgba(0,0,0,0.6);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.hero h1 {
  font-size: 40px;
  max-width: 800px;
}

.hero p {
  margin-top: 10px;
  color: #ddd;
}

/* BUTTONS */
.buttons {
  margin-top: 20px;
}

.btn {
  background: red;
  color: white;
  padding: 12px 20px;
  margin: 5px;
  text-decoration: none;
  border-radius: 6px;
}

.btn.secondary {
  background: transparent;
  border: 1px solid white;
}

/* SECTIONS */
.section {
  padding: 60px 20px;
  text-align: center;
}

.section.dark {
  background: #111;
}

.section h2 {
  margin-bottom: 20px;
}

/* GRID */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 20px;
}

.card {
  background: #222;
  padding: 20px;
  border-radius: 10px;
}

.grid img {
  width: 100%;
  border-radius: 10px;
}

/* FORM */
form {
  display: grid;
  gap: 10px;
  max-width: 400px;
  margin: auto;
  margin-top: 20px;
}

input, textarea {
  padding: 10px;
  border-radius: 5px;
  border: none;
}

button {
  background: red;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
}

/* FOOTER */
footer {
  text-align: center;
  padding: 20px;
  background: black;
}
