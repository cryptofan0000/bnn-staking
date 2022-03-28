### Deploy production

```
export APP_VERSION=1.0.0
docker build -t asia-southeast1-docker.pkg.dev/studiotwist/banana-finance/webapp:$APP_VERSION --build-arg app_env=production .
```

### Deploy development

```
docker build -t asia-southeast1-docker.pkg.dev/studiotwist/banana-finance/webapp .
```
