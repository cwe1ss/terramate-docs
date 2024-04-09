import{_ as n,c as i,o as t,a4 as s}from"./chunks/framework.Bl20_RFa.js";const k=JSON.parse('{"title":"tm_indent - Functions - Configuration Language","description":"The tm_indent function adds a number of spaces to the beginnings of all but the\\nfirst line of a given multi-line string.","frontmatter":{"title":"tm_indent - Functions - Configuration Language","description":"The tm_indent function adds a number of spaces to the beginnings of all but the\\nfirst line of a given multi-line string."},"headers":[],"relativePath":"cli/code-generation/functions/tm_indent.md","filePath":"cli/code-generation/functions/tm_indent.md"}'),e={name:"cli/code-generation/functions/tm_indent.md"},a=s(`<h1 id="tm-indent-function" tabindex="-1"><code>tm_indent</code> Function <a class="header-anchor" href="#tm-indent-function" aria-label="Permalink to &quot;\`tm_indent\` Function&quot;">​</a></h1><p><code>tm_indent</code> adds a given number of spaces to the beginnings of all but the first line in a given multi-line string.</p><div class="language-hcl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">hcl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tm_indent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(num_spaces, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><p>This function is useful for inserting a multi-line string into an already-indented context in another string:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_indent(2,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;  items: \${&quot;[\\n  foo,\\n  bar,\\n]\\n&quot;}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  items:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    foo,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    bar,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span></code></pre></div><p>The first line of the string is not indented so that, as above, it can be placed after an introduction sequence that has already begun the line.</p>`,7),l=[a];function o(h,d,p,c,r,u){return t(),i("div",null,l)}const m=n(e,[["render",o]]);export{k as __pageData,m as default};