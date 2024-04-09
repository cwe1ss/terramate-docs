import{_ as e,c as a,o as t,a4 as r}from"./chunks/framework.Bl20_RFa.js";const u=JSON.parse('{"title":"Variables","description":"Learn how to define and use variables such as metadata, globals or temporary and context-based lets variables.","frontmatter":{"title":"Variables","description":"Learn how to define and use variables such as metadata, globals or temporary and context-based lets variables."},"headers":[],"relativePath":"cli/code-generation/variables/index.md","filePath":"cli/code-generation/variables/index.md"}'),n={name:"cli/code-generation/variables/index.md"},o=r('<h1 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-label="Permalink to &quot;Variables&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p>Terramate supports different Variables and Metadata to help manage user- and Terramate-defined data.</p><h2 id="variable-namespaces" tabindex="-1">Variable Namespaces <a class="header-anchor" href="#variable-namespaces" aria-label="Permalink to &quot;Variable Namespaces&quot;">​</a></h2><p>Terramate supports multiple variable namespaces. They can be available at build-time (when running <a href="./../">code generation</a>) or run-time (when orchestrating stacks and <a href="./../../orchestration/run-commands-in-stacks">running commands</a>).</p><ul><li>The <code>terramate</code> namespace represents <a href="./metadata">Terramate Metadata</a> such as stack context information or repository context information.</li><li>The <code>global</code> namespace represents <a href="./globals">Global Variables</a> defined with the <code>globals</code> block.</li><li>The <code>let</code> namespace represents context-based <a href="./lets">Lets Variables</a> that can be used to compute local blocks available in the current code generation block only to not pollute the <code>global</code> namespace with temporary or intermediate variables.</li><li>The <code>env</code> namespace is only available at run-time and represents the commands <a href="./../../orchestration/runtime-configuration">environment variables</a> exported by a shell.</li></ul><p>The following sections explain the different types of Variables in Terramate.</p>',7),i=[o];function s(l,c,d,h,m,b){return t(),a("div",null,i)}const f=e(n,[["render",s]]);export{u as __pageData,f as default};
