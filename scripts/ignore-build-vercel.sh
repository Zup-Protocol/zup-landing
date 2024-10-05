#!/bin/bash

if [[ "$VERCEL_GIT_COMMIT_REF" == "main" || "$VERCEL_GIT_COMMIT_REF" == "staging" || "$VERCEL_GIT_COMMIT_REF" == "development"  ]] ; then
	echo "✅ - Build can proceed"
  exit 1;

else
  echo "🛑 - Build cancelled, the commit was not made in one of the mapped branchs"
  exit 0;
fi