# Pikachu

Pikachu is web based tool for devlopers to make there development smart and fast.

## How to setup

### Prerequisite
Install Node  [https://nodejs.org/en/download/](https://nodejs.org/en/download/)

- clone/download this repo
- To clone

```bash
git clone https://github.com/complex1/pikachu.git
```

```bash
npm install
```

### To run in developer mode

```bash
npm run dev
```

### To run in build mode (For using this application)

```bash
npm run app
```

Applicaton will start at port 8050.

## Features

### Swagger Api Docs

This tool is an alternative of swagger ui. In world of microservice architecture we are using multiple swagger path have to bookmark there urls, in Pikachu swagger Api docs you can add multiple, microservice and can work on them simultaneously. it will give you same experience as swagger (even better).

#### Why it is better then swagger?

- Multiple servers can be added on same place.
- can be use to for health check of application.
- Better data visualization experience (Better json visualization).

#### How to Use Swagger Api Docs

- open [http://localhost:8050/swagger-api-doc](http://localhost:8050/swagger-api-doc)
- click on Add Server.
- fill your server detail.
  - **Server Name:** Name of your server (your choice)
  - **Proto:** Name of protocal http or https
  - **Endpoint:** your server Endpoint (Ex: 127.0.0.1:8000)
  - **Api Doc Path:** Path of your api doc url, usually it is 'microservice_base_path' + '/v2/api-docs'
- Test your connectivity by clicking on test.
- Save your server.
- Go to Api Docs Tab.
- Select your server form server dropdown.
- you swagger Api Docs is open **Enjoy Development**

#### Working on

- Autometed api testing.
- Api Load testing.

## Upcoming Features

- Json Formatter (**Need contributor**)
- Mock json server (**Need Node contributor**)
