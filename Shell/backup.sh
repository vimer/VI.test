data='./data/'
count=0
for name in $(ls -rt $data) 
do
	count=$[$count+1]
	echo $name
	#rm -rf ./data/$name
	#break
done
