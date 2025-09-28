.carousel-control-prev,
.carousel-control-next {
  /* Adicione aqui os estilos para garantir o posicionamento correto */
  position: absolute;
  top: 50%; /* Centraliza verticalmente */
  transform: translateY(-50%);
  z-index: 1; /* Garante que fiquem acima do conteúdo do slide */
}

.carousel-indicators {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image img');
    const colorButtons = document.querySelectorAll('.color-btn');
    const sizeButtons = document.querySelectorAll('.size-btn');
    const selectedSizeDisplay = document.querySelector('.selected-size-display');
    
    // Objeto para mapear a cor ao número da imagem (simulação)
    const colorMap = {
        'Preto': 1,
        'Azul': 2,
        'Verde': 3,
        'Cinza': 4,
        'Rosa': 5
    };
    
    // Função para atualizar a imagem principal e o estilo das miniaturas
    function updateMainImage(index) {
        mainImage.src = `\\assets\\img\\produto${index}.png`;
        
        thumbnails.forEach((thumb, i) => {
            thumb.classList.remove('selected');
            if (i + 1 === index) {
                thumb.classList.add('selected');
            }
        });
    }

    // Lógica para as Miniaturas (Imagens)
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            // A imagem da miniatura corresponde ao produto(index+1).png
            updateMainImage(index + 1);
        });
    });

    // Lógica para os Botões de Cor (Modelo)
    colorButtons.forEach(button => {
        button.addEventListener('click', () => {
            colorButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            
            const colorName = button.textContent;
            const imageIndex = colorMap[colorName];
            
            if (imageIndex) {
                 updateMainImage(imageIndex);
            }
        });
    });
    
    // Lógica para os Botões de Tamanho
    sizeButtons.forEach(button => {
        button.addEventListener('click', () => {
            sizeButtons.forEach(btn => btn.classList.remove('selected'));
            button.classList.add('selected');
            
            const selectedSize = button.textContent;
            selectedSizeDisplay.textContent = `Tamanho Selecionado: ${selectedSize}`;
        });
    });

    // Inicialização (garantir que o estado inicial é 'P' e 'Preto')
    updateMainImage(1); // Garante a imagem do produto1.png

});
