document.addEventListener('DOMContentLoaded', function () {
      const tipsContainer = document.getElementById('product-container');
      const showTipsButton = document.getElementById('show-product-button');
      const selectTipDropdown = document.getElementById('select-travel-tip');
      const showSelectedTipButton = document.getElementById('show-selected-tip-button');

      const travelTips = [
        { title: 'Packing Essentials', description: 'Pack light and smart for a stress-free trip.' },
        { title: 'Local Cuisine Exploration', description: 'Try local dishes for an authentic experience.' },
        { title: 'Cultural Etiquette', description: 'Learn about and respect local customs and traditions.' },
      ];

      travelTips.forEach((tip, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.text = tip.title;
        selectTipDropdown.add(option);
      });

      showTipsButton.addEventListener('click', function () {
        const randomTip = travelTips[Math.floor(Math.random() * travelTips.length)];
        const tipElement = document.createElement('div');
        tipElement.className = 'travel-tip';
        tipElement.innerHTML = `
          <h3>${randomTip.title}</h3>
          <p>${randomTip.description}</p>
        `;
        tipsContainer.innerHTML = '';
        tipsContainer.appendChild(tipElement);
      });

      showSelectedTipButton.addEventListener('click', function () {
        const selectedIndex = selectTipDropdown.value;
        const selectedTip = travelTips[selectedIndex];
        const selectedTipElement = document.createElement('div');
        selectedTipElement.className = 'travel-tip';
        selectedTipElement.innerHTML = `
          <h3>${selectedTip.title}</h3>
          <p>${selectedTip.description}</p>
        `;
        tipsContainer.innerHTML = '';
        tipsContainer.appendChild(selectedTipElement);
      });
    });