# cohort-3-dashboard

This application will be the landing page after the user has logged into the application. From this application it should link to the remaining four other applications via links through the proxy. The application is to be the main dashboard for all the data for the Robot Factory. There should be a page that lists all the different factory layouts and the ability to “edit” or “create new” layouts. These links should go to the Factory Layout Admin application. The second page will list all the different rule sets for a given simulation. This page should give the user the ability to “edit”, “create”, or “delete” a ruleset. Clicking any of those buttons should redirect the user through the proxy to the Rules Engine Admin. There should also be the ability to run/test the ruleset, which should redirect the user through the proxy to the Simulation Runner application. This application should own most of the database structure that will be used for simulations and rulesets.

## Technologies
- Java / SpringBoot / Rest Assured / Swagger
- Angular v15 / Typescript / Jasmine
- Docker / Jenkins
- Postman

## Team 2 | BReakingCOde
- Frankie Renwick
- Nicholas Alexander
- Nicholas Jansen
- Tyesha White
- Demetrios Dubis


## Requirements:
- 1 Angular / TypeScript application
  - 1 Page for viewing all factory layout.
  - 1 Page for viewing all Rulesets for a factory layout.
- 1 Java / SpringBoot API
  - 1 GET endpoint for retrieving the list of factory layout.
  - 1 GET endpoint for retrieving the list of rulesets.
  - 1 DELETE endpoint for deleting a ruleset. 
  - 1 DELETE endpoint for deleting a factor layout.



## Setup
- Open Git bash in root of project
- Run command: `npm install`
- Run command: `./mvnw generate-resources`

## Running the application
- Run command `mvn clean install`
- You can now go to your browser and type `http://localhost:9030`

## docker

### Building a Docker Image

Run the following as a build configuration or a command in the terminal.

```bash
mvn spring-boot:build-image
```

### Running the Docker Image

1. Open a terminal and run the following command to start create and start the docker container from the image.

```bash
docker run \
    -p 9030:9030 \
    --rm \
    -d \
    --name=dashboard \
    --env rules_api_url=http://host.docker.internal:9004 \
    --env layouts_api_url=http://host.docker.internal:9003 \
    cohort-3-dashboard:latest
```

### Confirm it's running
```bash
docker ps
```

It should look something like this.

```bash
CONTAINER ID   IMAGE                                COMMAND              CREATED         STATUS         PORTS                    NAMES
78264899f2d0   cohort-3-rules-engine-admin:latest   "/cnb/process/web"   3 minutes ago   Up 3 minutes   0.0.0.0:9004->9004/tcp   rules-engine-admin
```

Check the logs to make sure the application is correctly running. You will need the container ID from the `docker ps` command to run this.

```bash
docker logs 78264899f2d0
```

### To Stop the Docker container

Run

```bash
docker ps
```

Grab the container ID.

```bash
CONTAINER ID   IMAGE                                COMMAND              CREATED         STATUS         PORTS                    NAMES
78264899f2d0   cohort-3-rules-engine-admin:latest   "/cnb/process/web"   3 minutes ago   Up 3 minutes   0.0.0.0:9004->9004/tcp   rules-engine-admin
```

Use the container ID with the stop command.

```bash
docker stop 78264899f2d0
```