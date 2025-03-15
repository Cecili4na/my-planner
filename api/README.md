# API SQL Server

API Node.js para expor dados do SQL Server.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- SQL Server instalado e configurado
- NPM ou Yarn

## Configuração

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Configure as variáveis de ambiente no arquivo `.env`:
   ```
   DB_SERVER=localhost
   DB_NAME=seu_banco
   DB_USER=seu_usuario
   DB_PASSWORD=sua_senha
   PORT=8080
   ```

## Configuração do SQL Server

1. Habilitar conexões TCP/IP no SQL Server Configuration Manager
2. Configurar a porta padrão (1433) no SQL Server
3. Criar um usuário com permissões adequadas:
   ```sql
   CREATE LOGIN seu_usuario WITH PASSWORD = 'sua_senha';
   CREATE USER seu_usuario FOR LOGIN seu_usuario;
   GRANT SELECT ON sua_tabela TO seu_usuario;
   ```

## Configuração do Firewall

1. Liberar a porta 8080 no firewall do servidor
2. Configurar port forwarding no roteador (se necessário)

## Executando a API

Para desenvolvimento:
```bash
npm run dev
```

Para produção:
```bash
npm start
```

## Endpoints

- GET `/`: Rota de teste
- GET `/api/dados`: Retorna os dados do banco

## Segurança

- Todas as credenciais são armazenadas em variáveis de ambiente
- CORS está habilitado para permitir requisições de diferentes origens
- Recomenda-se configurar HTTPS em produção 