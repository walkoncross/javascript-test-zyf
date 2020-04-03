#!/bin/bash
OUTDIR=./proto_js
PROTOS=`ls *.proto`

mkdir $OUTDIR 
protoc --js_out=import_style=commonjs,binary:$OUTDIR --proto_path=./ $PROTOS
