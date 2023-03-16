//objeto aluno (Student) → var nome_do_objeto = {};
var Student = {
  //valores do objeto → sempre no formato "chave: valor,"
  name: "Sammy",
  class: 7,
  roll_no:21,
  favorite_subject: "programação",
  marks : [30,35,40,50]  
};

function setup() {  
  createCanvas(1400, 10);

  //mudando o número da matrícula (para acessar os dados de um objeto usamos a sintaxe objeto.chave)
  console.log(Student.roll_no);
  Student.roll_no = 45;
  console.log(Student.roll_no);  
}

function draw() {
  background("pink");  
}
