# How to Save a Website Permanently

## Overview

ArDrive offers the ability to save working copies of static websites permanently on [Arweave](https://www.arweave.org/).  This means that websites made on WordPress, Wix, SquareSpace and other CMS platforms can now be archived for hundreds of years without the need to pay for ongoing data storage.

Resources like the [Wayback Machine](https://archive.org/web/) are useful to research the past life of old websites.  But the Wayback Machine’s archives are not comprehensive and often only capture partial copies of historic sites.  By leveraging the utility of Arweave manifests, ArDrive offers the ability to save full working copies of websites in an unchanging, permanent state without needing to code.

The process to make a ‘permasite’ takes 10 steps which are outlined below.  Advanced users can accomplish similar results by using manifests within the [ArDrive CLI](../cli/intro.md).

## 1. Download Static Site Files

ArDrive preserves static copies of existing websites. It will not enable backend interaction with your website’s CMS, allow you to make further changes to the content of your site, or support functionality like contact forms and eCommerce. But it will preserve full working copies of the static content of existing websites. 

To generate your static site files, we recommend [Offline Pages Pro](https://apps.apple.com/us/app/offline-pages-pro/id391462107) (Mac users only), which creates files that work well with this process. After saving your site with Offline Pages Pro, go to File > Export > Local Website to download the local static files.  

Alternatively, the plugin [Simply Static](https://wordpress.org/plugins/simply-static/) generates static files for WordPress websites. Simply Static can fail to properly associate CSS and JS files with your static site, but some users have had success with this free WordPress plugin.

Other tools, like [Wget](https://www.gnu.org/software/wget/), help capture static versions of websites. While Wget isn't a traditional static site generator, it's great for downloading whole websites for offline use. It offers a simple way to save your site's current look and feel as static files at no cost.

## 2. Create an Account on ArDrive

Account creation is free as are uploads of files up to 500 KB. Remember that ArDrive has self-sovereign data; no corporation has your password.  Make sure you don’t lose your password, keyfile and seed phrase - they can’t be recovered later.

## 3. Create a New Public Drive

Click on the red +New button and create a Drive.  Name your Drive and set it as “Public”.  Currently, permanent websites can only be stored publicly.

## 4. Top Up

Buy ArDrive Turbo credits with a credit card (or ensure your wallet has AR, the native token of the Arweave ecosystem).  This will enable you to purchase storage on the Arweave blockchain.  Most websites will cost less than $1 to save permanently. [See current prices](https://ardrive.io/pricing/)

## 5. Upload Static Files

Upload the static files to your new Public Drive. Offline Pages Pro will generate an index.html file that is *separate* from a large folder of assets (images, css, fonts, etc).  Simply Static will add the index.html file to the rest of your assets.  Either way, upload all the files you receive from your static site generator to your new Public Drive.

## 6. Wait

Permanence takes patience.  Once static files have been uploaded, they need to be sent to the Arweave network before being assembled together. This process can take as little as 5 seconds (when using Turbo credits) or up to 30 minutes or more (when using AR at a time of high network use). Make sure to keep your browser tab open and don’t refresh your browser while you wait.

Instead, hit the refresh icon in the top right of ArDrive to check on the status of your files. You’ll know your file is ready when the light on the icon turns from yellow to green.  (Pro Tip:  some files uploaded with Turbo are ready before they are green.)  

## 7. Create a Manifest

Manifests are special `.json` files that instruct Arweave Gateways to map file data associated with specific, unique transaction IDs to customized, hosted paths relative to that of the manifest file itself.”  In other words, they are the secret sauce that brings a permasite together.  

Click on the red +New button and select Advanced > New Manifest.  Select the location for your manifest, ensuring it is in the same placeas your index.html file.  

Give your Manifest a name like “permasite”, it will be the main way you access your permanent website from ArDrive.

## 8. Wait Again

Now the manifest needs to be sent to the Arweave network. Again, this process can take just a few seconds or up to 30 minutes or more.  

After a while, refresh your Drive by clicking on the icon in the upper right – and see if your manifest icon turns from yellow to green.

## 9. Preview the Manifest

Got a green light?  You’re ready to go.  Click on your manifest file and you’ll see a panel of options appear on the right side of your screen.  Click on the Preview icon in the top right and it will open a new tab with your permasite.

If a website appears with a long, random-looking URL in the browser bar, you have a permasite. 

Try clicking around and make sure all your pages are preserved.  If they aren’t it could be a limitation of your static site generator or an issue with the manifest (see Notes below).

## 10. Add a Redirect or Domain Masking

You’ll notice that your permasite has a long, random-looking URL generated by Arweave. These long URLs are designed to remain for decades, but they also are not very memorable.  

Try redirecting another domain to your permasite, or mask your permasite domain with a domain of your choosing.  You can also acquire an [ArNS name](https://ar.io/docs/arns/) that enables you to create a custom, permanent name for your permasite. 

## Notes

    • There’s no delete button with Arweave. Once your permasite is up, it’s up forever. Make sure your content is something you want future humanity to have.

    • Only static sites can become permasites through the ArDrive web app.  Advanced functionality is available for developers who use the [ArDrive CLI](https://app.ardrive.io).

    • Links to content on external websites will not be permanent (unless they are also permasites) and if that external content becomes inaccessible or moves, you will not be able to update the links within your permasite.

    • Non-English characters in the URLs of your permasite can be problematic for ArDrive manifests, but non-English characters should work well on the permasite itself.

## Applications

Permasites can be used to archive web content before it disappears from the internet.  Or they can be used to create working copies of websites before it a particular site is replaced by a new version.  

Manifests can also be used to make reliable perma-backups.  Many web hosts offer good daily backups and some offer reliable offsite backups as well.  Permasites enable you to have decentralized, highly-redundant backups of your website’s content for a very low cost.