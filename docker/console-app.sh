container_name="$(docker ps -a -f "name=react-start-node" --format "{{.Names}}" | head -1)"

docker exec -it "$container_name" bash
