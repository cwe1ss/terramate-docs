import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.Bl20_RFa.js";const E=JSON.parse('{"title":"tm_formatlist - Functions - Configuration Language","description":"The tm_formatlist function produces a list of strings by formatting a number of\\nother values according to a specification string.","frontmatter":{"title":"tm_formatlist - Functions - Configuration Language","description":"The tm_formatlist function produces a list of strings by formatting a number of\\nother values according to a specification string."},"headers":[],"relativePath":"cli/code-generation/functions/tm_formatlist.md","filePath":"cli/code-generation/functions/tm_formatlist.md"}'),n={name:"cli/code-generation/functions/tm_formatlist.md"},e=t(`<h1 id="tm-formatlist-function" tabindex="-1"><code>tm_formatlist</code> Function <a class="header-anchor" href="#tm-formatlist-function" aria-label="Permalink to &quot;\`tm_formatlist\` Function&quot;">​</a></h1><p><code>tm_formatlist</code> produces a list of strings by formatting a number of other values according to a specification string.</p><div class="language-hcl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">hcl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tm_formatlist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(spec, values</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>The specification string uses <a href="https://developer.hashicorp.com/terraform/language/functions/format#specification-syntax" target="_blank" rel="noreferrer">the same syntax as <code>format</code></a>.</p><p>The given values can be a mixture of list and non-list arguments. Any given lists must be the same length, which decides the length of the resulting list.</p><p>The list arguments are iterated together in order by index, while the non-list arguments are used repeatedly for each iteration. The format string is evaluated once per element of the list arguments.</p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_formatlist(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;Hello, %s!&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Valentina&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Ander&quot;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Olivia&quot;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Sam&quot;]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;Hello, Valentina!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;Hello, Ander!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;Hello, Olivia!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;Hello, Sam!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_formatlist(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;%s, %s!&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Salutations&quot;,</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Valentina&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Ander&quot;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Olivia&quot;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Sam&quot;]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;Salutations, Valentina!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;Salutations, Ander!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;Salutations, Olivia!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;Salutations, Sam!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h2 id="related-functions" tabindex="-1">Related Functions <a class="header-anchor" href="#related-functions" aria-label="Permalink to &quot;Related Functions&quot;">​</a></h2><ul><li><a href="./tm_format"><code>tm_format</code></a> defines the specification syntax used by this function and produces a single string as its result.</li></ul>`,10),l=[e];function h(o,p,r,k,d,c){return a(),i("div",null,l)}const g=s(n,[["render",h]]);export{E as __pageData,g as default};