title: Mac OSX + Chrome + Self Signed Certs
date: 2014/11/01 20:46:25
categories:
- Software
tags:
- Mac OSX
- Chrome
- SSL
- Software
- Work
---

I recently had to set up a SSL self signed cert for some client work I was doing. I use Chrome for web dev stuff and it wouldn't let me get dat green lock.

The client was using Wordpress and WooCommerce. I was able to setup an apache server with MySql no problem. I am assuming here you have set up a LAMP stack on MacOSX before. You could always use MAMP. 

If you haven't done this before:
>[Try this!](http://lmgtfy.com/?q=Apache+MySQL+MacOSX)

I generated a SSL self signed cert:
>[This is how I did it...](http://lmgtfy.com/?q=MacOSX+Generate+Self+Signed+Cert)

I spent about 30 minutes googling and clicking, copying and moving my cert. trying to get KeyChain to always accept my locally generated cert. Everything I tried I ended up seeing KeyChain access errors and the awesome privacy warnings from Chrome. I was about to give up. Then it hit me... there is no way this could work, it's too damn simple.

For some reason chrome finds it difficult to add exceptions or certs to keychain access in Mac OSX. The solution, or should I say work around is dead simple. 

1. Make sure you have your certs generated and ready to go.

2. Just open up safari and go to https://localhost.com

3. Accept the exception and change the option to 'always trust'.

4. Restart Chrome and go to https://localhost.com

5. It's all ready to go! DAFAQ! Green https and lock symbol.

Hopefully this will save some people like 20 minutes of clicking. At the time of this writing I was using:

1. Mac OSX 10.9.5
2. Chrome 38.0.2125.122