FROM python:3.11-slim

WORKDIR /app

COPY . .

EXPOSE 8080

CMD sh -c "python3 -m http.server --bind 0.0.0.0 ${PORT:-8080}"
