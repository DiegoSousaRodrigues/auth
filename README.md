
# 🔐 Next.js Authentication with Iron Session

Este projeto é uma implementação de autenticação no Next.js utilizando **[iron-session](https://github.com/vvo/iron-session)** para gerenciamento de sessões seguras no lado do servidor.

---

## ✨ Funcionalidades

- 🔑 Autenticação com API Routes no Next.js
- 🛡️ Gerenciamento de sessões com cookies HTTP Only criptografados
- 🔒 Proteção de rotas utilizando Server Side Rendering (SSR)
- 🔄 Redirecionamento de usuários não autenticados para a página de login
- 🚪 Logout seguro, que destrói a sessão no backend
- 🧠 Código modular e fortemente tipado com TypeScript

---

## 🧠 Tecnologias e Bibliotecas

- [Next.js](https://nextjs.org/) – Framework React com SSR e API Routes
- [iron-session](https://github.com/vvo/iron-session) – Sessões seguras baseadas em cookies criptografados
- [TypeScript](https://www.typescriptlang.org/) – Tipagem estática
- [CSS Modules ou Tailwind (fácil de integrar)] – Estilização (opcional)

---

## 📂 Estrutura do Projeto

```
├── pages/
│   ├── _app.tsx             # Configurações globais
│   ├── index.tsx            # Página pública (home)
│   ├── login.tsx            # Página de login
│   ├── logout.tsx           # Página de logout
│   ├── logged.tsx           # Página protegida (somente usuários autenticados)
│   ├── layout.tsx           # Layout padrão
│   └── api/
│       └── login.ts         # API Route para autenticação
│
├── src/
│   ├── components/          # Componentes React
│   │   ├── HomePage.tsx
│   │   ├── LoginPage.tsx
│   │   ├── LogoutPage.tsx
│   │   └── LoggedPage.tsx
│   ├── services/            # Regras de negócio e manipulação de sessão
│   │   ├── lib.ts           # Helpers e funções auxiliares
│   │   ├── session.ts       # Configuração da sessão com iron-session
│   │   └── withSession.ts   # HOC para proteger rotas no SSR
│   ├── styles/              # Estilos globais
│   │   └── globals.css
│   └── types/               # Tipagens do projeto
│       └── session.ts
```

---

## 🔐 Como funciona a autenticação

- O usuário acessa `/login` e envia suas credenciais.
- A API Route `/api/login` valida as credenciais e cria uma sessão utilizando **iron-session**, salvando um cookie criptografado no navegador.
- Ao acessar a página `/logged`, a sessão é lida no **Server Side (getServerSideProps)** utilizando o HOC `withSession`.
- Usuários não autenticados são redirecionados para `/login`.
- O logout destrói a sessão removendo o cookie.

---

## 🚀 Instalação e execução local

### 1. Clone o repositório

```bash
git clone https://github.com/DiegoSousaRodrigues/auth.git
cd auth
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
SESSION_SECRET=uma-senha-bem-complexa-com-no-minimo-32-caracteres
```

### 4. Execute o projeto

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

---

## 🧠 Considerações de Segurança

- **Cookies são HTTP Only e criptografados**, protegendo contra ataques XSS.
- Na produção, o cookie é setado com `Secure: true`, exigindo HTTPS.
- A senha da sessão (`SESSION_SECRET`) deve ter **no mínimo 32 caracteres** e ser mantida em segurança via variáveis de ambiente.
- A autenticação está simulada, mas a estrutura é facilmente adaptável para conectar a bancos de dados reais ou serviços externos.
  
---

## 👨‍💻 Autor

- **Diego Sousa Rodrigues**  
🔗 [LinkedIn](https://www.linkedin.com/in/diego-sousa-rodrigues/)  
🐙 [GitHub](https://github.com/DiegoSousaRodrigues)

---

## ⭐ Se achar útil, deixe sua estrela no repositório!
