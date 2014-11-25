#!/bin/bash
hexo clean;
hexo generate;
s3cmd sync ~/blog.rickfrom1987.com/public/* s3://blog.rickfrom1987.com --add-header="Cache-Control:max-age=60"