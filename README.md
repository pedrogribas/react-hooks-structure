# React Estrutura e Hooks

Estudos seguindo o curso do: @LucasSouzaDev;
link: https://www.youtube.com/@LucasSouzaDev
Tecnologias utilizadas: React, Typescript, Vite

## Deploy

Para fazer o deploy desse projeto rode

```bash
  npm run dev
```

## Conteúdos Aprendidos:

### Divisão de pastas no react
Servem para definir o esqueleto do projeto, sendo a maior parte do código na pasta src.

### Routes

As rotas são os caminhos da nossa página, gerenciadas através do react router dom. Ex:. tela de login e menu.

### Components

Os componentes são elementos genéricos que se tornam específicos na página. Para utilizar props e children no typescript é necessária uma interface. Ex:
interface IButtonLoginProps {
  type?: "submit" | "reset" | "button";
  onClick?: () => void;
  children: React.ReactNode;
}

### React Hooks:
| Hook               | Explicação                                                |
| ----------------- | ---------------------------------------------------------------- |
| UseEffect         | Executado sempre que o state passado no array é alterado.
| UseCallback       | Armazena funções na memória do react evitando que elas sejam reconstruídas.
|UseState           | Define um estado para uma variável dinâmica e uma função para alterá-lo.
|UseMemo            | Só vai recompilar quando um dos valores de dependência forem alterados, UseMemo é uma func atribuida a uma variável e com return.
|UseRef             | Retorna um objeto ou valor referenciado constantemente. Com o .current você pode fazer alterações diretamente no objeto referenciado
|ForwardRef             | Permite referenciar um objeto componentizado


### React Hooks Personalizados:
Um hook personalizado é basicamente um hook existente específico para uma atividade. Como no arquivo 'UseUsuarioLogado' em hooks. 
O hook para ser um hook deve utilizar algum dos hooks genéricos do react dentro de seu código e utilizar a palavra 'use' em alguma parte do nome da função (recomendado no início para fins de padrão).

### Context
Contexts são informações compartilhadas entre várias telas.


## Autores

- [@pedrogribas](https://www.github.com/pedrogribas)

