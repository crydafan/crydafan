const poemElement = document.getElementById("poem");

async function streamPoem() {
  const response = await fetch("/api/generate");

  const reader = response.body.getReader();
  const decoder = new TextDecoder();

  let fullText = "";

  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    const chunk = decoder.decode(value);
    fullText += chunk;
    poemElement.innerHTML = fullText;
  }
}

streamPoem();
