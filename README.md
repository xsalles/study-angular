# Embrace Landing Page

## Descrição

**Embrace** é uma landing page institucional desenvolvida em Angular, com o objetivo de apresentar os serviços de marketing digital da empresa, destacar cases de sucesso, equipe, diferenciais e facilitar o contato com potenciais clientes.  
O público-alvo são empresas e profissionais que buscam soluções criativas e estratégicas para fortalecer sua presença digital.

<img width="1903" height="735" alt="image" src="https://github.com/user-attachments/assets/8da0764e-61fb-425f-abea-4b72f6d84782" />
 

---

## Tecnologias Utilizadas

- **Angular 17** (Standalone Components)
- SCSS (modularizado por componente)
- PrimeNG (para carrossel de feedbacks)
- Node.js & pnpm (gerenciador de pacotes)
- [Ícones SVG próprios](src/assets/icons)  
- (Opcional) Outras libs: nenhuma dependência visual extra além do PrimeNG

---

## Funcionalidades da Landing Page

- **Header** com navegação principal e botão de call-to-action
- **Seção Hero** com destaque da proposta de valor
- **Seção de Parceiros** (empresas atendidas)
- **Seção de Estatísticas** (resultados e números)
- **Como Funciona** (etapas do serviço, com ícones)
- **Portfólio** (cases de clientes)
- **Chamada para ação** (CTAs intermediárias e finais)
- **Equipe** (apresentação dos membros)
- **Feedbacks de clientes** (carrossel)
- **FAQ** (perguntas frequentes com componente customizado)
- **Footer** com navegação, redes sociais e informações legais
- **Responsividade** (estrutura preparada para adaptação, embora o foco seja desktop)
- **Componentização**: todos os blocos são componentes reutilizáveis e isolados
- **Formulários**: campos de e-mail para contato/newsletter

---

## Como Rodar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/landing-page-angular.git
   cd landing-page-angular
2. **Instale as dependências:**
   ```bash
   npm install
3. **Inicie o projeto:**
   ```bash
   ng serve

## Aprendizados 🚀

* Estruturação de um projeto Angular moderno usando **Standalone Components** (sem NgModules)
* Organização de pastas por domínio e componente, seguindo boas práticas de nomenclatura (kebab-case)
* Criação e reutilização de componentes (botões, cards, seções, inputs, FAQ, etc.)
* Uso de **data binding**: interpolação (`{{ }}`), property binding (`[src]`, `[text]`), event binding (`(click)`)
* Estilização global e componentizada com SCSS e variáveis centralizadas
* Integração de SVGs e imagens como assets estáticos
* Utilização do PrimeNG para componentes avançados (carrossel)
* Separação clara entre lógica (TypeScript) e apresentação (HTML/SCSS)
* Preparação para responsividade e fácil manutenção
* Utilização de formulários simples para captação de leads/newsletter

---

## Próximos Passos / Melhorias Futuras

* Tornar a landing page 100% responsiva para mobile/tablet
* Adicionar animações e transições para melhorar a experiência do usuário
* Integrar com backend para envio de formulários e captação de leads
* Implementar SEO e otimização de performance
* Adicionar testes unitários e de integração para os principais componentes
* Internacionalização (i18n) para múltiplos idiomas
* Melhorar acessibilidade (a11y)
* Desenvolvido como estudo prático de Angular e componentização moderna
