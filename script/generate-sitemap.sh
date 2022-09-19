# generate-sitemap.sh

# 퍼블릭 폴더로 이동
cd public

# 기존에 있던 사이트맵 폴더를 제거하고 빈 디렉토리를 만듦
rm -rf sitemap
mkdir sitemap

# 스크립트 폴더로 이동해서 아래의 순서대로 실행
cd ..
# robots.txt 생성
node ./script/robots.js

# 정적 sitemap 생성
echo "정적 sitemap 생성중.."
node ./script/sitemap-common.js
echo "정적 sitemap 생성 완료!"

# 동적 sitemap 생성
# echo "콘텐츠 sitemap 생성중"
# node ./script/sitemap-contents.js
# echo "콘텐츠 sitemap 생성 완료!"

# sitemap 압축 및 병합
echo "sitemap gzip 압축중"
node ./script/sitemap-compress.js
node ./script/sitemap.js
echo "sitemap 압축 완료"

# 사이트맵 업데이트 핑
#curl http://google.com/ping?sitemap=http://release.codeit.kr/sitemap.xml
#echo "Google에 sitemap 핑 전송"

# cd ..

