# Banco API Tests

Automação de testes para a [API REST do projeto Banco API](https://github.com/juliodelimas/banco-api).

O objetivo é **validar os endpoints da API**, contribuindo que as operações bancárias (login, criação de contas, transferências, etc.) funcionem corretamente.  
O projeto utiliza **JavaScript** e um conjunto de bibliotecas de teste modernas.

---

## 🚀 Stack Utilizada

- [Node.js](https://nodejs.org/) (v22 ou superior)
- [Mocha](https://mochajs.org/) – framework de testes
- [Chai](https://www.chaijs.com/) – biblioteca de asserções
- [Supertest](https://github.com/ladjs/supertest) – requisições HTTP
- [Mochawesome](https://github.com/adamgruber/mochawesome) – geração de relatórios HTML
- [Dotenv](https://github.com/motdotla/dotenv) – leitura de variáveis de ambiente
- Outras dependências listadas em [`package.json`](./package.json)

---

## 📂 Estrutura do Projeto

```
banco-api-tests/
├── test/                     # Testes automatizados
│   ├── login.test.js
│   └── transferencia.test.js
├── mochawesome-report/       # Gerado automaticamente após execução com relatório HTML
├── .env                       # (não versionado) – contém a BASE_URL da API
├── package.json
└── README.md
```

---

## ⚙️ Configuração do Ambiente

### 1. Pré-requisitos
- Node.js instalado
- Banco API em execução localmente ou em ambiente de teste (por exemplo `http://localhost:3000`)

### 2. Clonar o repositório
```bash
git clone https://github.com/rcdrodrigues/banco-api-tests.git
cd banco-api-tests
```

### 3. Instalar dependências
```bash
npm install
```

### 4. Criar o arquivo `.env`
Crie um arquivo chamado `.env` na raiz do projeto com o seguinte conteúdo:

```env
BASE_URL=http://localhost:3000
```

> Ajuste a URL conforme o ambiente onde a API está rodando.

---

## ▶️ Executando os Testes

### 1. Rodar todos os testes
```bash
npx mocha
```

ou (caso tenha configurado no `package.json`):

```bash
npm test
```

### 2. Gerar relatório com Mochawesome
```bash
npx mocha --reporter mochawesome
```

O relatório em HTML será gerado em:

```
./mochawesome-report/mochawesome.html
```

Abra esse arquivo no navegador para visualizar os resultados de forma gráfica.

---

## 🔗 Documentações Úteis

- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Supertest](https://github.com/ladjs/supertest)
- [Mochawesome](https://github.com/adamgruber/mochawesome)
- [Dotenv](https://github.com/motdotla/dotenv)
- [Node.js](https://nodejs.org/)

---

## 👤 Autor

Projeto criado por **[Ricardo Rodrigues](https://github.com/rcdrodrigues)**  
Destinado a estudos e prática de automação de testes de APIs REST.
