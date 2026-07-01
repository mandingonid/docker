# Use the official Alpine Linux image as the base image
FROM alpine:latest

# Install necessary packages (e.g., curl, bash)
RUN apk update && apk add --no-cache curl git build-base ncurses-dev

# Clone btop repository and build it
RUN git clone https://github.com/aristocratos/btop.git /opt/btop && cd /opt/btop &&  \
make && make install

# Clean up
RUN apk  del git build-base ncurses-dev && rm -rf /var/cache/apk/* /opt/btop

# Set the command to run btop
CMD ["btop"]

