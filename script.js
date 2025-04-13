const cases = {
  budget: ["Glock-18 | Candy Apple", "MP9 | Sand Dashed", "P250 | Boreal Forest", "UMP-45 | Carbon Fiber", "Desert Eagle | Urban DDPAT"],
  elite: ["AK-47 | Redline", "AWP | Atheris", "M4A4 | Neo-Noir", "AUG | Momentum", "FAMAS | Mecha Industries"],
  king: ["Karambit | Doppler", "Butterfly Knife | Fade", "M9 Bayonet | Marble Fade", "AWP | Dragon Lore", "AK-47 | Fire Serpent"]
};

function openCase(caseType) {
  // Disable button while animation is running
  const caseButton = document.getElementById('caseButton');
  caseButton.disabled = true;
  
  // Animacja obracania
  caseButton.style.animation = 'spin 2s ease-out';

  // Po zakończeniu animacji losujemy skórkę
  setTimeout(() => {
    const items = cases[caseType];
    const randomIndex = Math.floor(Math.random() * items.length);
    const skin = items[randomIndex];

    // Pokazanie wyniku
    document.getElementById("result").innerText = `🎉 Wylosowałeś: ${skin}!`;

    // Ponowne włączenie przycisku po animacji
    caseButton.disabled = false;
    caseButton.style.animation = '';  // Resetowanie animacji
  }, 2000); // Czas trwania animacji (2 sekundy)
}
