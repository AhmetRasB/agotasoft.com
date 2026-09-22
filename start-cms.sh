#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"
if [[ ! -f "$ROOT/cms-router.php" ]]; then
  echo "cms-router.php not found in $ROOT" >&2
  exit 1
fi
HOST="${1:-127.0.0.1:8080}"
echo "CMS root: $ROOT"
echo "Admin:    http://${HOST}/admin"
exec php -S "$HOST" "$ROOT/cms-router.php"
