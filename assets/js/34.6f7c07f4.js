(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{314:function(e,t,a){"use strict";a.r(t);var r=a(10),s=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"how-to-save-a-website-permanently"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-save-a-website-permanently"}},[e._v("#")]),e._v(" How to Save a Website Permanently")]),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("ArDrive offers the ability to save working copies of static websites permanently on "),t("a",{attrs:{href:"https://www.arweave.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Arweave"),t("OutboundLink")],1),e._v(".  This means that websites made on WordPress, Wix, SquareSpace and other CMS platforms can now be archived for hundreds of years without the need to pay for ongoing data storage.")]),e._v(" "),t("p",[e._v("Resources like the "),t("a",{attrs:{href:"https://archive.org/web/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wayback Machine"),t("OutboundLink")],1),e._v(" are useful to research the past life of old websites.  But the Wayback Machine’s archives are not comprehensive and often only capture partial copies of historic sites.  By leveraging the utility of Arweave manifests, ArDrive offers the ability to save full working copies of websites in an unchanging, permanent state without needing to code.")]),e._v(" "),t("p",[e._v("The process to make a ‘permasite’ takes 10 steps which are outlined below.  Advanced users can accomplish similar results by using manifests within the "),t("RouterLink",{attrs:{to:"/docs/cli/intro.html"}},[e._v("ArDrive CLI")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"_1-download-static-site-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-download-static-site-files"}},[e._v("#")]),e._v(" 1. Download Static Site Files")]),e._v(" "),t("p",[e._v("ArDrive preserves static copies of existing websites. It will not enable backend interaction with your website’s CMS, allow you to make further changes to the content of your site, or support functionality like contact forms and eCommerce. But it will preserve full working copies of the static content of existing websites.")]),e._v(" "),t("p",[e._v("To generate your static site files, we recommend "),t("a",{attrs:{href:"https://apps.apple.com/us/app/offline-pages-pro/id391462107",target:"_blank",rel:"noopener noreferrer"}},[e._v("Offline Pages Pro"),t("OutboundLink")],1),e._v(" (Mac users only), which creates files that work well with this process. After saving your site with Offline Pages Pro, go to File > Export > Local Website to download the local static files.")]),e._v(" "),t("p",[e._v("Alternatively, the plugin "),t("a",{attrs:{href:"https://wordpress.org/plugins/simply-static/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Simply Static"),t("OutboundLink")],1),e._v(" generates static files for WordPress websites. Simply Static can fail to properly associate CSS and JS files with your static site, but some users have had success with this free WordPress plugin.")]),e._v(" "),t("p",[e._v("Other tools, like "),t("a",{attrs:{href:"https://www.gnu.org/software/wget/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Wget"),t("OutboundLink")],1),e._v(", help capture static versions of websites. While Wget isn't a traditional static site generator, it's great for downloading whole websites for offline use. It offers a simple way to save your site's current look and feel as static files at no cost.")]),e._v(" "),t("h2",{attrs:{id:"_2-create-an-account-on-ardrive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-create-an-account-on-ardrive"}},[e._v("#")]),e._v(" 2. Create an Account on ArDrive")]),e._v(" "),t("p",[e._v("Account creation is free as are uploads of files up to 500 KB. Remember that ArDrive has self-sovereign data; no corporation has your password.  Make sure you don’t lose your password, keyfile and seed phrase - they can’t be recovered later.")]),e._v(" "),t("h2",{attrs:{id:"_3-create-a-new-public-drive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-create-a-new-public-drive"}},[e._v("#")]),e._v(" 3. Create a New Public Drive")]),e._v(" "),t("p",[e._v("Click on the red +New button and create a Drive.  Name your Drive and set it as “Public”.  Currently, permanent websites can only be stored publicly.")]),e._v(" "),t("h2",{attrs:{id:"_4-top-up"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-top-up"}},[e._v("#")]),e._v(" 4. Top Up")]),e._v(" "),t("p",[e._v("Buy ArDrive Turbo credits with a credit card (or ensure your wallet has AR, the native token of the Arweave ecosystem).  This will enable you to purchase storage on the Arweave blockchain.  Most websites will cost less than $1 to save permanently. "),t("a",{attrs:{href:"https://ardrive.io/pricing/",target:"_blank",rel:"noopener noreferrer"}},[e._v("See current prices"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"_5-upload-static-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-upload-static-files"}},[e._v("#")]),e._v(" 5. Upload Static Files")]),e._v(" "),t("p",[e._v("Upload the static files to your new Public Drive. Offline Pages Pro will generate an index.html file that is "),t("em",[e._v("separate")]),e._v(" from a large folder of assets (images, css, fonts, etc).  Simply Static will add the index.html file to the rest of your assets.  Either way, upload all the files you receive from your static site generator to your new Public Drive.")]),e._v(" "),t("h2",{attrs:{id:"_6-wait"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-wait"}},[e._v("#")]),e._v(" 6. Wait")]),e._v(" "),t("p",[e._v("Permanence takes patience.  Once static files have been uploaded, they need to be sent to the Arweave network before being assembled together. This process can take as little as 5 seconds (when using Turbo credits) or up to 30 minutes or more (when using AR at a time of high network use). Make sure to keep your browser tab open and don’t refresh your browser while you wait.")]),e._v(" "),t("p",[e._v("Instead, hit the refresh icon in the top right of ArDrive to check on the status of your files. You’ll know your file is ready when the light on the icon turns from yellow to green.  (Pro Tip:  some files uploaded with Turbo are ready before they are green.)")]),e._v(" "),t("h2",{attrs:{id:"_7-create-a-manifest"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-create-a-manifest"}},[e._v("#")]),e._v(" 7. Create a Manifest")]),e._v(" "),t("p",[e._v("Manifests are special "),t("code",[e._v(".json")]),e._v(" files that instruct Arweave Gateways to map file data associated with specific, unique transaction IDs to customized, hosted paths relative to that of the manifest file itself.”  In other words, they are the secret sauce that brings a permasite together.")]),e._v(" "),t("p",[e._v("Click on the red +New button and select Advanced > New Manifest.  Select the location for your manifest, ensuring it is in the same placeas your index.html file.")]),e._v(" "),t("p",[e._v("Give your Manifest a name like “permasite”, it will be the main way you access your permanent website from ArDrive.")]),e._v(" "),t("h2",{attrs:{id:"_8-wait-again"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-wait-again"}},[e._v("#")]),e._v(" 8. Wait Again")]),e._v(" "),t("p",[e._v("Now the manifest needs to be sent to the Arweave network. Again, this process can take just a few seconds or up to 30 minutes or more.")]),e._v(" "),t("p",[e._v("After a while, refresh your Drive by clicking on the icon in the upper right – and see if your manifest icon turns from yellow to green.")]),e._v(" "),t("h2",{attrs:{id:"_9-preview-the-manifest"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-preview-the-manifest"}},[e._v("#")]),e._v(" 9. Preview the Manifest")]),e._v(" "),t("p",[e._v("Got a green light?  You’re ready to go.  Click on your manifest file and you’ll see a panel of options appear on the right side of your screen.  Click on the Preview icon in the top right and it will open a new tab with your permasite.")]),e._v(" "),t("p",[e._v("If a website appears with a long, random-looking URL in the browser bar, you have a permasite.")]),e._v(" "),t("p",[e._v("Try clicking around and make sure all your pages are preserved.  If they aren’t it could be a limitation of your static site generator or an issue with the manifest (see Notes below).")]),e._v(" "),t("h2",{attrs:{id:"_10-add-a-redirect-or-domain-masking"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-add-a-redirect-or-domain-masking"}},[e._v("#")]),e._v(" 10. Add a Redirect or Domain Masking")]),e._v(" "),t("p",[e._v("You’ll notice that your permasite has a long, random-looking URL generated by Arweave. These long URLs are designed to remain for decades, but they also are not very memorable.")]),e._v(" "),t("p",[e._v("Try redirecting another domain to your permasite, or mask your permasite domain with a domain of your choosing.  You can also acquire an "),t("a",{attrs:{href:"https://ar.io/docs/arns/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ArNS name"),t("OutboundLink")],1),e._v(" that enables you to create a custom, permanent name for your permasite.")]),e._v(" "),t("h2",{attrs:{id:"notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("• There’s no delete button with Arweave. Once your permasite is up, it’s up forever. Make sure your content is something you want future humanity to have.\n\n• Only static sites can become permasites through the ArDrive web app.  Advanced functionality is available for developers who use the [ArDrive CLI](https://app.ardrive.io).\n\n• Links to content on external websites will not be permanent (unless they are also permasites) and if that external content becomes inaccessible or moves, you will not be able to update the links within your permasite.\n\n• Non-English characters in the URLs of your permasite can be problematic for ArDrive manifests, but non-English characters should work well on the permasite itself.\n")])])]),t("h2",{attrs:{id:"applications"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#applications"}},[e._v("#")]),e._v(" Applications")]),e._v(" "),t("p",[e._v("Permasites can be used to archive web content before it disappears from the internet.  Or they can be used to create working copies of websites before it a particular site is replaced by a new version.")]),e._v(" "),t("p",[e._v("Manifests can also be used to make reliable perma-backups.  Many web hosts offer good daily backups and some offer reliable offsite backups as well.  Permasites enable you to have decentralized, highly-redundant backups of your website’s content for a very low cost.")])])}),[],!1,null,null,null);t.default=s.exports}}]);