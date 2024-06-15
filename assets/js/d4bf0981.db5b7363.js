"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[73059],{15680:(e,a,n)=>{n.d(a,{xA:()=>p,yg:()=>u});var t=n(96540);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),c=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=c(e.components);return t.createElement(s.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},g=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(n),u=r,d=g["".concat(s,".").concat(u)]||g[u]||h[u]||o;return n?t.createElement(d,i(i({ref:a},p),{},{components:n})):t.createElement(d,i({ref:a},p))}));function u(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}g.displayName="MDXCreateElement"},33095:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=n(58168),r=(n(96540),n(15680));const o={id:"how_to_release",title:"How to Release",sidebar_position:4},i=void 0,l={unversionedId:"community/how_to_release",id:"version-v1.5.x/community/how_to_release",title:"How to Release",description:"This tutorial describes in detail how to release Apache HertzBeat, take the release of version 1.6.0 as an example.",source:"@site/versioned_docs/version-v1.5.x/community/how-to-release.md",sourceDirName:"community",slug:"/community/how_to_release",permalink:"/docs/v1.5.x/community/how_to_release",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/versioned_docs/version-v1.5.x/community/how-to-release.md",tags:[],version:"v1.5.x",sidebarPosition:4,frontMatter:{id:"how_to_release",title:"How to Release",sidebar_position:4},sidebar:"docs",previous:{title:"Code style and quality guide",permalink:"/docs/v1.5.x/community/code_style_and_quality_guide"},next:{title:"How to Verify Release",permalink:"/docs/v1.5.x/community/how_to_verify_release"}},s={},c=[{value:"1. Environmental requirements",id:"1-environmental-requirements",level:2},{value:"2. Preparing for release",id:"2-preparing-for-release",level:2},{value:"2.1 Key generation",id:"21-key-generation",level:3},{value:"2.2 Upload the generated key to the public server",id:"22-upload-the-generated-key-to-the-public-server",level:3},{value:"2.3 Check if the key is created successfully",id:"23-check-if-the-key-is-created-successfully",level:4},{value:"2.4 Add the gpg public key to the KEYS file of the Apache SVN project repo",id:"24-add-the-gpg-public-key-to-the-keys-file-of-the-apache-svn-project-repo",level:4},{value:"2.4.1 Add public key to KEYS in dev branch",id:"241-add-public-key-to-keys-in-dev-branch",level:5},{value:"2.4.2 Add public key to KEYS in release branch",id:"242-add-public-key-to-keys-in-release-branch",level:5},{value:"3. Prepare material package &amp; release",id:"3-prepare-material-package--release",level:2},{value:"3.1 Based on the master branch, create a release-${release_version}-rcx branch, such as release-1.6.0-rc1, And create a tag named v1.6.0-rc1 based on the release-1.6.0-rc1 branch, and set this tag as pre-release.",id:"31-based-on-the-master-branch-create-a-release-release_version-rcx-branch-such-as-release-160-rc1-and-create-a-tag-named-v160-rc1-based-on-the-release-160-rc1-branch-and-set-this-tag-as-pre-release",level:4},{value:"3.2 checkout release branch to local",id:"32-checkout-release-branch-to-local",level:4},{value:"3.3 Compile the binary package",id:"33-compile-the-binary-package",level:4},{value:"3.4 Package the source code",id:"34-package-the-source-code",level:4},{value:"3.5 Sign binary and source packages",id:"35-sign-binary-and-source-packages",level:4},{value:"3.6 Verify signature",id:"36-verify-signature",level:4},{value:"3.7 Publish the dev directory of the Apache SVN material package",id:"37-publish-the-dev-directory-of-the-apache-svn-material-package",level:4},{value:"4. Enter the community voting stage",id:"4-enter-the-community-voting-stage",level:2},{value:"4.1 Send a Community Vote Email",id:"41-send-a-community-vote-email",level:4},{value:"3.2 Send Incubator Community voting mail",id:"32-send-incubator-community-voting-mail",level:4},{value:"4. Complete the final publishing steps",id:"4-complete-the-final-publishing-steps",level:2},{value:"4.1 Migrating source and binary packages",id:"41-migrating-source-and-binary-packages",level:4},{value:"4.2 Add the new version download address to the official website",id:"42-add-the-new-version-download-address-to-the-official-website",level:4},{value:"4.3 Generate a release on github",id:"43-generate-a-release-on-github",level:4},{value:"4.5 Send new version announcement email",id:"45-send-new-version-announcement-email",level:4}],p={toc:c};function h(e){let{components:a,...n}=e;return(0,r.yg)("wrapper",(0,t.A)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This tutorial describes in detail how to release Apache HertzBeat, take the release of version 1.6.0 as an example."),(0,r.yg)("h2",{id:"1-environmental-requirements"},"1. Environmental requirements"),(0,r.yg)("p",null,"This release process is operated in the UbuntuOS(Windows,Mac), and the following tools are required:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"JDK 17"),(0,r.yg)("li",{parentName:"ul"},"Node18 Yarn"),(0,r.yg)("li",{parentName:"ul"},"Apache Maven 3.x"),(0,r.yg)("li",{parentName:"ul"},"GnuPG 2.x"),(0,r.yg)("li",{parentName:"ul"},"Git"),(0,r.yg)("li",{parentName:"ul"},"SVN (apache uses svn to host project releases)")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Pay attention to setting environment variables ",(0,r.yg)("inlineCode",{parentName:"p"},"export GPG_TTY=$(tty)"))),(0,r.yg)("h2",{id:"2-preparing-for-release"},"2. Preparing for release"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"First summarize the account information to better understand the operation process, will be used many times later."),(0,r.yg)("ul",{parentName:"blockquote"},(0,r.yg)("li",{parentName:"ul"},"apache id: ",(0,r.yg)("inlineCode",{parentName:"li"},"muchunjin (APACHE LDAP UserName)")),(0,r.yg)("li",{parentName:"ul"},"apache passphrase: ",(0,r.yg)("inlineCode",{parentName:"li"},"APACHE LDAP Passphrase")),(0,r.yg)("li",{parentName:"ul"},"apache email: ",(0,r.yg)("inlineCode",{parentName:"li"},"muchunjin@apache.org")),(0,r.yg)("li",{parentName:"ul"},"gpg real name: ",(0,r.yg)("inlineCode",{parentName:"li"},"muchunjin (Any name can be used, here I set it to the same name as the apache id)")),(0,r.yg)("li",{parentName:"ul"},"gpg key passphrase: ",(0,r.yg)("inlineCode",{parentName:"li"},"The password set when creating the gpg key, you need to remember this password")))),(0,r.yg)("h3",{id:"21-key-generation"},"2.1 Key generation"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"$ gpg --full-gen-key\ngpg (GnuPG) 2.2.27; Copyright (C) 2021 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n(1) RSA and RSA (default)\n(2) DSA and Elgamal\n(3) DSA (sign only)\n(4) RSA (sign only)\n(14) Existing key from card\nYour selection? 1 # Please enter 1\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (3072) 4096 # Please enter 4096 here\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n0 = key does not expire\n<n> = key expires in n days\n<n>w = key expires in n weeks\n<n>m = key expires in n months\n<n>y = key expires in n years\nKey is valid for? (0) 0 # Please enter 0\nKey does not expire at all\nIs this correct? (y/N) y # Please enter y here\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: muchunjin # Please enter 'gpg real name'\nEmail address: muchunjin@apache.org # Please enter your apache email address here\nComment: apache key # Please enter some comments here\nYou selected this USER-ID:\n    \"muchunjin (apache key) <muchunjin@apache.org>\"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O # Please enter O here\nWe need to generate a lot of random bytes. It is a good idea to perform\nsome other action (type on the keyboard, move the mouse, utilize the\ndisks) during the prime generation; this gives the random number\ngenerator a better chance to gain enough entropy.\n\n# At this time, a dialog box will pop up, asking you to enter the key for this gpg. \n# you need to remember that it will be used in subsequent steps.\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Please enter this passphrase to                     \u2502\n\u2502 protect your new key                                \u2502\n\u2502                                                     \u2502\n\u2502 Passphrase: _______________________________________ \u2502\n\u2502                                                     \u2502\n\u2502     <OK>                    <Cancel>                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n# Here you need to re-enter the password in the previous step.\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Please re-enter this passphrase                     \u2502\n\u2502                                                     \u2502\n\u2502 Passphrase: _______________________________________ \u2502\n\u2502                                                     \u2502\n\u2502     <OK>                    <Cancel>                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\ngpg: key ACFB69E705016886 marked as ultimately trusted\ngpg: revocation certificate stored as '/root/.gnupg/openpgp-revocs.d/DC12398CCC33A5349EB9663DF9D970AB18C9EDF6.rev'\npublic and secret key created and signed.\n\npub   rsa4096 2023-05-01 [SC]\n      85778A4CE4DD04B7E07813ABACFB69E705016886\nuid                      muchunjin (apache key) <muchunjin@apache.org>\nsub   rsa4096 2023-05-01 [E]\n")),(0,r.yg)("p",null,"Keys can be viewed through the ",(0,r.yg)("inlineCode",{parentName:"p"},"gpg --list-signatures")," command"),(0,r.yg)("h3",{id:"22-upload-the-generated-key-to-the-public-server"},"2.2 Upload the generated key to the public server"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"$ gpg --keyid-format SHORT --list-keys\n/root/.gnupg/pubring.kbx\n------------------------\npub   rsa4096/05016886 2023-05-01 [SC]\n      85778A4CE4DD04B7E07813ABACFB69E705016886\nuid         [ultimate] muchunjin (apache key) <muchunjin@apache.org>\nsub   rsa4096/0C5A4E1C 2023-05-01 [E]\n\n# Send public key to keyserver via key id\n$ gpg --keyserver keyserver.ubuntu.com --send-key 05016886\n# Among them, keyserver.ubuntu.com is the selected keyserver, it is recommended to use this, because the Apache Nexus verification uses this keyserver\n")),(0,r.yg)("h4",{id:"23-check-if-the-key-is-created-successfully"},"2.3 Check if the key is created successfully"),(0,r.yg)("p",null,"Verify whether it is synchronized to the public network, it will take about a minute to find out the answer, if not successful, you can upload and retry multiple times."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'$ gpg --keyserver keyserver.ubuntu.com --recv-keys 05016886   # If the following content appears, it means success\ngpg: key ACFB69E705016886: "muchunjin (apache key) <muchunjin@apache.org>" not changed\ngpg: Total number processed: 1\ngpg:              unchanged: 1\n')),(0,r.yg)("p",null,"Or enter ",(0,r.yg)("a",{parentName:"p",href:"https://keyserver.ubuntu.com/"},"https://keyserver.ubuntu.com/")," address in the browser, enter the name of the key and click 'Search key' to search if existed."),(0,r.yg)("h4",{id:"24-add-the-gpg-public-key-to-the-keys-file-of-the-apache-svn-project-repo"},"2.4 Add the gpg public key to the KEYS file of the Apache SVN project repo"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Apache HertzBeat Branch Dev ",(0,r.yg)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/dev/incubator/hertzbeat"},"https://dist.apache.org/repos/dist/dev/incubator/hertzbeat")),(0,r.yg)("li",{parentName:"ul"},"Apache HertzBeat Branch Release ",(0,r.yg)("a",{parentName:"li",href:"https://dist.apache.org/repos/dist/release/incubator/hertzbeat"},"https://dist.apache.org/repos/dist/release/incubator/hertzbeat"))),(0,r.yg)("h5",{id:"241-add-public-key-to-keys-in-dev-branch"},"2.4.1 Add public key to KEYS in dev branch"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'$ mkdir -p svn/dev\n$ cd svn/dev\n\n$ svn co https://dist.apache.org/repos/dist/dev/incubator/hertzbeat\n$ cd svn/dev/hertzbeat\n\n# Append the KEY you generated to the file KEYS, and check if it is added correctly\n$ (gpg --list-sigs muchunjin@apache.org && gpg --export --armor muchunjin@apache.org) >> KEYS \n\n$ svn ci -m "add gpg key for muchunjin"\n')),(0,r.yg)("h5",{id:"242-add-public-key-to-keys-in-release-branch"},"2.4.2 Add public key to KEYS in release branch"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'$ mkdir -p svn/release\n$ cd svn/release\n\n$ svn co https://dist.apache.org/repos/dist/release/incubator/hertzbeat\n$ cd svn/release/hertzbeat\n\n# Append the KEY you generated to the file KEYS, and check if it is added correctly\n$ (gpg --list-sigs muchunjin@apache.org && gpg --export --armor muchunjin@apache.org) >> KEYS \n\n$ svn ci -m "add gpg key for muchunjin"\n')),(0,r.yg)("h2",{id:"3-prepare-material-package--release"},"3. Prepare material package & release"),(0,r.yg)("h4",{id:"31-based-on-the-master-branch-create-a-release-release_version-rcx-branch-such-as-release-160-rc1-and-create-a-tag-named-v160-rc1-based-on-the-release-160-rc1-branch-and-set-this-tag-as-pre-release"},"3.1 Based on the master branch, create a release-${release_version}-rcx branch, such as release-1.6.0-rc1, And create a tag named v1.6.0-rc1 based on the release-1.6.0-rc1 branch, and set this tag as pre-release."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"git checkout master\ngit checkout -b release-1.6.0-rc1\n")),(0,r.yg)("h4",{id:"32-checkout-release-branch-to-local"},"3.2 checkout release branch to local"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"git checkout release-1.6.0-rc1\n")),(0,r.yg)("h4",{id:"33-compile-the-binary-package"},"3.3 Compile the binary package"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Build HertzBeat server binary, run script in ",(0,r.yg)("inlineCode",{parentName:"p"},"web-app"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"yarn install\n\nyarn package\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"run script in root")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"mvn clean package -Prelease\n")),(0,r.yg)("p",null,"then"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"mvn clean install\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Build HertzBeat collector binary, run script in ",(0,r.yg)("inlineCode",{parentName:"p"},"collector"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"mvn clean package -Pcluster\n")),(0,r.yg)("p",null,"The release package are here:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"dist/apache-hertzbeat-{version}-incubating-bin.tar.gz")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"dist/apache-hertzbeat-collector-{version}-incubating-bin.tar.gz"))),(0,r.yg)("h4",{id:"34-package-the-source-code"},"3.4 Package the source code"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Package the project source code")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'git archive \\\n--format=tar.gz \\\n--output="dist/apache-hertzbeat-1.6.0-incubating-src.tar.gz" \\\n--prefix=apache-hertzbeat-1.6.0-incubating-src/ \\\nrelease-1.6.0-rc1\n')),(0,r.yg)("p",null,"The archive package is here ",(0,r.yg)("inlineCode",{parentName:"p"},"dist/apache-hertzbeat-1.6.0-incubating-src.tar.gz")),(0,r.yg)("h4",{id:"35-sign-binary-and-source-packages"},"3.5 Sign binary and source packages"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"The ",(0,r.yg)("inlineCode",{parentName:"p"},"gpg -u 33545C76"),"  ",(0,r.yg)("inlineCode",{parentName:"p"},"33545C76")," is your gpg secret ID, see from ",(0,r.yg)("inlineCode",{parentName:"p"},"gpg --keyid-format SHORT --list-keys"))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"cd dist\n\n# sign\nfor i in *.tar.gz; do echo $i; gpg -u 33545C76 --armor --output $i.asc --detach-sig $i ; done\n\n# SHA512\nfor i in *.tar.gz; do echo $i; sha512sum $i > $i.sha512 ; done\n\n# if macos sha512sum not found, you can install by brew install coreutils\n")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"The final file list is as follows")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"apache-hertzbeat-1.6.0-incubating-src.tar.gz\napache-hertzbeat-1.6.0-incubating-src.tar.gz.asc\napache-hertzbeat-1.6.0-incubating-src.tar.gz.sha512\napache-hertzbeat-1.6.0-incubating-bin.tar.gz\napache-hertzbeat-1.6.0-incubating-bin.tar.gz.asc\napache-hertzbeat-1.6.0-incubating-bin.tar.gz.sha512\napache-hertzbeat-collector-1.6.0-incubating-bin.tar.gz\napache-hertzbeat-collector-1.6.0-incubating-bin.tar.gz.asc\napache-hertzbeat-collector-1.6.0-incubating-bin.tar.gz.sha512\n")),(0,r.yg)("h4",{id:"36-verify-signature"},"3.6 Verify signature"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'$ cd dist\n\n# Verify signature\n$ for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i ; done\n\napache-hertzbeat-1.6.0-incubating-src.tar.gz\ngpg: Signature made Tue May  2 12:16:35 2023 CST\ngpg:                using RSA key 85778A4CE4DD04B7E07813ABACFB69E705016886\ngpg: Good signature from "muchunjin (apache key) <muchunjin@apache.org>" [ultimate]\napache-hertzbeat_2.11-1.6.0-incubating-bin.tar.gz\ngpg: Signature made Tue May  2 12:16:36 2023 CST\ngpg:                using RSA key 85778A4CE4DD04B7E07813ABACFB69E705016886\ngpg: Good signature from "muchunjin (apache key) <muchunjin@apache.org>" [ultimate]\napache-hertzbeat_2.12-1.6.0-incubating-bin.tar.gz\ngpg: Signature made Tue May  2 12:16:37 2023 CST\ngpg:                using RSA key 85778A4CE4DD04B7E07813ABACFB69E705016886\ngpg: BAD signature from "muchunjin (apache key) <muchunjin@apache.org>" [ultimate]\n\n# Verify SHA512\n$ for i in *.tar.gz; do echo $i; sha512sum --check $i.sha512; done\n\napache-hertzbeat-1.6.0-incubating-src.tar.gz\napache-hertzbeat-1.6.0-incubating-src.tar.gz: OK\napache-hertzbeat-1.6.0-incubating-bin.tar.gz\napache-hertzbeat-1.6.0-incubating-bin.tar.gz: OK\napache-hertzbeat-collector-1.6.0-incubating-bin.tar.gz\napache-hertzbeat-collector-1.6.0-incubating-bin.tar.gz: OK\n')),(0,r.yg)("h4",{id:"37-publish-the-dev-directory-of-the-apache-svn-material-package"},"3.7 Publish the dev directory of the Apache SVN material package"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Clone the dev directory ")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"# Check out the dev directory of the Apache SVN to the svn/dev directory under dist in the root directory of the Apache HertzBeat project\nsvn co https://dist.apache.org/repos/dist/dev/incubator/hertzbeat svn/dev\n\nsvn co --depth empty https://dist.apache.org/repos/dist/dev/incubator/hertzbeat\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Copy the material package to the dev directory")),(0,r.yg)("p",null,"Create a version number directory and name it in the form of ${release_version}-${RC_version}. RC_version starts from 1, that is, the candidate version starts from RC1. During the release process, there is a problem that causes the vote to fail. If it needs to be corrected, it needs to iterate the RC version , the RC version number needs to be +1. For example: Vote for version 1.6.0-RC1. If the vote passes without any problems, the RC1 version material will be released as the final version material. If there is a problem (when the hertzbeat/incubator community votes, the voters will strictly check various release requirements and compliance issues) and need to be corrected, then re-initiate the vote after the correction, and the candidate version for the next vote is 1.6.0- RC2."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"mkdir -p svn/dev/1.6.0-RC1\ncp -f dist/* svn/dev/1.6.0-RC1\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Commit to SVN")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'cd svn/dev\n\n# 1.check svn status\nsvn status\n\n# 2. add to svn\nsvn add 1.6.0-RC1\n\nsvn status\n\n# 3. Submit to svn remote server\nsvn commit -m "release for HertzBeat 1.6.0"\n')),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Check Apache SVN Commit Results")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Visit the address ",(0,r.yg)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/dev/incubator/hertzbeat/1.6.0-RC1/"},"https://dist.apache.org/repos/dist/dev/incubator/hertzbeat/1.6.0-RC1/")," in the browser, check if existed the new material package")),(0,r.yg)("h2",{id:"4-enter-the-community-voting-stage"},"4. Enter the community voting stage"),(0,r.yg)("h4",{id:"41-send-a-community-vote-email"},"4.1 Send a Community Vote Email"),(0,r.yg)("p",null,"Send a voting email in the community requires at least three ",(0,r.yg)("inlineCode",{parentName:"p"},"+1")," and no ",(0,r.yg)("inlineCode",{parentName:"p"},"-1"),"."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("inlineCode",{parentName:"p"},"Send to"),": ",(0,r.yg)("a",{parentName:"p",href:"mailto:dev@hertzbeat.apache.org"},"dev@hertzbeat.apache.org")," ",(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"Title"),": ","[VOTE]"," Release Apache HertzBeat (incubating) 1.6.0 rc1 ",(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"Body"),": ")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"Hello HertzBeat Community:\n\nThis is a call for vote to release Apache HertzBeat (incubating) version release-1.6.0-RC1.\n\nApache HertzBeat - a real-time monitoring system with agentless, performance cluster, prometheus-compatible, custom monitoring and status page building capabilities.\n\nRelease notes:\nhttps://github.com/apache/hertzbeat/releases/tag/v1.6.0-rc1\n\nThe release candidates:\nhttps://dist.apache.org/repos/dist/dev/incubator/hertzbeat/1.6.0-RC1/\n\nGit tag for the release:\nhttps://github.com/apache/hertzbeat/releases/tag/v1.6.0-rc1\n\nThe artifacts signed with PGP key [33545C76], corresponding to [muchunjin@apache.org], that can be found in keys file:\nhttps://downloads.apache.org/incubator/hertzbeat/KEYS\n\nThe vote will be open for at least 72 hours or until the necessary number of votes are reached.\n\nPlease vote accordingly:\n\n[ ] +1 approve\n[ ] +0 no opinion\n[ ] -1 disapprove with the reason\n\n*Valid check is a requirement for a vote. *Checklist for reference:\n\n[ ] Download HertzBeat are valid.\n[ ] Checksums and PGP signatures are valid.\n[ ] Source code distributions have correct names matching the current\nrelease.\n[ ] LICENSE and NOTICE files are correct for each HertzBeat repo.\n[ ] All files have license headers if necessary.\n[ ] No compiled archives bundled in source archive.\n[ ] Can compile from source.\n\nMore detail checklist please refer:\nhttps://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist\n\nSteps to validate the release\uff0cPlease refer to:\nhttps://hertzbeat.apache.org/docs/community/how_to_verify_release\n\nHow to Build:\nhttps://hertzbeat.apache.org/docs/community/development/#build-hertzbeat-binary-package\n\nThanks!\n")),(0,r.yg)("p",null,"After 72 hours, the voting results will be counted, and the voting result email will be sent, as follows."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("inlineCode",{parentName:"p"},"Send to"),": ",(0,r.yg)("a",{parentName:"p",href:"mailto:dev@hertzbeat.apache.org"},"dev@hertzbeat.apache.org")," ",(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"Title"),": ","[RESULT][VOTE]"," Release Apache HertzBeat (incubating) 1.6.0-rc1 ",(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"Body"),":")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'Dear HertzBeat community,\n\nThanks for your review and vote for "Release Apache HertzBeat (incubating) 1.6.0-rc1"\nI\'m happy to announce the vote has passed:\n\n\n4 binding +1, from:\n\n- cc\n\n1 non-binding +1, from:\n\n- Roc Marshal\n\n\nno 0 or -1 votes.\n\nVote thread:\nhttps://lists.apache.org/thread/t01b2lbtqzyt7j4dsbdp5qjc3gngjsdq\n\n\nThank you to everyone who helped us to verify and vote for this release. We will move to the ASF Incubator voting shortly.\n\n\nBest,\nChunJin Mu\n')),(0,r.yg)("p",null,"One item of the email content is ",(0,r.yg)("inlineCode",{parentName:"p"},"Vote thread"),", and the link is obtained here: ",(0,r.yg)("a",{parentName:"p",href:"https://lists.apache.org/list.html?dev@hertzbeat.apache.org"},"https://lists.apache.org/list.html?dev@hertzbeat.apache.org")),(0,r.yg)("h4",{id:"32-send-incubator-community-voting-mail"},"3.2 Send Incubator Community voting mail"),(0,r.yg)("p",null,"Send a voting email in the incubator community requires at least three ",(0,r.yg)("inlineCode",{parentName:"p"},"+1")," and no ",(0,r.yg)("inlineCode",{parentName:"p"},"-1"),"."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("inlineCode",{parentName:"p"},"Send to"),": ",(0,r.yg)("a",{parentName:"p",href:"mailto:general@incubator.apache.org"},"general@incubator.apache.org")," ",(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"cc"),": ",(0,r.yg)("a",{parentName:"p",href:"mailto:dev@hertzbeat.apache.org"},"dev@hertzbeat.apache.org"),"\u3001",(0,r.yg)("a",{parentName:"p",href:"mailto:private@hertzbeat.apache.org"},"private@hertzbeat.apache.org")," ",(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"Title"),": ","[VOTE]"," Release Apache HertzBeat (incubating) 1.6.0-rc1 ",(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"Body"),":")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"Hello Incubator Community:\n\nThis is a call for a vote to release Apache HertzBeat (incubating) version 1.6.0-RC1.\nThe Apache HertzBeat community has voted on and approved a proposal to release Apache HertzBeat (incubating) version 1.6.0-RC1.\nWe now kindly request the Incubator PMC members review and vote on this incubator release.\nApache HertzBeat, a real-time monitoring system with agentless, performance cluster, prometheus-compatible, custom monitoring and status page building capabilities.\n\nHertzBeat community vote thread:\nhttps://lists.apache.org/thread/t01b2lbtqzyt7j4dsbdp5qjc3gngjsdq\n\nVote result thread:\nhttps://lists.apache.org/thread/t5z58mvrs1drgzfyc48c9lhmd8skswn7\n\nThe release candidate:\nhttps://dist.apache.org/repos/dist/dev/incubator/hertzbeat/1.6.0-RC1/\n\nGit tag for the release:\nhttps://github.com/apache/hertzbeat/releases/tag/v1.6.0-rc1\n\nThe artifacts signed with PGP key [33545C76], corresponding to [muchunjin@apache.org], that can be found in keys file:\nhttps://downloads.apache.org/incubator/hertzbeat/KEYS\n\nThe vote will be open for at least 72 hours or until the necessary number of votes are reached.\n\nPlease vote accordingly:\n[ ] +1 approve\n[ ] +0 no opinion\n[ ] -1 disapprove with the reason\n\nMore detailed checklist please refer:\n\u2022 https://cwiki.apache.org/confluence/display/INCUBATOR/Incubator+Release+Checklist\n\nSteps to validate the release\uff0c Please refer to:\n\u2022 https://www.apache.org/info/verification.html\n\u2022 https://hertzbeat.apache.org/docs/community/how_to_verify_release\n\n\nHow to Build:\nhttps://hertzbeat.apache.org/docs/community/development/#build-hertzbeat-binary-package\n\n\nThanks,\n\nOn behalf of Apache HertzBeat (incubating) community\n\n\nBest,\nChunJin Mu\n")),(0,r.yg)("p",null,"If there is no -1 after 72 hours, reply to the email as follows"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("inlineCode",{parentName:"p"},"Send to"),": ",(0,r.yg)("a",{parentName:"p",href:"mailto:general@incubator.apache.org"},"general@incubator.apache.org")," ",(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"Body"),":")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"Thanks everyone for review and vote, 72H passed. I'll announce the vote result soon.\n\nBest,\nChunjin Mu\n")),(0,r.yg)("p",null,"Then the voting results will be counted, and the voting result email will be sent, as follows."),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("inlineCode",{parentName:"p"},"Send to"),": ",(0,r.yg)("a",{parentName:"p",href:"mailto:general@incubator.apache.org"},"general@incubator.apache.org")," ",(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"Title"),": ","[RESULT][VOTE]"," Release Apache HertzBeat (incubating) 1.6.0-rc1 ",(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"Body"),":")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"Hi Incubator Community,\n\nThe vote to release Apache HertzBeat (incubating) 1.6.0-rc4 has passed with 3 +1 binding and no +0 or -1 votes.\n\n3 binding votes, no +0 or -1 votes.\n\n+3 (binding) +1, from:\n- xxx\n\nno 0 or -1 votes.\n\nVote thread:\n\nhttps://lists.apache.org/thread/m1kyn4l30y55p6q39m0ys5djvdd73h0f\n\nThanks everyone for your feedback and help with HertzBeat apache release. The HertzBeat team will take the steps to complete this release and will announce it soon.\n\nBest,\nChunJin Mu\n")),(0,r.yg)("p",null,"One item of the email content is ",(0,r.yg)("inlineCode",{parentName:"p"},"Vote thread"),", and the link is obtained here: ",(0,r.yg)("a",{parentName:"p",href:"https://lists.apache.org/list.html?general@incubator.apache.org"},"https://lists.apache.org/list.html?general@incubator.apache.org")),(0,r.yg)("p",null,"Wait a day to see if the tutor has any other comments, if not, send the following announcement email"),(0,r.yg)("h2",{id:"4-complete-the-final-publishing-steps"},"4. Complete the final publishing steps"),(0,r.yg)("h4",{id:"41-migrating-source-and-binary-packages"},"4.1 Migrating source and binary packages"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},'svn mv https://dist.apache.org/repos/dist/dev/incubator/hertzbeat/1.6.0-RC1 https://dist.apache.org/repos/dist/release/incubator/hertzbeat/1.6.0  -m "transfer packages for 1.6.0-RC1"\n')),(0,r.yg)("h4",{id:"42-add-the-new-version-download-address-to-the-official-website"},"4.2 Add the new version download address to the official website"),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/hertzbeat/blob/master/home/docs/download.md"},"https://github.com/apache/hertzbeat/blob/master/home/docs/download.md"),"\n",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/hertzbeat/blob/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/current/download.md"},"https://github.com/apache/hertzbeat/blob/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/current/download.md")),(0,r.yg)("p",null,"Open the official website address ",(0,r.yg)("a",{parentName:"p",href:"https://hertzbeat.apache.org/docs/download/"},"https://hertzbeat.apache.org/docs/download/")," to see if there is a new version of the download"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"It should be noted that the download link may take effect after an hour, so please pay attention to it.")),(0,r.yg)("h4",{id:"43-generate-a-release-on-github"},"4.3 Generate a release on github"),(0,r.yg)("p",null,"Update pre-release to create a tag named v1.6.0 based on the release-1.6.0-rc1 branch, and set this tag to latest release."),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"You can modify it on the original RC Release without creating a new Release.")),(0,r.yg)("p",null,"Then enter Release Title and Describe"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Release Title: ")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"v1.6.0\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Describe:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"xxx\nrelease note: xxx\n")),(0,r.yg)("p",null,"Then click the ",(0,r.yg)("inlineCode",{parentName:"p"},"Publish release")," button."),(0,r.yg)("p",null,"The rename the release-1.6.0-rc1 branch to release-1.6.0."),(0,r.yg)("h4",{id:"45-send-new-version-announcement-email"},"4.5 Send new version announcement email"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("inlineCode",{parentName:"p"},"Send to"),": ",(0,r.yg)("a",{parentName:"p",href:"mailto:general@incubator.apache.org"},"general@incubator.apache.org")," ",(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"cc"),": ",(0,r.yg)("a",{parentName:"p",href:"mailto:dev@hertzbeat.apache.org"},"dev@hertzbeat.apache.org")," ",(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"Title"),": ","[ANNOUNCE]"," Release Apache HertzBeat (incubating) 1.6.0 ",(0,r.yg)("br",null),"\n",(0,r.yg)("inlineCode",{parentName:"p"},"Body"),":")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"Hi Incubator Community,\n\nWe are glad to announce the release of Apache HertzBeat (incubating) 1.6.0.\nOnce again I would like to express my thanks to your help.\n\nApache HertzBeat(https://hertzbeat.apache.org/) - a real-time monitoring system with agentless, performance cluster, prometheus-compatible, custom monitoring and status page building capabilities.\n\nDownload Links: https://hertzbeat.apache.org/download/\n\nRelease Notes: https://github.com/apache/hertzbeat/releases/tag/v1.6.0\n\nHertzBeat Resources:\n- Issue: https://github.com/apache/hertzbeat/issues\n- Mailing list: dev@hertzbeat.apache.org\n\n\nApache HertzBeat Team\n\nBest,\nChunJin Mu\n")),(0,r.yg)("p",null,"This version release is over."),(0,r.yg)("hr",null),(0,r.yg)("p",null,"This doc refer from ",(0,r.yg)("a",{parentName:"p",href:"https://streampark.apache.org/"},"Apache StreamPark")))}h.isMDXComponent=!0}}]);