const poemElement = document.getElementById("poem");

fetch("/api/generate")
  .then((response) => response.json())
  .then((data) => {
    poemElement.innerHTML = data.poem;
  })
  .catch((error) => {
    console.error("Error fetching poem:", error);
  });
