module.exports = [
  {
    title: "Core-js",
    path: "/docs/core-sdk",
  },
  {
    title: "CLI",
    initialOpenGroupIndex: -1,
    collapsable: true,
    children: [
      {
        title: "Overview",
        path: "/docs/cli/intro",
      },
      {
        title: "Getting Started",
        path: "/docs/cli/getting-started",
      },
      {
        title: "Using the CLI",
        path: "/docs/cli/using-the-cli",
      },
      {
        title: "All Commands",
        path: "/docs/cli/all-commands",
      },
      {
        title: "Help",
        path: "/docs/cli/getting-help",
      },
    ],
  },
  {
    title: "ArFS",
    initialOpenGroupIndex: -1,
    children: [
      {
        title: "Overview",
        path: "/docs/arfs/overview",
      },
      {
        title: "Data Model",
        path: "/docs/arfs/data-model",
      },
      {
        title: "Entity Types",
        path: "/docs/arfs/entity-types",
      },
      {
        title: "Schema Diagrams",
        path: "/docs/arfs/schema-diagrams"
      },
      {
        title: "Content Types",
        path: "/docs/arfs/content-types",
      },
      {
        title: "Privacy",
        path: "/docs/arfs/privacy",
      },
      {
        title: "Usage",
        children: [
          {
            title: "Create",
            children: [
              {
                title: "Create Drive",
                path: "/docs/arfs/usage/create/create-drive",
              },
              {
                title: "Create Folder",
                path: "/docs/arfs/usage/create/create-folder",
              },
              {
                title: "Create File",
                path: "/docs/arfs/usage/create/create-file",
              },
            ],
          },
          {
            title: "Modify",
            children: [
              {
                title: "Modify Drives",
                path: "/docs/arfs/usage/change/drives",
              },
              {
                title: "Modify Folders",
                path: "/docs/arfs/usage/change/folders",
              },
              {
                title: "Modify Files",
                path: "/docs/arfs/usage/change/files",
              },
            ],
          },
          {
            title: "Read",
            path: "/docs/arfs/usage/read/read-operations",
          },
          {
            title: "Extending Schemas",
            path: "/docs/arfs/usage/extending-schemas"
          },
        ],
      },
    ],
  },
  {
    title: "Turbo",
    sidebarDepth: 2,
    children: [
      {
        title: "What is Turbo?",
        path: "/docs/turbo/what-is-turbo"
      },
      {
        title: "Payment API",
        path: "/docs/turbo/api/payment"
      },
      {
        title: "Upload API",
        path: "/docs/turbo/api/upload"
      },
      {
        title: "Turbo SDK",
        path: "/docs/turbo/turbo-sdk/",
      },
      {
        title: "Turbo SDK Release Notes",
        path: "/docs/turbo/turbo-sdk/release-notes"
      },
      {
        title: "Migrating From Irys",
        path: "/docs/turbo/migrating"
      },
    ]
  },
  {
    title: "Misc.",
    children: [
      {
        title: "Permasites",
        path: "/docs/misc/permasite"
      },
      {
        title: "Price Calculator",
        path: "/docs/misc/price-calculator",
      },
      {
        title: "How to Deploy a dApp",
        children: [
          {
            title: "Preparing your dApp",
            path: "/docs/misc/deploy/prepare"
          },
          {
            title: "Hash Routing",
            path: "/docs/misc/deploy/routing",
          },
          {
            title: "Relative File Paths",
            path: "/docs/misc/deploy/paths"
          },
          {
            title: "How to Deploy",
            path: "/docs/misc/deploy/deploy"
          },
          {
            title: "Examples",
            path: "/docs/misc/deploy/examples"
          }
        ]
      },
    ],
  },
];
