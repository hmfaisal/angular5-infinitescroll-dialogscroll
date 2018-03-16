# Demo Link
This demo solution is running on [COLORMASS](https://hmfaisal.github.io/colormass/)

# Task 1

.. For this task I have populated in total 66 materials data in json. Everytime component get 20 data. If scroll reach at navigationend then component get next 20 data and so on.

.. **src/app/modules/materials/components/materials-all** has the component source code for this solution.

.. **src/app/shared/scroll/scroll.directive** has the directive source code for this solution. This directive is responsible to track scroll position and notify the component whether the scroll reach at navigationend. If scroll reach at end the service get next batch of data.

.. **src/app/services/pager.service** has the service source code for this solution. This service is responsible for pagination.

In Project **src/app/modules/applications/components/assessment** has the source code for this solution.

## Problems Faced

at root at first I put router outlet inside mat-sidenav-container to ease the sidenav menu. But at this process inside mat-sidenav-container listening windows scroll event did not fired up. Probably for material design I have to dig more cdk scrollable module. But for now I put router-outlet outside of mat-sidenav-container and some tweaking of sidemenu toggle to show collapsible sidemenu at small screen.

# Task 2+3

.. This task is kindaa tricky. I have to dig much and atlast I overcome this solution by changing some css rule of material dialog design 

.. **src/assets/styles/scss/core/_material.scss** has the css source code for this solution. 

.. **src/app/modules/materials/components/material-id** and **src/app/modules/materials/components/material-dialog** has the component source code for this solution. 

## Problems Faced

.. for changing some cdk overlay css the default on click outside dialog close did not work. I have to check click outside event manually.

.. To check click outside I built one directive for testing (not included with the source code) which can check click outside event and bind with one boolean variable which dtermine whether to close or open the dialog. But in this process at the time dialog view create one click outside event trigger automatically for the dom event bubbling. May be delaying to listen click event will solve the problem. 

.. Eventually I have used clickoutsidemodule from ngx

