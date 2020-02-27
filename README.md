# udagram-project2
Refractor Udagram app to Microservices. This is the submission of Project - Monolith to Microservices at Scale. Follwing are the links for Git Repo and requested files. 

## Setup of the Project
## Running on the local docker environment

* After checking out from the github code repo.
* CD to project folder. CD to udacity-c3-deployment/docker
* Build the images by running ==> docker-compose -f docker-compose-build.yaml build --parallel
* To start the system, run a container for each of our  services run ==> docker-compose up
* To stop the containers gracefully==> docker-compose stop
* To remove (and stop) the container==> docker-compose down

## Running on the k8s environment
* After images are build with the docker-compose commend , CD to udacity-c3-deployment/k8s
* Run kubectly apply to configure for pods
 * kubectl apply -f backend-feed-deployment.yaml 
 * kubectl apply -f backend-user-deployment.yaml 
 * kubectl apply -f frontend-deployment.yaml 
 * kubectl apply -f reverseproxy-deployment.yaml
* To see the list and status of all the deployed pods==> kubectl get pod -o wide



## Screenshot of TravisCI which shows the successful build and deploy steps
* Successful Build Screen of Travis CI can be found in [Git Repo](/TravisCI.png) - https://github.com/winphyo/udagram-project2/blob/master/TravisCI.png

* [Travis CI link](https://travis-ci.com/winphyo/udagram-project2)- https://travis-ci.com/winphyo/udagram-project2

## The public GitHub repo and the docker hub images
* [GitHub repo](https://github.com/winphyo/udagram-project2) - https://github.com/winphyo/udagram-project2
* [Docker Hub](https://hub.docker.com/u/wpthein) - https://hub.docker.com/u/wpthein

## Screenshot of kubectl get pod which shows all running containers
* Kubectl Dashboard Screen of Pods [Git Repo](/MiniKube%20Pod%20Status.png) - https://github.com/winphyo/udagram-project2/blob/master/MiniKube%20Pod%20Status.png

## Screenshot of the application
* Screen of Running Application [Git Repo](/Udagram.png) - https://github.com/winphyo/udagram-project2/blob/master/Udagram.png
