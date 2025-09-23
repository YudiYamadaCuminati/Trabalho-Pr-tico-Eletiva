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