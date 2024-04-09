import{_ as i,c as s,o as a,a4 as t}from"./chunks/framework.Bl20_RFa.js";const u=JSON.parse('{"title":"tm_join - Functions - Configuration Language","description":"The tm_join function produces a string by concatenating the elements of a list\\nwith a given delimiter.","frontmatter":{"title":"tm_join - Functions - Configuration Language","description":"The tm_join function produces a string by concatenating the elements of a list\\nwith a given delimiter."},"headers":[],"relativePath":"cli/code-generation/functions/tm_join.md","filePath":"cli/code-generation/functions/tm_join.md"}'),n={name:"cli/code-generation/functions/tm_join.md"},e=t(`<h1 id="tm-join-function" tabindex="-1"><code>tm_join</code> Function <a class="header-anchor" href="#tm-join-function" aria-label="Permalink to &quot;\`tm_join\` Function&quot;">​</a></h1><p><code>tm_join</code> produces a string by concatenating all of the elements of the specified list of strings with the specified separator.</p><div class="language-hcl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">hcl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tm_join</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(separator, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">list</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_join(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;-&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bar&quot;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;baz&quot;]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;foo-bar-baz&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_join(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;, &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;bar&quot;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;baz&quot;]</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foo,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bar,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> baz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_join(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;, &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;foo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">])</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">foo</span></span></code></pre></div><h2 id="related-functions" tabindex="-1">Related Functions <a class="header-anchor" href="#related-functions" aria-label="Permalink to &quot;Related Functions&quot;">​</a></h2><ul><li><a href="./tm_split"><code>tm_split</code></a> performs the opposite operation: producing a list by separating a single string using a given delimiter.</li></ul>`,7),o=[e];function l(h,p,k,r,d,c){return a(),s("div",null,o)}const F=i(n,[["render",l]]);export{u as __pageData,F as default};
