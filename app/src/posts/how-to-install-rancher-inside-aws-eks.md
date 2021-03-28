---
tags:
- aws
- rancher
- eks
- cluster
- kubernetes
title: How to install Rancher inside AWS EKS
description: Learn how to install Rancher inside AWS EKS while getting important concepts
  about Kubernetes.
date: 2021-03-21T03:00:00Z
cover: "/posts/amazon-containers-01.png"
published: false

---
Rancher is an abstraction made on top of Kubernetes in order to help dealing with a lot of clusters in different services and regions with an useful dashboard.

By using it, you are able to deploy .yml files, deployments, custom apps, default apps, ssl certificates and so on in an easier way (and even other clusters on another services like AWS, Google Cloud, etc).

The "Rancher" name comes from a common joke of Devops: "Cattle vs Pets". Usually the Devops people want to treat their apps as cattle instead of pets, since when you have a pet, you need to take care of it and with a cattle you just need to replace it when needed (no emotional stuffs here).

One of the ways of installing Rancher is by creating a node master and installing on it, but we consider it to be bad since if you lose the master, you lose all the cluster.

Being minded about that, there is a better way to that, that is by installing Rancher inside the own cluster, it means that Rancher node master will be available inside every VM of the cluster. So today, we will learn about how to install it inside a running AWS EKS cluster.

### Creating the IAM Roles

Since our cluster and its resources need permission to do some actions inside AWS, we must create some roles on AWS IAM in order to be able to handle it.

At first, we need to go to AWS IAM by selecting that service inside AWS (you can use the search input on top of console page).

![IAM Service search on AWS Console](/posts/iam-aws-console-search.png "IAM Service search on AWS Console")

After selecting the service above, you need to go into the **roles** item of the left side menu and so, you will need to click on the **Create Role** button.