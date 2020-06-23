cd $1;
cp ../Dockerfile ./;
echo "" >> ./Dockerfile;
if [ $1 == "client" ]; then
    counter=`ps axu|grep docker|wc -l`;
    echo "RUN npm install duplex-json-stream" >> ./Dockerfile;
    echo  "CMD [\"node\",\"$1.js\",\"Spensa$counter\"]" >> ./Dockerfile;
else
    echo "RUN npm install stream-set" >> ./Dockerfile;
    docker kill $(docker ps -q);
    echo  "CMD [\"node\",\"$1.js\"]" >> ./Dockerfile;
fi
docker image build -t r2pg-$1:v0.0.01a .;
docker run -a stdin -a stdout -i -t r2pg-$1:v0.0.01a;

#if [ $1 == "client" ]; then
#    docker attach $id;
#fi