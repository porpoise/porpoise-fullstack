import { construct, compiler } from "porpoise";

construct("page-index", {
    compiler,
    template: /*html*/`
        <h1 class="indicator">Bonjour!</h1>
        <h1>Welcome!</h1>
        <p-link href="/random-nonexistentlink.1235">404 Page</p-link>
    `,
    css: /*css*/`
        page-index {
            display: block;
            text-align: left;
        }

        page-index h1, page-index a {
            margin: 1rem;
        }

        page-index .indicator {
            font-size: 5em;
            text-decoration: underline;
            color: royalblue;
        }
    `
});
