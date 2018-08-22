# ARES

Each folder has a `/testweb` folder inside that should be used to make all changes before copying the updated pages to the production/parent folder.

## RemoteAuth

The `RemoteAuth` folder's pages are meant to be seen outside of Blackboard and should have your institutional branding visible on the top and bottom, since users are not being directed from Blackboard. The folder and its children folders are protected by your ISAPI filter, which means Atlas can't run them to help troubleshoot. To circumnavigate this restriction, we also have the `Ares/` folder (see below).

## Ares

The `Ares` directory is meant to mirror the RemoteAuth folder, just so Atlas can view these pages on the web and help with tests. No customer should ever use these pages. The goal is to maintain an identical set of pages in the `Ares` & `RemoteAuth` parent folders. If changes were needed in the direct-web-access `RemoteAuth/` production (ie parent) folder, Atlas staff would make changes in the `Ares/testweb` folder and then move them into the `RemoteAuth/` folder. If Princeton staff wanted to make those same changes, they would make them in the `RemoteAuth/testweb` folder and then move them to the `RemoteAuth/` folder. If you want to see these pages, you will need to create a test account inside the Ares staff client and have the Authentication Method set to "Ares." This overrides the default authentication option and the system will not look for Shib credentials. During the creation of this account, you will be prompted to create a password.

## AresAuth

The `AresAuth` folder contains the pages that are displayed inside Blackboard and would not have branding or a banner across the top, since that is already visible in the surrounding Blackboard frame. You can tell these apart from the RemoteAuth and Ares folders, because the navigation menu is across top, instead of the traditional, left-hand side. Users should never see the logon screens for these pages, because credentials should be passed by Blackboard and the fields where a user would enter credentials have been removed. You can get around this and see the parent folder's pages by using the logon page in the testweb folder and then removing `/testweb` from the URL. Like the Ares pages, these can only be accessed through the web if you are using a non-Shib account. You can use the same instructions/test account you made to view the Ares folder pages (see above).