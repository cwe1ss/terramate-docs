import{_ as e,c as a,o as s,a4 as t}from"./chunks/framework.Bl20_RFa.js";const f=JSON.parse(`{"title":"File Watchers Change Detection","description":"Learn how to use File Watchers to mark a stack as changed whenever files outside the stack's directory are changed.","frontmatter":{"title":"File Watchers Change Detection","description":"Learn how to use File Watchers to mark a stack as changed whenever files outside the stack's directory are changed."},"headers":[],"relativePath":"cli/change-detection/file-watchers.md","filePath":"cli/change-detection/file-watchers.md"}`),i={name:"cli/change-detection/file-watchers.md"},n=t(`<h1 id="file-watchers" tabindex="-1">File Watchers <a class="header-anchor" href="#file-watchers" aria-label="Permalink to &quot;File Watchers&quot;">​</a></h1><p>Stacks can be configured to watch files for changes that are not part of the stacks directory. If any of the watched files changes, the stack will be marked as changed in the change detection.</p><p><strong>Example:</strong></p><div class="language-hcl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">hcl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stack</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  watch</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;/external/file1.txt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;/external/file2.txt&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>For details, please see the <a href="./../stacks/configuration#stackwatch-listoptional">stack configuration</a> documentation.</p>`,5),c=[n];function h(l,r,o,p,d,k){return s(),a("div",null,c)}const E=e(i,[["render",h]]);export{f as __pageData,E as default};
