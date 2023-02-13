# Drupal 9 App using Lando

## Requirements

- [Git](https://git-scm.com/downloads)
- [Composer](https://getcomposer.org/download/)
- [Docker](https://docs.docker.com/engine/installation/)
- [Lando](https://lando.dev/)

## 1. Set up Lando
1. Clone the Git repository to your local machine (`git clone ... `).
2. Run `composer install --no-interaction -vvv`
3. Initialize Lando environment (`lando start`)
4. Install Drupal site (`lando drush site:install`)
5. List information about this app (`lando info`)
6. Visit https://o2e-fe-test.lndo.site/ to access the app.

To login, run "lando drush uli" that generates a one-time login URL.
## 2. Set up the custom theme
Go to web/themes/custom/o2e and install packages
```shell
npm install
```

## 3. Visit the static HTML file if lando failed
There is also a static index html file that has:
- Only the HTML that is relevant to this project without any Drupal specific elements and files.
- The main.min.js file in the dist folder
- The style.min.css in the dist folder

Go to web/themes/custom/o2e/static/index.html and open the html file in a browser.
