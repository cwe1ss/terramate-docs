import{_ as t,c as i,o as e,a4 as s}from"./chunks/framework.Bl20_RFa.js";const u=JSON.parse('{"title":"tm_trimprefix - Functions - Configuration Language","description":"The tm_trimprefix function removes the specified prefix from the start of a\\ngiven string.","frontmatter":{"title":"tm_trimprefix - Functions - Configuration Language","description":"The tm_trimprefix function removes the specified prefix from the start of a\\ngiven string."},"headers":[],"relativePath":"cli/code-generation/functions/tm_trimprefix.md","filePath":"cli/code-generation/functions/tm_trimprefix.md"}'),a={name:"cli/code-generation/functions/tm_trimprefix.md"},n=s('<h1 id="tm-trimprefix-function" tabindex="-1"><code>tm_trimprefix</code> Function <a class="header-anchor" href="#tm-trimprefix-function" aria-label="Permalink to &quot;`tm_trimprefix` Function&quot;">​</a></h1><p><code>tm_trimprefix</code> removes the specified prefix from the start of the given string. If the string does not start with the prefix, the string is returned unchanged.</p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_trimprefix(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;helloworld&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">world</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_trimprefix(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;helloworld&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;cat&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">helloworld</span></span></code></pre></div><h2 id="related-functions" tabindex="-1">Related Functions <a class="header-anchor" href="#related-functions" aria-label="Permalink to &quot;Related Functions&quot;">​</a></h2><ul><li><a href="./tm_trim"><code>tm_trim</code></a> removes characters at the start and end of a string.</li><li><a href="./tm_trimsuffix"><code>tm_trimsuffix</code></a> removes a word from the end of a string.</li><li><a href="./tm_trimspace"><code>tm_trimspace</code></a> removes all types of whitespace from both the start and the end of a string.</li></ul>',7),r=[n];function o(h,l,p,c,d,m){return e(),i("div",null,r)}const k=t(a,[["render",o]]);export{u as __pageData,k as default};