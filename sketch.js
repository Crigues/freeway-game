  function setup() { 
  
  //Dimensão do Preview
  createCanvas(500,400);
  somDaTrilha.loop();
    
}

  function draw() {
    
  //Cenário
  background(imagemDaEstrada); 
  
  //Funções
  mostraAtor();
  mostraCarro();
  movimentaCarro(); 
  movimentoAtor();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto ();
  
}

