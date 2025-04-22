#!/bin/bash

TARGET_DIR=$1

if [ -z "$TARGET_DIR" ]; then
  echo "[ERROR] 사용할 폴더 경로를 지정해주세요."
  echo "예: ./copy-folder-content.sh ./src"
  exit 1
fi

EXCLUDED_EXTENSIONS=("svg" "png" "jpg" "jpeg" "gif" "mp4" "mov" "webp" "ico" "mp3" "wav" "zip" "ttf" "woff" "woff2" "eot" "dmg" "pdf")

TEMP_FILE=$(mktemp)

while IFS= read -r file; do
  ext="${file##*.}"
  skip=false
  for excluded in "${EXCLUDED_EXTENSIONS[@]}"; do
    if [[ "$ext" == "$excluded" ]]; then
      skip=true
      break
    fi
  done
  if [ "$skip" = true ]; then
    continue
  fi

  if [ -f "$file" ]; then
    echo "// $file" >> "$TEMP_FILE"
    echo "-----------------------" >> "$TEMP_FILE"
    cat "$file" >> "$TEMP_FILE"
    echo -e "\n" >> "$TEMP_FILE"
  fi
done < <(find "$TARGET_DIR" -type f)

cat "$TEMP_FILE" | pbcopy
rm "$TEMP_FILE"

echo "📋 '$TARGET_DIR' 안의 텍스트 파일 내용이 클립보드에 복사되었습니다!"
