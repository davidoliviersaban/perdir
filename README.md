# Perdir

This project is about providing a solution for school administration to more simply handle classes and courses creation.

Creating homogene groups and sharing load between courses is an important task for these people.

# Code

This **ClassesGroup** represents a list of pupils that are linked together the whole year.
They may be split into **ClassesBucket** to participate to different class courses. Most of the time, class buckets are composed of language courses such as English and foreign languages.

**ClassesBucket** are groups of pupils that will participate to the same courses together.
They represent a vertical split of the class.
Horizontal splits aka "barettes" are made to ensure that pupils are attending a given course altogether.



# Default configuration provided by Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
