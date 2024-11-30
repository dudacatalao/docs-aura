---
sidebar_position: 2
---

# Back-End

## Stack Tecnológica

### Linguagem
Python (versão X.X) – Usada devido à sua simplicidade, vasto ecossistema de bibliotecas e integração facilitada com ferramentas de inteligência artificial e aprendizado de máquina, o que pode ser explorado no futuro.

### Framework
Django (versão X.X) – Escolhido por ser um framework robusto para desenvolvimento rápido de backends, com boas práticas incorporadas, como a arquitetura Model-View-Template (MVT).


### Django Rest Framework (DRF) 
Utilizado para a criação de APIs RESTful, fornecendo uma camada de abstração para serialização de dados, autenticação e autorização.

### Banco de Dados
PostgreSQL – Escolhido pela sua confiabilidade, suporte a dados complexos e capacidade de lidar com uma quantidade maior de transações e dados relacionais de forma eficiente.
WebSocket:
 
### Django Channels 
Adotado para garantir a atualização em tempo real, especialmente para a sincronização entre o sistema de senhas (Totem) e a exibição na TV.

### Serviços em Nuvem 
Azure – Utilizado para autenticação via Single Sign-On (SSO) com Active Directory, garantindo um login seguro e integrado para os funcionários do ambulatório.

Thunder client

Api Dog


## Arquitetura do Sistema

### Arquitetura em Camadas 

#### Camada de Apresentação (Frontend)
Interage com o Django Rest Framework para acessar as APIs de gerenciamento de senhas, atendimentos, e serviços.

#### Camada de Aplicação
Django e Django Rest Framework – A lógica principal do sistema reside aqui, como validações de dados, manipulação de lógica de negócios (gerenciamento de atendimentos, rotas de pacientes), e controle de fluxo de usuários.

#### Camada de Persistência (Banco de Dados)
A camada de persistência está conectada ao PostgreSQL, garantindo que os dados sejam armazenados de forma segura e consistente, com integrações bem definidas entre os modelos do Django.
Comunicação em Tempo Real
O uso do WebSocket (Django Channels) permite a comunicação bidirecional em tempo real entre o servidor e o cliente, essencial para a atualização instantânea de informações como a chamada de pacientes no visor da TV.

#### Docker
O sistema foi containerizado com Docker para garantir que o ambiente de desenvolvimento e produção sejam consistentes, facilitando o deploy e a escalabilidade.


IMAGEM da arquitetura


## Desempenho e Escalabilidade

#### Escalabilidade Horizontal 
O uso de contêineres Docker facilita o escalonamento horizontal do sistema, permitindo que novos serviços sejam adicionados conforme o aumento do número de usuários (por exemplo, mais clínicas utilizando o sistema).

#### Caching
O uso de Redis para caching de dados melhora a performance do sistema, especialmente para dados que são frequentemente acessados

