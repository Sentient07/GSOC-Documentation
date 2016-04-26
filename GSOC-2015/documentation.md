This contains the timeline of the tasks that i've accomplished as a Google Summer of Code student

First week, 
-> I worked on writing tests (missing ones) to the existing develop branch's feature that was added last summer. The test that i wrote was to download and save the plot generated using selenium.
Link to the PR : https://github.com/osuosl/pgd/pull/22

Meanwhile, i was also working on moving few elements into the Django's form so that it would be convinent for writing tests for the feature that the button is meant to implement. Later, me and my mentor decided to use Django's "Test Client" testing framework and a little bit of manipulation.

Also, for getting myself introduced to testdriven development using Django's "Test Client" testing framework, my mentor created an app that just had the functionality which I was intending to test in my first phase of work.
Link to the repo : https://github.com/mathuin/svgpng/

Second Phase,
Building occupancy awareness into PGD and it's. I underestimated this phase by allocating 1 week to complete. Also, i forgot an issue that was a part of this hierarchy, which i'm working on currently. 
Link to the issue(and it's hierarchy) : https://code.osuosl.org/issues/17547
Link to the PR : https://github.com/osuosl/pgd/pull/32

Third Phase,
I created a profile page for users, that has basic info about the users and the searches that the users have saved. Also, i fixed the error that the current codebase had with django-registration.
Link to PR : https://github.com/osuosl/pgd/pull/38

Fourth Phase,
Created a search tab for searching the users.
Link to PR : https://github.com/osuosl/pgd/pull/39
			 https://github.com/osuosl/pgd/pull/40

Fifth Phase.
I built a search tab for searching among the "saved searches" that a user has saved.
Link to PR : https://github.com/osuosl/pgd/pull/42

Sixth Phase.
I worked on adding a filter to filter out the proteins by deposition date.
Link to PR : https://github.com/osuosl/pgd/pull/43

Seventh Phase.
I upgraded the existing code base to Django version 1.8. In the process, I stumbled upon an issue that arised due to the change of Django's existing Aggregate API. It took me almost 4-5 days to figure out a way, but in the end of the day, it was a hack that rescued me.
Link to PR : https://github.com/osuosl/pgd/pull/45

Additional Phase,
I've been working on the missed out(even in my proposal) issue in the occupancy hierarchy.
Link to the issue : https://code.osuosl.org/issues/17559
