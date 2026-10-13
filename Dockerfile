# ---------- Stage 1: Build the React client ----------
FROM node:20-alpine AS client-build
WORKDIR /client

# Install dependencies (uses package-lock.json for reproducible builds)
COPY isuridreduct.client/package*.json ./
RUN npm ci

# Copy the rest of the client source and build the production bundle
COPY isuridreduct.client/ ./
RUN npm run build

# ---------- Stage 2: Build and publish the .NET server ----------
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src

# Restore NuGet packages (cached separately for faster rebuilds).
# SkipSpaBuild=true excludes the esproj project reference so MSBuild does not try
# to run .NET language targets on the JavaScript project.
COPY ["IsuridReduct.Server/IsuridReduct.Server.csproj", "IsuridReduct.Server/"]
COPY ["isuridreduct.client/isuridreduct.client.esproj", "isuridreduct.client/"]
RUN dotnet restore "IsuridReduct.Server/IsuridReduct.Server.csproj" /p:SkipSpaBuild=true

# Copy the full solution and the pre-built React app into the server's wwwroot
COPY . .
COPY --from=client-build /client/build /src/IsuridReduct.Server/wwwroot

WORKDIR "/src/IsuridReduct.Server"
# SkipSpaBuild=true prevents the esproj from re-running npm inside the SDK image
# (the React bundle is already copied into wwwroot above)
RUN dotnet publish "IsuridReduct.Server.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false /p:SkipSpaBuild=true

# ---------- Stage 3: Runtime image ----------
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS final
WORKDIR /app
EXPOSE 8080
ENV ASPNETCORE_URLS=http://+:8080
COPY --from=build /app/publish .
ENTRYPOINT ["dotnet", "IsuridReduct.Server.dll"]
