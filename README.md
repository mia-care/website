# mia-care-website

## Summary



## Local development

### Setup local env file

```
cp .env local.env
vim local.env
```

Finally, in order to load the environment variables file use:

```
set -a && source local.env
```

## Contributing

To contribute to the project, please be mindful for this simple rules:

1. Don’t commit directly on the default branhc
2. Start your branches with `feature/` or `fix/` based on the content of the branch
3. If possible, refer to the Jira issue id, inside the name of the branch, but not call it only `fix/TASK-ID`
4. Always commit in english
5. Once you are happy with your branch, open a [Merge Request][merge-request]

## Run the Docker Image

If you are interested in the docker image you can get one and run it locally with this commands:

```shell
docker pull nexus.mia-platform.eu/mia-care-website/mia-care-website:latest
set -a
source .env
docker run --name mia-care-website \
  --detach \
  nexus.mia-platform.eu/mia-care-website/mia-care-website
```

[merge-request]: https://git.tools.mia-platform.eu/mia-care/clients/mia-care-website/services/mia-care-website/merge_requests

