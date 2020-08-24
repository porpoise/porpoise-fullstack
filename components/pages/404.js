import { construct, compiler } from "porpoise";

construct("page-404", {
    compiler,
    template: /*html*/`
        <h1 class="indicator">404</h1>
        <h1>It does seem like you hit a broken link.</h1>
        <p-link href="/">⟵ Go Home</p-link>
    `,
    css: /*css*/`
        page-404 {
            display: block;
            text-align: left;
        }

        page-404 h1, page-404 a {
            margin: 1rem;
        }

        page-404 .indicator {
            font-size: 5em;
            text-decoration: underline;
            color: royalblue;
        }
    `
});
