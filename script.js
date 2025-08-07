function runCode() {
  const code = document.getElementById("code-input").value;

  fetch('/run_code', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: 'code=' + encodeURIComponent(code)
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById("output").textContent = data.output;
  })
  .catch(err => {
    document.getElementById("output").textContent = "❌ Error: " + err;
  });
}

function resetCode() {
  document.getElementById("code-input").value = "";
  document.getElementById("output").textContent = "➡️ Output will appear here...";
}

function insertSnippet(snippet) {
  const input = document.getElementById("code-input");
  input.value = snippet.replace(/\\n/g, "\n").replace(/\\"/g, '"');
}

// ✅ Theme toggle handler
document.getElementById("theme-toggle").onclick = function () {
  const body = document.getElementById("page-body");

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    this.textContent = "☀️";
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    this.textContent = "🌙";
  }
};
