# File Paths

## Overview

File paths are needed to locate resources in your file system or on a server. There are two types of file paths: absolute and relative. Because there is no way to know exactly from where a user will access a dApp deployed on Arweave, all file paths used need to be relative.

## Absolute Vs. Relative

An absolute path is the full URL to a resource, starting from the root. For example, `http://www.example.com/images/myImage.jpg` is an absolute path. It points directly to the image no matter where the code referencing it is located.

A relative path is a path relative to the current location. If you have an HTML file in the root directory (folder) and an image in a subdirectory called 'images', you could use the relative path `images/myImage.jpg` to reference the image.

## Why Relative Paths

When deploying dApps on Arweave, relative paths are essential because:

- **Domain agnostic**: Arweave permaweb dApps can be accessed from various gateways, not just one domain. Absolute paths tied to a specific domain will not work.
- **Decentralized**: Arweave is a decentralized network. There is no root directory or server configuration to reference. All file paths must be relative to the file trying to find an asset, or your dApp wont be able to find it.

## Identifying Relative and Absolute Paths

The key difference between relative and absolute file paths is where they start from:

- **Absolute Paths** start with a slash (/) or a full URL (including the protocol, such as `http://`). For example, `/images/myImage.jpg` or `http://www.example.com/images/myImage.jpg` are absolute paths.
- **Relative Paths** do not start with a slash. They are relative to the current directory. For example, `images/myImage.jpg` or `../myImage.jpg` are relative paths.

## Navigating with Relative Paths

You can navigate around the files of your project with relative paths by following these principles: 

- **Same Directory**: If the file you're trying to reference is in the same directory as the current file, you can just use the filename. For example, if `index.html` and `about.html` are in the same directory, you can link to `about.html` just using `about.html`.

- **Subdirectory**: If the file is in a subdirectory, you can use the directory name followed by the filename. For example, `images/myImage.jpg` will point to the `myImage.jpg` file in the `images` subdirectory.

- **Parent Directory**: If the file is in a parent directory, you can use `../` to go up one level. For example, `../index.html` will point to `index.html` in the parent directory. You can use multiple `../` to go up multiple levels, like `../../index.html`.