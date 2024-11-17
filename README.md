# 🚨 Sensor Metrics Frontend

Projeto desenvolvido como atividade avaliativa para matéria de IOT, o projeto consiste em um frontend que recebe mensagens via websocket para exibições de dados em um dashboard

## 📚 Stack usada

![Stack](https://img.shields.io/badge/typescript-blue?logo=typescript&logoColor=white&style=for-the-badge) ![Stack](https://img.shields.io/badge/react-blue?logo=react&logoColor=white&style=for-the-badge) ![Stack](https://img.shields.io/badge/vite-purple?logo=vite&logoColor=white&style=for-the-badge)


## 🦾 Funcionalidades

- Recebe eventos via websocket
- Exbe os dados recebidos em dois gráficos


## 🔧 Configuração do projeto
#### 📁 Ajustar variáveis

Crie um arquivo `.env` na raiz do projeto e adicione as variáveis necessárias (há um `.env.example` de demonstração):

```ini
VITE_WEBSOCKET_URL=string
```

### 📦 Instalação dos pacotes
Execute a instalação das dependências necessárias:
```ini
yarn
```

### 🚀 Executando o projeto:
Execute os dois sensores:
```ini
yarn build

yarn preview
```

## 🏃 Testando
Para testar, será necessário utilizar algum backend com suporte a MQTT ou algo do gênero, ou, instalar os sensores e o backend do projeto:

Sensores: https://github.com/PauloHenriqueOliveiradeAlmeida/sensor-metrics-sensors

Backend: https://github.com/PauloHenriqueOliveiradeAlmeida/sensor-metrics-dashboard-backend
