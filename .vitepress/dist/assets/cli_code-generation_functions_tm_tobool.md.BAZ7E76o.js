import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.Bl20_RFa.js";const u=JSON.parse('{"title":"tm_tobool - Functions - Configuration Language","description":"The tm_tobool function converts a value to boolean.","frontmatter":{"title":"tm_tobool - Functions - Configuration Language","description":"The tm_tobool function converts a value to boolean."},"headers":[],"relativePath":"cli/code-generation/functions/tm_tobool.md","filePath":"cli/code-generation/functions/tm_tobool.md"}'),t={name:"cli/code-generation/functions/tm_tobool.md"},l=n(`<h1 id="tm-tobool-function" tabindex="-1"><code>tm_tobool</code> Function <a class="header-anchor" href="#tm-tobool-function" aria-label="Permalink to &quot;\`tm_tobool\` Function&quot;">​</a></h1><p><code>tm_tobool</code> converts its argument to a boolean value.</p><p>Explicit type conversions are rarely necessary in Terraform because it will convert types automatically where required. Use the explicit type conversion functions only to normalize types returned in module outputs.</p><p>Only boolean values, <code>null</code>, and the exact strings <code>&quot;true&quot;</code> and <code>&quot;false&quot;</code> can be converted to boolean. All other values will produce an error.</p><h2 id="examples" tabindex="-1">Examples <a class="header-anchor" href="#examples" aria-label="Permalink to &quot;Examples&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_tobool(true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_tobool(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;true&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_tobool(null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">null</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_tobool(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;no&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Error:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Invalid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> function</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> argument</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Invalid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> value</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;v&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> parameter:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cannot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> convert</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;no&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bool:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> only</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> strings</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;true&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> or</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;false&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> are</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> allowed.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tm_tobool(1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Error:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Invalid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> function</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> argument</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Invalid</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> value</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;v&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> parameter:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cannot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> convert</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> number</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bool.</span></span></code></pre></div>`,6),e=[l];function o(h,p,k,r,F,d){return a(),i("div",null,e)}const g=s(t,[["render",o]]);export{u as __pageData,g as default};