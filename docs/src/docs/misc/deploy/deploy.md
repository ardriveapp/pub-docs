# Deploying your dApp

## Overview

This guide will outline the steps needed to deploy your dApp onto the Arweave blockchain using the ArDrive web app. It assumes you have already prepared your dApp to use hash routing and relative file paths, and built static files for any dApp in a language or framework that requires it (like React).

## Deploying

### Step 1: Log into ArDrive

Go to the [ArDrive web app](https://app.ardrive.io/#/sign-in) and log in using the method of your choosing. If you don't already have an account, you will need to follow the instructions to set one up.

### Step 2: Select or Create a Drive

Once logged in, navigate to the drive where you want your project to be hosted. If you haven't created a drive yet, or if you want a new one specifically for this project, click the big red "New" button at the top left and create a new drive. Remember, the drive needs to be set to public for your dApp to be accessible to others.

### Step 3: Upload your project

With your drive selected, click the big red "New" button again, but this time, select "Upload Folder". Navigate to your project's root directory, or the built directory if required, and select it. This will upload the entire directory, maintaining your project's file structure.

### Step 4: Confirm Upload

You'll be given a chance to review the upload and the associated cost. If everything looks right, click "Confirm". Remember, uploading to Arweave isnt free, but the cost is usually quite small and the benefits of having your dApp hosted on the permaweb are significant.

### Step 5: Create the Manifest

While ArDrive displays your uploaded files as a traditional file structure, with files and folders inside other folders, thats not how they actually exist on Arweave. The manifest acts as a map to all the files your dApp needs to function. After you confirm your upload, navigate into your newly created folder by double clicking on it. Click the big red "New" button again and select "Create manifest". You'll be prompted to name the manifest and choose where to save it. Be sure to save it inside the folder you just created.

### Step 6: Get the Data TX ID

Once the manifest is created, click on it to expand its details. On the bottom right, there's a line labeled "Data TX ID". This is the unique identifier for your uploaded dApp on Arweave. Copy this value.

### Step 7: View and Share your dApp

Your dApp is now available on the permaweb forever! Append the Data TX ID you just copied to the end of an Arweave gateway URL, like `https://arweave.net/` . It might take a few minutes for all of your files to finish propagating through the network, but once they do your dApp will be accessible to anyone, anywhere, at any time.


## Updating your dApp

Files uploaded to Arweave are permanent and immutable. They cannot be changed. However, the [Arweave File System (ArFS)](../../arfs/overview.md) protocol used (and created) by ArDrive lets you "replace" them with new versions while still being able to access the old ones. You can do this with entire dApps as well. The old files won't be displayed in the ArDrive web app unless you click on a file to view its history.

Once you have made changes to your dApp, and built the static directory for it, you can upload the entire folder again to the same location where you uploaded the original. Follow all the same steps listed above for uploading your dApp. You will need to create a new manifest to correctly point to the updated files. Give it the same name as the old manifest in order to "replace" it. Creating the new manifest will generate a new TX ID used to view the updated dApp.

The old version of the dApp will always be available to anyone who has the correct TX ID