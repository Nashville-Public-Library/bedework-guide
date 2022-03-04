---
sidebar_position: 3
---

# Users and Passwords

Adding users to Events and Steven is a two step process. The admin client doesn't know anything about what you're doing in the jmx-console.

It's the difference between authentication (which is whether you can log in or not) and authorization (whether you allowed to administer the system). The jmx-console is handling authentication. Adding users to the superuser list or adding them to an admin group handles authorization.

So, getting users up and going is a two step process. Add them in the jmx-console and then visit the admin client and add them to an admin group.

Deleting users cleanly is also a two step process. If you succeed in removing the user in the jmx-console, then the user won't be able to log in at all. So, you've removed a user via the jmx-console, they'll be shut out of the system. To keep things orderly, remember to remove the user from Bedework groups as well.

## Access jmx-console:
1.	The jmx console is now located at: https://events.library.nashville.org/hawtio/login
1.	Log in with:
1.	Click on `JMX` on menu bar
1.	To manage users, click `org.bedework.selfreg`, then choose config
1.	Click Operations in the tabs at the top
1.	Functions:
    1.	To list a user, click on `displayUser`. Type in account name in Account box. Click `Execute`.
    1. To change password, click on `setUserPassword`. Enter info. Click `Execute`.

## User Creation / Management Checklist

Use this checklist when adding/editing/removing users from the JMX Console, Events, and Steven:
https://docs.google.com/spreadsheets/d/15lZvfREpHoSwTy_n7Ix8KBJccKTY_E5mvqFNXrpHHSQ/edit?usp=sharing

## JMX Console - we’ll use 4 functions:
1.	displayUser (see if someone is in there)
1.	setUserPassword (reset password)
1.	addUser
1.	removeUser

## Create New User in JMX Console
1.	Log in to Events JMX and Steven JMX (anything you do will affect same ldap server and will affect both Steven and Events)
    1.	(https://events.library.nashville.org/hawtio/login)
    1.	(https://steven.library.nashville.org/hawtio/login)
1.	Click on `org.bedework.selfreg` (link is 4th from bottom in left menu).
1.	Click link on new page (only option in the page).
1.	Click `addUser` and fill out 5 fields:
    1. Account (username)
    1. First Name
    1. Last Name
    1. Email 1
    1. Password

## Grant User Permissions
Now that user is added, you have to give user permissions (in both Events and Steven):
1.	Go to events.library.nashville.org/caladmin
1.	Select correct calSuite.
1.	Go to Users tab.
1.	Click Manage Admin Groups.
1.	Click setting to “show members” at the top.
1.	Select “membership” next to the correct group.
1.	In “add member” box, you can add users and groups. Make sure box is selected for “user” > type username > and click Add.
1.	Repeat for steven.library.nashville.org/caladmin

## Designate Users as Approvers
1.	Go to events.library.nashville.org/caladmin
1.	Go to Users tab.
1.	Click Manage Admin Roles.
1.	Click “edit” next to anyone we want to make an approver.
1.	Select checkbox next to Approver.
1.	Select Done.
1.	Approvers MUST be in the group for which they’ll be approving events. Don’t forget to add Approvers to groups.

## Change Passwords
1.	Log in to Events JMX and Steven JMX (anything you do will affect same ldap server and will affect both Steven and Events)
    1. [https://events.library.nashville.org/hawtio/login](https://events.library.nashville.org/hawtio/login)
    1. [https://steven.library.nashville.org/hawtio/login](https://steven.library.nashville.org/hawtio/login)
1.	Log in to JMX Console - username and password in LastPass.
1.	Click on `org.bedework.selfreg` (link is 4th from bottom in left menu).
1.	Click link on new page (only option in the page).
1.	Click `setUserPassword` and fill out the field.
1.	Click Invoke.
