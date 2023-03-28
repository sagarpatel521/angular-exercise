# Steelcoin Coding Challenge
Hint: Parts of this story are fictional. All similarities with actually companies is a coincidence 😉

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.5.

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.
- [Setup SSH](https://docs.gitlab.com/ee/user/ssh.html) to push and pull.
- [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push to this Git repository with your favorite IDE
- [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)

- `npm install`
- `ng serve`

## Description
This project is used for preparing applicants for coding interviews.
This project holds a spring boot project based on Java and an Angular project which should use Material Design and display data in a chart.

## Story
Frankstahl is a traditional and successful steel trading company.
Our customers can order steel products on [thesteel.com](https://thesteel.com)
With millions of turnover, this shop requires high availability, various K8s microservices and multiple deployment regions.

You, as our latest joiner, are challenged with an important task:
Our pricing team is currently discussing things with a million-dollar investor. And... they need your urgent help!

Frankstahl recently founded a spin-off named Steelcoin. This spin-off buys and sells specially forged steel sheets from Frankstahl.

Customers of Steelcoin can invest into the relaibility of steel. Under the hood Steelcoin, buys and sells steel plates and stores them in secret, highly secure warehouses.
You can learn more about Steelcoin at [steelcoin.com](https://steelcoin.com/).
The investor wants to see how the Price of Steelcoin moved and developed over the last months.

## Your Task

The pricing team needs data of the latest buy-prices of Steelcoin. We already have an API to load historic prices. But the pricing team needs a good looking chart.
```curl
curl 'https://pricing.steelcoin.com/data/steelcoin/legacy/volume-weighted-average' \
-X POST -H 'Accept: */*' -H 'Content-Type: application/json' --data-raw '{"from":"2023-02-25T09:00:32.437Z","to":"2023-03-27T09:00:32.437Z","resolution":"DAYS"}'
```
The query - as already provided by the example above - accepts `from` and `to` ISO-8601 date-times and a resolution parameter ("DAYS" or "MONTHS").
The returned data contains an array of (date, buyPrice) which you can use to create a diagram. The API does also return sell-prices which should be ignored please.

- Integrate Angular Material into this project. There are already some buttons in the code-base. Please replace them with their Angular-Material equivalents.
- Familiarize yourself with the given code-base. There is already an empty diagram component and empty interval-selector-component.
- Familiarize yourself with the routing file and create an auth-guard for the /chart route. You should only see the page if you are logged in (login.service.ts)
- Give the interval-selector buttons functionality: When clicking the button we would like to reload the desired data and display the data in the chart.
- Plus: Make the chart 'usable'. We trust you in showing that you build good UX and solid UIs. 
Consider selecting well-worded labels, consider pretty formatting / responsive css... Consider adding a skeleton loader while the data is loading / initializing.

## Hints
We left some HINTS in this code base. You can find them by searching for HINT/Hint.

## License
This project should only be used by Frankstahl applicants. Don't share!

## Too much?
If you run out of energy or time let us know.

We do not expect a perfect, run-able solution.
We want to see how you approach and solve certain problems and have a baseline for our "code-review". There we will speak about various technical topics and assess your skills.

At Frankstahl we often develop feature branches and practise regular pair-programming sessions as well as code-reviews for MergeRequests.
Your coding assessment aims to give you an impression for our task definitions.

It is similar to our day-to-day work. Based on rough requirements you start implementing and prototyping. Then we discuss the next steps and adapt in an agile manner 🚀