# cohort-3-dashboard

## Team 2 | BReakingCOde
- Frankie Renwick
- Nicholas Alexander
- Nicholas Jansen
- Tyesha White
- Demetrios Dubis

## Setup
- Open Git bash in root of project
- Run command: `npm install`
- Run command: `./mvnw generate-resources`

## Running the application
- Run command: 

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