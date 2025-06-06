# Histórico de Versões

## [0.3.1] - 06-06-2025

### Corrigido

- Conflito de merge

## [0.3.0] - 06-06-2025

### Adicionado

- Testes de validação de produtos (ordenação de itens, validações de imagens, adicionar produtos ao carrinho.)
- Comandos customizados: `validateDifferentImages`, `compareProductInfo`, `sortItems`

### Modificado

- Validações do elemento ocorrendo no arquivo de pageObjects ao invés no arquivo de commands.

## [0.2.1] - 06-06-2025

### Corrigido

- Correção no arquivo `History.md`.

## [0.2.0] - 06-06-2025

### Adicionado

- Testes de validação de login (campos vazios, credenciais inválidas)
- Comandos customizados: `doLogin`, `loginSuccessfully`, `validateLoginError`
- Mascaramento de senha nos logs do Cypress
- Arquivo HISTORY.md para versionamento

### Corrigido

- Remoção de código duplicado entre arquivos
- Remoção do arquivo `.gitattributes`

### Modificado

- Refatoração da estrutura de comandos

## [0.1.0] - 05-06-2025

### Adicionado

- Setup inicial do projeto com Cypress + TypeScript
- Estrutura de Page Objects
- Testes para funcionalidade de carrinho
- Comando `addProductToCart`

### Modificado

- Estrutura inicial do projeto
