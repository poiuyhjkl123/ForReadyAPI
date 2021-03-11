# IO.Swagger - ASP.NET Core 2.0 Server

Alert Manager API spec. This spec represents the Alert Management service whose current objective is to prioritize the alerts based upon context.  

## Run

Linux/OS X:

```
sh build.sh
```

Windows:

```
build.bat
```

## Run in Docker

```
cd src/IO.Swagger
docker build -t io.swagger .
docker run -p 5000:5000 io.swagger
```
