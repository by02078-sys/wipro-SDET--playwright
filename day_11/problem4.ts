// //Q4. Recursive Navigation Type
// Scenario: You are building a tree structure for a file system or a sidebar menu.
// Task: Define a type FolderNode that has a name: string. It should also have an optional files: string[] and an optional subFolders property, which is an array of FolderNode objects.

type FolderNode = {
    name: string;
    files?: string[];
    subFolders?: FolderNode[];
};


const rootFolder: FolderNode = {
    name: "Root",

    files: [
        "README.md",
        "package.json"
    ],

    subFolders: [
        {
            name: "src",

            files: [
                "index.ts",
                "app.ts"
            ],

            subFolders: [
                {
                    name: "components",

                    files: [
                        "Navbar.tsx",
                        "Footer.tsx"
                    ]
                },

                {
                    name: "pages",

                    files: [
                        "Home.tsx",
                        "About.tsx"
                    ]
                }
            ]
        },

        {
            name: "public",

            files: [
                "logo.png",
                "favicon.ico"
            ]
        }
    ]
};


console.log(rootFolder);