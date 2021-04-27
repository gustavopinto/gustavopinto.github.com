---
layout: single
author_profile: true
title: Arrays
permalink: /ruby-guide/io
---

Dispositivos de entrada e saída (do Inglês, *input* e *output*, IO) são meios que computadores utilizam para se comunicar com o mundo externo. Operações de *entrada* são meios em que programas recebem dados no sistema enquanto que operações de  *saída* são formas de enviar dados pelo sistema. Além das operações de entrada e saída, há também os dispositivos de entrada e saída, como por exemplo, um teclado que se comunica com o seu computador, enviando dados a cada tecla pressionada, ou um impressora, que recebe dados para que sejam impressos em um papel.

Desde a leitura de um byte na memória até acesso a um site de rede social na internet são fortemente baseados em operações de entrada e saída. Neste capítulo, vamos focar nos mecanismos que a linguagem de programação nos fornece para fazer manipulações de entrada e saída. No entanto, para uma mais profunda descrição sobre as etapas e os dispositivos envolvidos em um operação de entra e saía, recomendo a leitura do livro do Andrew Tanenbaum, sobre sistemas operacionais.

## A classe File

A classe File é o ponto de partida para realizer manipulações de leitura e escrita em arquivos no disco. A classe File implementa vários métodos que abstraem a complexidade de manipulação de arquivos. Por exemplo, podemos usar o método ```read``` para ler um determinado arquivo:

```ruby
puts File.read "teste.txt"
```

No exemplo acima, tentamos imprimir o conteúdo do arquivo ```teste.txt```. No entanto, esse programa retornará um erro (```No such file or directory```). Certifique-se que o arquivo ```teste.txt``` existe e está no mesmo diretório do nosso programa Ruby. Se você usa Linux ou similares, você pode usar o comando ```echo``` para imprimir uma string e o redirecionador  ```>``` para enviar este conteúdo para um arquivo. Por exemplo:

```bash
echo "rosas são vermelhas,
violetas são azuis.
ruby é massa,
mas ainda não me seduz." > poema.txt
```

O resultado desta operação ```File.read "teste.txt"``` é uma única String com todo o conteúdo do arquivo. Como nossa tinha várias linhas, o método ```read``` identificou essas quebras de linhas e as substituiu por vários ```\n```, que é o caractere utilizado para identificar uma quebra de linha. Caso quiséssemos percorrer o arquivo, e imprimir seu conteúdo da mesma forma que foi inserido (respeitando a quebra de linhas), teríamos que identificar os caracteres ```\n``` para então separar a sentenças.

Poderíamos evitar esse trabalho e usar o método ```readlines```, que em vez de retornar uma única String com todo o conteúdo do arquivo, este retorna um Array, separando os elementos a cada quebra de linha (```\n```).

```ruby
puts File.readlines "poema.txt"
```

Perceba que o caractere ```\n``` não é removido da String, e nem é nossa intenção remove-lo, do contrário, teríamos que forçadamente adicionar uma outra forma de quebra de linha, para manter a formatação do nosso texto.

Ler um arquivo usando o ```readlines``` tem agora o mesmo idioma de percorrer elementos de uma lista.

```ruby
for linha in File.readlines "poema.txt"
  puts linha
end
```

Assim, podemos usar o que aprendemos sobre Strings e fazer manipulações no conteúdo do nosso arquivo. Por exemplo, poderíamos deixar o texto mais elegante colocando a primeira letra como maiúscula (usando o método ```capitalize```). Poderíamos também alterar o texto do nosso poema (usando o método ```sub```). Por exemplo:

```ruby
for linha in File.readlines "poema.txt"
  if linha.start_with? "mas"
    linha = linha.sub "mas ainda não me seduz", "gosto mais do que cuscuz"
  end
  puts linha.capitalize
end
```

No código acima, nós colocamos um ```if``` que verifica se a ```linha``` começa com a String ```mas```, ou seja, nosso indício pra saber que é a última linha. Se for, fazemos uma substituição usando o método ```sub```. Perceba que precisamos atribuir o retorno do método ```sub``` para a mesma variável linha. Porque devemos fazer isso? Se estiver confuso, experimente remover a re-atribuição da variável e inspecione o resultado.

Por fim, imprimimos usando um ```linha.capitalize``` para garantir que a primeira letra de cada linha será capitalizada.

Há um problema no nosso código, no entanto. Toda vez que lemos um arquivo, esse arquivo é armazenado em memória. Logo, após realizarmos a leitura, precisamos também fechar o arquivo. Mas qual é a nossa referência ao arquivo que abrimos? Usamos o ```File.readlines``` para ler as linhas dentro de um laço, mas não temos controle sobre o arquivo que abrimos, pois isso foi abstraído pela classe ```File```. Para que possamos fechar o arquivo, precisamos ter uma referência a esse arquivo. Para isso, usamos o método ```open``` que, além de abrir o arquivo, nos retorna uma referência para o arquivo aberto.

```ruby
f = File.open("poema.txt")
f.each do |linha|
  puts linha
end
f.close
```

No caso do exemplo acima, a variável ```f``` guarda a referência ao arquivo. Assim podemos lê-lo (```f.each```) e fecha-lo (```f.close```). Mas qual existe algum problema em manter o arquivo aberto? Há basicamente dois problemas: primeiro, se não indicar o momento em que o arquivo será fechado, perdemos as garantias das alterações no arquivo se efetivarem, pois ficará a cargo do sistema operacional decidir quando o arquivo será fechado ou não. Um segundo problema é que embora o sistema operacional consiga lidar com algumas centenas (ou até milhares) de arquivos abertos simultaneamente, cada arquivo que abrimos ocupa espaço de memória. Em ambientes com restrição de memória, ou ambientes em que buscamos otimizar o máximo possível, o custo de gerenciar arquivos sem utilização pode impactar no desempenho da aplicação. Logo, é uma boa prática garantir que um arquivo que foi aberto será fechado.


Para evitar eventuais esquecimentos com arquivos abertos (e só perceber depois quando a sua aplicação que precisar navegar por todos os diretórios do sistema de arquivos der algum erro), podemos usar o idioma de blocos, que fecha automaticamente o arquivo após execução do bloco.

```ruby
File.open("io.txt") do |arquivo|
f.each do |linha|
  puts linha
end
```

Perceba que ao usar o idioma de bloco, não temos mais a referência ao arquivo aberto. Depois de estudar métodos e blocos, pense como você poderia implementar o método ```open``` de forma que um bloco possa ser passado por parâmetro e a referência ao arquivo seja fechada após a execução do bloco.

Para escrever em um arquivo, temos também que primeiro abri-lo. A diferença, nesse caso, é que precisamos informar o interesse de escrita no dado arquivo, passado pelo parâmetro ```"w"```.

```ruby
File.open("log.txt", "w") { |f| f.write "#{Time.now}\n" }
```

## Métodos auxiliares

A classe File conta com diversos métodos auxiliares. Um dos quais é o método ```each_byte```, que retorna a representação em bytes de cada caracter do nosso texto. Outro método é o ```each_char```, que retorna cada caracter individualmente. Outros métodos importantes da classe File:

```ruby
# renomear um arquico
File.rename("poema.txt", "Poema.txt")
# tamanho do arquivo em bytes
File.size("poema.txt")
# verifica se o arquivo existe
File.exists?("poema.txt")
# retorna o nome do arquivo, sem o diretório
File.basename("/home/gustavo/poema.txt")
# => "poema.txt"
# retorna o diretório do arquivo, sem o nome do arquivo
File.dirname("/home/gustavo/poema.txt")
# => "/home/gustavo/"
# verifica se é arquivo ou diretório
File.directory?("poema.txt")
# => false
```

## Manipulando dados tabulados

### CSV

### JSON

Mas o que podemos fazer se o arquivo for um pouco mais estruturado? Por exemplo, um JSON?

Para criar um arquivo JSON:


```ruby
require "json"

def write_to_json

  livros = {}

  livros[:sapiens] = "Sapiens: A Brief History of Humankind"
  livros[:mindset] = "Mindset: The New Psychology of Success"
  livros[:metrics] = "The tyranny of Metrics"

  File.open("livros.json", "w") do |arquivo|
    arquivo.write livros.to_json
  end
end

write_to_json
```

```ruby
def read_from_json
  File.open("livros.json") do |json|
    json.each do |linha|
      puts linha
    end
  end
end

read_from_json
```

Mas como podemos fazer pra manipular esse arquivo?

```ruby
require "json"

JSON.parse (File.read (livros.json))
```

### Lendo dados da web

```
require 'open-uri'
URI.open("https://raw.githubusercontent.com/facebook/react/master/package.json")
```

## Exercícios de fixação

- Escreva um programa que liste todos os arquivos de formato de imagem no diretório corrente e nos seus subdiretórios.

- Faça um programa que conte quais são as três bibliotecas mais utilizadas por 20 projetos JavaScript do GitHub.
