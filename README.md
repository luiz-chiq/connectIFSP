# AutoConnect WiFi IFSP

## Visão Geral

O ConnectIFSP foi criado para facilitar e agilizar a conexão à rede do Instituto, ele é um programa que facilita a conectividade à internet usando scripts Bash e Selenium. Esta ferramenta foi projetada para funcionar na rede IFSP e requer a instalação do Node.js e npm para uma funcionalidade adequada.

## Instalação
Node.js e npm: Certifique-se de que o [Node.js e npm](https://nodejs.org/) estão instalados em seu sistema.

1. Execute o script de configuração para instalar as dependências necessárias. Use o seguinte comando ou clique duas vezes no mesmo aquivo:

```bash
./setup.sh
```
2. Configuração: Abra o arquivo connect.js localizado na pasta connect. Atualize os campos username e password com suas credenciais do IFSP.

## Uso
Execute o seguinte comando para se conectar à internet quando estiver no IFSP:

```bash
./connect.sh
```
Crie um Atalho na Área de Trabalho (Opcional):

Para maior comodidade, você pode criar um atalho na área de trabalho para o script connect.sh.
Personalize o nome e o ícone do atalho de acordo com suas preferências.
Clicando no atalho a conexão será feita da mesma maneira.


## Solução de Problemas
Se encontrar problemas durante a instalação ou uso, considere o seguinte:

Certifique-se de que o Node.js e o npm estão instalados corretamente.
Verifique a precisão das suas credenciais do IFSP no arquivo connect.js.
Verifique se a conexão de rede está estável.

## Contribuidores
Luiz Antonio Chiquetano
