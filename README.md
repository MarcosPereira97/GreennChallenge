# 🚀 Greenn Challenge 2025 - QA Automation

[![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)](https://cypress.io)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Allure Report](https://img.shields.io/badge/Allure-Report-orange?style=for-the-badge)](https://docs.qameta.io/allure/)

## 📋 Sobre o Projeto

Automação de testes E2E para o sistema **SauceDemo** desenvolvida com Cypress e TypeScript. O projeto implementa testes automatizados cobrindo as principais funcionalidades do sistema com relatórios detalhados via Allure.

### 🎯 Cobertura de Testes

- **🔐 Autenticação**: Cenários de login válidos e inválidos
- **🏠 Homepage**: Navegação e interação com catálogo de produtos  
- **🛒 Carrinho**: Gerenciamento de produtos no carrinho de compras
- **💳 Checkout**: Fluxo completo de finalização de pedidos

## 🛠️ Tecnologias

| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| **Cypress** | ^13.0+ | Framework de automação E2E |
| **TypeScript** | ^5.0+ | Linguagem de programação |
| **Allure Report** | Latest | Geração de relatórios avançados |
| **Node.js** | 18+ | Runtime JavaScript |

## 📦 Pré-requisitos e Instalação

### 1. Instalar Node.js
- Baixe e instale o Node.js (versão 18 ou superior): [nodejs.org](https://nodejs.org/en/)
- Verifique a instalação: `node --version`

### 2. Instalar Java (para Allure Reports)
- Baixe e instale o Java 18: [Oracle Java](https://www.oracle.com/java/technologies/javase/jdk18-archive-downloads.html)
- Configure a variável `JAVA_HOME` nas variáveis de ambiente
- Verifique a instalação: `java --version`

### 3. Instalar Dependências do Projeto
```bash
# Clone o repositório (se aplicável)
git clone [URL_DO_REPOSITORIO]
cd greenn-challenge-qa

# Instale as dependências
npm install
# ou usando Yarn
yarn install
```

## 🚀 Como Executar

### Execução Interativa (Interface Gráfica)
```bash
# Abre o Cypress Test Runner
npm run cy:open
```
- Permite escolher e executar testes individualmente
- Visualização em tempo real da execução
- Ideal para desenvolvimento e debug

### Execução Headless (Linha de Comando)
```bash
# Executa todos os testes sem interface gráfica
npm run cy:run
```
- Execução rápida de todos os testes
- Gera screenshots automaticamente

### Execução com Relatórios Allure
```bash
# Executa testes + gera relatório + abre automaticamente
npm run test:allure
```
- Execução completa com relatório detalhado
- Abre o relatório automaticamente no navegador

### Modo Visual com Allure
```bash
# Interface gráfica com relatórios habilitados
npm run test:visual
```

## 📊 Relatórios Allure

### Como Funciona
O Allure gera relatórios detalhados com:
- **Métricas de execução** (passou/falhou/tempo)
- **Screenshots automáticos** em caso de falhas
- **Gravações de vídeo** dos testes
- **Logs detalhados** de cada step
- **Histórico** de execuções anteriores

### Comandos de Relatório
```bash
# Gerar relatório
npm run allure:report

# Abrir relatório existente
npm run allure:open

# Limpar cache de relatórios
npm run allure:clear

# Servir relatório (método alternativo)
npx allure serve allure-results
```

## 📁 Estrutura do Projeto

```
cypress/
├── e2e/                   # Testes E2E organizados por módulo
│   ├── login.cy.ts        # Testes de autenticação  
│   ├── homepage.cy.ts     # Testes da homepage/produtos
│   └── checkout.cy.ts     # Testes do fluxo de compra
├── fixtures/              # Dados de teste em JSON
├── support/               # Configurações e comandos customizados
│   ├── commands.ts        # Comandos reutilizáveis do Cypress
│   └── e2e.ts             # Configurações globais
└── screenshots/           # Screenshots de falhas (gerado automaticamente)
```

## ⚙️ Como Funciona

### 1. Organização dos Testes
- **Modular**: Testes organizados por funcionalidade
- **Page Objects**: Estrutura reutilizável para elementos da página
- **Data-driven**: Dados de teste separados em fixtures JSON

### 2. Configurações
- **cypress.config.js**: Configurações gerais do Cypress
- **support/e2e.ts**: Importações globais e configurações
- **support/commands.ts**: Comandos customizados reutilizáveis

### 3. Execução
1. Cypress carrega as configurações
2. Executa testes sequencialmente por arquivo
3. Gera evidências (screenshots/vídeos) automaticamente
4. Allure coleta os resultados e gera relatórios

### 4. Relatórios
- **Durante execução**: Allure coleta dados em `allure-results/`
- **Após execução**: Gera relatório HTML em `allure-report/`
- **Visualização**: Abre automaticamente no navegador padrão

## 🔧 Scripts Disponíveis

```json
{
  "cy:run": "cypress run",                    // Execução headless
  "cy:open": "cypress open",                  // Interface gráfica
  "test:visual": "cypress open --env allure=true && npm run report",  // Visual + relatório
  "report": "npx allure generate allure-results --clean -o allure-report && npx allure open allure-report",
  "allure:report": "allure generate allure-results --clean -o allure-report",  // Gerar relatório
  "allure:clear": "rm -rf allure-results allure-report",              // Limpar cache
  "allure:open": "allure open allure-report",                         // Abrir relatório
  "test:allure": "npm run cy:run && npm run allure:report && npm run allure:open"  // Completo
}
```

## 🧪 Casos de Teste Implementados

| Módulo | Quantidade | Descrição |
|--------|------------|-----------|
| **Autenticação** | 4 casos | Login válido/inválido, campos obrigatórios |
| **Homepage** | 6 casos | Navegação, produtos, carrinho, ordenação |
| **Checkout** | 10 casos | Fluxo completo de compra, validações |
| **Total** | **20 casos** | Cobertura completa das funcionalidades |

## 🎯 Configurações Importantes

### Timeouts
- **Comandos**: 10 segundos (padrão)
- **Page Load**: 30 segundos
- **Teste completo**: 2 minutos

### Browsers Suportados
- Chrome (recomendado)
- Firefox
- Edge
- Electron (padrão headless)

### Ambiente de Teste
- **URL Base**: https://www.saucedemo.com/
- **Usuários de teste**: Configurados em fixtures
- **Dados de teste**: Centralizados em arquivos JSON

---

> 💡 **Projeto desenvolvido para o desafio técnico da [Greenn](https://greenn.com.br/)**