FROM python:3.11-slim-buster AS builder
ENV PYTHONUNBUFFERED 1

RUN apt-get update && \
    apt-get install -y gcc libpq-dev

RUN python -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

WORKDIR /code
COPY requirements.txt /code/

RUN pip install --upgrade pip
RUN pip install -r requirements.txt


FROM python:3.11-slim-buster AS runner
RUN apt-get update && \
    apt-get install -y libpq-dev

COPY --from=builder /opt/venv /opt/venv

WORKDIR /code
COPY . /code/

RUN useradd -ms /bin/bash nonroot
USER nonroot

ENV PATH="/opt/venv/bin:$PATH"